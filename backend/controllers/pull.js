const fs = require("fs").promises;
const path = require("path");
const { s3, S3_BUCKET } = require("../config/aws-config");
const { ListObjectsV2Command, GetObjectCommand } = require("@aws-sdk/client-s3");

// Helper function to convert stream to Buffer
const streamToBuffer = async (stream) => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  });
};

async function pullRepo() {
  const repoPath = path.resolve(process.cwd(), ".apnaGit");
  const commitsPath = path.join(repoPath, "commits");

  try {
    // List objects using v3 command
    const data = await s3.send(new ListObjectsV2Command({
      Bucket: S3_BUCKET,
      Prefix: "commits/",
    }));

    const objects = data.Contents;
    if (!objects || objects.length === 0) {
      console.log("No objects found in S3 with prefix 'commits/'");
      return;
    }

    for (const object of objects) {
      const key = object.Key;
      const commitDir = path.join(
        commitsPath,
        path.dirname(key).split("/").pop()
      );
      await fs.mkdir(commitDir, { recursive: true });

      // Get object using v3 command
      const getObjectResponse = await s3.send(new GetObjectCommand({
        Bucket: S3_BUCKET,
        Key: key,
      }));

      // Convert the stream to a buffer
      const fileContent = await streamToBuffer(getObjectResponse.Body);
      await fs.writeFile(path.join(repoPath, key), fileContent);
      console.log(`Pulled commit: ${key}`);
    }

    console.log("All commits pulled from S3.");
  } catch (err) {
    console.error("Unable to pull:", err);
  }
}

module.exports = { pullRepo };

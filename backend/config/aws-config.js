// // const AWS = require("aws-sdk");

// // AWS.config.update({ 
// //    accessKeyId:"AKIAW5WU5F3LJCY3HCVX",
// //     secretAccessKey:"/z6KM5/4dJLaYYL7OK/FYgp8Ii3OAV9KCted+sGY",
// //     region: "eu-north-1"});

// // const s3 = new AWS.S3();
// // const S3_BUCKET = "samplebucketworld";

// // module.exports = {s3, S3_BUCKET};

// const { S3Client } = require("@aws-sdk/client-s3");

// const s3 = new S3Client({
//     region: "eu-north-1",
//     credentials: {
//         accessKeyId: "AKIAW5WU5F3LJCY3HCVX",
//         secretAccessKey: "/z6KM5/4dJLaYYL7OK/FYgp8Ii3OAV9KCted+sGY"
//     }
// });

// const S3_BUCKET = "samplebucketworld";

// module.exports = { s3, S3_BUCKET };
// import React, { useState, useEffect } from "react";
// import "./dashboard.css";

// const Dashboard = () => {
//     const [repositories, setRepositories] = useState([]);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [suggestedRepositories, setSuggestedRepositories] = useState([]);
//     const [searchResults, setSearchResults] = useState([]);

//     useEffect(() => {
//         const userId = localStorage.getItem("userId");
//         if (!userId) {
//             console.error("No userId found - skipping repo fetch");
//             setRepositories([]);  
//             return;
//         }

//         const fetchRepositories = async () => {
//             try {
//                 const response = await fetch(`http://localhost:3000/repo/user/${userId}`);
//                 const data = await response.json();
//                 // setRepositories(data.repositories || []);
//                 setRepositories(data.repositories);
//             } catch (err) {
//                 console.error("Error while fetching repositories", err);
//             }
//         };

//         const fetchSuggestedRepositories = async () => {
//             try {
//                 const response = await fetch(`http://localhost:3000/repo/all`);
//                 const data = await response.json();
//                 setSuggestedRepositories(data);
//             } catch (err) {
//                 console.error("Error while fetching suggested repositories", err);
//             }
//         };

//         fetchRepositories();
//         fetchSuggestedRepositories();
//     }, []);

//     // useEffect(() => {
//     //     const userId = localStorage.getItem("userID");
//     //     if (!userId) {
//     //         console.error("No userId found - skipping repo fetch");
//     //         setRepositories([]);
//     //         return;
//     //     }
    
//     //     const fetchRepositories = async () => {
//     //         try {
//     //             const response = await fetch(`http://localhost:3000/repo/user/${userId}`);
//     //             if (!response.ok) {
//     //                 throw new Error("Failed to fetch");
//     //             }
//     //             const data = await response.json();
//     //             setRepositories(data.repositories || []);
//     //         } catch (err) {
//     //             console.error("Error while fetching repositories", err);
//     //         }
//     //     };
    
//     //     fetchRepositories();
//     // }, []);
    

//     useEffect(() => {
//         if (searchQuery == "") {
//             setSearchResults(repositories);
//         } else {
//             const filteredRepo = repositories.filter((repo) =>
//                 repo.name.toLowerCase().includes(searchQuery.toLowerCase())
//             );
//             setSearchResults(filteredRepo);
//         }
//     }, [searchQuery, repositories]);

//     return (
//         <section id="dashboard">
//             <aside>
//                 <h3>Suggested Repositories</h3>
//                 {suggestedRepositories?.map((repo) => (
//                     <div key={repo._id}>
//                         <h4>{repo.name}</h4>
//                         <h4>{repo.description}</h4>
//                     </div>
//                 ))}
//             </aside>

//             <main>
//                 <h2>Your Repositories</h2>
//                 <div id="search">
//                  <input
//                  type="text"
//                  value={searchQuery}
//                  placeholder="Search..."
//                  onChange={(e) => setSearchQuery(e.target.value)}
//                  />
//                 </div>
//                 {searchResults?.map((repo) => (
//                     <div key={repo._id}>
//                         <h4>{repo.name}</h4>
//                         <h4>{repo.description}</h4>
//                     </div>
//                 ))}
//             </main>

//             <aside>
//                 <h3>Upcoming Events</h3>
//                 <ul>
//                     <li><p>Tech Conference - Dec 15</p></li>
//                     <li><p>Developer Meetup - Dec 25</p></li>
//                     <li><p>React Summit - Jan 5</p></li>
//                 </ul>
//             </aside>
//         </section>
//     );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import "./dashboard.css";

const Dashboard = () => {
    const [repositories, setRepositories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestedRepositories, setSuggestedRepositories] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const userId = localStorage.getItem("userId") || "67c2effbcfab47389e974971";
        if (!userId) {
            console.error("No userId found - skipping repo fetch");
            setRepositories([]);  
            return;
        }

        const fetchRepositories = async () => {
            try {
                const response = await fetch(`http://localhost:3000/repo/user/67c2e936cfab47389e974947`);
                const data = await response.json();
                // setRepositories(data.repositories || []);
                setRepositories(data.repositories);
            } catch (err) {
                console.error("Error while fetching repositories", err);
            }
        };

        const fetchSuggestedRepositories = async () => {
            try {
                const response = await fetch(`http://localhost:3000/repo/all`);
                const data = await response.json();
                setSuggestedRepositories(data);
            } catch (err) {
                console.error("Error while fetching suggested repositories", err);
            }
        };

        fetchRepositories();
        fetchSuggestedRepositories();
    }, []);

    // useEffect(() => {
    //     const userId = localStorage.getItem("userID");
    //     if (!userId) {
    //         console.error("No userId found - skipping repo fetch");
    //         setRepositories([]);
    //         return;
    //     }
    
    //     const fetchRepositories = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:3000/repo/user/${userId}`);
    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch");
    //             }
    //             const data = await response.json();
    //             setRepositories(data.repositories || []);
    //         } catch (err) {
    //             console.error("Error while fetching repositories", err);
    //         }
    //     };
    
    //     fetchRepositories();
    // }, []);
    

    useEffect(() => {
        if (searchQuery == "") {
            setSearchResults(repositories);
        } else {
            const filteredRepo = repositories.filter((repo) =>
                repo.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(filteredRepo);
        }
    }, [searchQuery, repositories]);

    return (
        <section id="dashboard">
            <aside>
                <h3>Suggested Repositories</h3>
                {suggestedRepositories?.map((repo) => (
                    <div key={repo._id}>
                        <h4>{repo.name}</h4>
                        <h4>{repo.description}</h4>
                    </div>
                ))}
            </aside>

            <main>
                <h2>Your Repositories</h2>
                <div id="search">
                 <input
                 type="text"
                 value={searchQuery}
                 placeholder="Search..."
                 onChange={(e) => setSearchQuery(e.target.value)}
                 />
                </div>
                {searchResults?.map((repo) => (
                    <div key={repo._id}>
                        <h4>{repo.name}</h4>
                        <h4>{repo.description}</h4>
                    </div>
                ))}
            </main>

            <aside>
                <h3>Upcoming Events</h3>
                <ul>
                    <li><p>Tech Conference - Dec 15</p></li>
                    <li><p>Developer Meetup - Dec 25</p></li>
                    <li><p>React Summit - Jan 5</p></li>
                </ul>
            </aside>
        </section>
    );
};

export default Dashboard;
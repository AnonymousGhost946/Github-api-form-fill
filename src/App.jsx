import { useState } from 'react';
import './App.css';
import Api from './Api'; // Import Api component

function App() {
  const [userData, setUserData] = useState({

    githubLink: '',
    userName: '',
    totalRepos: '',
    linkedin: '',
    location: '',
    followers: '',
    following: ''
  });

  // This function will be passed to Api to receive the data
  const handleDataFetch = (data) => {
    setUserData({
      githubLink: data.html_url,
      userName: data.login,
      totalRepos: data.public_repos,
      bio:data.bio,  // No LinkedIn data in GitHub API response
      location: data.location || 'Unknown',
      githubCreationDate: data.created_at,
      following: data.following,
      repoUrl:data.repos_url || "due to error not shoe"
    });
  };

  return (
    <>
      <Api onDataFetch={handleDataFetch} /> {/* Pass handleDataFetch as a prop to Api */}
      
      <div className="container bg-[#212121] h-screen w-full flex justify-center items-center">
        <div className="form bg-blue-300 h-[550px] w-[370px] rounded p-3 ">
          <h5 className="text-center my-3 font-bold">Github API Call</h5>
          <div className="info-div mb-3 ">
            <label htmlFor="github-link" className="block">Github link</label>
            <input type="link" className="w-full border border-black" value={userData.githubLink} disabled />
          </div>

          <div className="info-div mb-3 ">
            <label htmlFor="github-link" className="block">User Name</label>
            <input type="text" className="w-full border border-black" value={userData.userName} disabled />
          </div>

          <div className="info-div mb-3 ">
            <label htmlFor="github-link" className="block">Total Repositories</label>
            <input type="text" className="w-full border border-black" value={userData.totalRepos} disabled />
          </div>

          <div className="info-div mb-3 ">
            <label htmlFor="github-link" className="block">Github Bio</label>
            <input type="text" className="w-full border border-black" value={userData.bio} disabled />
          </div>

          <div className="info-div mb-3 ">
            <label htmlFor="github-link" className="block">Location</label>
            <input type="text" className="w-full border border-black" value={userData.location} disabled />
          </div>

          <div className="info-div mb-3 ">
            <label htmlFor="github-link" className="block">Github Followers</label>
            <input type="text" className="w-full border border-black" value={userData.followers} disabled />
          </div>

          <div className="info-div mb-3 ">
            <label htmlFor="github-link" className="block">Github Account created at</label>
            <input type="text" className="w-full border border-black
            " value={userData.githubCreationDate} disabled />
          </div>

          <div className="info-div mb-3 ">
            <label  className="block">Repo Url</label>
            <input type="text" className="w-full border border-black" value={userData.repoUrl} disabled />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

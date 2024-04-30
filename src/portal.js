import React, { useState } from 'react';
import "./App.css"
import downloadPng from './components/downloadPng.png'

function Portal() {
  const [branch, setBranch] = useState('');
  const [subject, setSubject] = useState('');
  const [showLink, setShowLink] = useState(false);

  const branchData = {
    "be": {
      "cse": ["Operating System", "Design and Analysis", "Software Engineering", "Discrete Mathematics", "Cyber Law & Ethics"],
      //I have to add all remaining subjects here !!!
    }
  };

  const subjectDriveLinks = {
    "Operating System": "https://drive.google.com/drive/folders/18r9armnB3Kx_2RL-Ctr3F_aE-mdyQoMf?usp=sharing",
    "Design and Analysis": "https://drive.google.com/drive/folders/1xJY18YOsYdg5ZFTXFPE_rgXFCZiGYHhd?usp=sharing",
    "Software Engineering": "https://drive.google.com/drive/folders/1r3QbMuvY88QC8s_6Rk5MtilW64cW2zA6?usp=sharing",
    "Discrete Mathematics": "https://drive.google.com/drive/folders/1pJwI2BBqm4RGQ7AJcn-60-itpYjgcp5n?usp=sharing",
    "Cyber Law & Ethics": "https://drive.google.com/drive/folders/1ExYPUdZ5X-dc5npGzXsPag06piXytnDo?usp=sharing",
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
    setSubject('');
    setShowLink(false); 
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
    setShowLink(false);
  };

  const handleShowLink = () => {
    setShowLink(true);
  };
  
  return (
    <div id='selectBox'>
      <select value={branch} onChange={handleBranchChange}>
        <option value="">Select Branch</option>
        {Object.keys(branchData["be"]).map((key) => (
          <option key={key} value={key}> {key.toUpperCase()} </option>
        ))}
      </select>
      <br/>
      <select value={subject} onChange={handleSubjectChange}>
        <option value="">Select Subject</option>
        {branch && branchData["be"][branch] &&
          branchData["be"][branch].map((subj) => (
            <option key={subj} value={subj}> {subj} </option>
          ))} 
      </select>
      <br/>
      <button onClick={handleShowLink}>Show PYQs</button>

      {showLink && branch !== "" && subject !== "" && (
        <div>
          <br />
          <button >
          <a href={subjectDriveLinks[subject]} target="_blank" rel="noopener noreferrer" id='downloadLink'>
              Click Here To Download <img src={downloadPng} id='downImg'></img>
          </a>
          </button>
        </div>
      )}

    </div>
  );
}

export default Portal;

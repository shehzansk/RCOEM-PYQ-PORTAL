import React, { useState } from 'react';
import "./App.css"
import downloadPng from './components/downloadPng.png'

function Portal() {
  const [degree, setDegree] = useState('');
  const [branch, setBranch] = useState('');
  const [subject, setSubject] = useState('');
  const [showLink, setShowLink] = useState(false);

  const branchData = {
    "be": {
      "cse": ["Operating System", "Design and Analysis", "Software Engineering"],
      // Add all remaining subjects here !!!
    }
  };

  const subjectDriveLinks = {
    "Operating System": "https://drive.google.com/drive/folders/18r9armnB3Kx_2RL-Ctr3F_aE-mdyQoMf?usp=sharing",
    "Design and Analysis": "https://drive.google.com/drive/folders/1xJY18YOsYdg5ZFTXFPE_rgXFCZiGYHhd?usp=sharing",
    "Software Engineering": "https://drive.google.com/your_SE_link",
  };

  const handleDegreeChange = (event) => {
    setDegree(event.target.value);
    setBranch('');
    setSubject('');
    setShowLink(false); 
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
      <select value={degree} onChange={handleDegreeChange}>
        <option value="">Select Degree</option>
        <option value="be">B.E.</option>
      </select>
      <br/>
      <select value={branch} onChange={handleBranchChange}>
        <option value="">Select Branch</option>
        {degree && branchData[degree] &&
          Object.keys(branchData[degree]).map((key) => (
            <option key={key} value={key}> {key.toUpperCase()} </option>
          ))}
      </select>
      <br/>
      <select value={subject} onChange={handleSubjectChange}>
        <option value="">Select Subject</option>
        {branch && branchData[degree][branch] &&
          branchData[degree][branch].map((subj) => (
            <option key={subj} value={subj}> {subj} </option>
          ))} 
      </select>
      <br/>
      <button onClick={handleShowLink}>Show PYQs</button>

      {showLink && branch !== "" && degree !== "" && subject !== "" && (
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

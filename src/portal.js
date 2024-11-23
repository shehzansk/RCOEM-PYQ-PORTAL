import React, { useState } from 'react';
import "./App.css"
import downloadPng from './components/downloadPng.png'

function Portal() {
  const [branch, setBranch] = useState('');
  const [subject, setSubject] = useState('');
  const [showLink, setShowLink] = useState(false);

  const branchData = {
    "be": {
      "cse": [
        "Artificial Intelligence",
        "Business Communication",
        "Compiler Design",
        "Computer Architecture and Organization",
        "Computer Networks",
        "Cyber Law & Ethics",
        "Data Structures",
        "Database Management System",
        "Design and Analysis",
        "Digital Electronics",
        "Discrete Mathematics",
        "Object Oriented Programming",
        "Operating System",
        "Software Engineering",
        "Theory of Computation"
      ],
      //I have to add all remaining subjects here !!!
    }
  };

  const subjectDriveLinks = {
    "Operating System": "https://drive.google.com/drive/folders/18r9armnB3Kx_2RL-Ctr3F_aE-mdyQoMf?usp=sharing",
    "Design and Analysis": "https://drive.google.com/drive/folders/1xJY18YOsYdg5ZFTXFPE_rgXFCZiGYHhd?usp=sharing",
    "Software Engineering": "https://drive.google.com/drive/folders/1r3QbMuvY88QC8s_6Rk5MtilW64cW2zA6?usp=sharing",
    "Discrete Mathematics": "https://drive.google.com/drive/folders/1pJwI2BBqm4RGQ7AJcn-60-itpYjgcp5n?usp=sharing",
    "Cyber Law & Ethics": "https://drive.google.com/drive/folders/1ExYPUdZ5X-dc5npGzXsPag06piXytnDo?usp=sharing",
    "Artificial Intelligence": "https://drive.google.com/drive/folders/1TwQmIv_ulSdIc0jbRvjzkJ3r__9qZWWF?usp=drive_link",
    "Business Communication": "https://drive.google.com/drive/folders/1QsGJgUXAP_68oZrKtQpXwZtIef0KlRnb?usp=drive_link",
    "Compiler Design": "https://drive.google.com/drive/folders/1SPQxpKVDBnMEcQhrg_pbR7FWKagur_d7?usp=drive_link",
    "Computer Architecture and Organization": "https://drive.google.com/drive/folders/177RwyW3w4bTk4aw-HBJJvNOG8WVCy176?usp=drive_link",
    "Computer Networks": "https://drive.google.com/drive/folders/19wpg4Uq7jvmW9IGg7PNY0gNLQySi730l?usp=sharing",
    "Data Structures": "https://drive.google.com/drive/folders/1AS6-binrdZGhysz9AlNZ5-WNJVYaYIne?usp=drive_link",
    "Database Management System": "https://drive.google.com/drive/folders/1PpE08o6lwJvAsNS_uoUsjDAvdl44LrA_?usp=drive_link",
    "Digital Electronics": "https://drive.google.com/drive/folders/1s1TR9jgfzhk19e0Ofbyov5TSkENikVl-?usp=drive_link",
    "Object Oriented Programming": "https://drive.google.com/drive/folders/1GvNoom90zHL5aT1UySVqW9YLCfFD5Kff?usp=drive_link",
    "Theory of Computation": "https://drive.google.com/drive/folders/13879AnxLFpM6M9t8eflbKNwA4oD8TZ2V?usp=drive_link",

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
          
          <a href={subjectDriveLinks[subject]} target="_blank" rel="noopener noreferrer" id='downloadLink'>
              <button >
                Click Here To Download <img src={downloadPng} alt="Download" id='downImg'></img>
              </button>
          </a>
          
        </div>
      )}

    </div>
  );
}

export default Portal;

import React, { useState } from 'react'
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import CVDisplay from './components/CVDisplay';
import './App.css'


function App() {
  const [cvData, setCVData] = useState({
    generalInfo: {},
    education: [],
    experience: []
  });

  const [isEditing, setIsEditing] = useState(true);

  const updateCV = (section, data) => {
    setCVData(prevData => ({
      ...prevData,
      [section]: data
    }));
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="App">
      <h1>CV Generator</h1>
      {isEditing ? (
        <>
        <GeneralInfo updateCV={updateCV} />
        <Education updateCV={updateCV} />
        <Experience updateCV={updateCV} />
        <button onClick={handleSubmit}>Submit</button>
        </>
      ):( 
        <>
        <CVDisplay cvData={cvData} />
        <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default App

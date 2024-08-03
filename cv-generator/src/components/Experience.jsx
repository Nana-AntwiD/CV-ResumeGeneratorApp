import React, { useState } from 'react';
import '../styles/Experience.css';

function Experience({ updateCV }) {
    const [experiences, setExperiences] = useState([]);
    const [currentExperience, setCurrentExperience] = useState({ company: '', position: '', responsibilities: '', from: '', to: '' });

    const handleChange = (e) => {
        setCurrentExperience({ ...currentExperience, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        if (currentExperience.company && currentExperience.position && currentExperience.from && currentExperience.to) {
            const updatedExperiences = [...experiences, currentExperience];
            setExperiences(updatedExperiences);
            updateCV('experience', updatedExperiences);
            setCurrentExperience({ company: '', position: '', responsibilities: '', from: '', to: '' });
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <div className="experience">
            <h2>Work Experience</h2>
            <input
                type="text"
                name="company"
                value={currentExperience.company}
                onChange={handleChange}
                placeholder="Company Name"
            />
            <input
                type="text"
                name="position"
                value={currentExperience.position}
                onChange={handleChange}
                placeholder="Position Title"
            />
            <textarea
                name="responsibilities"
                value={currentExperience.responsibilities}
                onChange={handleChange}
                placeholder="Main Responsibilities"
            />
            <input
                type="text"
                name="from"
                value={currentExperience.from}
                onChange={handleChange}
                placeholder="From"
            />
            <input
                type="text"
                name="to"
                value={currentExperience.to}
                onChange={handleChange}
                placeholder="To"
            />
            <button onClick={handleAdd}>Add Experience</button>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <p><strong>{exp.company}</strong> - {exp.position} ({exp.from} to {exp.to})</p>
                        <p>{exp.responsibilities}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;

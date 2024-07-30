import React from 'react';
import '../styles/CVDisplay.css';

function CVDisplay({cvData}) {
    return (
        <div className="cv-display">
            <h2>Your CV</h2>
            <div className="general-info">
                <h3>General Information</h3>
                <p>Name: {cvData.generalInfo.name}</p>
                <p>Email: {cvData.generalInfo.email}</p>
                <p>Phone: {cvData.generalInfo.phone}</p>
            </div>
        <div className="education">
            <h3>Education</h3>
            {cvData.education.map((edu, index) => (
                <div key={index}>
                    <p>{edu.school} - {edu.study} ({edu.date})</p>
                    </div>
            ))}
        </div>
        <div className="experience">
            <h3>Work Experience</h3>
            {cvData.experience.map((exp, index) => (
                <div key={index}>
                <p>{exp.company} - {exp.position} ({exp.from} to {exp.to})</p>
                <p>{exp.responsibilities}</p>   
                </div>
            ))}
        </div>
        </div>
    );
}

export default CVDisplay;


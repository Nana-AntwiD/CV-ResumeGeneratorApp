import React from 'react';
import '../styles/CVDisplay.css';

function CVDisplay({ cvData }) {
    return (
        <div className="cv-display">
            <h2>Your CV</h2>
            <div className="general-info">
                <h3>General Information</h3>
                <p><strong>Name:</strong> {cvData.generalInfo.name}</p>
                <p><strong>Email:</strong> {cvData.generalInfo.email}</p>
                <p><strong>Phone:</strong> {cvData.generalInfo.phone}</p>
            </div>
            <div className="education">
                <h3>Education</h3>
                {cvData.education.map((edu, index) => (
                    <div key={index} className="education-item">
                        <p><strong>{edu.school}</strong> - {edu.programme} ({edu.date})</p>
                    </div>
                ))}
            </div>
            <div className="experience">
                <h3>Work Experience</h3>
                {cvData.experience.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <p><strong>{exp.company}</strong> - {exp.position} ({exp.from} to {exp.to})</p>
                        <p>{exp.responsibilities}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CVDisplay;

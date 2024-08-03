import React, { useState } from 'react';
import '../styles/Education.css';

function Education({ updateCV }) {
    const [educations, setEducations] = useState([]);
    const [currentEducation, setCurrentEducation] = useState({ school: '', programme: '', date: '' });

    const handleChange = (e) => {
        setCurrentEducation({ ...currentEducation, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        if (currentEducation.school && currentEducation.programme && currentEducation.date) {
            const updatedEducations = [...educations, currentEducation];
            setEducations(updatedEducations);
            updateCV('education', updatedEducations);
            setCurrentEducation({ school: '', programme: '', date: '' });
        } else {
            alert("Please fill in all fields");
        }
    };

    return (
        <div className="education">
            <h2>Education</h2>
            <input
                type="text"
                name="school"
                value={currentEducation.school}
                onChange={handleChange}
                placeholder="School Name"
            />
            <input
                type="text"
                name="programme"
                value={currentEducation.programme}
                onChange={handleChange}
                placeholder="Title of Study"
            />
            <input
                type="text"
                name="date"
                value={currentEducation.date}
                onChange={handleChange}
                placeholder="Date of Study"
            />
            <button onClick={handleAdd}>Add Education</button>
            <div className="education-list">
                {educations.map((edu, index) => (
                    <div key={index} className="education-item">
                        <p><strong>{edu.school}</strong> - {edu.programme} ({edu.date})</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;

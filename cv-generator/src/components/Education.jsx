import React, {useState} from 'react';
import '../styles/Education.css';

function Education({updateCV}) {
    const [educations, setEducations] = useState([]);
    const [currentEducation, setCurrentEducation] = usestate({scholl: '', programme: '', date: ''});

    const handleChange = (e) => {
        setCurrentEducation({...currentEducation, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        setEducations([...educations, currentEducation]);
        updateCV('education', [...educations, currentEducation]);
        setCurrentEducation({school:'', study: '', date: ''});
    };

    return (
        <div className="education">
            <h2>Education</h2>
            <input
            type="text"
            name="school"
            value={currentEducation.school}
            onChange={handleChange}
            placeholder="school Name"

            />
            <input
            type='text'
            name='programme'
            value={currentEducation.programme}
            onChange={handleChange}
            placeholder='Title of Study'
            />
            <input
            type='text'
            name='date'
            value={currentEducation.date}
            onChange={handleChange}
            placeholder='Date of Study'
            />
            <button onClick={handleAdd}>Add Education</button>
            {educations.map((edu, index) => (
                <div key={index}>
                    <p>{edu.school} - {edu.programme} ({edu.date})</p>
                </div>
            ))}
        </div>
    );
}

export default Education;
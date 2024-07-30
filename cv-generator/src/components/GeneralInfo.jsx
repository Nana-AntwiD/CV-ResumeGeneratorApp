import React, {useState} from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo({updateCV}) {
    const [info, setInfo] = useState({name: '', email:'', phone: ''});

    const handleChange = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});
        updateCV('generalInfo', {...info, [e.target.name]: e.target.value});
    };

    return (
        <div className="general-info">
            <h2>General Information</h2>
            <input 
            type="text"
            name="name"
            value={info.name}
            onChange={handleChange}
            placeholder="Name"
            />
            <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleChange}
            placeholder='Email'
            />
            <input
            type="tel"
            name="phone"
            value={info.phone}
            onChange={handleChange}
            placeholder="Phone"
            />
        </div>
    );
}

export default GeneralInfo;
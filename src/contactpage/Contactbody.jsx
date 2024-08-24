import React, {useState} from 'react'
import Name from '../utils/Name.jsx'
import Back from '../utils/Back.jsx';
import "./Contactbody.css"
function Contactbody() {
    const [heading,setHeading] = useState({
        line1 : "WANNA_TALK",
        line2 : "ANYTHING!",
        space1: "2.2rem",
        space2: "2.88rem"
    })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure all fields are filled
        if (!formData.name || !formData.email || !formData.description) {
            alert('All fields are required');
            return;
        }

        try {
            // Sending data to the backend for sending email
            const response = await fetch('http://localhost:8000/api/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Mail sent successfully!');
            } else {
                alert('Failed to send mail.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the mail.');
        }
    };

  return (
    <>
        <Back />
        <Name
        firstName = {heading.line1}
        secondName={heading.line2}
        space1={heading.space1}
        space2={heading.space2}
        />
        <div className='body-container'>
            <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='name'
                className='input-box'
            />
            <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='email'
                className='input-box'
                required
            />
            <textarea
                name='description'
                value={formData.description}
                onChange={handleChange}
                placeholder='say it here'
                className='input-box'
                required
            />
            <button type='submit' onClick={handleSubmit} className='send-button'>Send Mail</button>

            <div className='last-info'>for any othre queries mail me at</div>
            <div className='email-info'>parasramka.kushagra123@gmail.com</div>
        </div>
    </>
  )
}

export default Contactbody

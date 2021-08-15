import React, {useRef} from 'react';
import { countryList } from '../../../db/storeObjects';

const ContactUs = () => {

    const nameInput = useRef(null);
    const mailInput = useRef(null);
    const phoneNumberInput = useRef(null);
    const countryInput = useRef(null);
    const messageInput = useRef(null);

    const countryOptions = countryList.map(country => 
        <option key={country.id} value={country.id} >{country.name}</option>
    )

    const handleSendContactForm = () => {
        const nameValue = nameInput.current.value;
        const mailValue = mailInput.current.value;
        const phoneNumberValue = phoneNumberInput.current.value;
        const countryValue = countryInput.current.value;
        const messageValue = messageInput.current.value;

        const requestModal = {
            name : nameValue,
            email : mailValue,
            phonenumber : phoneNumberValue,
            country_code : countryValue,
            text : messageValue
        }

        console.log(requestModal);
    }

    return (
        <div className="contact-us-page" >
            <div className="contact-us-form">
                <h2>Contact Us</h2>
                <label>Name</label>
                <input ref={nameInput} type="text" autoFocus required />
                <label>Email</label>
                <input ref={mailInput} type="text" required />
                <label>Phone Number</label>
                <input ref={phoneNumberInput} type="text" required />
                <label>Country</label>
                <select ref={countryInput} required >
                    {countryOptions}
                </select>
                <label>Message</label>
                <input ref={messageInput} type="text" required />
                <button onClick={handleSendContactForm}>Send</button>
            </div>
        </div>
    )
}

export default ContactUs
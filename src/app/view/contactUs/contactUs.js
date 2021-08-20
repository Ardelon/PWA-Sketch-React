import React, {useRef, useState, useEffect, Children} from 'react';
import { countryList, countryListTR } from '../../../db/storeObjects';
import { useSelector, useDispatch } from 'react-redux';
import validate from 'validate.js';

const ContactUs = () => {

    const dispatch = useDispatch();

    const nameInput = useRef(null);
    const mailInput = useRef(null);
    const phoneNumberInput = useRef(null);
    const countryInput = useRef(null);
    const messageInput = useRef(null);
    const searchSuggestion = useRef(null)

    const userInfo = useSelector((state) => state.userInfo);
    const localization = useSelector((state) => state.localization.localization);
    const countrySelection = localization === 'TR' ? countryListTR : countryList;

    const [suggestion, setSuggestion] = useState([])

    const countryOptions = countrySelection.map(country => 
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

    const handleOnMailChange = () => {

        const mailconstraints = {
            from: {
              email: true
            }
          };
          const mailValue = mailInput.current.value;
          const isMailNotValid = validate({from: mailValue}, mailconstraints);
        if (isMailNotValid) {
            mailInput.current.classList.add("border-wrong");
            mailInput.current.classList.remove("border-correct");
        } else {
            mailInput.current.classList.remove("border-wrong");
            mailInput.current.classList.add("border-correct");
        }
    }

     const handleOnPhoneChange = () => {

        const phoneConstraints = {
            duration: {
                numericality: {
                  onlyInteger: true,
                  greaterThan: 0,
                }
              }
        }
        const phoneNumberValue = phoneNumberInput.current.value;
        const isPhoneNotValid = validate({from: phoneNumberValue}, phoneConstraints);

        if (isPhoneNotValid || phoneNumberValue.length < 10 ) {
             phoneNumberInput.current.classList.add("border-wrong");
             phoneNumberInput.current.classList.remove("border-correct");
         }  else {
            phoneNumberInput.current.classList.remove("border-wrong");
            phoneNumberInput.current.classList.add("border-correct");
        }
    }

    const handleSearch = (e) => {
        e.stopPropagation()
        const countryValue = countryInput.current.value;   
        // console.log(countrySelection);
        const searchResults = countrySelection.filter(country => {
            if (country.name.toLowerCase().includes(countryValue)) {
                return country
            }
        });
        console.log(searchResults);
        const elementArray = searchResults.map(result => {
            <a key={result.id} value={result.id} >{result.name}</a>
        })
        console.log(elementArray);
        setSuggestion(elementArray);

    
    }

    useEffect(() => {
        nameInput.current.value = userInfo.userName;
        mailInput.current.value = userInfo.email;
        handleOnPhoneChange();
        handleOnMailChange();
    }, [])
    

    return (
        <div className="contact-us-page" >
            <div className="contact-us-form">
                <h2>{localization === 'TR' ? "Bize Ulaşın" : "Contact Us"}</h2>
                <label>{localization === 'TR' ? "İsim" : "Name"}</label>
                <input ref={nameInput} type="text" className="border-correct" name="nameInput" max="50" autoFocus  required />
                <label>{localization === 'TR' ? "Eposta" : "Email"}</label>
                <input ref={mailInput} type="email" onChange={handleOnMailChange} className="border-wrong" name="mailInput" required />
                <label>{localization === 'TR' ? "Telefon Numarası" : "Phone Number"}</label>
                <input ref={phoneNumberInput} type="tel" onChange={handleOnPhoneChange} name="phoneNumberInput" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="538-464-7785" required />
                <label>{localization === 'TR' ? "Ülke" : "Country"}</label>
                <div className="autocomplete">
                    <input ref={countryInput} type="text" onChange={handleSearch} autoComplete="off" className="secarh-input" name="countryInput" required/>
                   {console.log(suggestion)}
                    <div ref={searchSuggestion} className="search-suggestion-list">
                        {suggestion || null}
                    </div>
                </div>
                <label>{localization === 'TR' ? "Mesaj" :  "Message"}</label>
                <input ref={messageInput} type="text" name="messageInput" required />
                <button onClick={handleSendContactForm}>{localization === 'TR' ? "Gönder" : "Send"}</button>
            </div>
        </div>
    )
}

export default ContactUs
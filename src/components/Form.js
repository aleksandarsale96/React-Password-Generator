import React, { useRef, useState } from "react";
//import funkcije:
import { generatePassword } from "../utils/form.utils";

export default function Form() {
    //hooks
    const numberRef = useRef();
    const symbolsRef = useRef();
    const lenghtRef = useRef();

    const [passowrd, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let newPassword = generatePassword(numberRef.current.checked, symbolsRef.current.checked, lenghtRef.current.value || 6);
        setPassword(newPassword);
    }

    return <form className="password__form" onSubmit={handleSubmit}>
        <h2> Generate a secure password</h2>
        <div className="password__inputs">
            <h4 className="password__text">{passowrd}</h4>
            <div className="flex">
                {/* slicno kao className */}
                <label htmlFor="password-length">Password Length?</label>
                <input type="number" 
                    //max broj 
                    max={72} 
                    min={6} 
                    name="password-length"
                    // {{zato sto je objekat}} 
                    style={{maxWidth: "8ch"}}
                    ref={lenghtRef}>
                </input>
            </div>
            <div className="flex">
                <label htmlFor="numbers">Include numbers?</label>
                <input type="checkbox" name="numbers" ref={numberRef}></input>
            </div>
            <div className="flex">
                <label htmlFor="symbols">Include symbols?</label>
                <input type="checkbox" name="symbols" ref={symbolsRef}></input>
            </div>
            <button className="btn">Generate</button>
        </div>
    </form>
}
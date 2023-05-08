import React, {useState} from "react";
import "./Form.css";

function Form() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
         e.preventDefault()
        if (firstName.length === 0 || lastName.length === 0) {
            setError(true)
        }
         console.log(firstName, lastName);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={e => setFirstName(e.target.value)}>

                    </input>
                </div>
                {error && firstName.length == 0 ?
                    <label>First Name cant be Empty</label> : ""}
                <div>
                    <input onChange={e => setLastName(e.target.value)}>

                    </input>
                </div>
                {error && lastName.length == 0 ?
                    <label>First Name cant be Empty</label> : ""}
                <button>
                    Submit
                </button>
            </form>
        </>
    );
}
export default Form;
import React, { useState } from "react";
import '../App.css'

const Form = () => {

    const leftDate = useState('');

    const selectDate = (e) => {
        console.log(e.target.value);
    };  

    return (
        <form method="POST">
            <div className="w-full overflow-hidden bg-slate-500 border-gray-800 p-2">
                <div className="flex flex-col firstName mb-5">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className="p-2 text-black text-base rounded focus:outline-none"
                        id="firstName"
                        type={'text'}
                        maxLength={144}
                    />
                </div>
                <div className="flex flex-col secondName mb-5 ">
                    <label htmlFor="secondName">Second Name</label>
                    <input
                        className="p-2 text-black text-base rounded focus:outline-none"
                        id="secondName"
                        type={'text'}
                        maxLength={144}
                    />
                </div>
                <div className="flex flex-col emailAddress mb-5 ">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input
                        className="p-2 text-black text-base rounded focus:outline-none"
                        id="emailAddress"
                        type={'email'}
                        maxLength={256}
                    />
                </div>

                <div className="flex flex-col Comments mb-5 ">
                    <label htmlFor="comments">Comments</label>
                    <textarea 
                        placeholder="Informations about your reminder"
                        maxLength={512}
                    />
                    {/* value={''} onChange={} */}
                </div>

                <div className="flex flex-col selectDate mb-5 ">
                    <label htmlFor="selectDate">Date</label>
                    <input
                        className="p-2 text-black text-base rounded focus:outline-none"
                        id="selectDate"
                        type={'date'}
                        onSelect={selectDate}
                    />
                    <div className="leftDate">{'leftDate'}</div>
                </div>

                <input 
                    className="float-right p-2 px-5 rounded bg-indigo-800 text-white cursor-pointer"
                    type={'submit'}
                    value={'Submit'}
                    disabled
                />
            </div>
        </form>

    )

};
export default Form;
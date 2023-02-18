import React from "react";
import '../../App.css';

    // https://api.github.com/users/${name}

const SearchProfile = ({setFindProfile, btnGetUserData}) => {

    return(
        <div className="searchProfile mt-10">

            <div className="searchInput flex flex-col md:flex-row justify-center items-center">
                <input 
                    className="bg-slate-600 text-white p-2 text-lg rounded"
                    type={'text'}
                    placeholder={'Ex: maximdudai'}
                    onChange={setFindProfile}
                />
                <button
                    type="submit"
                    className="text-white px-12 py-2 text-md bg-slate-800 rounded mt-2"
                    onClick={btnGetUserData}
                >
                    Search
                </button>
            </div>
        </div>
    )

};
export default SearchProfile;
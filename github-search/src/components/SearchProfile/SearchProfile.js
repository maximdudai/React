import React from "react";
import '../../App.css'

const SearchProfile = (profileName) => {
    return (
        <div className="searchProfilName mt-16">
            <input 
                className="bg-slate-700 p-2 text-white rounded text-lg focus:outline-none"
                placeholder="profile name ..."
                type={'search'}
                onChange={profileName}
            />
        </div>
    )
};
export default SearchProfile;
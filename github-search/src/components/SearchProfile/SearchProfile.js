import React from "react";
import '../../App.css';

const SearchProfile = ({setFindProfile, onEnterPressed}) => {

    return(
        <div className="searchProfile mt-10">

            <div className="searchInput flex flex-col md:flex-row justify-center items-center">
                <input 
                    className="bg-slate-600 text-white p-2 text-lg rounded"
                    type={'text'}
                    placeholder={'Ex: maximdudai'}
                    onChange={setFindProfile}
                    onKeyDown={onEnterPressed}
                />
            </div>
        </div>
    )

};
export default SearchProfile;
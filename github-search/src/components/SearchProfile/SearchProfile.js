import React from "react";
import '../../App.css';

const SearchProfile = ({searchField, searchChange}) => {
    return (
        <div>
            <input 
                className="rounded bg-slate-700 p-2 text-base mt-3 text-white focus:border-none"
                type={'search'}
                placeholder={'Profile ..'}
                onChange={searchChange}
            />
        </div>
    )

};
export default SearchProfile;
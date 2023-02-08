import React from "react";

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div>
            <input 
                className="rounded bg-slate-700 p-2 text-base mt-3 text-white focus:border-none"
                type={'search'}
                placeholder={'robo name..'}
                onChange={searchChange}
            />
        </div>
    )

};
export default SearchBox;
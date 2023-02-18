import React from "react";
import '../../App.css';

const SearchButton = ({onButtonClicked}) => {

    return (
        <div className="searchBtn">
                <button
                    type="search"
                    className="text-white px-12 py-2 text-md bg-slate-800 rounded mt-2"
                    onClick={onButtonClicked}
                    >
                    Search
                </button>
        </div>
    )

};
export default SearchButton;
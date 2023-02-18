import React from "react";
import '../../App.css';

import { AiOutlineSearch } from 'react-icons/ai';

const SearchButton = ({onButtonClicked}) => {
    return (
        <div className="searchBtn">
            <button
                type="search"
                className="text-white text-2xl px-3 py-2.5 text-md bg-slate-800 rounded"
                onClick={onButtonClicked}
                >
                <AiOutlineSearch />
            </button>
        </div>
    )
};
export default SearchButton;
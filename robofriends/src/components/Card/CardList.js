import React from "react";


const CardList = ({ id, name, email }) => {
    return (
        <div className="card flex flex-col justify-center bg-slate-700 w-auto m-3 p-2 rounded">
            <img className="mb-2" src={`https://robohash.org/${id}.png?size=128x128`} alt="robohash"></img>
            <p className="text-xl bg-slate-500">{name}</p>
            <p className="text-xl bg-slate-300">{email}</p>
        </div>
    )
};

export default CardList;
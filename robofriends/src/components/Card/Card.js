import React from "react";

import CardList from './CardList';

const Card = ({ robots }) => {

    return(
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                robots.map((user, i) => {
                    return(
                        <CardList 
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                })
            }
        </div>
    )

};

export default Card;
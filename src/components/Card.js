import React from 'react'

const Card = ({element, className, index}) => {
    // element: object mte3na (canddiate z.b)
    //param sollen in object  deklariert werden
    return (
        <div
        key={index} // index for divs
        className={className}
        style={{ height: "200px", width: "200px" }}
        >
            <p> {element.name} </p>
            <p> {element.surname}</p>
        </div>

    )
}

export default Card;

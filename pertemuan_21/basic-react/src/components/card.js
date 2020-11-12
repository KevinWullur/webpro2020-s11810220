// import react from "react";

// const Card = ({name, institution, address, phoneNumber}) =>{
//     return (
//         <div className="card-container">
//             <p>{name}</p>
//             <p>{institution}</p>
//             <p>{address}</p>
//             <p>{phoneNumber}</p>
//             <counter title="Counter Component" />
//         </div>
//     );
// };

// export default Card;

import react from 'react'

const Card = ({name, institution, address, phone}) =>{
    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{institution}</p>
            <p>{address}</p>
            <p>{phone}</p>
        </div>
    )
}

export default Card;
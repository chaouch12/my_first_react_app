import React from 'react'
import {useNavigate} from "react-router-dom";

function Documents () {

    const navigate = useNavigate()
    return (
        <div>
            welcome in the Documents Component!
            <button onClick={()=> navigate('/Features')}>go to features</button>

        </div>

    )
}

export default Documents;

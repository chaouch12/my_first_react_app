import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";

function Documents () {

    //const [name, setName] = useState()
    //const [adress, setAdress] = useState('')
    const [condidate, setCondidate] = useState({})
    const [data, setData] = useState([]) // array of condidates

    const handleChange = (e) => {
        const {name, value} =  e.target
        setCondidate({...condidate, [name]:value} )
        console.log('condidate saved is:', condidate)
    }
    const handleSubmit = (e) => {

        e.preventDefault() // why?
        setData([...data, condidate]);
        setCondidate({name:'', adress:''})
        //console.log('condidat is:', condidate)
        console.log('data is:', data)
    }

    const checkValue = (e) => {
        console.log(e.target)
        console.log(e.target.value)
    }

    return (
        <div>
            welcome in the Documents Component!
            <br/>  <br/>
            <form onSubmit={handleSubmit} className='form'>
                Name:
                <input
                    placeholder="Enter your name"
                    //onChange={ (e) => setName(e.target.value)}
                    onChange={handleChange}
                />

                Adress:
                <input
                placeholder="Enter your Adress"
                //onChange={ (e) => setAdress(e.target.value)}
                onChange={handleChange}
                />
                <button type="submit">submit</button>
            </form>


            <div style={{marginTop: "20px"}}> This is my registred values</div>
            <div>
               todo: fetch data
                {condidate.name},  {condidate.adress}
            </div>
        </div>

    )
}

export default Documents;

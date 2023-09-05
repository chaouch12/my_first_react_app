import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Card from "./Card";

function Documents () {

    //const [name, setName] = useState()
    //const [adress, setAdress] = useState('')
    const [condidate, setCondidate] = useState({})
    const [data, setData] = useState([]) // array of condidates

    const handleChange = (e) => {
        const {name, value} =  e.target
        setCondidate({...condidate, [name]:value});
        // console.log('condidate tipped is:', condidate)
    }
    const handleSubmit = (e) => {

        e.preventDefault() // why?
        // setData([...data, condidate]);
        setData(prevData => [...prevData, condidate]);
        setCondidate({name:'', adress:''})
        console.log('current condidat is:', condidate)
        console.log('data is:', data)
    }

    const getData = async () => {
        const response = await axios.get(`${process.env.PUBLIC_URL}/const/fakeData.json`)
        console.log('get data is ')
        console.log(response.data);
        setData(response.data);
    };

    const testObject = {
        name: 'walid',
        surname: 'Chaouch'
    }

    const testArray = [
        {
        name: 'walid',
        surname: 'Chaouch'
        },
        {
            name: 'ghada',
            surname: 'sghaier'
        }
    ]

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        console.log("new condidate has been changed");
    }, [condidate]);

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
                    name='name'
                    onChange={handleChange}
                />

                Adress:
                <input
                placeholder="Enter your Adress"
                //onChange={ (e) => setAdress(e.target.value)}
                name='adress'
                onChange={handleChange}
                />
                <button onSubmit={handleSubmit} type="submit">submit</button>
            </form>


            <div style={{marginTop: "20px"}}> This is my registred values</div>

            {/* fetch data from array*/}

            {/*{*/}
            {/*    testArray.map( x => (*/}
            {/*        <div className=''>*/}
            {/*            <p> {x.name}</p>*/}
            {/*            <p> {x.surname}</p>*/}
            {/*        </div>*/}
            {/*        )*/}

            {/*    )*/}
            {/*}*/}

            {/* how use component in another component*/}
            <div className='a-flex justify-content-around'>
                {
                    testArray.map(
                        (oneObject, index) =>
                            <Card element={oneObject} className='gray-background' index={index+1}/>
                    )
                }

            </div>

        </div>

    )
}

export default Documents;

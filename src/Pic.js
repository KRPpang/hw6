import {useState} from 'react';
import axios from 'axios';

function Pic(){
    const[picture, setPicture] = useState(null)
    const getPicture = () => {
        axios.get('https://shibe.online/api/shibes?count=10')
        .then(res => {
            console.log(res.data.content)
            setPicture(res.data.content)
        }).catch(err => {
            console.log(err)
        })
    }
}
return (
    <div>
        <button onClick={getPicture}>Generate Picture</button>
        { picture && <picture>{picture}</picture>}
    </div>
)
export default Pic;
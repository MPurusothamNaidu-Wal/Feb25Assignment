import axios from "axios"
import { useState } from "react"

const Form = props => {
    const [username, setUsername] = useState('')
    let handleSubmit = event => {
        event.preventDefault()
        axios.get(`https://api.github.com/users/${username}`)
        .then( response => {
            props.onSubmit(response.data)
            setUsername('')
        })
        .catch( error => console.log(error) )
    }
    return(
        <form onSubmit={handleSubmit} >
            <input 
            type="text" className="Input"
            value={username}
            onChange = {event => setUsername(event.target.value)}
            placeholder="Github Username"
            required
            /> <span></span><br></br>
            <button className="btn btn-md btn-light btntxt" >Add Card</button>
        </form>
    )
}
export default Form;
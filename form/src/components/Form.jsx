


export default function Form({data, setData}){

    const handleChange =(e)=> {
        const {name,value} = e.target
        if(name == "Complaint" && value.length>200){value = value.slice(0,200)}
        setData(data => ({...data, [name]: value}))
    }

    return(
        <form>
            <label>Name: </label>
            <input type = "text" name = "Name" value = {data.Name} onChange = {handleChange}></input>
            <br/>
            <label>Email: </label>
            <input type = "email" name = "Email" value = {data["Email"]} onChange = {handleChange}></input>
            <br/>
            <label>Complaint: </label>
            <textarea rows="5" cols="40" name = "Complaint" value = {data["Complaint"]} onChange = {handleChange}></textarea>
            <br/>
            <button type = "button">Submit Complaint</button>
        </form>
    )
}
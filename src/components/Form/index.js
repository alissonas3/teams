import './RegisterForm.css'

const Form = (props) => {

    const changedValue = (event) => {
        props.changedValue(event.target.value)
        console.log(changedValue);
    } 

    return (
        <div className="text-form">
            <label> {props.label} </label>
            <input value={props.inputValue} onChange={changedValue} placeholder={props.placeholder} required={props.requiredItem}/>
        </div>
    )
}

export default Form
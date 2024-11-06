import './OptionsList.css'

const OptionsList = (props) => {
    return (
        <div className='text-form'>
            <label>{props.label}</label>
            <select 
                onChange={event => props.changedValue(event.target.value)} 
                className='text-form' 
                value={props.value}>
                    <option value=""></option>
                    {props.items.map((item, index) => {
                        return <option key={index}>{item}</option>
                    })} 
            </select>
        </div>
    )
}

export default OptionsList
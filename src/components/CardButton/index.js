import './Button.css'

const CardButton = (props) => {
    return (
        <button className='submit-button'>
            {props.children}
        </button>
    )
}

export default CardButton

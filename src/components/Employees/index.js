import './employees.css'

const Employee = ({ image, name, team }) => {
    return (
        <div className='employee'>
            <div className='headerCard'>
                <img src={image} alt={name}></img>
            </div>
            <div className='footerCard'>
                <h4>{name}</h4>
                <h5>{team}</h5>
            </div>
        </div>
    )
}

export default Employee;
import Employee from '../Employees'
import './Team.css'

const Team = (props) => {
    return (
        (props.employees.length > 0) ?
        <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => <Employee primaryColorCard={props.primaryColor} key={employee.name} image={employee.image} name={employee.name} team={employee.team} />)}
            </div>
        </section>
        : ''
    )
}

export default Team
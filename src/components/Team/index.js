import Employee from '../Employees'
import './Team.css'

const Team = (props) => {
    return (
        <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => <Employee image={employee.image} name={employee.name} team={employee.team} />)}
            </div>
        </section>
    )
}

export default Team
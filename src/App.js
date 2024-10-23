import { useState } from 'react';
import Banner from './components/Banner/Banner';
import FormContainer from './components/FormContainer';
import Team from './components/Team';

function App() {

  const [employees, setEmployees] = useState([])

  const addNewEmployee = (employee) => {
    console.log(employee);
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
        <Banner/>
        <FormContainer employeeRegister={employee => addNewEmployee(employee)}/>
        <Team name="Programação"/>
        <Team name="Front-End"/>
        <Team name="Data Science"/>
    </div>
  );
}

export default App;

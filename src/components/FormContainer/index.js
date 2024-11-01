import './FormContainer.css';
import Form from '../Form'
import OptionsList from '../SelectOptionsList';
import CardButton from '../CardButton';
import { useState } from 'react';

const FormContainer = (props) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        props.employeeRegister({
            name,
            position,
            image,
            team
        });
    }

    return (
        <section className="form-section">
            <form onSubmit={submitForm}>
                <h2>Preencha os dados para cadastrar o card do usuário</h2>
                <Form 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    requiredItem={true}
                    value={name}
                    changedValue={value => setName(value)}
                />
                <Form 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    requiredItem={true}
                    value={position}
                    changedValue={value => setPosition(value)}
                />
                <Form 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    changedValue={value => setImage(value)}
                />
                <OptionsList 
                    label="Selecione sua área de interesse:" 
                    items={props.teamsName}
                    value={team}
                    changedValue={value => setTeam(value)}
                />
                <CardButton>Criar card!</CardButton>
            </form>
        </section>
    )

}

export default FormContainer
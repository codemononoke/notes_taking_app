import React, {useState} from 'react'
import styled from 'styled-components'
import { addNote } from '../services/api'
import { useNavigate } from 'react-router-dom'

export const AddNote = () => {

    const navigate = useNavigate();

    const [notes, setNotes] = useState({
        title:"",
        description:"",
    })

    const handleChange = (e) => {
        setNotes({...notes, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
       await addNote(notes);
       navigate('/')
    }

  return (
    <AddNoteContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" placeholder='Title' name='title' onChange={(e) => handleChange(e)} />
            <textarea name="description" placeholder='Description' onChange={(e) => handleChange(e)}/>
            <button type='submit'>add note</button>
        </form>
    </AddNoteContainer>
  )
}


const AddNoteContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background-color:#b8d2c3;

form{
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 100%;
    max-width: 500px;
    height: 600px;
    padding: 1rem;
    gap: 0.5rem;
    border-radius: 1rem;
    -webkit-box-shadow: -1px 12px 32px -4px rgba(0, 0, 0, 0.24);
    -moz-box-shadow: -1px 12px 32px -4px rgba(0, 0, 0, 0.24);
    box-shadow: -1px 12px 32px -4px rgba(0, 0, 0, 0.24);

    input{
        display: flex;
        flex: 10%;
        border: none;
        font-size: 1.4rem;
        font-weight: bold;
        &:focus{
            border: none;
            outline: none;
        }
    }
    textarea{
        display: flex;
        flex: 80%;
        border: none;
        font-size: 1rem;
        &:focus{
            border: none;
            outline: none;
        }
    }
    button{
        display: flex;
        flex: 10%;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: #596e58;
        color: #ffffff;
        border-radius: 0.4rem;
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover{
            opacity: 0.8;
        }
    }
}
`;
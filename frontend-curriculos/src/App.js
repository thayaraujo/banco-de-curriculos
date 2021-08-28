import { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const FormInput = styled.input`
    border: 1px solid red;

`;

const App = () => {

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`)
    console.log(address);
  };

  const createCandidate = async (Candidate) => {
    const user = await axios.post('http://localhost:3000/register', form);
    if(user.status === 200){
      alert('deu certo');
    } else {
    alert('não deu certo');
    }
  }   
   
  const [form, setForm] = useState({
    name: '',
    email: '',
    gender: '',
    cep: ''
  });
  
  useEffect(()=>{
    console.log(form);
  }, [form]);

  return (
    <div>
      <div>
        <label>nome</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }} value={form.name}></FormInput>
      </div>
      <div>
        <label>email</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email}></FormInput>
      </div>
      <div>
        <label>gênero</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, gender: e.target.value });
        }} value={form.gender}></FormInput>
      </div>
      <div>
        <label>cep</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep}></FormInput>
      </div>
      <button onClick={() => createCandidate()}>Enviar</button>
      <button onClick={() => fetchAddress}>ENDEREÇO</button>
    </div>
  );
}

export default App;

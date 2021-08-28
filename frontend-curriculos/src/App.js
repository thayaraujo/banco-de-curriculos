import { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const FormInput = styled.input`
    border: 1px solid black;

`;
const ErrorSpan = styled.span`
  color: red;
  display: ${(props) => props.isError ? 'block' : 'none'};
`;

const App = () => {

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, logradouro: address.data.logradouro });
  };

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post('http://localhost:3000/register', form);
      if (user.status === 200) {
        alert('iti malia deu certo');
      }

    } catch (error) {
      setCpfError(true);
    }
  };
 
   
  const [form, setForm] = useState({
    name: '', // required
    profession: '', // required
    position: '',
    birth: '', // required
    gender: '',
    cep: '', // required
    adress: '', // logradouro
    number: '', // required
    district: '', // required
    city: '', // required
    phone1: '',
    phone2: '',
    cel: '', // required
    email:'', // required
    id: '', 
    cpf: '', // required
    vehicle: '',
    license: ''
  });

  const [cpfError, setCpfError] = useState(false);
  
  useEffect(()=>{
    console.log(form);
  }, [form]);

  return (
    <div>
      <div>
        <label>Nome</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }} value={form.name}></FormInput>
      </div>
      <div>
        <label>Profissão</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, profession: e.target.value });
        }} value={form.profession}></FormInput>
      </div>
      <div>
        <label>Cargo pretendido</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, position: e.target.value });
        }} value={form.position}></FormInput>
      </div>
      <div>
        <label>Data de nascimento</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, birth: e.target.value });
        }} value={form.birth}></FormInput>
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
      <div>
        <label>Logradouro</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, adress: e.target.value });
        }} value={form.adress}></FormInput>
      </div>
      <div>
        <label>Número</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, number: e.target.value });
        }} value={form.number}></FormInput>
      </div>
      <div>
        <label>Bairro</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, district: e.target.value });
        }} value={form.district}></FormInput>
      </div>
      <div>
        <label>Cidade</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, city: e.target.value });
        }} value={form.city}></FormInput>
      </div>
      <div>
        <label>Telefone 1</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, phone1: e.target.value });
        }} value={form.phone1}></FormInput>
      </div>
      <div>
        <label>Telefone 2</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, phone2: e.target.value });
        }} value={form.phone2}></FormInput>
      </div>
      <div>
        <label>Celular</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, cel: e.target.value });
        }} value={form.cel}></FormInput>
      </div>
      <div>
        <label>email</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email}></FormInput>
      </div>
      <div>
        <label>RG</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, id: e.target.value });
        }} value={form.id}></FormInput>
      </div>
      <div>
        <label>CPF</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, cpf: e.target.value });
        }} value={form.cpf} required></FormInput>
      </div>
      <div>
        <label>Possui veículo?</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, vehicle: e.target.value });
        }} value={form.vehicle}></FormInput>
      </div>
      <div>
        <label>Habilitação</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, license: e.target.value });
        }} value={form.license}></FormInput>
        <ErrorSpan isError={cpfError}>AAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</ErrorSpan>
      </div>
           
      <button onClick={() => createCandidate()}>Enviar</button>
    </div>
  );
}

export default App;

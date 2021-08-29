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
      setNameError(true);
      setProfessionError(true);
      setBirthError(true);
      setCepError(true);
      setAddressError(true);
      setNumberError(true);
      setDistrictError(true);
      setCityError(true);
      setCelError(true);
      setEmailError(true);
      setCpfError(true);
    }
  };
 
   
  const [form, setForm] = useState({
    name: '', 
    profession: '', 
    position: '',
    birth: '', 
    gender: '',
    cep: '', 
    adress: '', 
    number: '', 
    district: '', 
    city: '', 
    phone1: '',
    phone2: '',
    cel: '', 
    email:'', 
    id: '', 
    cpf: '', 
    vehicle: '',
    license: ''
  });

  const [nameError, setNameError] = useState(false);
  const [professionError, setProfessionError] = useState(false);
  const [birthError, setBirthError] = useState(false);
  const [cepError, setCepError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [districtError, setDistrictError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [celError, setCelError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [cpfError, setCpfError] = useState(false);
  
  useEffect(()=>{
    console.log(form);
  }, [form]);

  return (
    <form>
    <h1>JobsNET</h1>
        <h2>Recrutamento e seleção</h2>
          <fieldset className="group"> 
                <h2 id="titulo">DADOS PESSOAIS</h2>
                <hr/>
                <br/>
      <div>
      <div>
        <label>Nome*</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }} value={form.name}></FormInput>
        <ErrorSpan isError={nameError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <label>Profissão*</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, profession: e.target.value });
        }} value={form.profession}></FormInput>
        <ErrorSpan isError={professionError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <label>Cargo pretendido*</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, position: e.target.value });
        }} value={form.position}></FormInput>
      </div>
      <br/>
      <div>
        <label>Data de nascimento</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, birth: e.target.value });
        }} value={form.birth}></FormInput>
        <ErrorSpan isError={birthError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <label>Gênero</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, gender: e.target.value });
        }} value={form.gender}></FormInput>
      </div>
      <br/>
      <div>
        <label>CEP*</label>
        <FormInput onBlur={() => {
          fetchAddress();
        }} onChange={(e) => {
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep}></FormInput>
        <ErrorSpan isError={cepError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <label>Logradouro*</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, adress: e.target.value });
        }} value={form.adress}></FormInput>
        <ErrorSpan isError={addressError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <label>Número*</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, number: e.target.value });
        }} value={form.number}></FormInput>
        <ErrorSpan isError={numberError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <label>Bairro*</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, district: e.target.value });
        }} value={form.district}></FormInput>
        <ErrorSpan isError={districtError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <label>Cidade*</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, city: e.target.value });
        }} value={form.city}></FormInput>
        <ErrorSpan isError={cityError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <label>Telefone 1</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, phone1: e.target.value });
        }} value={form.phone1}></FormInput>
      </div>
      <br/>
      <div>
        <label>Telefone 2</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, phone2: e.target.value });
        }} value={form.phone2}></FormInput>
      </div>
      <br/>
      <div>
        <label>Celular*</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, cel: e.target.value });
        }} value={form.cel}></FormInput>
        <ErrorSpan isError={celError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <label>Email*</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email}></FormInput>
        <ErrorSpan isError={emailError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
     </div>
      
        <h2 id="title">DOCUMENTOS</h2>
        <hr/>
        <div className="campo">
        <label>RG</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, id: e.target.value });
        }} value={form.id}></FormInput>
      </div>
      <br/>
      <div>
        <label>CPF*</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, cpf: e.target.value });
        }} value={form.cpf} required></FormInput>
        <ErrorSpan isError={cpfError}>Este campo deve ser preenchido</ErrorSpan>     
      </div>
      <br/>     
      <div>
      <label>Possui veículo?</label>
                <label>
                    <input type="radio" name="vehicle" value="sim"/>sim
                </label>
                <label>
                    <input type="radio" name="vehicle" value="nao"/>não
                </label>
      </div>
      <br/>
      <div>
      <label>Habilitação</label>
                <select id="license">
                    <option defaultValue ="">Selecione</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                    <option>AB</option>
                </select>
        </div>   
        </fieldset>
      
      <button onClick={() => createCandidate()}>Enviar</button>
      <button onClick={() => fetchAddress()}>TESTAR CEP</button>
    
    </form>
  );
}

export default App;

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
 
const Form = styled.form`
  background-color: #4682b4;
      
`;

const FormInput = styled.input`
    border: 1px solid black;
    font-family: 'Arial', 'Helvetica', 'sans-serif';
    
`;

const Title = styled.h1`
    color: #000000;
    font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
    text-align: center;
    font-size: 30px;

    h2 {
      font-size: 25px;
    }
`;

const Subtitle = styled.h2`
  color: #000080;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Label = styled.label`
  color: #000080;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
`;

const MiniLabel = styled.label`
  color: #000080;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  font-size: 14px;
`;

const Fieldset = styled.fieldset`
  color: #000000;
  background-image: linear-gradient(320deg, #c8f8f1 0, #b3f0eb 25%, #9ce7e7 50%, #84dee4 75%, #6bd5e2 100%);
  border-radius: 10px 10px 10px 10px;
  border-color: #ee3b3b;
  margin-left: 90px;
  margin-right: 90px;
  margin-top: 25px;
  margin-bottom: 60px;
`;

const Button = styled.button`
    width: 5rem;
    padding: 5px;
    margin-top: 10px;
    background-image: linear-gradient(130deg, #9d70f9 0, #644fe0 50%, #0032c7 100%);
    background-size: 200% 100%;
    background-position: right bottom;
    color:#FFF;
    border: none;
    cursor: pointer;
    transition: all 300ms ease-out;
    border-radius: 5px 5px 5px 5px;
    margin-left: -5px;
    margin-top: 15px;
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
      const user = await axios.post(process.env.REACT_APP_API_URL, form);
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
    address: '', 
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
    <Form>
    <Title>JobsNET
      <h2>Recrutamento e seleção</h2>
      </Title>
        <Fieldset className="group"> 
                <Subtitle>DADOS PESSOAIS</Subtitle>
                <hr/>
                <br/>
      <div>
      <div>
        <Label>Nome* </Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }} value={form.name} required></FormInput>
        <ErrorSpan isError={nameError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <Label>Profissão* </Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, profession: e.target.value });
        }} value={form.profession} required></FormInput>
        <ErrorSpan isError={professionError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <Label>Cargo pretendido* </Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, position: e.target.value });
        }} value={form.position} required></FormInput>
      </div>
      <br/>
      <div>
        <Label>Data de nascimento </Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, birth: e.target.value });
        }} value={form.birth}></FormInput>
        <ErrorSpan isError={birthError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <Label>Gênero </Label>
        <select id="gender">
                    <option defaultValue ="">Selecione</option>
                    <option>Feminino</option>
                    <option>Masculino</option>
                    <option>Outro</option>
                    <option>Prefiro não informar</option>
                </select>
      </div>
      <br/>
      <div>
        <Label>CEP* </Label>
        <FormInput onBlur={() => {
          fetchAddress();
        }} onChange={(e) => {
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep} required></FormInput>
        <ErrorSpan isError={cepError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <Label>Logradouro* </Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, address: e.target.value });
        }} value={form.address} required></FormInput>
        <ErrorSpan isError={addressError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <Label>Número* </Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, number: e.target.value });
        }} value={form.number} required></FormInput>
        <ErrorSpan isError={numberError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <Label>Bairro*</Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, district: e.target.value });
        }} value={form.district} required></FormInput>
        <ErrorSpan isError={districtError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <Label>Cidade* </Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, city: e.target.value });
        }} value={form.city} required></FormInput>
        <ErrorSpan isError={cityError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <Label>Telefone 1 </Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, phone1: e.target.value });
        }} value={form.phone1}></FormInput>
      </div>
      <br/>
      <div>
        <Label>Telefone 2 </Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, phone2: e.target.value });
        }} value={form.phone2}></FormInput>
      </div>
      <br/>
      <div>
        <Label>Celular* </Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, cel: e.target.value });
        }} value={form.cel} required></FormInput>
        <ErrorSpan isError={celError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      <br/>
      <div>
        <Label>Email* </Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email} required></FormInput>
        <ErrorSpan isError={emailError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
     </div>
      
        <Subtitle>DOCUMENTOS</Subtitle>
        <hr/>
        <div className="campo">
        <Label>RG </Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, id: e.target.value });
        }} value={form.id}></FormInput>
      </div>
      <br/>
      <div>
        <Label>CPF* </Label>
        <FormInput onChange={(e) => {
          setForm({ ...form, cpf: e.target.value });
        }} value={form.cpf} required></FormInput>
        <ErrorSpan isError={cpfError}>Este campo deve ser preenchido</ErrorSpan>     
      </div>
      <br/>     
      <div>
      <Label>Possui veículo? </Label>
                <MiniLabel>
                    <input type="radio" name="vehicle" value="sim"/>sim
                </MiniLabel>
                <MiniLabel>
                    <input type="radio" name="vehicle" value="nao"/>não
                </MiniLabel>
      </div>
      <br/>
      <div>
      <Label>Habilitação </Label>
                <select id="license">
                    <option defaultValue ="">Selecione</option>
                    <option>A</option>
                    <option>B</option>
                    <option>AB</option>
                    <option>Não tenho</option>
                </select>
        </div>   
        <Button onClick={() => createCandidate()}>Enviar</Button>
        </Fieldset>
      
      
      <button onClick={() => fetchAddress()}>TESTAR CEP</button>
    
    </Form>
  );
}

export default App;

import React, { useState } from "react";
import styled from "@emotion/styled";
import { getDiferrenceYear } from '../helper';
const Field = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  border: 1px solid #e1e1e1;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  width: 100%;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 2rem;
  padding: 1rem;
  text-transform: uppercase;
  transition: background-color .3s ease;
  width: 100%;

  &:hover {
    background-color: #26c6d1;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  margin-bottom: 2rem;
  padding: 1rem;
  text-align: center;
  width: 100%;
`;

const Form = () => {

  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: ''
  });

  const [error, setError] = useState(false);

  // extract values from state
  const { brand, year, plan } = data;

  // read the form data and save state 
  const getData = e => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    });
  }

  
  // click submit
  const handleSubmit = e => {
    e.preventDefault();    

    if(brand.trim() === '' || year.trim() === '' || plan.trim() === ''){
      setError(true);
      return;
    }

    setError(false);

    //base 2000
    let result = 2000;

    // get years diferrence
    const diferrence = getDiferrenceYear(year);    

    // for each year subtract 3%
    result -= (diferrence * 3 * result) / 100;    

    // american 15%
    // asian 5%
    // european 30%
    

    // basic 20%
    // complete 50%

    // total

  }  

  return (
    <form
      onSubmit={handleSubmit}
    >
      {error ? <Error>Todos los campos son obligatorio</Error> : null}

      <Field>
        <Label>Marca</Label>
        <Select
          name="brand"
          value={brand}
          onChange={getData}
        >
          <option value="">-- Seleccione --</option>
          <option value="american">Americano</option>
          <option value="european">Europeo</option>
          <option value="asian">Asiatico</option>
        </Select>
      </Field>

      <Field>
        <Label>Año</Label>
        <Select
          name="year"
          value={year}
          onChange={getData}
        >
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio 
          type="radio" 
          name="plan" 
          value="basic"             
          checked={plan === "basic"}
          onChange={getData}
        /> Básico
        <InputRadio 
          type="radio"
          name="plan"
          value="complete"
          checked={plan === "complete"}
          onChange={getData}
        /> Completo
      </Field>

      <Button type="submit">Cotizar</Button>
    </form>
  );
};

export default Form;

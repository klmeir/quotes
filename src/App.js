import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [summary, setSummary] = useState({
    quotation: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  const { data } = summary;

  return (
    <Container>
      <Header 
        title="Cotizador de Seguros" 
      />

      <ContainerForm>     
        <Form 
          setSummary={setSummary}
        />
        <Summary 
          data={data}           
        />       
      </ContainerForm>
    </Container>    
  );
}

export default App;

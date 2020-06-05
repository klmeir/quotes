import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

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

  const [loading, setLoading] = useState(false);

  const { quotation, data } = summary;

  return (
    <Container>
      <Header 
        title="Cotizador de Seguros" 
      />

      <ContainerForm>     
        <Form 
          setSummary={setSummary}
          setLoading={setLoading}
        />
        { loading ? <Spinner/> : null }              
        <Summary 
          data={data}           
        />  
        { !loading ? 
          <Result
            quotation={quotation}
          /> : null 
        }                
      </ContainerForm>
    </Container>    
  );
}

export default App;

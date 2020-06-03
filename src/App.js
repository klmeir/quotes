import React from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
      <Header 
        title="Cotizador de Seguros" 
      />

      <ContainerForm>        
      </ContainerForm>
    </Container>    
  );
}

export default App;

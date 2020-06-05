import React, { Fragment } from 'react';
import styled from "@emotion/styled";
import { capitalize } from '../helper';

const ContainerSummary = styled.div`  
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
`;

const Summary = ({ data }) => {

    const { brand, year, plan } = data;

    if(brand === '' || year === '' || plan === '')
        return null;

    return ( 
        <ContainerSummary>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {capitalize(brand)}</li>
                <li>Plan: {capitalize(year)}</li>
                <li>Año del Auto: {capitalize(plan)}</li>
            </ul>
        </ContainerSummary>        
    );
}
 
export default Summary;
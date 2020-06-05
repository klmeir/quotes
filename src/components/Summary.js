import React from 'react';
import styled from "@emotion/styled";
import PropTypes from 'prop-types';
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
                <li>Plan: {capitalize(plan)}</li>
                <li>Año del Auto: {capitalize(year)}</li>
            </ul>
        </ContainerSummary>        
    );
}

Summary.propTypes = {
    data: PropTypes.object.isRequired
}
 
export default Summary;
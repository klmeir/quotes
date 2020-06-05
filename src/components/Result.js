import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultQuotation = styled.div`
  background-color: rgb(127, 224, 237);
  border: 1px solid #26C6DA;
  margin-top: 1rem;
  padding: .5rem;
  position: relative;
  text-align: center; 
`;

const TextQuotation = styled.p`
  color: #00838f;
  font-weight: bold;
  margin: 0;
  padding: 1rem;
  text-transform: uppercase;    

`;

const Result = ({ quotation }) => {
    return (         
        (quotation === 0) ? <Message>Elige marca, año y tipo de seguro</Message> 
        : 
        (
            <ResultQuotation>
                <TransitionGroup
                    component="span"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={quotation}
                        timeout={{ enter:500, exit: 500}}
                    >
                        <TextQuotation>El total es: <span> ${quotation}</span> </TextQuotation>
                    </CSSTransition>
                </TransitionGroup>
            </ResultQuotation>
        )
    );
}

Result.propTypes = {
    quotation: PropTypes.number.isRequired
}
    
export default Result;

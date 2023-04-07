import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Input = styled(Field)`
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const Btn = styled.button`
  background-color: #0077cc;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const Error = styled(ErrorMessage)`
  color: #ff0000;
  margin-bottom: 8px;
  font-size: 14px;
`;

import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;

export const Btn = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 5px;
  :hover,
  :focus {
    background-color: darkred;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-weight: 600;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  :focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.4);
  }
`;

export const Labell = styled.div`
  padding: 10px;
  border: 1px solid red;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  margin-top: 20px;
  margin-bottom: 40px;
`;

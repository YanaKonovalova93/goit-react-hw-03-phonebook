import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  input {
    width: 150px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  button {
    width: 100px;
    border-radius: 20px;
  }
  border: solid 1px;
  padding: 10px;
`;

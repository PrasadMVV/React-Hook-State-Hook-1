import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  font-family: 'Roboto';
  height: 100vh;
  padding-top: 80px;
`

export const NameInput = styled.input`
  color: #1e293b;
  font-size: 16px;
  width: 80%;
  height: 45px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  padding-left: 16px;
  max-width: 450px;
  outline: none;
`

export const MsgContent = styled.p`
  text-align: center;
  color: #3a3d42;
  font-size: 30px;
  font-weight: 600;
  margin-top: 60px;
`

export const NameText = styled.span`
  color: #427d9a;
  font-weight: 700;
`

import styled from 'styled-components'

export const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
  margin-top: 20px;

  border-radius: 4px;
  background: #fff;
  padding: 20px;

  display: grid;
  grid-template-rows: 30px 200px 60px;
  grid-gap: 20px;

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
  }

  button {
    padding: 20px;
    background: #69f0ae;

    border-radius: 8px;
    border: none;

    cursor: pointer;
    transition: background 0.2s;

    :hover {
      background: #00c853;
    }
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 20px;
  }
`

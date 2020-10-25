import styled from 'styled-components'

export const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 20px;

  font-weight: 300;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .divider {
    width: 100%;
    height: 1px;
    margin: 20px 0;
    background: #eeeeee;
  }

  .new-comment {
    width: 100%;
    margin-top: 10px;

    display: flex;

    input {
      width: 100%;
      margin-right: 10px;
      border-radius: 4px;
      padding-left: 10px;
      border: 1px solid #ddd;
    }

    button {
      width: 30px;
      height: 30px;

      border-radius: 30px;
      background: #00c853;
      border: none;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 720px) {
    margin: 20px 20px 0 20px;
  }
`

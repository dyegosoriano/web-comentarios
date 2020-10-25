import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 60px;

  background: #000;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 920px;

    display: flex;
    justify-content: space-between;

    .user-area {
      display: flex;
      align-items: center;

      span {
        margin-right: 10px;
        font-weight: 300;
      }
    }
  }

  @media (max-width: 920px) {
    .container {
      margin: 0 10px;

      h1 {
        font-size: 1.5rem;
      }

      span {
        font-size: 1rem;
      }
    }
  }
`

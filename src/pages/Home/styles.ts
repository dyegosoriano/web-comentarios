import styled from 'styled-components'

export const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  a {
    text-decoration: none;
    color: #212121;
  }

  @media (max-width: 960px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

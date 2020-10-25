import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 200px;

  padding: 20px;
  margin: 20px 0;

  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .detail-post {
    margin-bottom: 20px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 920px) {
    p {
      font-weight: 300;
    }
  }
`

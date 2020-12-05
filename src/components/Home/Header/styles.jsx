import styled from 'styled-components';

const HomeHeader = styled.header`
  background-color: orangered;
  color: white;
  width: 100%;
  height: 70px;

  .limits {
    max-width: 1500px;
    height: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
  }

  h1 {
    font-size: 30px;
    font-variant: small-caps;
  }

`;

export default HomeHeader;

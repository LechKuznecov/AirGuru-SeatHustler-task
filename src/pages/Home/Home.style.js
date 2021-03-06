import styled from "styled-components";
import pic from "../../assets/picture.jpg";

export const SubscribeSection = styled.div`
  @media (min-width: ${({ theme }) => theme.mobile}) {
    &&Heading {
      width: 50%;
    }
  }
  background-image: url(${pic});
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-size: cover;
  text-align: center;
  margin-top: 0;
  min-height: 540px;
  position: relative;
  && Input {
    margin-bottom: 1.5em;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    max-height: 30vh;
  }
`;

export const Heading = styled.h1`
  padding-top: 1em;
  color: white;
  margin: 0;
  font-size: 2.3em;
  padding-bottom: 1em;
  @media (min-width: 410px) {
    width: 400px;
    margin: 0 auto;
  }
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.textBlue};
  font-size: 1.9em;
  font-weight: lighter;
  margin: 0 0 0.5em 0;
`;

export const CalculationBox = styled.div`
  background-color: ${({ theme }) => theme.calcBox};
  border-radius: 5px;
  padding: 0 1.2em;
  border: 1px solid ${({ theme }) => theme.lightBlue};
  && Button {
    padding: 0.6em 2.2em;
    margin: 1em 0;
    font-weight: lighter;
  }
  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 500px;
    margin: 0 auto;
  }
`;

export const CalcHeading = styled.h5`
  color: ${({ theme }) => theme.darkOrange};
  font-weight: lighter;
  font-size: large;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 60px;
    font-weight: bolder;
  }
`;

export const Line = styled.div`
  margin: 1em auto;
  width: 60%;

  border-top: 2px solid ${({ theme }) => theme.textBlue};
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.textBlue};
  margin: 0;
  font-size: 2.7em;
  font-weight: lighter;
`;

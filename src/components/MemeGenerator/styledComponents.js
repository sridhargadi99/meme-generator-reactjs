// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`
export const Heading = styled.h1`
  font-family: 'Open Sans';
  font-size: 27px;
  font-weight: 700;
  color: #35469c;
  align-self: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  background-image: url(${props => props.img});
  height: 300px;
  background-size: cover;
  order: 1;
  @media screen and (min-width: 768px) {
    min-width: 500px;
    height: 400px;
    flex-grow: 1;
    order: 2;
  }
`
export const Text = styled.p`
  font-family: 'Open Sans';
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  font-size: ${props => props.ftSize}px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  order: 2;
  @media screen and (min-width: 768px) {
    min-width: 500px;

    order: 1;
    margin-right: 30px;
  }
`
export const InputContainer = styled.div`
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-family: 'Open Sans';
  font-size: 14px;
  font-weight: 500;
  color: #7e858e;
  line-height: 2;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const Input = styled.input`
  width: 100%;
  font-family: 'Open Sans';
  font-size: 15px;
  font-weight: 500;
  color: #7e858e;
  padding-left: 15px;
  border: 1px solid #d7dfe9;
  border-radius: 8px;
  height: 40px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 50px;
    font-size: 18px;
  }
`
export const FontSelection = styled.select`
  width: 100%;
  font-family: 'Open Sans';
  font-size: 15px;
  font-weight: 500;
  color: #1e293b;
  padding-left: 15px;
  border: 1px solid #d7dfe9;
  border-radius: 8px;
  height: 40px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 50px;
    font-size: 18px;
  }
`
export const FontOption = styled.option`
  font-family: 'Open Sans';
  font-size: 15px;
  font-weight: 500;
  color: #7e858e;
`

export const GenerateButton = styled.button`
  height: 50px;
  width: 180px;
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #0b69ff;
  padding: 10px 20px 10px 20px;
`

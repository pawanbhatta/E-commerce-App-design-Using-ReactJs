import { CurrencyRupeeRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components";
import Footer from "../../components/Footer/Footer";
import NewsLetter from "../../components/Newsletter/NewsLetter";

const Container = styled.div``;
const Main = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Image = styled.img`
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Right = styled.div`
  flex: 1.5;
  width:100%
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: 400;
`;

const Description = styled.p`
  text-align: justify;
`;

const Price = styled.p`
  font-size: 30px;
  font-weight: 100;
  margin: 20px 0;
`;

const Property = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: space-between;
`;

const Color = styled.div`
  display: flex;
  margin: 10px 0px;
  margin-right: 35px;
`;

const Circle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
`;

const Option = styled.option``;

const Buy = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  //   justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 100px;
`;

const Button = styled.button`
  padding: 5px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

const Amount = styled.p`
  font-size: 20px;
  margin: 0 10px;
  border: 1px solid gray;
  padding: 5px;
  border-radius: 10px;
`;
const CartButton = styled.button`
  padding: 5px;
  background: none;
  border: 1px solid lightblue;
  cursor: pointer;
  font-size: 20px;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Main>
        <Left>
          <Image src="https://t4.ftcdn.net/jpg/03/07/90/09/360_F_307900949_3TSmRdS2q7nZQ3YuwjdqcnLBQNEZ2GSv.jpg"></Image>
        </Left>
        <Right>
          <Title>Winter WindSweater</Title>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis ullam assumenda necessitatibus possimus fugiat, dolor
            impedit aperiam est minus, nam sit nisi provident blanditiis iure
            molestiae maiores laboriosam quisquam, esse voluptates ipsum autem
            similique numquam eos accusantium. Pariatur voluptatum cumque
            delectus modi dolorum. Impedit dolorem, quis autem nostrum eligendi
            eaque?
          </Description>

          <Price>$ 500.00</Price>

          <Property>
            <Color>
              Color <Circle style={{ backgroundColor: "black" }}></Circle>{" "}
              <Circle style={{ backgroundColor: "gray" }}></Circle>
              <Circle style={{ backgroundColor: "coral" }}></Circle>
            </Color>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XL</Option>
              <Option>L</Option>
              <Option>Red</Option>
              <Option>M</Option>
              <Option>S</Option>
              <Option>XS</Option>
            </Select>
          </Property>

          <Buy>
            <ButtonContainer>
              <Button>-</Button>
              <Amount>1</Amount>
              <Button>+</Button>
            </ButtonContainer>

            <CartButton>ADD TO CART</CartButton>
          </Buy>
        </Right>
      </Main>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;

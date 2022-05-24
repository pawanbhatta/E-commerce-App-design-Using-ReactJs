import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
  background-color: whitesmoke;
  // position: sticky;
  // top: 0;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid lightgray;
  width: 200px;
  margin-left: 25px;
`;

const Input = styled.input`
  border: none;
  background: none;
  padding: 5px;
  outline: none;
  font-size: 14px;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const AuthButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CartButton = styled.div`
  position: relative;
`;

const ItemNumber = styled.span`
  position: absolute;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: blue;
  right: -5px;
  top: -10px;
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  margin-right: 25px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Let's Buy.</Logo>
        </Center>
        <Right>
          <ButtonContainer>
            <AuthButton>
              <Button>Register</Button>
              <Button>Login</Button>
            </AuthButton>
            <CartButton>
              <ShoppingCartOutlinedIcon />
              <ItemNumber />
            </CartButton>
          </ButtonContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

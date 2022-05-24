import { ArrowDownward, ArrowDownwardOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { Categories, Product, Products } from "../../components";
import Footer from "../../components/Footer/Footer";
import NewsLetter from "../../components/Newsletter/NewsLetter";
import { products } from "../../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  //   padding: 30px 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 10px 30px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const FilterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Heading = styled.h3`
  font-weight: 500;
`;

const Dropdown = styled.span`
  margin: 0px 10px;
  border: 1px solid lightgray;
  padding: 5px;
  width: 120px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.span`
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  height: 100vh;
  width: 100%;
`;

const ProductList = () => {
  return (
    <Container>
      <Header>
        <Left>
          <Title>Dresses</Title>
          <FilterBox>
            <Heading>Filter Products : </Heading>
            <Dropdown>
              Yellow <ArrowDownwardOutlined />
            </Dropdown>
            <Dropdown>
              M <ArrowDownward />
            </Dropdown>
          </FilterBox>
        </Left>
        <Right>
          <Heading>Sort Products:</Heading>
          <Dropdown>
            Price (asc) <ArrowDownwardOutlined />
          </Dropdown>
        </Right>
      </Header>
      <Main>
        <Products />
      </Main>

      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;

import { ArrowDownward, ArrowDownwardOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { Categories, Navbar, Product, Products } from "../../components";
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
  margin-right: 20px;
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

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Header>
        <Left>
          <Title>Dresses</Title>
          <FilterBox>
            <Heading>Filter Products : </Heading>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>Black</Option>
              <Option>Coral</Option>
              <Option>Red</Option>
              <Option>White</Option>
              <Option>Lime</Option>
            </Select>
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
          </FilterBox>
        </Left>
        <Right>
          <Heading>Sort Products:</Heading>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Right>
      </Header>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;

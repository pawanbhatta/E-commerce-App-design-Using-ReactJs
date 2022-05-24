import { Link } from "react-router-dom";
import styled from "styled-components";
import { products } from "../../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {products.map((product) => (
        <Link key={product.id} to="/products/id">
          <Product key={product.id} product={product} />
        </Link>
      ))}
    </Container>
  );
};

export default Products;

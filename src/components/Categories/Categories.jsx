import { Link } from "react-router-dom";
import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display:flex;
  padding:20px;
  justify-content:space-between
`;

const Category = () => {
  return (
    <Container>
        {categories.map(c=>(
          <Link key={c.id} to="/products">
            <CategoryItem key={c.id} category={c}/>
          </Link>
        ))}
    </Container>
  )
}

export default Category
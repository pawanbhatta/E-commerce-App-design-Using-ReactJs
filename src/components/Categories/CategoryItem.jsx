import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;

`;

const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

const Title = styled.h1`
color:white;
margin:20px;
`;

const Button = styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:500;
`;

const CategoryItem = ({category}) => {
  return (
    <Link to="/products">
    <Container>
        <Image src={category.img}/>
        <Info>
            <Title>{category.title} </Title>
            <Button>BUY NOW</Button>
        </Info>
    </Container>
    </Link>
  )
}

export default CategoryItem
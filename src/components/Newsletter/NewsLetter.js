import { Description, Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title></Title>
      <Description></Description>
      <InputContainer>
        <Input />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;

import React from "react";
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';


function SubList({ todos, todo, text, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <Container>
      {todo.completed === false ? (
        <Text>{text}</Text>
      ) : (
        <Text>
          <strike>{text}</strike>
        </Text>
      )}
      <BtnWrap>
        <Button className="complete-btn" onClick={completeHandler}>
          <CheckIcon/>
        </Button>
        <Button className="trash-btn" onClick={deleteHandler}>
          <DeleteIcon />
        </Button>
      </BtnWrap>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: 50%;
  margin-left:15vw;
  background: white;
  margin-top:20px;
  border-radius: 20px;
  justify-content: space-between;
  transition: all 1s ease;
`;

const Button = styled.button`
padding:5px;
margin:5px;
`

const Text = styled.h2`
    list-style:none;
    margin-left:20px;
    font-weight:400;
    text-align:center;
`;
const BtnWrap = styled.div`
  padding: 5px;
`;
export default SubList;

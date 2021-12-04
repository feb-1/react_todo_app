import React from "react";
import styled from "styled-components";
function Form(props) {
  const changeHandler = (e) => {
    props.setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      {
        text: props.inputText,
        completed: false,
        id: Math.floor(Math.random() * 100) + 1,
      },
    ]);

    props.setInputText("");
  };

  return (
    <div>
      <form>
        <Wrapper>
          <Input
            value={props.inputText}
            type="text"
            onChange={changeHandler}
          ></Input>
          <Button type="submit" onClick={submitHandler}>
            <i>Add</i>
          </Button>
        </Wrapper>
      </form>
    </div>
  );
}

const Input = styled.input`
  padding: 10px;
  padding-left: 30px;
  border: none;
  background-color: azure;
  z-index: 2;
  margin-right:20px;
  border-radius: 20px;
  box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.75);
`;
const Button = styled.button`
padding:10px;
text-transform: uppercase;
border: none;
background-color: white;
color:black;
font-size: 15px;
font-weight: 600;
border-radius: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Form;

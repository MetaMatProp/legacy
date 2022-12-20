import React from "react";
import styled from "styled-components";

interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

interface ButtonProps {
  value: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

export const TextInput = ({ placeholder, value, onChange }: TextInputProps) => {
  return <StyledInput type={"text"} placeholder={placeholder} value={value} onChange={onChange} />;
};

export const TextArea = ({ placeholder, value, onChange }: TextInputProps) => {
  return <StyledTextArea placeholder={placeholder} value={value} onChange={onChange} />;
};

export const Button = ({ value, onClick }: ButtonProps) => {
  return <StyledButton type={"button"} value={value} onClick={onClick} />;
};

const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 1.2em;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #ccc;
  margin: 0 0 20px 0;
`;

const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  height: 200px;
  line-height: 40px;
  font-size: 1.2em;
  width: 100%;
  border-radius: 15px;
  border: 1px solid #ccc;
  margin: 0 0 20px 0;
  resize: vertical;
  font-family: "Inter";
`;

const StyledButton = styled.input`
  box-sizing: border-box;
  padding: 0 30px;
  display: flex;
  height: 50px;
  line-height: 40px;
  font-size: 1.2em;
  width: fit-contents;
  border-radius: 15px;
  border: 1px solid #ccc;
  resize: vertical;
  font-family: "Inter";
  align-self: flex-end;
`;

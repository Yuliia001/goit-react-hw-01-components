import styled from "styled-components";

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
  color: white;
  background-color: ${getRandomHexColor};
  width: 100%;
`;
export const Label = styled.span`
  font-size: 16px;
`;
export const Percentage = styled.span`
  font-size: 18px;
  color: #fff;
`;
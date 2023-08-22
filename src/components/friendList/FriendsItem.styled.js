import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 14px;
  background-color: #F7FBFE;
  border: 1px solid #111111;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 34px 5px rgba(0,0,0,0.8);
  box-shadow: 5px 5px 34px 5px rgb(154 153 153 / 80%);;
}
`;
export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border: 1px solid black;
  border-radius: 18px;
  margin-right: 10px;
`;
export const Name = styled.p`
   font-weight: bold;
   font-size: 22px
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.$online ? 'green' : 'red')};
`;
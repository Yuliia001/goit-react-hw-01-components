import styled from "styled-components";

export const ProfileUser = styled.div`
  width: 300px;
  border: 1px solid #111111;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #F7FBFE;
  margin: 0 auto;
  `;

export const Description = styled.div`
  padding: 20px 0px;
  text-align: center;
`;
export const Image = styled.img`
  border: 1px solid black;
  background-color: white;
  border-radius: 50%;
  width: 150px;
  margin: 0 auto;
`;
export const Name = styled.p`
  font-weight: bold;
  margin: 24px 0;
  font-size: 22px;
`;
export const Tag = styled.p`
  font-size: 20px;
  color: #9A9FA2;
`;
export const Location = styled.p`
  font-size: 20px;
  color: #9A9FA2;
  margin: 24px 0;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid #111111;
`;
export const StatsItem = styled.li`
  display: flex;
  width: 100%;
  border: 1px solid #111111;
  flex-direction: column;
  align-items: center;
  height: 80px;
  justify-content: space-around;
`;
export const Label = styled.span`
  color: #9A9FA2;
  font-size: 14px;
`;
export const Quantity = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
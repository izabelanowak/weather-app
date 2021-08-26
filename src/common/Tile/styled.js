import styled from "styled-components";

export const Wrapper = styled.div`
  width: 96px;
  height: 100px;
  background:  ${({ theme }) => theme.colors.white};
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Value = styled.p`
  color: ${({ theme }) => theme.colors.tundora};
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.05em;
  margin: 12px 0 4px 0;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.dustyGray};
  font-size: 8px;
  line-height: 10px;
  letter-spacing: 0.1em;
  margin: 0;
`;
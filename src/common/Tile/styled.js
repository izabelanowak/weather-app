import styled, { css } from "styled-components";
import { ReactComponent as downArrow } from "../../assets/downArrow.svg";
import { ReactComponent as upArrow } from "../../assets/upArrow.svg";

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

  ${({ temperature }) => temperature &&
    css`
      flex-direction: row;
  `}
`;

export const Value = styled.p`
  color: ${({ theme }) => theme.colors.tundora};
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -0.05em;
  margin: 12px 0 4px 0;

  ${({ temperature }) => temperature &&
    css`
      color: ${({ theme }) => theme.colors.black};
      font-weight: 300;
      font-size: 64px;
      margin: 0;
  `}

  ${({ weatherDescription }) => weatherDescription &&
    css`
      color: ${({ theme }) => theme.colors.black};
      font-size: 18px;
      margin: 0;
  `}
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.dustyGray};
  font-size: 8px;
  line-height: 1.2;
  letter-spacing: 0.1em;
  margin: 0;

  ${({ temperature }) => temperature &&
    css`
      color: ${({ theme }) => theme.colors.doveGray};
      font-size: 24px;
      letter-spacing: 0;
      align-self: flex-start;
      margin-top: 24px;
  `}
`;

export const TemperatureVariation = styled.p`
  color: ${({ theme }) => theme.colors.doveGray};
  font-weight: 300;
  font-size: 16px;
  line-height: 1.2;
  display: flex;
  margin: 6px 0;

  ${({ small }) => small &&
    css`
      font-weight: 500;
      font-size: 8px;
      letter-spacing: 0.1em;
      color: ${({ theme }) => theme.colors.dustyGray};
  `}
`;

export const UpArrow = styled(upArrow)`
  margin-left: 2px;
`;

export const DownArrow = styled(downArrow)`
  align-self: flex-end;
  margin-left: 2px;
`;
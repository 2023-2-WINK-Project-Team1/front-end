import styled, { css } from 'styled-components';

const State = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  // props에 따른 변화
  ${(props) => css`
    color: white;
    font-size: 16px;
    // 상태에 따라 색상과 문구 변경
    background-color: ${props.status === 1
      ? '#005950'
      : props.status === 2
      ? 'rgba(0, 89, 80, 0.5)'
      : props.status === 3
      ? '#D9D9D9'
      : 'blue'};
  `}

  font-family: 'Arial', sans-serif; /* 글꼴 지정 */
`;

export default State;

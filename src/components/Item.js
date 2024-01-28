import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import State from '../components/State';


const ItemContainer = styled.div`
    height: 70px;
    border-bottom: 1px solid #979797;
    padding-top: 8px;
`;

const GoodsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 16px;
`

const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;  // 요소들을 세로로 오른쪽 정렬
    margin-top: 8px;
    color: ${(props) => props.theme.black};
    font-size: 11px;
`

const DateBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;  // 시작 부분을 맞춤
    gap: 4px;
`

const NameWrapper = styled.div`
    color: ${(props) => props.theme.black};
    font-size: 16px;
`

function Item({goodsName, rentalDate, returnDate, rentalState}) {

  // 상태값 리스트
  const stateList = ['대여중', '대여신청', '반납완료']

  // rentalState에 해당하는 상태값 가져오기
  const getStateText = () => {
    switch (rentalState) {
      case 1:
        return stateList[0]; // 대여중
      case 2:
        return stateList[1]; // 대여신청
      case 3:
        return stateList[2]; // 반납완료
      default:
        return 'error';
    }
  };

  const stateText = getStateText();


  return (
    <ItemContainer>
      <GoodsContainer>
        <NameWrapper>
          {goodsName}
        </NameWrapper>
        <State status = {rentalState}>{stateText}</State>
      </GoodsContainer>
      <DateContainer>
        <DateBox>
          <div>대여시간 | {rentalDate}</div>
         <div>반납시간 | {returnDate}</div>
        </DateBox>
      </DateContainer>
    </ItemContainer>
  );
}

export default Item;
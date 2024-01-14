import styled from 'styled-components';
import { ReactComponent as BackIcon } from '../../assets/back.svg';
import { ReactComponent as SettingIcon } from '../../assets/setting.svg';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between; // 자식 요소들을 양 끝으로 분산 정렬
  align-items: center;
  width: 100%; // 화면 크기에 맞추기 위해서
  height: 56px;
  border-bottom: 1px solid #e6e6e6;
  background: ${(props) => props.theme.white};
  box-sizing: border-box;
  justify-content: center; // 가운데 정렬
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 156px; // 버튼 사이의 간격 조정 (피그마와 비율이 달라서 임의로 조정함)
  align-items: center; // 수직 가운데 정렬
`;

const BackButton = styled(BackIcon)``;

const SettingButton = styled(SettingIcon)``;

const Title = styled.h1`
  color: ${(props) => props.theme.black};
  font-size: 20px;
  text-align: center; // 텍스트 중앙 정렬
`;

// title을 전달 받아서 제목이 달라지게 함
function Header({ title }) {
  return (
    <HeaderContainer>
      <ButtonContainer>
        <BackButton />
        <Title>{title}</Title>
        <SettingButton />
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
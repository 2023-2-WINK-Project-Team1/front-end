// Layout 컴포넌트(Header, Footer)
// 사용법: import Layout from '../components/layout/Layout'
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: absolute;
  padding-bottom: 65px; // Footer height
  box-sizing: border-box;
`;

const Main = styled.main`
  flex: 1; // flex 속성을 활용하여 가용 공간을 채우도록 설정
  > div {
    height: 100%;
    box-sizing: border-box;
  }
`;
/* 사용할 props 정리
    headerTitle: 해당 페이지의 제목(title)
    children: 안에 들어갈 컨텐츠들
    */
function Layout({ headerTitle, children }) {
  return (
    <LayoutContainer>
      {/*...을 쓰면 객체내의 모든 속성이 해당 컴포넌트의 props로 전달됨*/}
      <Header headerTitle={headerTitle} />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;

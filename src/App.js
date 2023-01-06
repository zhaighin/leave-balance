import './App.css';
import { Layout } from 'antd';
import Summary from './summary';
import Topbar  from './topbar';
import Absence from './absence';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className='app-layout'>
      <Header>
        <Topbar></Topbar>
      </Header>
      <Content className='app-content'>
        <Summary></Summary>
        <Absence></Absence>
      </Content>
      <Footer>
        Copyright © 2022 Name
      </Footer>
    </Layout>
  );
}

export default App;

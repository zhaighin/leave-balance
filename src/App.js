import './App.css';
import { Layout } from 'antd';
import Summary from './summary';
import Topbar from './topbar';
import Absence from './absence';
import Profiles from './profiles';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';


const { Header, Content, Footer } = Layout;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Summary />,
  },
  {
    path: 'leave',
    element: <Absence />
  },
  {
    path: 'profiles',
    element: <Profiles />,
  },
])

const App = () => {
  return (
    <Layout className='app-layout'>
      <Header>
        <Topbar></Topbar>
      </Header>
      <Content className='app-content'>
        <RouterProvider router={router} />
      </Content>
      <Footer>
        Copyright © 2022 Name
      </Footer>
    </Layout>
  );
}

export default App;

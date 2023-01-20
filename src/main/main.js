import './main.css';
import { Layout } from 'antd';
import Topbar from '../topbar';

import {
    Outlet
} from 'react-router-dom';


const { Header, Content, Footer } = Layout;

const Main = () => {
    return (
        <div>

            <Layout className='app-layout'>
                <Header>
                    <Topbar></Topbar>
                </Header>
                <Content className='app-content'>
                    <Outlet />
                </Content>
                <Footer>
                    Copyright © 2022 Name
                </Footer>
            </Layout>
        </div>

    );
}

export default Main;

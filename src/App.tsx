import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import Player from './pages/player';
import List from './pages/list';

const { Content, Sider } = Layout;

class App extends Component<any> {

  // 点击左侧菜单切换内容
  handleClick = ({ key }:any) => {
    const { history } = this.props;
    if (key === '1') {
      history.push('/player')
    } else if (key === '2') {
      history.push('/list')
    }
  }
  
  render() {
    return (
      <div className="container">
        <Layout style={{ minHeight: '100vh' }}>
          {/* 左侧菜单 */}
          <Sider collapsible>
            <div className="logo" />
            <Menu theme="dark" mode="inline" onClick={ this.handleClick }>
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                音乐播放器
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                音乐列表
              </Menu.Item>
            </Menu>
          </Sider>

          {/* 右侧内容 */}
          <Layout className="site-layout">
            <Content>
              {/* 路由跳转 */}
              <Switch>
                <Route path="/player" component={ Player } />
                <Route path="/list" component={ List } />
                <Redirect to="/player" />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);

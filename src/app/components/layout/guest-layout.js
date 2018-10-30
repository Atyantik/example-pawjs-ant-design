import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Affix, BackTop, Button, Drawer, Icon, Layout,
} from 'antd';
import styles from '../home/home.less';

const {
  Header, Footer,
} = Layout;

export default class GuestLayout extends Component {
  state = {
    visible: false,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { children } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <Layout>
          <div>
            <BackTop />
          </div>
          <Affix offsetTop={0}>
            <Header className={styles['header-layout']}>
              <Link to="/">
                <span style={{ color: '#fff' }}>
                  <strong>AntDesign + ReactPWA</strong>
                </span>
              </Link>
              <Button type="primary" shape="circle" onClick={this.showDrawer}>
                <Icon type="bars" theme="outlined" />
              </Button>
              <Drawer
                title="Menu"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={visible}
              >
                <p><Link to="/">Home</Link></p>
                <p><Link to="/about">About</Link></p>
              </Drawer>
            </Header>
          </Affix>
          { children }
          <Footer className={styles['align-center']}>
            This is an example of implementation of Ant Design with ReactPWA.
            Help us grow further visit&nbsp;
            <a href="https://opencollective.com/react-pwa" target="_blank" rel="noreferrer nofollow noopener">OpenCollective</a>
          </Footer>
        </Layout>
      </div>
    );
  }
}

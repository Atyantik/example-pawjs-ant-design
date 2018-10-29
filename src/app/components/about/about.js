import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Layout, Carousel, Button, Drawer, Icon, Affix, Row, Col, BackTop, Divider,
} from 'antd';
import styles from './about.less';
import Image1 from '../home/images/wildernest-3-600x400.jpg';

const {
  Header, Content, Footer,
} = Layout;

export default class Home extends Component {
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
                Logo
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
          <Content>
            <div>
              <Carousel className="custom-carousel">
                <div>
                  <div>
                    <h1>About us</h1>
                  </div>
                </div>
              </Carousel>
            </div>
            <div>
              <Row gutter={48} type="flex" className={`${styles['about-section']}`}>
                <Col md={{ span: 16 }} sm={{ span: 24 }}>
                  <h3>Title</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry&#39;s standard dummy text ever since&nbsp;
                    the 1500s, when an unknown printer took a galley of type and scrambled it&nbsp;
                    to make a type specimen book.
                  </p>
                </Col>
                <Col md={{ span: 8 }} sm={{ span: 24 }}>
                  <script src="https://codefund.io/scripts/fefc6de5-a0ce-46e8-a15d-f43733b5b454/embed.js" />
                  <div id="codefund_ad" />
                </Col>
              </Row>
            </div>
            <div>
              <Row type="flex" gutter={48} className={styles['mission-section']}>
                <Col md={{ span: 12 }} sm={{ span: 24 }}>
                  <img src={Image1} alt="placeholder-img" />
                </Col>
                <Col md={{ span: 12 }} sm={{ span: 24 }} className={styles['mission-section-text']}>
                  <div>
                    <h4>
                      Our Mission
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry&#39;s standard dummy text ever since&nbsp;
                      the 1500s, when an unknown printer took a galley of type and scrambled&nbsp;
                      it to make a type specimen book.
                    </p>
                  </div>
                  <div>
                    <h4>
                      Our Vision
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry&#39;s standard dummy text ever since&nbsp;
                      the 1500s, when an unknown printer took a galley of type and scrambled&nbsp;
                      it to make a type specimen book.
                    </p>
                  </div>
                  <div>
                    <h4>
                      Our Values
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry&#39;s standard dummy text ever since&nbsp;
                      the 1500s, when an unknown printer took a galley of type and scrambled&nbsp;
                      it to make a type specimen book.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client="ca-pub-7586505628408924"
              data-ad-slot="5652642939"
              data-ad-format="auto"
            />
            <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }} />
          </Content>
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

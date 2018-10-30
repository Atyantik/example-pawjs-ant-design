import React from 'react';
import {
  Layout, Carousel, Button, Icon, Row, Col, Divider,
} from 'antd';
import styles from './home.less';

import Image1 from './images/600x400-1-50-485b40e293d63f83f7562d5159819329.jpg';
import Image2 from './images/wildernest-3-600x400.jpg';
import GuestLayout from '../layout/guest-layout';

const {
  Content,
} = Layout;

const Home = () => (
  <GuestLayout>
    <Content>
      <div>
        <Carousel autoplay className="custom-carousel">
          <div>
            <div>
              <h1>Ant Design reaches to ReactPWA. Checkout this cool demo</h1>
              <Row type="flex" gutter={48} justify="space-around">
                <Col span={24}>
                  <Button type="primary" icon="github" href="https://github.com/Atyantik/example-pawjs-ant-design">
                    View source code
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <h1>Do not limit your creativity with technical difficulties #ReactPWA</h1>
            <Row type="flex" gutter={48} justify="space-around">
              <Col span={24}>
                <Button type="primary" icon="global" href="https://www.reactpwa.com">
                  Visit ReactPwa.com
                </Button>
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
      <div>
        <Row gutter={48} justify="space-around" type="flex" className={`${styles['m-0']} ${styles['about-section']}`} align="middle">
          <Col md={{ span: 18 }} sm={{ span: 24 }} className={styles['align-center']}>
            <h3>Title</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&#39;s standard dummy text ever since&nbsp;
              the 1500s, when an unknown printer took a galley of type and scrambled it&nbsp;
              to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets&nbsp;
              containing Lorem Ipsum passages, and more recently with desktop publishing&nbsp;
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Col>
        </Row>
      </div>
      <Divider />
      <div>
        <Row gutter={48} justify="space-around" type="flex" className={styles['m-0']} align="middle">
          <Col md={{ span: 6 }} sm={{ span: 24 }} className={styles['align-center']}>
            <div className={styles['single-service']}>
              <Icon type="check-circle" theme="twoTone" />
              <h3>
                Success
              </h3>
              <p>
                Description content will go here.
              </p>
            </div>
          </Col>
          <Col md={{ span: 6 }} sm={{ span: 24 }} className={styles['align-center']}>
            <div className={styles['single-service']}>
              <Icon type="setting" theme="twoTone" />
              <h3>
                Customizable
              </h3>
              <p>
                Description content will go here.
              </p>
            </div>
          </Col>
          <Col md={{ span: 6 }} sm={{ span: 24 }} className={styles['align-center']}>
            <div className={styles['single-service']}>
              <Icon type="dashboard" theme="twoTone" />
              <h3>
                Performance
              </h3>
              <p>
                Description content will go here.
              </p>
            </div>
          </Col>
          <Col md={{ span: 6 }} sm={{ span: 24 }} className={styles['align-center']}>
            <script src="https://codefund.io/scripts/fefc6de5-a0ce-46e8-a15d-f43733b5b454/embed.js" />
            <div id="codefund_ad" />
          </Col>
        </Row>
      </div>
      <Divider />
      <div className={styles['content-section']}>
        <Row type="flex" className={`${styles['m-0']}`}>
          <Col md={{ span: 12 }} sm={{ span: 24 }} className={styles['content-section-img']}>
            <img src={Image1} alt="placeholder" />
          </Col>
          <Col md={{ span: 12 }} sm={{ span: 24 }} className={styles['content-section-text']}>
            <h3>
              Title
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&#39;s standard dummy text ever since&nbsp;
              the 1500s, when an unknown printer took a galley of type and scrambled it&nbsp;
              to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets&nbsp;
              containing Lorem Ipsum passages, and more recently with desktop publishing&nbsp;
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Col>
        </Row>
        <Row type="flex" className={styles['m-0']}>
          <Col md={{ span: 12 }} sm={{ span: 24 }} className={styles['content-section-img']}>
            <img src={Image2} alt="placeholder" />
          </Col>
          <Col md={{ span: 12 }} sm={{ span: 24 }} className={styles['content-section-text']}>
            <h3>
              Title
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&#39;s standard dummy text ever since&nbsp;
              the 1500s, when an unknown printer took a galley of type and scrambled it&nbsp;
              to make a type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets&nbsp;
              containing Lorem Ipsum passages, and more recently with desktop publishing&nbsp;
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </Col>
        </Row>
      </div>
      <Row>
        <Col span={24} className={styles['align-center']}>
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-7586505628408924"
            data-ad-slot="5652642939"
            data-ad-format="auto"
          />
        </Col>
      </Row>
    </Content>
  </GuestLayout>
);

export default Home;

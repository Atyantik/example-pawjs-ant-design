import React from 'react';
import {
  Layout, Carousel, Row, Col,
} from 'antd';
import styles from './about.less';
import Image1 from '../home/images/wildernest-3-600x400.jpg';
import GuestLayout from '../layout/guest-layout';

const {
  Content,
} = Layout;

const About = () => (
  <GuestLayout>
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

export default About;

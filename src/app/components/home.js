import React, { Component } from 'react';
import moment from 'moment';
import _ from 'lodash';
import {
  Select, Layout, DatePicker, InputNumber, Slider, Card, Icon, List, Pagination, Button,
} from 'antd';
import styles from './home.scss';

const {
  Header, Sider, Content,
} = Layout;
const { Meta } = Card;
const { RangePicker } = DatePicker;

export default class Home extends Component {
    state = {
      data: [],
      value: undefined,
      guests: 2,
    };

    onChange(value) {
      this.setState({ guests: value });
    }

    handleSearch = () => {
      // api call to fetch suggestions here
    };

    handleChange = (value) => {
      this.setState({ value });
    };

    disabledDate = current => current && current < moment().endOf('day');

    render() {
      const { data, value, guests } = this.state;
      return (
        <Layout>
          <Header className={styles.header}>
            <div className={styles.banner}>
              <h1 className={styles['h1-style']}>
                Book accomodation closest to the start of running races.
              </h1>
              <div>
                <Button
                  type="primary"
                  icon="github"
                  size="large"
                  href="https://github.com/Atyantik/example-pawjs-ant-design"
                >
                  View Source Code
                </Button>
              </div>
              <Select
                showSearch
                value={value}
                placeholder="Search by race e.g. Berlin Marathon"
                className={styles['search-bar']}
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                onSearch={this.handleSearch}
                onChange={this.handleChange}
                notFoundContent={null}
                suffixIcon={<Icon type="search" theme="twoTone" twoToneColor="#52c41a" />}
              >
                {_.map(
                  data, d => (
                    <Select.Option key={d.value} value={d.value}>{d.text}</Select.Option>),
                )}
              </Select>
            </div>
          </Header>
          <Layout className={`${styles['body-layout']} ant-layout-has-sider`}>
            <Sider className={styles.sidebar} width={300}>
              <table>
                <tbody>
                  <tr>
                    <td className={styles['d-block']}>
                      <div>When:</div>
                      <div>
                        <RangePicker
                          disabledDate={this.disabledDate}
                          format="YYYY-MM-DD"
                        />
                      </div>
                    </td>
                    <td className={styles['d-block']}>
                      <div>Guests:</div>
                      <div>
                        <InputNumber
                          min={1}
                          max={5}
                          defaultValue={guests}
                          onChange={this.onChange}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <div>Price Range:</div>
                      <div>
                        <Slider range defaultValue={[20, 50]} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <div>Distance to Start:</div>
                      <div>
                        <Slider defaultValue={20} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Sider>
            <Content>
              <div>
                <List
                  grid={{
                    gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 3,
                  }}
                  className={styles.results}
                  dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
                  renderItem={() => (
                    <List.Item>
                      <Card
                        hoverable
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                      >
                        <Meta
                          title="Europe Street beat"
                          description="www.instagram.com"
                        />
                      </Card>
                    </List.Item>
                  )}
                />
                <Pagination defaultCurrent={1} total={50} className={styles.pagination} />
              </div>
            </Content>
          </Layout>
        </Layout>
      );
    }
}

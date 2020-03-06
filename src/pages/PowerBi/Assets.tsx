import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
export default class Assets extends PureComponent<any,any>{

  render() {
    return (
      <PageHeaderWrapper  title={false}>
      <Row gutter={24}>
        <Col span={6}>
          </Col>
        <Col span={18}>
          <p>欢迎使用</p></Col>
      </Row>
      </PageHeaderWrapper>
      );
  }
}
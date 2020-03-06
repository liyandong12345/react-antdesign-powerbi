import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import MenuBar from '@/components/MenuBar/MenuBar'
export default class DataPreparation extends PureComponent<any,any>{

  render() {
    return (
      <Row gutter={24}>
        <Col span={6}>
          <MenuBar /></Col>
        <Col span={18}>
          <p>欢迎使用</p></Col>
      </Row>
      );
  }
}
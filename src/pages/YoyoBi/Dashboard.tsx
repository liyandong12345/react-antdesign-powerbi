import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import MenuBar from '@/components/MenuBar/MenuBar'
export default class Dashboard extends PureComponent<any, any>{

  render() {
    return (
      <Row>
        <Col>
          <MenuBar /></Col>
        <Col>
          <p>欢迎使用</p></Col>
      </Row>
      );
  }
}
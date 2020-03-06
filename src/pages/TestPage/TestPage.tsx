import React, { PureComponent } from 'react';
import { Card, Row, Col } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import DownLoadXls from './DownLoadXls';
import DragSortingTable from './DragSortingTable';
import MoveTableCol from './MoveTableCol';
import MoveTableRow from './MoveTableRow';
export default class TestPage extends PureComponent<any, any>{

  render() {
    return (
      <PageHeaderWrapper  title={false}>
        <Row gutter={24}>
          <Col span={8}>
            <Card style={{ marginBottom: 32 }} title='将查询的数据集合下载为xls'>
              <DownLoadXls />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ marginBottom: 32 }} title='将查询的数据集合下载为xls'>
              <a target="_blank" href='file:///C:/Users/yansonfli/Desktop/12/index.html'>动画演示</a>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ marginBottom: 32 }} title='将查询的数据集合下载为xls'>
              <DownLoadXls />
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <Card style={{ marginBottom: 32 }} title='可拖动table行-第一种'>
              <DragSortingTable />
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <Card style={{ marginBottom: 32 }} title='可拖动table行-第二种'>
              <MoveTableRow />
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <Card style={{ marginBottom: 32 }} title='可拖动table列'>
              <MoveTableCol />
            </Card>
          </Col>
        </Row>

        <p style={{ textAlign: 'center', marginTop: 24 }}>
          Want to add more pages? Please refer to 。
    </p>
      </PageHeaderWrapper>
    )
  }
}

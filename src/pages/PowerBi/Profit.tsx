import React, { PureComponent } from 'react';
import { Row, Col, Card, Button } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
 
const ButtonGroup = Button.Group;

export default class Profit extends PureComponent<any,any>{
   
      render() {
        console.log(styles.button)
        return (
          <PageHeaderWrapper  title={false}>
            <Card bodyStyle={{padding:0}}>
            <Card  bodyStyle={{padding:0}}>
            <ButtonGroup>
      <Button style={{backgroundColor:'#2db7f5',color:'black'}}>收入利润总览</Button>
      <Button className={styles.button}>从收入到利润</Button>
      <Button style={{backgroundColor:'#2db7f5'}}  >增长分析</Button>
      <Button style={{backgroundColor :'#2db7f5'}} >盈利能力分析</Button>
      <Button style={{backgroundColor:'#2db7f5'}} >三费分析</Button>
      <Button style={{backgroundColor:'#2db7f5'}}  >收入利润表科目</Button>
    </ButtonGroup>
            </Card>
            <Card >
            <Row gutter={24}>
            <Col span={6}>
              </Col>
            <Col span={18}>
              <p>欢迎使用</p></Col>
          </Row>
            </Card>

          </Card>
          </PageHeaderWrapper>
          );
      }
    }
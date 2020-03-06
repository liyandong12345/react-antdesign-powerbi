import React, { PureComponent } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
export default class Create extends PureComponent<any, any>{

  render() {
    return (
      <PageHeaderWrapper title={false}>
        <p>欢迎使用</p>
      </PageHeaderWrapper>
    );
  }
}
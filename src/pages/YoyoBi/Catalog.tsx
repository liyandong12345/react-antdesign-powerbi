import React,{PureComponent} from 'react';
import MenuBar from '@/components/MenuBar/MenuBar'
export default class Catalog extends PureComponent<any,any>{
  render() {
    return (
<div style={{marginLeft: -24,marginTop:-24}}> 
<MenuBar/>
</div>
      );
  }
}
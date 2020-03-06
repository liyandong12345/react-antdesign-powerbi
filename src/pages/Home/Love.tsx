import React,{ Component} from 'react';
import  $  from 'jquery';
import ReactDOM from 'react-dom';
// export default class Love extends React.Component<any,any>{

// runMive=()=>{
//         // Update the document title using the browser API
//         const canvas=document.createElement('canvas');
//         canvas.id='canvas';
//         var ctx=canvas.getContext('2d');
//         ctx.fillStyle='#FF0000';
//         ctx.fillRect(0,0,80,100); 
//         const a=document.createElement('a');
//         a.title='sdsd';
//         document.body.appendChild(canvas);
//         document.body.appendChild(a);
//        console.log(canvas);
//         return <a></a>;  
//      }


//      render(){
//       const canvas= this.runMive();
//       console.log(canvas)
//          return <div></div>

//      }
// }

const create=()=>{
    return <canvas/>
}

ReactDOM.render(create, document.getElementById('root'));
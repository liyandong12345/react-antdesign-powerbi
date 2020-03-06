/*
 * @Author: your name
 * @Date: 2019-11-09 02:36:35
 * @LastEditTime: 2019-12-12 17:34:50
 * @LastEditors: Please set LastEditors
 * @Description:  网络请求工具
 * @FilePath: \ant-design-pro\src\utils\request.ts
 */
import { extend } from 'umi-request';
import { notification } from 'antd';
import fetch from 'dva/fetch';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

interface options{
  body?:any;
  headers?:any;
  credentials?:"include" | "omit" | "same-origin" | undefined;
}

interface response{
  status: string | number; 
  statusText: any; 
  ProxyTransId?:any;
  url: any;
  _RejMsg?:string;
  _RejCode?:string;
  errCode?:any;
  jsonError?:any;
  fileContent?:Blob;
  text: () => void; 
  json: () => void;
}



/**
 * @description: 通用请求后端的返回状态校验方法
 * @param {type} 
 * @return: 
 */
const checkStatus=(response: response)=>{
  if(response.status>=200&&response.status<300){
    return response;
  }
  const errortext = codeMessage[response.status]||response.statusText;
  notification.error({
    message:`请求错误${response.status}:${response.url}`,
    description:errortext,
  });
  const error=new Error(errortext);
  error.name=''+response.status;
  error.response=response;
  throw error;
}


const checkJson=(response: response)=>{
  if(response.fileContent instanceof Blob){
    return response;
  };
  let data=response;
  if(data.jsonError||data._RejMsg){
    let errMsg = null;
    let errCode = null;
    if (data._RejMsg){
      errCode=data._RejCode;
      errMsg=data._RejMsg;
    }else if(data.jsonError){
let tmp=data.jsonError;
if(Array.isArray(tmp)){
  tmp=data.jsonError[0];
};
    errMsg=tmp._exceptionMessage;
    errCode=tmp._exceptionCode;
  };
  notification.error({
    message:`请求错误${response.ProxyTransId}:${response.errCode}`,
    description:errMsg,
  });
  const error=new Error(errMsg);
  error.name=errCode;
  error.response=data;
  throw error;}
return data||{}
}

/*
*普通的发送后端的公共方法
*/
function requestJson(url: any,options:options):any{
options.body={
  ...options.body, 
  ProxyTransId:url,
};
const contextPath=location.pathname.match(/(\/[\W-]*)\//);
const apiUrl=(contextPath?contextPath[1]:'yansof/')+url;
const defaultOptions:options={
  credentials:'include',
  ...options,
}
if(!(defaultOptions.body instanceof FormData)){
  defaultOptions.headers={
  Accept:'application/json',
  'Content-type':'application/json,charset=utf-8',
  ...defaultOptions.headers,
};
defaultOptions.body= JSON.stringify(defaultOptions.body);

}else{
  defaultOptions.headers={
    Accept:'application/json',
    ...defaultOptions.headers,
  };
}
return fetch(apiUrl,defaultOptions).then(checkStatus).then((response )=>{
  if(response.status===204){
return response.text();
  }
    return response.json();

}).then(checkJson).catch((e:any)=>{
throw e;
})
  
}

export  {requestJson};

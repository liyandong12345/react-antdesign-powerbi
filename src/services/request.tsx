/*
 * @Author: your name
 * @Date: 2019-12-12 15:09:32
 * @LastEditTime: 2019-12-12 17:15:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ant-design-pro\src\services\request.tsx
 */
import {requestJson} from "@/utils/request"

export async function commonProxy(params: any){
    const url=params.url;
    params={body:{...params},method:'POST'};
    requestJson(url,params);
    
}
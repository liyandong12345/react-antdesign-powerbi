/*
 * @Author: your name
 * @Date: 2019-11-14 17:24:35
 * @LastEditTime: 2020-03-06 10:59:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ant-design-pro\config\router.config.ts
 */
export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        name: 'welcome',
        icon: 'smile',
        component: './Home/Welcome',
      },
      {
        path: '/testpage/test',
        name: 'testpage',
        icon: 'bug',
        component: './TestPage/TestPage',
      },
      {
        path: '/yoyobi',
        name: 'yoyobi',
        icon: 'crown',
        routes: [
          {
            path: '/yoyobi/catalog',
            name: 'catalog',
            icon: 'bars',
            component: './YoyoBi/Catalog',
          },
          {
            path: '/yoyobi/datapreparation',
            name: 'datapreparation',
            icon: 'database',
            component: './YoyoBi/DataPreparation',
          },
          {
            path: '/yoyobi/dashboard',
            name: 'dashboard',
            icon: 'dashboard',
            component: './YoyoBi/Dashboard',
          },
          {
            path: '/yoyobi/create',
            name: 'create',
            icon: 'plus-circle',
            component: './YoyoBi/Create',
          },
        ]
      },
      {
        path: '/powerbi',
        name: 'powerbi',
        icon: 'fund',
        routes: [
          {
            path: '/powerbi/profit',
            name: 'profit',
            icon: 'code',
            component: './PowerBi/Profit',
          },
          {
            path: '/powerbi/assets',
            name: 'assets',
            icon: 'reconciliation',
            component: './PowerBi/assets',
          },
          {
            path: '/powerbi/cash',
            name: 'cash',
            icon: 'dollar',
            component: './PowerBi/Cash',
          },
          {
            path: '/powerbi/budget',
            name: 'budget',
            icon: 'hourglass',
            component: './PowerBi/Budget',
          },
        ]
      },
      {
        component: './404',
      },
    ],
  },
]
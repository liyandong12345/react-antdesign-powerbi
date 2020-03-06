import { IConfig, IPlugin } from 'umi-types';
import defaultSettings from './defaultSettings'; 
import routers from './router.config'; 
import slash from 'slash2';
import webpackPlugin from './plugin.config';
const { pwa, primaryColor } = defaultSettings;

const plugins: IPlugin[] = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
        immer: true,
      },
      locale: {
        enable: true,
        default: 'zh-CN',
        baseNavigator: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        // webpackChunkName: true,
        // level: 3,
      },
      // pwa: pwa
      //   ? {
      //       workboxPluginMode: 'InjectManifest',
      //       workboxOptions: {
      //         importWorkboxFrom: 'local',
      //       },
      //     }
      //   : false,
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
];


export default {
  plugins,
  // hash: true,
  targets: {
    ie: 11,
  },
  // devtool:false,
  routes: routers,
  theme: {
    'primary-color': primaryColor,
  },

  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (
      context: {
        resourcePath: string;
      },
      _: string,
      localName: string,
    ) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map((a: string) => a.replace(/([A-Z])/g, '-$1'))
          .map((a: string) => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  chainWebpack: webpackPlugin,
  history:'hash',
  outputPath:'dist',
  publicPath: '/dist/',
  proxy: {
    '/yansof': {
      target: 'http://localhost:8888/',
      changeOrigin: true,
      pathRewrite: { '^/yansof': '' },
    },
  },
} as IConfig;

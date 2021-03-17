import { IPlugin } from '@alib/build-scripts';
import * as path from 'path';
import webpack from 'webpack';

interface IwebpackPlugin {
  ProvidePlugin?: webpack.ProvidePlugin;
}

const plugin: IPlugin = ({ onGetWebpackConfig, context }) => {
  const { webpack:builtInWebpack } = context;
  // 调用自定义修改 webpack 配置的 API
  onGetWebpackConfig((config) => {
    // 新增 webpack.ProvidePlugin
    // 通过 webpackchain api 的方式新增
    config
      .plugin('webpack.ProvidePlugin')
      .use((builtInWebpack as IwebpackPlugin).ProvidePlugin, [{ _map: ['lodash', 'map']}]);

    // 新增 json 处理规则
    config.module.rule('json')
      // 匹配 json 文件
      .test(/\.json$/)
      // 新增处理 json 文件中的 loader
      .use('json').loader(path.resolve(__dirname, './jsonLoader'));
  });
};

export default plugin;
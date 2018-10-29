import LessPlugin from '@pawjs/less/webpack';

export default class ProjectWebpack {
  constructor({ addPlugin }) {
    const options = {
      javascriptEnabled: true,
    };
    addPlugin(new LessPlugin(options));
  }
}

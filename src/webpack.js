import SassPlugin from '@pawjs/sass/webpack';

export default class ProjectWebpack {
  constructor({ addPlugin }) {
    addPlugin(new SassPlugin());
  }
}

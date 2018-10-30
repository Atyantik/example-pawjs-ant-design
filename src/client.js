import 'antd/dist/antd.less';
import './resources/css/styles.less';

export default class Client {
  loadAds() {
    setTimeout(() => {
      // eslint-disable-next-line
      if (typeof _codefund !== 'undefined' && _codefund.serve) {
        // eslint-disable-next-line
        _codefund.serve();
      }
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, 10);
  }

  apply(clientHandler) {
    clientHandler.hooks.beforeRender.tapPromise('InitAds', async () => this.loadAds());
    clientHandler.hooks.locationChange.tapPromise('ReInitAds', async () => this.loadAds());
  }
}

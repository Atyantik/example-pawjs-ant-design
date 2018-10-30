import React from 'react';
import FavIcon from './resources/img/favicon.ico';

export default class Server {
  apply(serverHandler) {
    serverHandler.hooks.beforeHtmlRender.tap('AddGoogleAnalytics', (Application) => {
      Application.htmlProps.head.push(
        <link key="favicon" rel="shortcut icon" type="image/x-icon" href={FavIcon} />,
      );
      return Application;
    });
  }
}

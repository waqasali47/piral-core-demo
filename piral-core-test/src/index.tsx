import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import {Welcome } from './welcome';
import {
  createInstance,
  useGlobalState,
  LoadingIndicatorProps,
  Piral,
  SetComponent,
  SetRoute,
} from 'piral-core';
import { availablePilets } from '../pilets';
import { createMenuApi } from 'piral-menu';
import { Home } from '../pilets/home';
import './style.scss';
import { createDashboardApi, Dashboard } from 'piral-dashboard';
const feedService = "https://feed.piral.cloud/api/v1/pilet/core-demo";

const instance = createInstance({
    availablePilets,
    plugins: [
      createMenuApi(),
    ],
    requestPilets() {
      return fetch(feedService)
      .then(res => res.json() )
      .then(res => res.items);
    },
  });

  const Loader: React.FC<LoadingIndicatorProps> = () => (
    <div className="app-center">
      Loading....
    </div>
  );

  const Menu: React.FC = () => {
    const menuItems = useGlobalState(s => s.registry.menuItems);
  
    return (
      <ul className="app-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        {Object.keys(menuItems).map(name => {
          const item = menuItems[name];
  
          if (item.settings.type === 'general') {
            const Component = item.component;
            return (
              <li key={name}>
                <Component />
              </li>
            );
          }
  
          return undefined;
        })}
        <li>
          <Link to="/sitemap">Sitemap</Link>
        </li>
      </ul>
    );
  };

  const Layout: React.FC = ({ children }) => {
    const layout = useGlobalState(s => s.app.layout);
  
    return (
      <div className="app-container">
        <div className="app-header">
          <h1>Sample Portal ({layout})</h1>
          <Menu />
        </div>
        <div className="app-content">{children}</div>
        <div className="app-footer">
          For more information or the source code check out our{' '}
          <a href="https://github.com/smapiot/piral">GitHub repository</a>.
        </div>
      </div>
    );
  };

  const app = (
    <Piral instance={instance}>
      <SetComponent name="LoadingIndicator" component={Loader} />
      <SetComponent name="Layout" component={Layout} />
      <SetRoute path="/" component={Welcome} />
    </Piral>
  );
  render(app, document.querySelector('#app'));
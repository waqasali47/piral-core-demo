import { PiletApi} from 'piral-core-test';
import * as React from 'react';
import './styles.scss';
export function setup(app: PiletApi) {
  
  app.registerMenu(() =>
    <a href="https://docs.piral.io" target="_blank">Documentation</a>
  );

  app.registerPage('/piral-core-test-pilet', () => (
    <div>
      <p>
        Hello from Pilet
      </p>
      <p className="test">Click for a notification.</p>
     
    </div>
  ));

}

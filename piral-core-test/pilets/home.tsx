import * as React from 'react';
import { Pilet, ErrorInfoProps } from 'piral-core';

export const Home: Pilet = {
  content: '',
  name: 'Example Module',
  version: '1.0.0',
  hash: '1',
  setup(piral) {
    console.log(piral);


    piral.registerMenu(
      () => (
        <a href="http://www.google.com?q=piral" target="_blank">
          Google
        </a>
      ),
      { type: 'general' },
    );

    piral.registerPage('/example1', () => (
      <div>
        <p>
          This is the first <b>example</b> page
        </p>
        <p>Click for a notification.</p>
        <ul>
          <li>
            <button >Notify me! (Default)</button>
          </li>
          <li>
            <button >
              Notify me! (Error)
            </button>
          </li>
          <li>
            <button >
              Notify me! (With Title)
            </button>
          </li>
          <li>
            <button >
              Notify me! (1s)
            </button>
          </li>
       
        </ul>
      </div>
    ));

  

  }
};
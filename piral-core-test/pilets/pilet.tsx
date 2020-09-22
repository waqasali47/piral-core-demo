import * as React from 'react';
import { Pilet, ErrorInfoProps } from 'piral-core';

export const Pilet1: Pilet = {
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
            <button onClick={() => piral.showNotification('Hello there!')}>Notify me! (Default)</button>
          </li>
          <li>
            <button onClick={() => piral.showNotification('Hello there!', { type: 'error' })}>
              Notify me! (Error)
            </button>
          </li>
          <li>
            <button onClick={() => piral.showNotification('Hello there!', { title: 'Some title' })}>
              Notify me! (With Title)
            </button>
          </li>
          <li>
            <button onClick={() => piral.showNotification('Hello there!', { autoClose: 1000, type: 'success' })}>
              Notify me! (1s)
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                piral.showNotification(
                  <span>
                    Hello there; this is <b>some longer text</b>!
                  </span>,
                  { autoClose: 1500, type: 'warning' },
                )
              }>
              Notify me! (longer, formatted text 1.5s)
            </button>
          </li>
        </ul>
      </div>
    ));

    piral.registerPage('/example2', ({ piral }) => (
      <div>
        <p>
          This is the second <b>example</b> page
        </p>
        <p>
          IF YOU ARE IN AN ADVENTUROUS MOOD TRY{' '}
          <a
            onClick={e => {
              piral.unregisterPage('/example2');
              e.preventDefault();
            }}
            href="#">
            THIS LINK
          </a>
          .
        </p>
      </div>
    ));

    piral.registerExtension('error', () => <div>Custom Error page</div>);

    piral.registerExtension('error', ({ params }) => {
      if (params.type === 'not_found') {
        return <div>The page was not found!!!</div>;
      }
      return false as any;
    });
  },
};
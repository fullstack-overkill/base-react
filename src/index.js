import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router/router'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = document.getElementById('app');

const app = ReactDOM.createRoot(root);

app.render(<Router />);

serviceWorkerRegistration.unregister();

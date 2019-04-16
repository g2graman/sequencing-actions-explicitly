import * as React from 'react';
import { render } from 'react-dom';
// import Prism from 'prismjs';
// import Prism from 'prismjs/components/prism-core';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-typescript';

import './index.css';
import Presentation from './presentation/Presentation';
import registerServiceWorker from './registerServiceWorker';

render(
  <Presentation />,
  document.getElementById('root')
);

registerServiceWorker();

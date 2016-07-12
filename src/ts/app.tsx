import '../sass/app.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './partial.tsx';

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);

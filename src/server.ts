import App from '@/app';

import IndexRoute from '@routes/index.route';

import validateEnv from '@utils/validateEnv';
import ScrollsRoute from './routes/scrolls.route';

validateEnv();

const app = new App([new IndexRoute(), new ScrollsRoute()]);

app.listen();

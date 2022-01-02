import './global.reset.scss';
import './src/style/index.scss';
import './src/js/colorMode';
import './src/js/fetch';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
} else {
  console.log('Production mode');
}

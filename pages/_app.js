import { Provider } from 'react-redux';
import store from '../redux/app/store'; // Dosya yolunu güncelledik
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

import { wrapper } from "../Redux/store";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

//Wrapped our app in next-redux wrapper
export default wrapper.withRedux(MyApp);

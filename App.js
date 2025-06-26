import { Provider } from "react-redux";
import Router from "./src/routes/Router";
import { enableScreens } from "react-native-screens";
import Store from "./src/Redux/Store";
import Toast from "react-native-toast-message";
enableScreens();

export default function App() {
  return (
    <Provider store={Store}>
      <Router />
      <Toast />
    </Provider>
  );
}

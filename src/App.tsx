// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import UserPage from "./components/UserPage";
import Store from "./redux/Store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={Store}>
      <div>
        <UserPage />
      </div>
    </Provider>
  );
}

export default App;

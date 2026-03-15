import "./App.css";
import "./login.css";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

function App() {
  return (
    <div className="container">
      <Login />
      <CreateAccount />
    </div>
  );
}

export default App;
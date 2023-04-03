import "./scss/reset.scss";
import "./scss/app.scss";
// import { Auth, Forum, Header, LoginForm, AppNavigator } from "./pages";
import { Auth, Forum, Header, Members, LoginForm, AppNavigator } from "./pages";
// import Members from "./pages/Members/Members";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <AppNavigator />
        <div className="app-content__display">
          <Routes>
            <Route path="/" element={<Auth />}>
              <Route path="/forum" element={<Forum />} />
              <Route path="/members" element={<Members />} />
            </Route>
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

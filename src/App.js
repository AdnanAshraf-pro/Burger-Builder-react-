import "./App.css";
import Layout from "./components/layouts/Layouts";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;

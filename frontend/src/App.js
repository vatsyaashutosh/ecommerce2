import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Container } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { ProductScreen } from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

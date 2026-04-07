import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Todos from './pages/Todos';

function App() {
  return (
    <Router>
      <Navbar />
      
      <div className="container mt-5" style={{ minHeight: "70vh" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todos" component={Todos} />
          <Route path="/about" component={About} />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}
export default App;
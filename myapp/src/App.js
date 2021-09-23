import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import About from "./pages/aboutme";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Footer from "./components/footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar
          bg="dark"
          variant="dark"
          sticky="top"
          expand="sm"
          collapseOnSelect
        >
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link as={Link} to="/">
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to="/Projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/Resume">
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
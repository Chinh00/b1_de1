import logo from './logo.svg';
import './App.css';
import Header from './templates/header';
import { Navbar } from './templates/navbar';
import { Banner } from './templates/banner';
import { MidNav } from './templates/midnavbar';

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div style={{ background: "#0C2883" }}>
        <Navbar />
        <Banner />
      </div>
      <MidNav />
    </div>
  );
}

export default App;

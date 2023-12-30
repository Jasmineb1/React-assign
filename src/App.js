import './App.css';
// import ClassParent from './Class.jsx';
// import Comp from './component.jsx';
// import DisplayDataComp from './cw.jsx';
// import Main from './Main.jsx';

import Header from './Header.jsx';
import Sidenav from './Sidenav.jsx';
import Footer from './Footer.jsx';
import MainContent from './Maincontent.jsx';
import './assignment.css';
function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      {/* <ClassParent/> */}
      {/* <Comp/> */}
      {/* <DisplayDataComp/> */}

      <Header title="Header"/>
      <div className= "Mid">
        <Sidenav title="Side Nav"/>
        <MainContent title="Main Content"/>
      </div>
      <Footer title="Footer"/>
    </div>
  );
}


export default App;

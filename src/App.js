/*import ClassComponent2 from "./ClassComponent2"
import ClassComponent from "./ClassComponent"
import './App.css'
function App(){
  return(
    <section>
      <p>This is about React</p>
      <h1>Hello Good Morning Everyone</h1>
      <ClassComponent/>
      <img src="https://mechomotive.com/wp-content/uploads/2021/08/react.jpg"alt=""/>
      <ClassComponent2/>
    </section>
    )
}
export default App;
import PropsExample from "./PropsExample"
function App(){
  return(
    <div>
    <h1>This is about props example</h1>
    <PropsExample name="vasavi"age="19"/>
    </div>
    )
}
export default App*/

/*import PropsExample from "./PropsExample"*/
/*import FuncPropExample from "./FuncPropExample"*/
/*import StateExample from "./StateExample"
import Events from "./Events"*/
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Navbar from "./Components/Navbar"
import NotFound from "./Components/NotFound"
function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
          </Routes>
            </BrowserRouter>
    {/*<h1>This is about props concept</h1>
       <PropsExample name="vasavi"age="19" Roll="74"/>
       <PropsExample name="tejasri"age="20" Roll="32"/>
       <PropsExample name="savithri"age="20" Roll="12"/>
       <FuncPropExample framework="React" year="2013"/>
  <StateExample/>
  <Events/>*/}
    </div>
    )
}
export default App
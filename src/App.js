import "./App.css";
import { Header }  from "./MyComponents/Header";
import { Footer }  from "./MyComponents/Footer";
import { Todo }  from "./MyComponents/Todo";

function App() {
  let TodoArr = [
    {
      sno : 1,
      title : " Going",
      desc : " Where are you going"
    },
    {
      sno : 2,
      title : "coming",
      desc : " Where are you going2"
    },
    {
      sno : 3,
      title : "Waking",
      desc : " Where are you going3"
    }
  ]
  return (
    <>
      <Header title="Todo list" searchBar={true}/>
      < Todo TodoArr={TodoArr}/>
      <Footer/>
    </>
  );
}

export default App;

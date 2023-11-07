import AppRoutes from "./AppRoutes";
import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TextBox from "./components/Texbox";
import Toggle from "./components/Toggle";
import UserList from "./components/UserList";
import Login from "./pages/Login";

//Step1 

// arrow function
// Every component name should start with a Capital Letter 
// Every compnent must have a return statement 
// inside the return we should have one root enclosing html tag
const App =(props)=>{
  const button ={
    cssClassName:"btn btn-primary",
    text:"Incrementssssss"
  }
  return(
    <div>
       <Header/>
        <AppRoutes/>
       <Footer/>
    </div>
   
  )
};
export default App;
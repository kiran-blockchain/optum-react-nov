import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TextBox from "./components/Texbox";

//Step1 

// arrow function
// Every component name should start with a Capital Letter 
// Every compnent must have a return statement 
// inside the return we should have one root enclosing html tag
const App =(props)=>{
  return(
    <div>
       <Header/>
       <div className="container mt-5">
        <Counter/>
        <TextBox/>
       </div>
       <Footer/>
    </div>
   
  )
};
export default App;
import './App.css';
import NavigationBar  from './components/navigation/NavigationBar';
// import SignUp from './components/signup/SignUp';
import CardComponent from './components/products/CardComponent';



function App() {
  return (
    <div className="App">
         <NavigationBar />
       <div className="card-components">
         <CardComponent />
       </div>
       
        {/* <SignUp /> */}
    </div>
  );
}

export default App;

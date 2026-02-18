import logo from './logo.svg';
import './App.css';

import{route,Route} from './components';
import { Home } from './components/home';
import { Blog } from './components/blog';
import { About } from './components/about';
import { General } from './components/general';
// import { Home } from './component/home';
// import { About } from './component/about';
// import { Blog } from './component/blog';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      return (
    <div className="App"> */}
      <Route>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/products" element={<Dashboard />} />
         <Route path="/productlist" element={<Productlist />} />
       <Route path="/productreview" element={<Productreview />} /> */}

        <Route path='general' element = {<General />}/>
        


        {/* <Route path= "/products"element={<Dashboard/>}>
        <Route path='productlist' element={<Productlist/>}/>
        <Route path='productreview' element={<Productreview/>}/>

        </Route>
         */}
      </Route>

      <a href='/about'>about</a> <br /> 
      <a href='/blog'>blog</a> <br />
      <a href='/home'>home</a>  

      {/* <link to="about">about</link> */}
    </div>
  );
}




//     <Usercard  name={'john doe'} email= {'john.doe@example.com'} /> */
//     <Usercard name={'Gomathi'} email= {'gomathigomathi1030@gmail.com'} />
//     <Usercard name={'Gomathi'} email= {'hasini@gmail.com'}/>
//     <Usercard name={'Gomz'} email= {'gomz1030@gmail.com'}/> */ 



//     </div>
//   );
// }

export default App;

  


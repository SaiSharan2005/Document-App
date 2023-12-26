import './App.css';
// import Navabar from './components/Navabar';
import DisplayAllDocs  from './components/DisplayAllDocs';
import DisplayContent from './components/DisplayContent';
import { createBrowserRouter,RouterProvider,} from 'react-router-dom';
import ShowDoc from './components/ShowDoc';
function App() {
  const myrouter=createBrowserRouter([
    {path:"/",element:<DisplayAllDocs/>},
    {path:"/Document",element:<DisplayContent/>},
    {path:"/ShowDocument/:id",element:<ShowDoc/>}
    
  ])
  return (
    <div className="App">
      <RouterProvider router={myrouter}/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router';
import outer from './Routes/Router';

function App() {
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

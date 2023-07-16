/*import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from './pages/Home/HomePage';
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";
import { HeaderPartial } from './partials/HeaderPartial/HeaderPartial';
import { AppContext } from './store/AppContext';

function App() {
   return (
  <BrowserRouter>
    <div className="App">
      <AppContext> 
       <HeaderPartial />
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/minhas-pastas" element={<MinhasPastasPage/>}   />
       </Routes>
       </AppContext>
    </div>
  </BrowserRouter>
  );
}

export default App;*/

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
/* React Rotas
https://reactrouter.com/en/main/components/link
*/

import { HomePage } from "./pages/Home/HomePage";
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";
import { HeaderPartial } from './partials/HeaderPartial/HeaderPartial';
import { AppContext } from "./store/AppContext";

const initialState = {
  actionPinId: null,
  mode: null,
  folders: [],
  type: null,
  pins: []
};

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>
          <HeaderPartial />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/minhas-pastas" element={<MinhasPastasPage />}/>
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;


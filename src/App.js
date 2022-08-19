import DefaultLayout from './Layout'

import MainPage from './components/Pages/MainPage'
import GamePage from './components/Pages/GamePage'

import games from "./data"

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './assets/sass/main.sass'

function App() {
  return (
    <BrowserRouter basename='play-space'>
      <Routes>
        <Route path='/'>

          <Route index element={
            <DefaultLayout className='main_page'>
              <MainPage games={games}/>
            </DefaultLayout>}>
          </Route>

          <Route path=':game_url' element={
            <DefaultLayout className='game_page'>
              <GamePage/>
            </DefaultLayout>}>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
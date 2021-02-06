import React from 'react'
import { Provider } from "react-redux";
import store from './store'
import './App.css';

import Sidebar from './components/Sidebar'
import Video from './components/Video'
import Feed from './components/Feed'
import Carshop from './components/CarShop'

const App = () => {
  return (
    <div>
      <Provider store={ store }>
          <div className="img">
          <Video />
           <Sidebar />
           <Feed/>
           <Carshop />
           </div>
           
      </Provider>
    </div>
  )
}

export default App

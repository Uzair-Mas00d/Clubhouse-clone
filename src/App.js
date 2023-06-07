import './App.css';
import Welcome from './Pages/Welcome';
import PlanLayout from './Pages/Layouts/PlanLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PhoneConformation from './Pages/PhoneConformation';
import CodeConfirm from './Pages/CodeConfirm';
import AllowNotification from './Pages/AllowNotification';
import AppLayout from './Pages/Layouts/AppLayout';
import Home from './Pages/Home';
import Explore from './Pages/Explore'
import Profile from './Pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route exact path='/' Component={Welcome} />
          <Route exact path='/invite' Component={PhoneConformation} />
          <Route exact path='/code_confirm' Component={CodeConfirm} />
          <Route exact path='/allow_notification' Component={AllowNotification} />
        </Routes>
      </PlanLayout>

      <AppLayout>
        <Routes>
          <Route exact path='/home' Component={()=> <Home />} />
          <Route exact path='/explore' Component={Explore} />
          <Route exact path='/profile' Component={Profile} />
        </Routes>
      </AppLayout>
    </BrowserRouter>    
  );
}

export default App;
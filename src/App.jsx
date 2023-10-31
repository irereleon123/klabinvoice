import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './Components/SideBar/SideBar';
import Home from './Home';
import Invoices from './Invoices';

function App() {
  return (
    <main>
      <Sidebar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/invoices" component={Invoices} />
          <Route path="*" component={() => <div>Not Found</div>} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;

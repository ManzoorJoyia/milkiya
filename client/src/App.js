import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import ArticleList from './components/articles/ArticleList';
import ArticleInfo from './components/articles/ArticleInfo';
import ArticleAdd from './components/articles/ArticleAdd';
import ArticleEdit from './components/articles/ArticleEdit';

function App() {
  return (
    <div className="App">     
      <Router>
        <Navigation />
        <div className="col-md-12">
          <Main />
        </div>
      </Router>
    </div>
  );
}

function Navigation() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className='container'>
        <ul className="navbar-nav mr-auto">
      
         <h1 style={{color:'wheat'}}>welcome to Milkyia Dashboard</h1>
        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return(
    <Switch>
     
      <Route exact path="/" component={ArticleList} />
      <Route exact path="/articles/new" component={ArticleAdd} />
      <Route exact path="/articles/:_id" component={ArticleInfo} />
      <Route exact path="/articles/edit/:_id" component={ArticleEdit} />
    </Switch>
  );
}

export default App;

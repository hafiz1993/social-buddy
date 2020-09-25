
import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, BrowserRouter
} from "react-router-dom";
import { makeStyles, Container, Grid, CircularProgress } from '@material-ui/core';
import PostDetails from './Components/PostDetails/PostDetails';
import { Home } from '@material-ui/icons';
import NavList from './Components/NavList/NavList';






const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20
  },
  paper: {
    padding: '5px 10px',
    textAlign: 'left',
    marginBottom: 7,
    maxHeight: 520,
    overflow: 'auto',
    overflowStyle: 'none',
    scrollbar: 'none'
  },
  img:{
    borderRadius:'50%',
    margin:'8px 8px',
    '&:hover': {
      height: '80',
      transitionDuration: '1s'
    },
  },
}));

function App() {

  const [allPost, setAllPost] = useState([])
  const [images, setImages] = useState([]) // setting random image

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/`;
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPost(data))
      
  }, []);
  useEffect(() => {
    const commentsLength = 100;
    const image_url = `https://randomuser.me/api/?results=${commentsLength}&inc=picture`;
    fetch(image_url)
      .then(res => res.json())
      .then(data => setImages(data.results))
    
  }, []);

  images.map((each, index) => allPost[index].image = each.picture.medium)
  const moreFriends = images.slice(0,90);
  
  const classes = useStyles();
  return (
    <div className="">
      {
        allPost.length>10 ?
        <BrowserRouter>
        <Router>
          <Header></Header>
            <Container>
              <div className={classes.root} >
                <Grid container spacing={3}>

                 
                  <Grid item xs={3}>
                    <div className={classes.paper}>
                      <NavList data={allPost} />
                    </div>
                  </Grid>

                   
                    <Grid item xs={6}>
                    <Switch>
                    
                      
                      <Route exact path="/"> <div className={classes.paper}><Home/></div></Route>

                      
        
                      <Route path="/post/:id" ><div className={classes.paper}><PostDetails/></div></Route>
                      
                      <Route path="*"><div className={classes.paper}> <h1>404 Post Not found</h1></div></Route>
                    </Switch>
                    </Grid>

            
                  <Grid item xs={3}>
                    <h4>See Your Buddy</h4>
                    {
                      moreFriends.map((each,idx) => <img src={each.picture.medium} key={idx} className={classes.img} height="70" alt=""/>)
                    }
                  </Grid>
                </Grid>
              </div>
            </Container>
            </Router>
          </BrowserRouter>
          : <div style={{textAlign:'center'}}><CircularProgress/></div>
      }
          
    </div>
  );
}

export default App;

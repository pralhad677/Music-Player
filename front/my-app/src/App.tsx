import React from 'react';
import './App.css';  
import ErrorBoundary from './ErrorBoundary/Index'
import {Switch,Link,Route} from 'react-router-dom'
import SignUp from './Component/Signup/Index'
import Welcome from './Component/Welcome/Index'
import { Typography } from '@material-ui/core' 
import NavBar from './Component/NavBar/Index'
import { ThemeProvider,Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import  Portal  from './Component/Portal/Index'
import  Prac  from './Component/Prac/Index'
// import Portal from './Component/Portal/INdex'
interface Props{  
  
}

const theme:Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffcdd2',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    
  },
});

let App:React.FC<Props>=()=> {
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      
    
      
         
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Welcome />
            
          </Route>
          <Route path="/prac">
              <Prac />
          </Route>
          
          <Route path="*">
          <h1>Not Found</h1>
          </Route> 
        </Switch>
    </ThemeProvider>,
     
    </div>
  );
}

// export default App;


export default function appWithErrorBoundary(props:Props){
  return (
    <ErrorBoundary >
      {/* <CustomContext> */}

        <App {...props}/>
      {/* </CustomContext> */}
    </ErrorBoundary>
  
  )
}

import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react'
import Footer from './ui/footer';
import Header from './ui/header';
import theme from './ui/theme'
import LandingPage from './ui/landingPage'
import Services from './ui/services'
import CustomSoftware from './ui/customSoftware'
import MobileApps from './ui/mobileApps';
import Website from './ui/websites';
import Revotution from './ui/revolution';
import Contact from './ui/contact';
import About from './ui/about';
function App() {
  const [value, setValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  return (
    
    <ThemeProvider theme={theme}>


      <BrowserRouter>
      <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      <Switch>
        <Route exact path="/" render={props=>(<LandingPage {...props}
         setValue={setValue} setSelectedIndex={setSelectedIndex}/>)}/>

        <Route exact path="/services" component={Services}/>
        <Route exact path="/customsoftware" component={CustomSoftware}/>
        <Route exact path="/mobileapps" component={MobileApps}/>
        <Route exact path="/websites" component={Website}/>

        <Route exact path="/revolution" component={Revotution}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/estimate" component={()=><div>Free estimate</div>}/>
      </Switch>
      <Footer/>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;

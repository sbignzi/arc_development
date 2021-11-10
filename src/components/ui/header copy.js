import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Button } from "@material-ui/core";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from "@material-ui/styles";
import {Link} from "react-router-dom"
import logo from "../../assets/logo.svg"
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import theme from './theme'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyle = makeStyles(theme=>({

    root:{
        color:'white'
    },
    toolbarMargin:{
       ...theme.mixins.toolbar, marginTop:'3.2em',
       [ theme.breakpoints.down('md')]:{
        marginTop:"2.5em"
       },
       [ theme.breakpoints.down('sm')]:{
        marginTop:"1.5em",
      },
       [ theme.breakpoints.down('xs')]:{
        marginTop:"1.8em",
      }
    },

    toolbar:{
        padding:0
    },

    logo:{
        height:"8em",
       [ theme.breakpoints.down('md')]:{
        height:"7em"
       },
       [ theme.breakpoints.down('sm')]:{
        height:"6em",
      }

    },

    tabContainer:{
        marginLeft:'auto',
        backgroundColor:theme.palette.common.blue +'!important'
    },
    tab:{
        fontFamily:"Raleway",
        textTransform:"none",
        fontWeight:700,
        fontSize:"1rem",
        minWidth: 10,
        marginLeft:"2rem",
        backgroundColor:theme.palette.common.blue +'!important'
    },
    button:{
        marginRight:"2rem",
        // marginLeft:"2rem",
        backgroundColor:theme.palette.common.orange,
        borderRadius:'50px',
        fontFamily:"Pacifico",
        fontSize:"1rem",
        textTransform:"none",
        height:"45px",
        color:"white"
    },

    buttonLogo:{
        padding:0
    },

    menu:{
        backgroundColor:theme.palette.common.blue,
        color:"white",
        boxShadow: "none",
        borderRadius:0,
        marginTop:'3rem'
        
    },

    menuItem:{
        opacity:0.7,
        '&:hover':{
            opacity:1
        }
    },

    menuIconContainer:{
        marginRight:'0.3rem',
        marginLeft:'auto',
        // width:'2rem',
        // hight:'2rem',
        '&:hover':{
            backgroundColor:'transparent'

        }
    },

    menuIcon:{
        height:'3rem',
        width:'3rem'
    },

    drawer:{
        width:"262px",
        backgroundColor:theme.palette.common.blue,
        // position:"relative",
        // zIndex:1,
        [ theme.breakpoints.down('md')]:{
            marginTop:"6em"
           },
           [ theme.breakpoints.down('sm')]:{
            marginTop:"5em",
          },
           [ theme.breakpoints.down('xs')]:{
            marginTop:"5em",
    }},

    list:{
        // color:'white',
        // opacity:'0.7',
       
    },
    listItem:{
        color:'white',
        padding:'0 !important'
    },

    listIcon:{
        color:'white',
        opacity:'0.7',
        '&:hover':{
            opacity:'1'
        }

    },

    listText:{
        color:'white',
        opacity:'0.7',
    },

    buttonListItem:{
        textAlign:"center",
        // marginLeft:"2rem",
        backgroundColor:theme.palette.common.orange,
        fontFamily:"Pacifico !important",
        color:'white',
        pading:0
    },


    appbar:{
        zIndex:theme.zIndex.modal+1
    },
    // test:{
    //     "&.Mui-selected":{"&:hover":{backgroundColor:'red !important'}
    //     }

    // }

    test:{
        "&.Mui-selected":{
            opacity:'1 !important',
            // backgroundColor:'red !important'
            
        }}

})
)
function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  
  export default function Header(props){
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        // {console.log('event', event)}
      };

    const classes = useStyle(theme)

    React.useEffect(()=>{

        switch(window.location.pathname){
            case "/":
                if (value !== 0){
                    setValue(0)
                }break
            case "/services":
                if (value !== 1){
                    setValue(1)
                }break
            case "/customsoftware":
                if (value !== 1){
                    setValue(1)
                setSelectedIndex(0)
                }break
            case "/mobileapps":
                if (value !== 1){
                    setValue(1)
                setSelectedIndex(1)
                }break
            case "/websites":
                if (value !== 1){
                    setValue(1)
                setSelectedIndex(2)
                }break




            case "/revolution":
                if (value !== 2){
                    setValue(2)
                }break
            case "/about":
                if (value !== 3){
                    setValue(3)
                }break
            case "/contact":
                if (value !== 4){
                    setValue(4)
                }break
            case "/estimate":
            if (value !== 5){
                setValue(5)
            }break
    
            default:
                break
        }
    })

    
  
    const options = [
        // {name:'Services',link:'/services'},
        {name:'Custom Software',link:'/customsoftware'},
        {name:'Mobile Apps',link:'/mobileapps'},
        {name:'Website Development',link:'/websites'}
      ];

      const [anchorEl, setAnchorEl] = React.useState(null);
      const [selectedIndex, setSelectedIndex] = React.useState(1);
      const [openDrawer, setOpenDrawer] = React.useState(false);
      const open = Boolean(anchorEl);
      const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const handleDrawerOpen = () => {
        setOpenDrawer(!openDrawer)
      }
      const handleDrawerClose = () => {
        setOpenDrawer(false)
      }

      const [openCollapcibale, setOpenCollapcibale] = React.useState(true);

      const handleClick = () => {
        setOpenCollapcibale(!openCollapcibale);
      };
    //   const matches = useMediaQuery(theme.breakpoints.up('md'));
      const matches =  useMediaQuery('(min-width:1230px)');;

      const tabs = (
              <React.Fragment>
              <Tabs indicatorColor = 'primary' className={classes.tabContainer} value={value} onChange={handleChange} aria-label="basic tabs example">
              {/* <Tabs className={classes.tabContainer} value={value} onChange={handleChange} aria-label="basic tabs example"> */}
                  {/* {console.log('value', value)} */}
                  <Tab className={classes.tab} component={Link} to="/" label="Home"/>
  
                  <Tab  
                  aria-controls="lock-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onMouseOver={handleClickListItem} 
                  className={classes.tab} component={Link} to="/services" label="Services" />
  
                  <Tab className={classes.tab} component={Link} to="/revolution" label="The revolution"/>
                  <Tab className={classes.tab} component={Link} to="/about" label="About us"/>
                  <Tab className={classes.tab} component={Link} to="/contact" label="Contact us"/>
                  <Tab className={classes.tab} label=""/>
              </Tabs>
              <Button className={classes.button} component={Link} to="/estimate"  variant="contained" onClick={()=>{setValue(5)}}>Free estimate</Button>
              </React.Fragment>
      )


      const drawer = (
        <React.Fragment>
            <IconButton
            classes={{root:classes.menuIconContainer}}
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            // sx={{ ...(open && { display: 'none' }) }}
        >
            <MenuIcon  className= {classes.menuIcon}/>
        </IconButton>

            <Drawer
            classes={{paper:classes.drawer}}
            // anchor={anchor}
            open={openDrawer}
            onClose={handleDrawerClose}
            >
            {/* {list(anchor)} */}

            <List className={classes.list}>


        <ListItem classes={{root:classes.listItem}} selected = {true} className={classes.test}>
        <ListItemButton component={Link} to='/' >
            <ListItemIcon>
                <InboxIcon className={classes.listIcon}/>
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Home" onClick={()=>{handleDrawerClose(); setValue(0)}}/>
        </ListItemButton>
        </ListItem>

        <ListItem  selected = {true}>
        <ListItemButton component={Link} to='/' >
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Home" onClick={()=>{handleDrawerClose(); setValue(0)}}/>
        </ListItemButton>
        </ListItem>
        {/* <ListItemButton selected component={Link} to='/' disablePadding >
            <ListItemIcon>
                <InboxIcon className={classes.listIcon}/>
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Home" onClick={()=>{handleDrawerClose(); setValue(0)}}/>
        </ListItemButton> */}
            


        {/* <ListItem classes={{root:classes.listItem}} selected = {true} className={classes.test}>
            <ListItemButton>
            <ListItemIcon>
                <DraftsIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Services" />
            </ListItemButton>
        </ListItem> */}


        <ListItem classes={{root:classes.listItem}} selected = {true} className={classes.test} >
        <ListItemButton selected={true} onClick={handleClick} component={Link} to='/services'>
        <ListItemIcon>
          <InboxIcon className={classes.listIcon}/>
        </ListItemIcon>
        <ListItemText className={classes.listText} primary="Services" />
        {openCollapcibale ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      </ListItem>
      <Collapse in={openCollapcibale} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton component={Link} to='/customSoftware' sx={{ pl: 4 }} onClick={handleDrawerClose}>
            <ListItemIcon>
              <StarBorder className={classes.listIcon}/>
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Custom Software" />
          </ListItemButton>
          <ListItemButton component={Link} to='/mobileapps' sx={{ pl: 4 }} onClick={handleDrawerClose}>
            <ListItemIcon>
              <StarBorder className={classes.listIcon}/>
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Mobile Apps" />
          </ListItemButton>
          <ListItemButton component={Link} to='/websites' sx={{ pl: 4 }} onClick={handleDrawerClose}>
            <ListItemIcon>
              <StarBorder className={classes.listIcon}/>
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="Website Development" />
          </ListItemButton>
        </List>
      </Collapse>





      <ListItem classes={{root:classes.listItem}}> 
        <ListItemButton component={Link} to='/revolution' onClick={handleDrawerClose} >
            <ListItemIcon>
                <DraftsIcon  className={classes.listIcon}/>
            </ListItemIcon>
            <ListItemText  className={classes.listText} primary="The Revolution" />
        </ListItemButton>
        </ListItem>
        {/* <ListItemButton component={Link} to='/revolution' onClick={handleDrawerClose} >
            <ListItemIcon>
                <DraftsIcon className={classes.listIcon} />
            </ListItemIcon>
            <ListItemText className={classes.listText} primary="The Revolution" />
        </ListItemButton> */}
            
        <ListItem classes={{root:classes.listItem}}>  
        <ListItemButton component={Link} to='/about' onClick={handleDrawerClose}>
        <ListItemIcon>
            <DraftsIcon className={classes.listIcon} />
        </ListItemIcon>
        <ListItemText className={classes.listText} primary="About Us" />
        </ListItemButton>
        </ListItem>


        <ListItem classes={{root:classes.listItem}}>
        <ListItemButton component={Link} to='/contact' onClick={handleDrawerClose}>
        <ListItemIcon>
            <DraftsIcon className={classes.listIcon} />
        </ListItemIcon>
        <ListItemText className={classes.listText} primary="Contact Us" />
        </ListItemButton>
        </ListItem>
            
        {/* <ListItem classes={{root:classes.listItem}} selected={true}> 
        <ListItemButton component={Link} to='/contact' onClick={handleDrawerClose}>
        <ListItemIcon>
            <DraftsIcon className={classes.listIcon} />
        </ListItemIcon>
        <ListItemText className={classes.listText} primary="Contact Us" />
        </ListItemButton>
        </ListItem> */}
           
        <ListItem classes={{root:classes.listItem}} component={Link} to='/estimate' onClick={handleDrawerClose}>
        <ListItemText className={classes.buttonListItem} primary="Free Estimate" />
            
        </ListItem>

             
            </List>


            </Drawer>
        </React.Fragment>
      )


    return (
        <React.Fragment>


            <ElevationScroll {...props}>
    
            <AppBar className={classes.appbar} position='fixed'>
            
            <Toolbar className={classes.toolbar}>
            {/* <Typography variant="h4" className={classes.root}>
                Arc Development
          </Typography> */}
          <Button className={classes.buttonLogo} component={Link} to="/" onClick={()=>{setValue(0)}}>
            <img className={classes.logo} component={Link} to="/" alt="company logo" src={logo}/>
          </Button>

            { matches ? tabs:drawer }
            {/* { drawer } */}
            </Toolbar>

            <Menu
                classes={{paper: classes.menu}}
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                
            >
                {options.map((option, index) => (
                <MenuItem
                    className = {classes.menuItem}
                    key={option.naùe}
                    component = {Link}
                    to={option.link}
                    // disabled={index === 0}
                    selected={index === selectedIndex && value ===1}
                    onClick={(event) => handleMenuItemClick(event, index)}
                >
                    {option.name}
                </MenuItem>
                ))}
            </Menu>

            </AppBar>
    
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </React.Fragment>
    );
}
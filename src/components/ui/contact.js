import React from 'react';
import Lottie from 'react-lottie'
import {makeStyles} from '@material-ui/core/styles'
import animationData from '../../animations/landinganimation/data'
import { TramRounded } from '@material-ui/icons';
import { Button, TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import BottonArrow from './ButtonArrow'
import customSoftwareIcon from '../../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../../assets/mobileIcon.svg'
import websiteIcon from '../../assets/websiteIcon.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import revolutionBackground from '../../assets/repeatingBackground.svg'
import inofoBackground from '../../assets/infoBackground.svg'
import background from '../../assets/background.jpg'
import backgroundMobile from '../../assets/mobileBackground.jpg'
import phoneIcon from '../../assets/phone.svg'
import emailIcon from '../../assets/email.svg'
import airplane from '../../assets/send.svg'
import theme from './theme'
import Dialog from '@mui/material/Dialog';
const useStyles = makeStyles(theme =>({
    Typography:{
        fontSize:'2.5rem',
        fontWeight:'700',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        textAlign:'center',
        marginTop:'2rem',
        // marginBottom:'1rem',
        // maxWidth:'600px',
        minWidth:'342px',
        [theme.breakpoints.down('md')]:{
            fontSize:'2rem',
        },
        // [theme.breakpoints.up('lg')]:{
        //     fontSize:'4rem',
        // }
    },

    freeEstimate:{
        backgroundColor:theme.palette.common.orange,
        borderRadius:50,
        fontFamily:'Pacifico',
        textTransform:'none',
        color:'white',
        fontSize:'1.1rem',
        '&:hover':{
            backgroundColor:theme.palette.secondary.light,
        }
    },

    learnMore:{
        fontFamily:'Raleway',
        fontWeight:'bold',
        textTransform:'none',
        borderRadius:50,
        color:theme.palette.common.blue,
        borderWidth: "2px",
        lineHeight: '1.2',
        fontSize:'1.1rem',
        marginLeft:'2rem',
        '&:hover':{
            backgroundColor:'white',
        }
    },
    learnMoreContent:{
        fontFamily:'Raleway',
        fontWeight:'bold',
        textTransform:'none',
        borderRadius:50,
        color:theme.palette.common.blue,
        borderWidth: "2px",
        lineHeight: '1',
        fontSize:'1.1rem',
        marginLeft:'2rem',
        '&:hover':{
            backgroundColor:'white',
        }
    },

    titleContent:{

        fontSize:'1.9rem',
        fontWeight:'bold',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        // textAlign:'center',
        marginTop:'2rem',
        // marginBottom:'1rem',
        maxWidth:'600px',
        
    },
    Revolutiontitle:{
        fontSize:'1.9rem',
        // fontWeight:'bold',
        color:theme.palette.common.blue,
        fontFamily:'Pacifico',
        // textAlign:'center',
        // marginTop:'2rem',
        // marginBottom:'1rem',
        // maxWidth:'600px',

    },
    callActiontitle:{
        fontSize:'1.5rem',
        fontWeight:'bold',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        // textAlign:'center',
        // marginTop:'2rem',
        // marginBottom:'1rem',
        // maxWidth:'600px',

    },

    subtitleContent1:{

        fontSize:'1.25rem',
        // fontWeight:'bold',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        // textAlign:'center',
        
       marginBottom:'2rem', // marginBottom:'1rem',
        maxWidth:'300',
        color:'#868686'
        
    },
    subtitleContent2:{

        fontSize:'1.25rem',
        // fontWeight:'bold',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        // textAlign:'center',
        // marginTop:'2rem',
        marginBottom:'0.5rem',
        maxWidth:'300',
        color:'#868686'
        
    },

    learnMoreContent:{
        fontFamily:'Raleway',
        fontWeight:'bold',
        textTransform:'none',
        borderRadius:50,
        color:theme.palette.common.blue,
        borderWidth: "2px",
        lineHeight: '1.2',
        fontSize:'1.1rem',
        marginBottom:'2rem',
        '&:hover':{
            backgroundColor:'white',
        }
    },
    infolearnMore:{
        fontFamily:'Raleway',
        fontWeight:'bold',
        textTransform:'none',
        borderRadius:50,
        color:'white',
        borderWidth: "2px",
        lineHeight: '0.5',
        fontSize:'0.5rem',
        marginBottom:'2rem',
        marginTop:'0.5rem',
        '&:hover':{
            backgroundColor:'transparent',
        }
    },

    infotitle:{
        fontFamily:'Raleway',
        fontWeight:'bold',
        textTransform:'none',
        borderRadius:50,
        color:'white',
        borderWidth: "2px",
        lineHeight: '1.2',
        fontSize:'1.1rem',
    },
    infosubtitle:{
        fontFamily:'Raleway',
        // fontWeight:'bold',
        textTransform:'none',
        borderRadius:50,
        color:'white',
        borderWidth: "2px",
        lineHeight: '1.2',
        fontSize:'0.7rem',
    },

    animation:{
        marginLeft:'10%',
        marginTop:'2rem !important'
    },

    specialText:{
        fontFamily:'Pacifico',
        color:theme.palette.common.orange
    },

    icon:{

        marginLeft:'2rem'
    },

    serviceLeft:{
        marginTop:'2rem',
        marginLeft:'2rem',
        // maxWidth:'532px'
    },
    serviceLeftMobile:{
        marginTop:'2rem',
        textAlign:'center'
        // marginLeft:'2rem',
        // maxWidth:'532px'
    },
    serviceRight:{
        marginTop:'2rem',
        marginRight:'2rem',
        // maxWidth:'532px'
    },
    serviceRightMobile:{
        marginTop:'2rem',
        textAlign:'center',
    
        // marginRight:'2rem',
        // maxWidth:'532px'
    },

    paragraph:{

        fontSize:'1.25rem',
        // fontWeight:'bold',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        // marginLeft:'2.5rem',
        // textAlign:'center',
        
    //    marginBottom:'2rem', // marginBottom:'1rem',
        maxWidth:'300',
        // color:'#868686',

        [theme.breakpoints.down('md')]:{


                fontSize:'1rem',
                marginLeft:0,
                textAlign:'center',
                // marginLeft:'2rem',
                // marginRight:'2rem',
            
        }
        
    },
    message:{
        border:`2px solid ${theme.palette.common.blue}`,
        marginTop:'5em',
        borderRadius:5
    },

    test:{
        "&.MuiInput-underline":{
                    "&:before":{
                       borderBottom:`2px solid ${theme.palette.common.blue}` 
                    }
                }},

    test3:{
        "&.MuiInputLabel-root":{
            color:'red',
        }
    },

    test2:{
        "&.MuiInputBase-input":{
            border:`2px solid ${theme.palette.common.blue}`,
            color:'red'

        }
    }           

}))


export default function LandinPage(){
    const classes = useStyles(theme);
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXS = useMediaQuery(theme.breakpoints.up('xs'));
    const matches2 =  useMediaQuery('(min-width:923px)');
    const matches3 =  useMediaQuery('(min-width:728px)');
    const [open, setOpen] = React.useState(false)
    const defaultOptions = {
        loop: true,
        autoplay:true,
        animationData: animationData,
        rendererSettings:{
            preserveAspectRatio:'xMidYMid slice'
        }

    }

    return (
        <React.Fragment>
            {/* -----Hero Bock----- */}
        <Grid container direction={matchesMD ?'column':'row'} >
        {/* <Grid container direction='column' > */}
            <Grid item container alignItems='center' direction='column' sm={matchesMD ?12:4}>   
            {/* <Grid item container alignItems='center' direction='column' sm>    */}
                <Typography className={classes.Typography}>
                    Contact Us
                </Typography>
                <Typography className={classes.paragraph} style={{marginBottom:'2em'}}>
                    We're waiting.
                </Typography>
                <Grid item>
                <Grid item container className={classes.paragraph}>
                    <img alt='phone' src={phoneIcon} style={{marginRight:'0.5em', height:'1rem'}}/>
                    <Typography >
                        (555) 555-5555
                    </Typography>
                </Grid>  
                </Grid>  
                <Grid item>
                <Grid item container className={classes.paragraph}>
                    <img alt='email' src={emailIcon} style={{marginRight:'0.5em', height:'0.7rem', paddingTop:'0.5rem'}}/>
                    <Typography >
                    sbibot@gmail.com
                    </Typography>
                </Grid>  
                </Grid>  
                <Grid item style={{marginBottom:'0.5em'}} >
                    <TextField label='Name' id='name' className={classes.test3} style={{width:'15em'}}></TextField>
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                    <TextField label='Email' id='email' className={classes.tes2} style={{width:'15em'}}></TextField>
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                    <TextField label='Phone' id='phone' style={{width:'15em'}}></TextField>
                </Grid>
                <Grid  item style={{marginBottom:'2rem'}} className={classes.message}>
                    <TextField InputProps={{disableUnderline:true}} multiline rows={10}  id='message' style={{width:'15em'}}></TextField>
                </Grid>

                <Grid item style={{marginBottom:'5rem'}}>
                    <Button className={classes.freeEstimate} onClick={()=>{setOpen(true)}}>Send message
                        <img alt='send' src={airplane}/>
                    </Button>
                </Grid>
                 

            </Grid>



            {/* Call to action Block */}
            


            <Grid item sm={matchesMD ?12:8}>
            {/* <Grid item sm> */}
                <Grid item container alignItems='center' style={{height:'60em', backgroundImage:matchesSM?`url(${backgroundMobile})`:`url(${background})`,backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}} >
                    <Grid item container direction={matchesMD ? 'column':'row'} alignItems={matchesMD ?'center':undefined} >
                           <Grid sm item style={{marginLeft:matchesMD ?'0':'2rem', textAlign:matchesMD ?'center':'inherit', maxWidth:'30em'}} alignItems={matchesMD ?'center':undefined}>
                            <Typography className={classes.callActiontitle}>
                              Simple Sofltware.Revolutionary Results
                            </Typography>
                            <Typography className={classes.infosubtitle}>
                              Take advantage of the 21st century
                            </Typography>

                            <Button className={classes.infolearnMore} variant="outlined" color='inherit'> <span style = {{ marginRight:'0.2rem'}}>Learn More</span> <BottonArrow width={'0.5rem'} height={'0.5rem'} fill='white'/></Button>
                        

                            </Grid> 

                             <Grid sm item style={{textAlign:'center', marginRight:matchesMD ?'0':'2rem'}}> 

                            <Button className={classes.freeEstimate} variant="outlined" color='white'> <span style = {{ marginRight:'0.2rem'}}>Free estimate</span> <BottonArrow width={'0.5rem'} height={'0.5rem'} fill='white'/></Button>


                            

                           
                           </Grid> 
                    </Grid> 
                 {/* <div style={{backgroundImage:matchesSM?`url(${backgroundMobile})`:`url(${background})`, height:'100%', width:'100%', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}></div> */}
           
                </Grid> 
            </Grid>
           
        </Grid>
        <Dialog
        open={open}
        onClose={()=>{setOpen(false)}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{zIndex:'1302'}}
      >
          <Grid item container alignItems='center' direction='column' sm>   
            {/* <Grid item container alignItems='center' direction='column' sm>    */}
                <Typography className={classes.Typography}>
                    Confirmation
                </Typography>
                
                 
                <Grid item style={{marginBottom:'0.5em'}} >
                    <TextField label='Name' id='name' className={classes.test3}></TextField>
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                    <TextField label='Email' id='email' className={classes.tes2}></TextField>
                </Grid>
                <Grid item style={{marginBottom:'0.5em'}}>
                    <TextField label='Phone' id='phone'></TextField>
                </Grid>
                <Grid  item style={{marginBottom:'2rem'}} className={classes.message}>
                    <TextField InputProps={{disableUnderline:true}} multiline rows={10}  id='message'></TextField>
                </Grid>

                <Grid item style={{marginBottom:'5rem'}}>
                    <Grid item container direction={matchesMD ?'column':'row'} >
                    <Button style={{color:theme.palette.common.blue}} onClick={()=>{setOpen(false)}}>Cancel
                        
                    </Button>
                    <Button className={classes.freeEstimate} onClick={()=>{setOpen(false)}}>Send message
                        <img alt='send' src={airplane}/>
                    </Button>
                    </Grid>
                </Grid>
                 

            </Grid>
      </Dialog>
        </React.Fragment>


    )
}
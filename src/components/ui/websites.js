import React from 'react'
import { makeStyles } from '@material-ui/styles'
import theme from './theme'
import { Button, IconButton } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import { Hidden } from '@material-ui/core';
import { textAlign } from '@mui/system';
import lightbulb from '../../assets/bulb.svg'
import cash from '../../assets/cash.svg'
import stopwatch from '../../assets/stopwatch.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import integrationAnimation from '../../animations/integrationAnimation/data.json'
import roots from '../../assets/root.svg'
import Lottie from 'react-lottie'
import BottonArrow from './ButtonArrow'
import background from '../../assets/background.jpg'
import backgroundMobile from '../../assets/mobileBackground.jpg'
import swiss from '../../assets/swissKnife.svg'
import access from '../../assets/extendAccess.svg'
import engagement from '../../assets/increaseEngagement.svg'
import analytics from '../../assets/analytics.svg'
import seo from '../../assets/seo.svg'
import outreach from '../../assets/outreach.svg'
import ecommerce from '../../assets/ecommerce.svg'
import {Link} from "react-router-dom"

// import IconButton from '@material-ui/core/IconButton';

const useStyle = makeStyles(theme => ({
    Typography:{
        fontSize:'2.3rem',
        fontWeight:'700',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        
        marginTop:'1rem',
        // marginBottom:'1rem',
        marginLeft:'2.5rem',
        // maxWidth:'600px',
        minWidth:'342px',
        [theme.breakpoints.down('md')]:{
            fontSize:'2rem',
            marginLeft:0,
            textAlign:'center',
            // marginTop:'0rem',
        },
        // [theme.breakpoints.up('lg')]:{
        //     fontSize:'4rem',
        // }
    },
    Title:{
        fontSize:'2.3rem',
        fontWeight:'700',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        
        marginTop:'1rem',
        // marginBottom:'1rem',
        marginLeft:'2.5rem',
        // maxWidth:'600px',
        minWidth:'342px',
        [theme.breakpoints.down('md')]:{
            fontSize:'2rem',
            marginLeft:0,
            textAlign:'center',
            // marginTop:'0rem',
        },
        // [theme.breakpoints.up('lg')]:{
        //     fontSize:'4rem',
        // }
    },
    TypographyIcon:{
        fontSize:'2.3rem',
        fontWeight:'700',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        
        // marginTop:'1rem',
        // marginBottom:'1rem',
        // marginLeft:'2.5rem',
        // maxWidth:'600px',
        minWidth:'342px',
      
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

    paragraph:{

        fontSize:'1.25rem',
        // fontWeight:'bold',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        marginLeft:'2.5rem',
        // textAlign:'center',
        
    //    marginBottom:'2rem', // marginBottom:'1rem',
        maxWidth:'300',
        color:'#868686',

        [theme.breakpoints.down('md')]:{


                // fontSize:'1rem',
                marginLeft:0,
                textAlign:'center',
                marginLeft:'2rem',
                marginRight:'2rem',
            
        }
        
    },
    paragraphContent:{

        fontSize:'1.25rem',
        // fontWeight:'bold',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        marginLeft:'2.5rem',
        // textAlign:'center',
        
    //    marginBottom:'2rem', // marginBottom:'1rem',
        maxWidth:'300',
        color:'#868686',

        [theme.breakpoints.down('sm')]:{

            // textAlign:'center',
            fontSize:'1rem',
        },
        [theme.breakpoints.down('xs')]:{

            textAlign:'center',
            fontSize:'1rem',
            marginLeft:0,
        }
        
    },
   
}))
export default function Website(){
    const classes = useStyle(theme)
    const integrationOptions = {
        loop: true,
        autoplay:true,
        animationData: integrationAnimation,
        rendererSettings:{
            preserveAspectRatio:'xMidYMid slice'
        }

    
    

    }
    
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
    // const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesMD =  useMediaQuery('(max-width:1365px)');;
    return (

        <React.Fragment>
            <Grid container direction='column'>
                {/* row 1 */}
                <Grid item container>
                    <Hidden smDown>
                    <Grid item style={{marginTop:'1rem'}}>
                    <IconButton style={{backgroundColor:'transparent'}} component={Link} to='/mobileapps'>
                        <img alt='back arrow' src={backArrow} />
                    </IconButton>
                    </Grid>
                    </Hidden >

                    <Grid item container direction='column' style={{maxWidth:'40em'}}>
                    <Typography className={classes.Typography}>
                      Website Development
                    </Typography>
                   <Typography className={classes.paragraph} paragraph>
                      Having a website is necessity in today's business world. They give you one central, public location to let people know who you are, what you do, and why you're the 
                      best at it.
                   </Typography>
                   <Typography className={classes.paragraph} paragraph>
                    From simply having your hours posted to having a full fledged online store, making yourself as possible to users online drives growth and enables you to reach new customers.
                   </Typography>
                   
                   
                    </Grid>

                    <Hidden smDown>
                    <Grid item style={{marginTop:'1rem'}}>
                    <IconButton style={{backgroundColor:'transparent'}} component={Link} to='/customsoftware'>
                        <img alt='back arrow' src={forwardArrow} />
                    </IconButton>
                    </Grid>
                    </Hidden>
                </Grid>
                {/* row 2  */}
                
                
                <Grid item  container direction={matchesMD ?'column':'row'} style={{marginTop:'20em'}} alignItems={matchesMD ?'center':undefined}>
               
                    <Grid item container direction={matchesMD ?'column':'row'} alignItems='center'>
                    <Grid item container direction='column' style={{maxWidth:'30em'}} >
                    <Typography className={classes.Title} style={{textAlign:'center'}}>Analytics</Typography>
                      
                      <IconButton>
                      <img alt='analytics' src={analytics}/>
                        </IconButton>
                    </Grid>
                    <Grid item style={{maxWidth:'40em'}} >
                    <Typography className={classes.paragraph} style={{textAlign:matchesMD ?'center':undefined}} >Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering
                    you to make smarter decisions with measurable effects.</Typography>
                      
                    </Grid>
                    </Grid>
                    </Grid>

                    {/* row 3  */} 
                <Grid item  container direction={matchesMD ?'column':'row'} style={{marginTop:'20em'}} alignItems={matchesMD ?'center':undefined}>
               
                    <Grid item container direction={matchesMD ?'column':'row'} style={{ marginRight:'5rem'}} justifyContent='flex-end' alignItems='center'>
                    <Grid item container direction='column' style={{maxWidth:'30em'}} >
                    <Typography className={classes.Title} style={{textAlign:'center'}}>E-Commerce</Typography>
                      
                      <IconButton>
                      <img alt='ecommerce' src={ecommerce}/>
                        </IconButton>
                    </Grid>
                    <Grid item style={{maxWidth:'40em'}} >
                    <Typography paragraph className={classes.paragraph} style={{textAlign:matchesMD ?'center':undefined}} >It's no secret that people like to shop online.</Typography>
                    <Typography paragraph className={classes.paragraph} style={{textAlign:matchesMD ?'center':undefined}} >In 2017 over $2.3 trilion was spent in e-commerce, and it's time for your slice
                    of that pie.</Typography>
                      
                    </Grid>
                    </Grid>
                </Grid>
                {/* row 4  */} 
                <Grid item  container direction={matchesMD ?'column':'row'} style={{marginTop:'20em'}} alignItems={matchesMD ?'center':undefined}>
               
                    <Grid item container direction={matchesMD ?'column':'row'} alignItems='center'>
                    <Grid item container direction='column' style={{maxWidth:'30em'}} >
                    <Typography className={classes.Title} style={{textAlign:'center'}}>Outreach</Typography>
                      
                      <IconButton>
                      <img alt='outreach' src={outreach}/>
                        </IconButton>
                    </Grid>
                    <Grid item style={{maxWidth:'40em'}} >
                    <Typography paragraph className={classes.paragraph} style={{textAlign:matchesMD ?'center':undefined}} >Draw people in with a dazzling website. Showing off yourself
                    products online is a great way to help customers decide what's right for them before visitinig in person.</Typography>
                    <Typography paragraph className={classes.paragraph} style={{textAlign:matchesMD ?'center':undefined}} >In 2017 over $2.3 trilion was spent in e-commerce, and it's time for your slice
                    of that pie.</Typography>
                      
                    </Grid>
                    </Grid>
                </Grid>

                {/* row 5  */} 
                <Grid item  container direction={matchesMD ?'column':'row'} style={{marginTop:'20em', marginBottom:'20em'}} alignItems={matchesMD ?'center':undefined}>
               
               <Grid item container direction={matchesMD ?'column':'row'} style={{ marginRight:'5rem'}} justifyContent='flex-end' alignItems='center'>
               <Grid item container direction='column' style={{maxWidth:'30em'}} >
               <Typography className={classes.Title} style={{textAlign:'center'}}>Search Engine <br/> Optimisation</Typography>
                 
                 <IconButton>
                 <img alt='seo' src={seo}/>
                   </IconButton>
               </Grid>
               <Grid item style={{maxWidth:'40em'}} >
               <Typography paragraph className={classes.paragraph} style={{textAlign:matchesMD ?'center':undefined}} >How often have you ever been to the second page of Googme results?</Typography>
               <Typography paragraph className={classes.paragraph} style={{textAlign:matchesMD ?'center':undefined}} >If you're like us, probably never.</Typography>
               <Typography paragraph className={classes.paragraph} style={{textAlign:matchesMD ?'center':undefined}} >Customers don't go there either, so we make sure your website is designed to end up on top.</Typography>
                 
               </Grid>
               </Grid>
           </Grid>


                {/* Call to action Block */}
            


            <Grid item>
                <Grid container alignItems='center' style={{height:'60em'}}>
                    <Grid item container direction={matchesSM ? 'column':'row'} alignItems={matchesSM ?'center':undefined} style={{position:'absolute'}}>
                    {/* <Grid item container direction='column' alignItems='center' style={{position:'absolute'}}> */}
                        {/* <Grid container alignItems='center' direction={matchesSM ? 'column':'row'} justifyContent={matchesSM ?'center':'space-between'} style={{height:'100%', width:'100%'}}>     */}
                            <Grid sm item style={{marginLeft:matchesSM ?'0':'2rem', textAlign:matchesSM ?'center':'inherit'}} alignItems={matchesSM ?'center':undefined}>
                            <Typography className={classes.callActiontitle}>
                            Simple Sofltware.Revolutionary Results
                        </Typography>
                        <Typography className={classes.infosubtitle}>
                            Take advantage of the 21st century
                        </Typography>

                        <Button className={classes.infolearnMore} variant="outlined" color='inherit'> <span style = {{ marginRight:'0.2rem'}}>Learn More</span> <BottonArrow width={'0.5rem'} height={'0.5rem'} fill='white'/></Button>
                        

                            </Grid>

                            <Grid sm item style={{textAlign:'right', marginRight:matchesSM ?'0':'2rem'}}>

                            <Button className={classes.freeEstimate} variant="outlined" color='white'> <span style = {{ marginRight:'0.2rem'}}>Free estimate</span> <BottonArrow width={'0.5rem'} height={'0.5rem'} fill='white'/></Button>


                            {/* </Grid> */}

                           
                    </Grid> 
                </Grid> 
                <div style={{backgroundImage:matchesSM?`url(${backgroundMobile})`:`url(${background})`, height:'100%', width:'100%',backgroundAttachment:matchesSM ?undefined:'fixed', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}></div>
           
                </Grid> 
            </Grid>
                
            </Grid>
            
            
             
            </React.Fragment>
    )
}
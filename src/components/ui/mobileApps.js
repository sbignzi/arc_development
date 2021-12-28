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
        [theme.breakpoints.down('sm')]:{
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
        [theme.breakpoints.down('xs')]:{
            fontSize:'1.7rem',
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
        [theme.breakpoints.down('md')]:{
            fontSize:'2rem'
        }
      
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
        [theme.breakpoints.down('md')]:{
            fontSize:'1.3rem',
            marginLeft:'1rem',
            marginRight:'1rem'
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
            marginLeft:'1rem',
            marginRight:'1rem',
        },
        [theme.breakpoints.down('xs')]:{

            textAlign:'center',
            fontSize:'1rem',
            marginLeft:'1rem',
            marginRight:'1rem',
        }
        
    },
   
}))
export default function MobileApps(){
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
                    <IconButton style={{backgroundColor:'transparent'}} component={Link} to='/customsoftware'>
                        <img alt='back arrow' src={backArrow} />
                    </IconButton>
                    </Grid>
                    </Hidden >

                    <Grid item container direction='column' style={{maxWidth:'40em'}}>
                    <Typography className={classes.Typography}>
                      ios/Android App Development
                    </Typography>
                   <Typography className={classes.paragraph} paragraph>
                      Mobile apps allow you to take your tools on the go.
                   </Typography>
                   <Typography className={classes.paragraph} paragraph>
                    Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens tou up
                    to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
                   </Typography>
                   <Typography className={classes.paragraph} paragraph>
                    Convenience. Connection.
                   </Typography>
                   
                    </Grid>

                    <Hidden smDown>
                    <Grid item style={{marginTop:'1rem'}}>
                    <IconButton style={{backgroundColor:'transparent'}} component={Link} to='/websites'>
                        <img alt='back arrow' src={forwardArrow} />
                    </IconButton>
                    </Grid>
                    </Hidden>
                </Grid>
                {/* row 2 Icons */}
                
                {/* row 3 animation 1 */} 
                <Grid item  container direction={matchesMD ?'column':'row'} style={{marginTop:'20em'}} alignItems={matchesMD ?'center':undefined}>
                {/* <Grid item  container direction='row'> */}
                   {/* <Grid item container sm justifyContent='center'> */}
                    <Grid item container direction='column' sm style={{maxWidth:matchesMD ?'40em':undefined}}>
                        <Typography className={classes.Title} style={{textAlign:matchesMD ?'center':undefined}}>Integration</Typography>
                        <Typography className={classes.paragraphContent} style={{textAlign:matchesMD ?'center':undefined}} paragraph>
                          Our technology enables an innate interconnection between web and mobilr applications, putting everything you need right in one convenient place.
                        </Typography>
                        <Typography className={classes.paragraphContent} style={{textAlign:matchesMD ?'center':undefined}} paragraph>
                          This allows tou extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before
                        </Typography>
                        
                    </Grid>
                    <Grid item sm  >
                      <Lottie  options={integrationOptions} style={{height:275, width:275, maxwidth:'20em'}} />
                    </Grid>
                    {/* </Grid> */}

                    {/* <Grid item container sm justifyContent='center'> */}
                    
                    <Grid item container direction='column'  sm style={{maxWidth:matchesMD ?'40em':undefined}}> 
                        <Typography className={classes.Title} style={{textAlign:matchesMD ?'center':undefined}}>Simultaneous Platform Support</Typography>
                        <Typography className={classes.paragraphContent} paragraph style={{textAlign:matchesMD ?'center':undefined}}>
                          Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets _ all at the same time.
                        </Typography>
                        <Typography className={classes.paragraphContent} paragraph style={{textAlign:matchesMD ?'center':undefined}}>
                         This significantly reduces costs and creates a more unified brand experience across all devices.
                        </Typography>
                       
                    </Grid>
                {/* </Grid> */}
                </Grid>

                {/* row 4  */} 
                <Grid item container direction= {matchesMD?'column':'row'} alignItems= {matchesSM?'center':undefined} justifyContent='center' style={{marginTop:'20em'}}>
                    <Grid sm item container direction='column' style={{textAlign:'center'}}>
                        <Typography className={classes.TypographyIcon} >Extend Functionality</Typography>
                        <IconButton>
                           <img alt='swiss' src={swiss} />
                        </IconButton>
                    </Grid>
                    <Grid sm item conatainer direction='column' style={{textAlign:'center', marginTop:matchesMD ?'15em':0, marginBottom:matchesMD ?'15em':0}}>
                        <Typography className={classes.TypographyIcon} >Extend Access</Typography>
                        <IconButton>
                           <img alt='access' src={access} style={{maxWidth:'20rem'}}/>
                        </IconButton>
                    </Grid>
                    <Grid sm item conatainer direction='column' style={{textAlign:'center'}}>
                        <Typography className={classes.TypographyIcon} >Increase Engagement</Typography>
                        <IconButton>
                           <img alt='engagement' src={engagement} />
                        </IconButton>
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
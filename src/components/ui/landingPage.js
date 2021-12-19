import React from 'react';
import Lottie from 'react-lottie'
import {makeStyles} from '@material-ui/core/styles'
import animationData from '../../animations/landinganimation/data'
import { TramRounded } from '@material-ui/icons';
import { Button } from '@material-ui/core';
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
import {Link} from "react-router-dom"
import theme from './theme'
const useStyles = makeStyles(theme =>({
    Typography:{
        fontSize:'2.5rem',
        fontWeight:'700',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        textAlign:'center',
        marginTop:'2rem',
        marginBottom:'1rem',
        // maxWidth:'600px',
        minWidth:'200px',
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
        },
        [theme.breakpoints.down('md')]:{
            fontSize:'0.9rem',
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

        marginLeft:'2rem',
        [theme.breakpoints.down('md')]:{
            marginLeft:0,
        }
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
    }

}))


export default function LandinPage(){
    const classes = useStyles(theme);
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));;;
    const matchesXS = useMediaQuery(theme.breakpoints.up('xs'));;;
    const matches2 =  useMediaQuery('(min-width:923px)');;
    const matches3 =  useMediaQuery('(min-width:728px)');;
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
        <Grid container direction='column' >
            <Grid item >   
                <Grid container justifyContent='flex-end' alignItems='center' >
                    <Grid item sm style={{marginLeft:'2rem'}}>
                        <Typography className={classes.Typography}>Bringin West Cast Technology to the midwest</Typography>
                        <Grid container justifyContent='center' style={{marginBottom:'2rem'}}>  
                            <Button className={classes.freeEstimate} variant="contained"> Free Estimate</Button>
                            <Button className={classes.learnMore} variant="outlined" color='primary'> <span style = {{ margin:'0.2rem'}}>Learn More</span> <BottonArrow width={'1rem'} height={'1rem'} fill={theme.palette.common.blue}/></Button>
                        </Grid>
                    </Grid>
                    <Grid item sm className={classes.animation}>
                    <Lottie  options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>

            </Grid>



            {/* -----Services Bock----- */}
            <Grid item className={useMediaQuery('(min-width:782px)') ? classes.serviceLeft:classes.serviceLeftMobile} style={{marginTop:'10rem'}}>
                <Grid container  justifyContent={useMediaQuery('(min-width:782px)') ? 'flex-start':'center'} alignItems='center'>
                    <Grid item style={{marginLeft:'1em', marginRight:'1em'}}>
                    <Typography className={classes.titleContent}>Custom Software Development</Typography>
                    <Typography className={classes.subtitleContent1}>Save Energy. Save Time. Save Money</Typography>
                    <Typography className={classes.subtitleContent2}>Complete digital solution, from invertigation to <span className={classes.specialText}> celebration</span> </Typography>
                    <Button className={classes.learnMoreContent} variant="outlined" color='primary' component={Link} to='customsoftware'> <span style = {{ margin:'0.2rem'}}>Learn More</span> <BottonArrow width={'1rem'} height={'1rem'} fill={theme.palette.common.blue}/></Button>
                    </Grid>

                    <Grid item className={classes.icon}>
                        <img alt='custom software icon' src={customSoftwareIcon}/>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item className={useMediaQuery('(min-width:923px)') ? classes.serviceRight:classes.serviceRightMobile}>
                <Grid container  justifyContent={useMediaQuery('(min-width:923px)') ? 'flex-end':'center'} alignItems='center'>
                    <Grid item style={{marginLeft:'1em', marginRight:'1em'}}>
                    <Typography className={classes.titleContent}>IOS/Android App Development</Typography>
                    <Typography className={classes.subtitleContent1}>Extend Functionality. Extend Access. Increase Engagement.</Typography>
                    <Typography className={classes.subtitleContent2} style={{maxWidth:"532px"}}>Integrate your web experience or create a standalone app with either mobile platform.</Typography>
                    <Button className={classes.learnMoreContent} variant="outlined" color='primary' component={Link} to='/mobileapps'> <span style = {{ margin:'0.2rem'}}>Learn More</span> <BottonArrow width={'1rem'} height={'1rem'} fill={theme.palette.common.blue}/></Button>
                    </Grid>

                    <Grid item className={classes.icon}>
                        <img alt='custom software icon' src={mobileAppsIcon}/>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item className={useMediaQuery('(min-width:728px)') ? classes.serviceLeft:classes.serviceLeftMobile}>
                <Grid container  justifyContent={useMediaQuery('(min-width:728px)') ? 'flex-start':'center'} alignItems='center'>
                    <Grid item style={{marginLeft:'1em', marginRight:'1em'}}>
                    <Typography className={classes.titleContent}>Website Development</Typography>
                    <Typography className={classes.subtitleContent1}>Reach More. Discover More. Sell more.</Typography>
                    <Typography className={classes.subtitleContent2}>Optimized for Search Engines, built for speed </Typography>
                    <Button className={classes.learnMoreContent} variant="outlined" color='primary' component={Link} to='/websites'> <span style = {{ margin:'0.2rem'}}>Learn More</span> <BottonArrow width={'1rem'} height={'1rem'} fill={theme.palette.common.blue}/></Button>
                    </Grid>

                    <Grid item className={classes.icon}>
                        <img alt='custom software icon' src={websiteIcon}/>
                    </Grid>

                </Grid>
            </Grid>


            {/* Revolution Block */}

            <Grid item>

            <Grid container justifyContent='center' alignItems='center' style={{height:'50em'}}> 
                <Grid item style={{textAlign:'center', maxWidth:'550px', marginTop:'1rem', position:'absolute'}}>
                    <Card >
                    <CardContent>
                        <Typography className={classes.Revolutiontitle}>
                            The Revolution
                        </Typography>
                        <Typography className={classes.subtitleContent2}>
                            Visionary insights coupled with cutting-edge technology is a recipe for revolution
                        </Typography>

                    <Button className={classes.learnMoreContent} variant="outlined" color='primary'> <span style = {{ margin:'0.2rem'}}>Learn More</span> <BottonArrow width={'1rem'} height={'1rem'} fill={theme.palette.common.blue}/></Button>

                    </CardContent>
                    </Card>


                </Grid>

            <div style={{backgroundImage:`url(${revolutionBackground})`, height:'100%', width:'100%', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}></div>
            </Grid>
            </Grid>

            {/* Revolution Block */}
            <Grid item>
                <Grid container alignItems='center' style={{height:'50em'}}>
                    <Grid item container direction={matchesSM ? 'column':'row'} alignItems={matchesSM ?'center':undefined} style={{position:'absolute'}}>
                    {/* <Grid item container direction='column' alignItems='center' style={{position:'absolute'}}> */}
                        {/* <Grid container alignItems='center' direction={matchesSM ? 'column':'row'} justifyContent={matchesSM ?'center':'space-between'} style={{height:'100%', width:'100%'}}>     */}
                            <Grid sm item style={{marginLeft:matchesSM ?'0':'2rem'}}>
                            <Typography className={classes.infotitle}>
                                About Us
                            </Typography>
                            <Typography className={classes.infosubtitle}>
                                Let's get personal
                            </Typography>

                            <Button className={classes.infolearnMore} variant="outlined" color='inherit'> <span style = {{ marginRight:'0.2rem'}}>Learn More</span> <BottonArrow width={'0.5rem'} height={'0.5rem'} fill='white'/></Button>


                            </Grid>

                            <Grid sm item style={{textAlign:'right', marginRight:matchesSM ?'0':'2rem'}}>
                            <Typography className={classes.infotitle}>
                                Contact Us
                            </Typography>
                            <Typography className={classes.infosubtitle}>
                                Say hello!
                            </Typography>

                            <Button className={classes.infolearnMore} variant="outlined" color='inherit'> <span style = {{ marginRight:'0.2rem'}}>Learn More</span> <BottonArrow width={'0.5rem'} height={'0.5rem'} fill='white'/></Button>


                            {/* </Grid> */}

                           
                    </Grid> 
                </Grid> 
                <div style={{backgroundImage:`url(${inofoBackground})`, height:'100%', width:'100%', backgroundPosition:'center'}}></div>
           
                </Grid> 
            </Grid>
            {/* <Grid item>
                <Grid container style={{height:'50em'}}>
                    <Grid item style={{position:'absolute' ,height:'100%', width:'100%'}}>
                        <Grid container alignItems='center' direction={matchesSM ? 'column':'row'} justifyContent={matchesSM ?'center':'space-between'} style={{height:'100%', width:'100%'}}>    
                            <Grid item style={{marginLeft:matchesSM ?'0':'2rem'}}>
                            <Typography className={classes.infotitle}>
                                About Us
                            </Typography>
                            <Typography className={classes.infosubtitle}>
                                Let's get personal
                            </Typography>

                            <Button className={classes.infolearnMore} variant="outlined" color='white'> <span style = {{ marginRight:'0.2rem'}}>Learn More</span> <BottonArrow width={'0.5rem'} height={'0.5rem'} fill='white'/></Button>


                            </Grid>

                            <Grid item style={{marginRight:matchesSM ?'0':'2rem'}}>
                            <Typography className={classes.infotitle}>
                                Contact Us
                            </Typography>
                            <Typography className={classes.infosubtitle}>
                                Say hello!
                            </Typography>

                            <Button className={classes.infolearnMore} variant="outlined" color='white'> <span style = {{ marginRight:'0.2rem'}}>Learn More</span> <BottonArrow width={'0.5rem'} height={'0.5rem'} fill='white'/></Button>


                            </Grid>

                           
                    </Grid> 
                </Grid> 
                <div style={{backgroundImage:`url(${inofoBackground})`, height:'100%', width:'100%', backgroundPsition:'center'}}></div>
           
                </Grid> 
            </Grid> */}

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

                            <Button className={classes.freeEstimate} variant="outlined" color='inherit'> <span style = {{ marginRight:'0.2rem'}}>Free estimate</span> <BottonArrow width={'0.5rem'} height={'0.5rem'} fill='white'/></Button>


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
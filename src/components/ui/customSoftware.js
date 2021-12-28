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
import documentsAnimation from '../../animations/documentsAnimation/data'
import scaleAnimation from '../../animations/scaleAnimation/data.json'
import automationAnimation from '../../animations/automationAnimation/data.json'
// import scaleAnimation from '../../animations/scaleAnimation/data.json'
import uxAnimation from '../../animations/uxAnimation/data'
import roots from '../../assets/root.svg'
import Lottie from 'react-lottie'
import BottonArrow from './ButtonArrow'
import background from '../../assets/background.jpg'
import backgroundMobile from '../../assets/mobileBackground.jpg'
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
            marginRight:'1rem'
        },
        [theme.breakpoints.down('xs')]:{

            textAlign:'center',
            fontSize:'1rem',
            marginLeft:'1rem',
            marginRight:'1rem'
        }
        
    },
   
}))
export default function CustomSoftware(){
    const classes = useStyle(theme)
    const documentsOptions = {
        loop: true,
        autoplay:true,
        animationData: documentsAnimation,
        rendererSettings:{
            preserveAspectRatio:'xMidYMid slice'
        }

    }
    const scaleOptions = {
        loop: true,
        autoplay:true,
        animationData: scaleAnimation,
        rendererSettings:{
            preserveAspectRatio:'xMidYMid slice'
        }

    }
    const automationOptions = {
        loop: true,
        autoplay:true,
        animationData: automationAnimation,
        rendererSettings:{
            preserveAspectRatio:'xMidYMid slice'
        }

    }
    const uxOptions = {
        loop: true,
        autoplay:true,
        animationData: uxAnimation,
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
                    <IconButton style={{backgroundColor:'transparent'}} component={Link} to='/websites'>
                        <img alt='back arrow' src={backArrow} />
                    </IconButton>
                    </Grid>
                    </Hidden >

                    <Grid item container direction='column' style={{maxWidth:'40em'}}>
                    <Typography className={classes.Typography}>
                      Custom Software Development
                    </Typography>
                   <Typography className={classes.paragraph} paragraph>
                      Whether we're replacing old software or investing new solutions, Arc Developement os here to help your business tackle technology
                   </Typography>
                   <Typography className={classes.paragraph} paragraph>
                    Using regular commercial softwre leaves you with a lot of stuff you don't need, without som of the stuff you do need, and ultimately controls the way you work.Without using any software at all
                    you risk falling behind conpetitors and missing out on huge saving from increased efficiency.
                   </Typography>
                   <Typography className={classes.paragraph} paragraph>
                    Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software hat is mush more effective at improving
                    your workflow and reducing costs than generalized options.
                   </Typography>
                   <Typography className={classes.paragraph} paragraph>
                    We create exactly what you what, exactly how you want it.
                   </Typography>
                    </Grid>

                    <Hidden smDown>
                    <Grid item style={{marginTop:'1rem'}}>
                    <IconButton style={{backgroundColor:'transparent'}} component={Link} to='/mobileapps'>
                        <img alt='back arrow' src={forwardArrow} />
                    </IconButton>
                    </Grid>
                    </Hidden>
                </Grid>
                {/* row 2 Icons */}
                <Grid item container direction= {matchesMD?'column':'row'} alignItems= {matchesMD?'center':undefined} justifyContent='center' style={{marginTop:'20em'}}>
                    <Grid sm item container direction='column' style={{textAlign:'center', maxWidth:'30em'}}>
                        <Typography className={classes.TypographyIcon} >Save Energy</Typography>
                        <IconButton>
                           <img alt='lightbulb' src={lightbulb} />
                        </IconButton>
                    </Grid>
                    <Grid sm item conatainer direction='column' style={{textAlign:'center', maxWidth:'30em', marginTop:matchesMD ?'15em':0, marginBottom:matchesMD ?'15em':0}}>
                        <Typography className={classes.TypographyIcon} >Save Time</Typography>
                        <IconButton>
                           <img alt='cash' src={cash} />
                        </IconButton>
                    </Grid>
                    <Grid sm item conatainer direction='column' style={{textAlign:'center', maxWidth:'30em'}}>
                        <Typography className={classes.TypographyIcon} >Save Money</Typography>
                        <IconButton>
                           <img alt='stopwatch' src={stopwatch} />
                        </IconButton>
                    </Grid>
                </Grid>  
                {/* row 3 animation 1 */} 
                <Grid item  container direction={matchesMD ?'column':'row'} style={{marginTop:'20em'}}>
                {/* <Grid item  container direction='row'> */}
                   <Grid item container sm justifyContent='center'>
                    <Grid item container direction='column' style={{maxWidth:'30em'}} sm>
                        <Typography className={classes.Title}>Gigital Documents & Data</Typography>
                        <Typography className={classes.paragraphContent} paragraph>
                          Reduce Errors. Reduce Waste. Reduce Costs.
                        </Typography>
                        <Typography className={classes.paragraphContent} paragraph>
                          Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm
                          to tour bottom line as well.
                        </Typography>
                        <Typography className={classes.paragraphContent} paragraph>
                          By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the earth.
                        </Typography>
                    </Grid>
                    <Grid item sm style={{maxWidth:'30em'}} >
                      <Lottie  options={documentsOptions} style={{height:275, width:275}}/>
                    </Grid>
                    </Grid>

                    <Grid item container sm justifyContent='center'>
                    <Grid item sm style={{maxWidth:'30em'}} >
                      <Lottie  options={scaleOptions} style={{height:300, width:300}} />
                    </Grid>
                    <Grid item container direction='column' style={{maxWidth:'30em'}} sm>
                        <Typography className={classes.Title}>Scale</Typography>
                        <Typography className={classes.paragraphContent} paragraph>
                          Whether you're a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.
                        </Typography>
                       
                    </Grid>
                </Grid>
                </Grid>

                {/* row 4  */} 
                <Grid item  container direction='column' alignItems='center' style={{marginTop:'20em', marginBottom:'20em'}}>
                    <IconButton>
                    <img alt='Roots' src={roots} height='450em' width='300em' />
                    </IconButton>

                    <Grid item container direction='column' style={{maxWidth:'30em'}} sm>
                    <Typography className={classes.Title}>Root-Cause Analysis</Typography>
                        <Typography className={classes.paragraphContent} paragraph>
                          Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography className={classes.paragraphContent} paragraph>
                          We can help you throughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.
                        </Typography>
                        <Typography className={classes.paragraphContent} paragraph>
                          By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the earth.
                        </Typography>
                        </Grid>    
                </Grid>    
                {/* row 5 animation 2 */} 
                <Grid item  container direction={matchesMD ?'column':'row'} style={{marginBottom:'15em'}}>
                {/* <Grid item  container direction='row'> */}
                   <Grid item container sm justifyContent='center'>
                    <Grid item container direction='column' style={{maxWidth:'30em'}} sm>
                        <Typography className={classes.Title}>Automation</Typography>
                        <Typography className={classes.paragraphContent} paragraph>
                          Why waste time when you don't have to?
                        </Typography>
                        <Typography className={classes.paragraphContent} paragraph>
                          We can help you identify processes with time or event based actions which can now easly be automated.
                        </Typography>
                        <Typography className={classes.paragraphContent} paragraph>
                          Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.
                        </Typography>
                    </Grid>
                    <Grid item style={{maxWidth:'30em'}} sm>
                      <Lottie  options={automationOptions} style={{height:275, width:275}}/>
                    </Grid>
                    </Grid>

                    <Grid item container sm justifyContent='center'>
                    <Grid item sm style={{maxWidth:'30em'}}>
                      <Lottie  options={uxOptions} style={{height:275, width:275}} />
                    </Grid>
                    <Grid item container direction='column' style={{maxWidth:'30em'}} sm>
                        <Typography className={classes.Title}>User Experience Design</Typography>
                        <Typography className={classes.paragraphContent} paragraph>
                          A good design that isn't usable isn't a good design.
                        </Typography>
                        <Typography className={classes.paragraphContent} paragraph>
                          So why are so many piences of software complicated, confusing, and frustrating?
                        </Typography>
                        <Typography className={classes.paragraphContent} paragraph>
                          By prioritizing users and the real ways they interact wth technology we're able to develop unique, personable experiences that solve problems rather than 
                          create new ones.
                        </Typography>
                       
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
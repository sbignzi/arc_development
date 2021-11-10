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
import vision from '../../assets/vision.svg'
import consultation from '../../assets/consultationIcon.svg'
import technologyAnimation from '../../animations/technologyAnimation/data.json'
import mockup from '../../assets/mockupIcon.svg'
import review from '../../assets/reviewIcon.svg'
import design from '../../assets/designIcon.svg'
import launch from '../../assets/launchIcon.svg'
import build from '../../assets/buildIcon.svg'
import maintain from '../../assets/maintainIcon.svg'
import iterate from '../../assets/iterateIcon.svg'



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


                fontSize:'1rem',
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
export default function Revolution(){
    const classes = useStyle(theme)
    const technologyOptions = {
        loop: true,
        autoplay:true,
        animationData: technologyAnimation,
        rendererSettings:{
            preserveAspectRatio:'xMidYMid slice'
        }

    
    

    }
    
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    // const matchesMD =  useMediaQuery('(max-width:1365px)');;
    return (

        <React.Fragment>
            <Grid container direction='column'>
                <Grid item>
                    <Typography className={classes.Typography}>
                        The revolution
                    </Typography>
                </Grid>
                {/* <Grid item container direction={matchesMD ? 'column':'row'} justifyContent='center' alignItems={matchesMD ? 'center':undefined}> */}
                <Grid item container direction={matchesMD ? 'column':'row'} alignItems= 'center'>
                    <Grid item xs>
                        <IconButton>
                        <img alt='vision' src={vision} style={{height:'80%', width:'80%'}}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs style={{maxWidth:'40em', marginRight:matchesMD ?0:'5em'}}>
                    <Typography className={classes.Typography}>
                        Vision
                    </Typography>
                    <Typography className={classes.paragraph}>
                        The rise of computers, and subsequently the internet, has completely altered evrt aspect of human life. this has increased our confort, broadened our connections,
                        and reshaped how we view the world.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        What once was confined to huge rooms and teams of rngineers now resides in every simple one of our hands. Harnessing this unlimited potential by using it to solve problems
                        and better lives is at the heart of everything we do.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        We want to help businesses capitalize on the latest and greatest technology. The best way to predict the futur is to be the one buildibg it, and we want to help guide the world
                        into this next chapter of technological expansion, exploration, and innovation.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        By holding ourselves to rigorous standards abd pristine quality, wa can ensure you have the absolute best tools necessary to thrive in this new frontier.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        We see a futur where every individual has personalized software custom tailored to their lifestyle, culture, and interests, helping them overcome life's obstacles.
                        Each project is step towards that goal.
                    </Typography>
                    </Grid>
                </Grid>



                <Grid item container direction={matchesMD ? 'column':'row'} alignItems= 'center'>
                    
                    <Grid item xs style={{maxWidth:'40em', marginRight:matchesMD ?0:'5em'}}>
                    <Typography className={classes.Typography}>
                        Technology
                    </Typography>
                    <Typography className={classes.paragraph}>
                        The rise of computers, and subsequently the internet, has completely altered evrt aspect of human life. this has increased our confort, broadened our connections,
                        and reshaped how we view the world.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        What once was confined to huge rooms and teams of rngineers now resides in every simple one of our hands. Harnessing this unlimited potential by using it to solve problems
                        and better lives is at the heart of everything we do.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        We want to help businesses capitalize on the latest and greatest technology. The best way to predict the futur is to be the one buildibg it, and we want to help guide the world
                        into this next chapter of technological expansion, exploration, and innovation.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        By holding ourselves to rigorous standards abd pristine quality, wa can ensure you have the absolute best tools necessary to thrive in this new frontier.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        We see a futur where every individual has personalized software custom tailored to their lifestyle, culture, and interests, helping them overcome life's obstacles.
                        Each project is step towards that goal.
                    </Typography>
                    </Grid>
                    <Grid item container justifyContent={matchesMD ? 'center':'flex-end'} xs>
                        <IconButton>
                        <Lottie  options={technologyOptions} height={"100%"} width={"100%"} />
                        </IconButton>
                    </Grid>
                </Grid>

                <Grid item>
                <Typography className={classes.Typography}>
                process
                    </Typography>
                    
                </Grid>

                <Grid item container alignItems={matchesMD ?'center':undefined} direction={matchesMD ?'column':'row'} style={{backgroundColor:"#B3B3B3", height:'90em'}}>
                {/* <Grid item container direction='column' style={{backgroundColor:"#B3B3B3", height:'90em'}}> */}
                <Grid lg item container direction='column' style={{maxWidth:'20em', marginBottom:'5em'}}>
                
                <Typography className={classes.Typography} style={{color:'black'}}>
                consultation
                </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                        Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or
                        if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise
                       and intuition will help usher you into this new future of possibilities.
                    </Typography>
                     
                </Grid>
                <Grid item lg style={{alignSelf:'center', marginLeft:matchesMD ?0:'10em'}}>
                    <img alt='consultation' src={consultation}/>
                </Grid>

                </Grid>

                {/*  */}
                <Grid item container alignItems={matchesMD ?'center':undefined} direction={matchesMD ?'column':'row'} style={{backgroundColor:"#FF7373", height:'90em'}}>
                <Grid lg item container direction='column' style={{maxWidth:'20em', marginBottom:'5em'}}>
                
                <Typography className={classes.Typography} style={{color:'black'}}>
                mockup
                </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                        Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or
                        if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise
                       and intuition will help usher you into this new future of possibilities.
                    </Typography>
                     
                </Grid>
                <Grid item lg style={{alignSelf:'center', marginLeft:matchesMD ?0:'10em'}}>
                    <img alt='mockup' src={mockup}/>
                </Grid>

                </Grid>
                {/*  */}
                <Grid item container alignItems={matchesMD ?'center':undefined} direction={matchesMD ?'column':'row'} style={{backgroundColor:"#39B54A", height:'90em'}}>
                <Grid lg item container direction='column' style={{maxWidth:'20em', marginBottom:'5em'}}>
                
                <Typography className={classes.Typography} style={{color:'black'}}>
                review
                </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                        Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or
                        if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise
                       and intuition will help usher you into this new future of possibilities.
                    </Typography>
                     
                </Grid>
                <Grid item lg style={{alignSelf:'center',  marginLeft:matchesMD ?0:'10em'}}>
                    <img alt='review' src={review}/>
                </Grid>

                </Grid>
                {/*  */}
                <Grid item container alignItems={matchesMD ?'center':undefined} direction={matchesMD ?'column':'row'} style={{backgroundColor:"#A67C52", height:'90em'}}>
                <Grid lg item container direction='column' style={{maxWidth:'20em', marginBottom:'5em'}}>
                
                <Typography className={classes.Typography} style={{color:'black'}}>
                design
                </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                        Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or
                        if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise
                       and intuition will help usher you into this new future of possibilities.
                    </Typography>
                     
                </Grid>
                <Grid item lg style={{alignSelf:'center', marginLeft:matchesMD ?0:'10em', maxWidth:'50em'}}>
                    <img alt='design' src={design} style={{width:'100%'}}/>
                </Grid>

                </Grid>
                {/*  */}
                <Grid item container alignItems={matchesMD ?'center':undefined} direction={matchesMD ?'column':'row'} style={{backgroundColor:"#39B54A", height:'90em'}}>
                <Grid lg item container direction='column' style={{maxWidth:'20em', marginBottom:'5em'}}>
                
                <Typography className={classes.Typography} style={{color:'black'}}>
                Review
                </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                        Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or
                        if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise
                       and intuition will help usher you into this new future of possibilities.
                    </Typography>
                     
                </Grid>
                <Grid item lg style={{alignSelf:'center', marginLeft:matchesMD ?0:'10em'}}>
                    <img alt='review' src={review}/>
                </Grid>
                </Grid>
                {/*  */}
                <Grid item container alignItems={matchesMD ?'center':undefined} direction={matchesMD ?'column':'row'} style={{backgroundColor:"#FBB03B", height:'90em', width:'100%'}}>
                <Grid lg item container direction='column' style={{maxWidth:'20em', marginBottom:'5em'}}>
                
                <Typography className={classes.Typography} style={{color:'black'}}>
                Build
                </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                        Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or
                        if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise
                       and intuition will help usher you into this new future of possibilities.
                    </Typography>
                     
                </Grid>
                <Grid item lg style={{alignSelf:'center',  marginLeft:matchesMD ?0:'10em', maxWidth:'50em'}}>
                    <img alt='build' src={build} style={{width:'100%'}}/>
                </Grid>

                </Grid>
                {/*  */}
                <Grid item container alignItems={matchesMD ?'center':undefined} direction={matchesMD ?'column':'row'} style={{backgroundColor:"#C1272D", height:'110em'}}>
                <Grid lg item container direction='column' style={{maxWidth:'20em', marginBottom:'5em'}}>
                
                <Typography className={classes.Typography} style={{color:'black'}}>
                Launch
                </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                        Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or
                        if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise
                       and intuition will help usher you into this new future of possibilities.
                    </Typography>
                     
                </Grid>
                <Grid item lg style={{alignSelf:'center',  marginLeft:matchesMD ?0:'10em'}}>
                    <img alt='launch' src={launch}/>
                </Grid>

                </Grid>
                {/*  */}
                <Grid item container alignItems={matchesMD ?'center':undefined} direction={matchesMD ?'column':'row'} style={{backgroundColor:"#8E45CE", height:'90em'}}>
                <Grid lg item container direction='column' style={{maxWidth:'20em', marginBottom:'5em'}}>
                
                <Typography className={classes.Typography} style={{color:'black'}}>
                Maintain
                </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                        Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or
                        if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise
                       and intuition will help usher you into this new future of possibilities.
                    </Typography>
                     
                </Grid>
                <Grid item lg style={{alignSelf:'center',  marginLeft:matchesMD ?0:'10em'}}>
                    <img alt='maintain' src={maintain}/>
                </Grid>

                </Grid>
                {/*  */}
                <Grid item container alignItems={matchesMD ?'center':undefined} direction={matchesMD ?'column':'row'} style={{backgroundColor:"#29ABE2", height:'90em'}}>
                <Grid lg item container direction='column' style={{maxWidth:'20em', marginBottom:'5em'}}>
                
                <Typography className={classes.Typography} style={{color:'black'}}>
                Iterate
                </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                        Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or
                        if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
                    </Typography>
                <Typography className={classes.paragraph} style={{color:'white'}}>
                       Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise
                       and intuition will help usher you into this new future of possibilities.
                    </Typography>
                     
                </Grid>
                <Grid item lg style={{alignSelf:'center', marginLeft:matchesMD ?0:'10em', maxWidth:'40em'}}>
                    <img alt='iterate' src={iterate} style={{width:'100%'}}/>
                </Grid>

                </Grid>
                
            </Grid>
           
            
            
             
            </React.Fragment>
    )
}
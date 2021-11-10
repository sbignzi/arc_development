import React from 'react'
import { makeStyles } from '@material-ui/styles'
import theme from './theme'
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import BottonArrow from './ButtonArrow'
import customSoftwareIcon from '../../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../../assets/mobileIcon.svg'
import websiteIcon from '../../assets/websiteIcon.svg'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {Link} from "react-router-dom"

const useStyle = makeStyles(theme => ({
    Typography:{
        fontSize:'2.5rem',
        fontWeight:'700',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        
        marginTop:'1rem',
        marginBottom:'1rem',
        marginLeft:'2.5rem',
        // maxWidth:'600px',
        minWidth:'342px',
        [theme.breakpoints.down('xs')]:{
            fontSize:'2rem',
            marginLeft:0,
            textAlign:'center',
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
    }
}))
export default function Services(){
    const classes = useStyle(theme)
    return (

        <React.Fragment>
            <Typography className={classes.Typography}>
                Services
            </Typography>
             <Grid item className={useMediaQuery('(min-width:923px)') ? classes.serviceRight:classes.serviceRightMobile}>
           <Grid container  justifyContent={useMediaQuery('(min-width:923px)') ? 'flex-end':'center'} alignItems='center'>
            <Grid item style={{marginLeft:'1em', marginRight:'1em', width:'30rem'}}>
            <Typography className={classes.titleContent}>IOS/Android App Development</Typography>
            <Typography className={classes.subtitleContent1}>Extend Functionality. Extend Access. Increase Engagement.</Typography>
            <Typography className={classes.subtitleContent2} style={{maxWidth:"532px"}}>Integrate your web experience or create a standalone app with either mobile platform.</Typography>
            <Button className={classes.learnMoreContent} variant="outlined" color='primary' component={Link} to='/mobileapps'> <span style = {{ margin:'0.2rem'}}>Learn More</span> <BottonArrow width={'1rem'} height={'1rem'} fill={theme.palette.common.blue}/></Button>
            </Grid>

            <Grid item className={classes.icon}>
                <img alt='custom software icon' src={mobileAppsIcon} style={{ width:'12rem'}}/>
            </Grid>

        </Grid>
    </Grid>
              <Grid item className={useMediaQuery('(min-width:815px)') ? classes.serviceLeft:classes.serviceLeftMobile} style={{marginTop:'10rem'}}>
                <Grid container  justifyContent={useMediaQuery('(min-width:814px)') ? 'flex-start':'center'} alignItems='center'>
                    <Grid item style={{marginLeft:'1em', marginRight:'1em'}}>
                    <Typography className={classes.titleContent}>Custom Software Development</Typography>
                    <Typography className={classes.subtitleContent1}>Save Energy. Save Time. Save Money</Typography>
                    <Typography className={classes.subtitleContent2}>Complete digital solution, from invertigation to <span className={classes.specialText}> celebration</span> </Typography>
                    <Button className={classes.learnMoreContent} variant="outlined" color='primary' component={Link} to='/customsoftware'> <span style = {{ margin:'0.2rem'}}>Learn More</span> <BottonArrow width={'1rem'} height={'1rem'} fill={theme.palette.common.blue}/></Button>
                    </Grid>

                    <Grid item className={classes.icon}>
                        <img alt='custom software icon' src={customSoftwareIcon}/>
                    </Grid>

                </Grid>
            </Grid>
           
            <Grid item className={useMediaQuery('(min-width:768px)') ? classes.serviceRight:classes.serviceRightMobile}>
                <Grid container  justifyContent={useMediaQuery('(min-width:768px)') ? 'flex-end':'center'} alignItems='center' style={{marginBottom:'5rem'}}>
                    <Grid item style={{marginLeft:'1em', marginRight:'1em',  width:'30rem'}}>
                    <Typography className={classes.titleContent}>Website Development</Typography>
                    <Typography className={classes.subtitleContent1}>Reach More. Discover More. Sell more.</Typography>
                    <Typography className={classes.subtitleContent2}>Optimized for Search Engines, built for speed </Typography>
                    <Button className={classes.learnMoreContent} variant="outlined" color='primary' component={Link} to='/websites'> <span style = {{ margin:'0.2rem'}}>Learn More</span> <BottonArrow width={'1rem'} height={'1rem'} fill={theme.palette.common.blue}/></Button>
                    </Grid>

                    <Grid item className={classes.icon}>
                        <img alt='custom software icon' src={websiteIcon} style={{ width:'12rem'}}/>
                    </Grid>

                </Grid>
            </Grid>
            </React.Fragment>
    )
}
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
import history from '../../assets/history.svg'
import theme from './theme'
import Dialog from '@mui/material/Dialog';
import Avatar from '@material-ui/core/Avatar'
import profile from '../../assets/founder.jpg'
import yearbook from '../../assets/yearbook.svg'
import puppy  from '../../assets/puppy.svg'
const useStyles = makeStyles(theme =>({
    Typography:{
        fontSize:'2.5rem',
        fontWeight:'700',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        marginTop:'1rem',
        marginLeft:'2.5rem',
        // marginBottom:'1rem',
        // maxWidth:'600px',
        minWidth:'342px',
        [theme.breakpoints.down('md')]:{
            fontSize:'2rem',
            textAlign:'center',
            marginLeft:'0',
        },
        
    },

    



  
 
  

    paragraph:{

        fontSize:'1.25rem',
        color:theme.palette.common.blue,
        fontFamily:'Raleway',
        fontStyle:'italic',
        maxWidth:'300',
        marginLeft:'5rem',
        marginRight:'5rem',
        // color:'#868686',

        [theme.breakpoints.down('md')]:{


                fontSize:'1rem',
                // marginLeft:0,
                textAlign:'center',
                // marginLeft:'2rem',
                // marginRight:'2rem',
            
        },
        [theme.breakpoints.down('sm')]:{


                fontSize:'1rem',
                // marginLeft:0,
                textAlign:'center',
                marginLeft:'2rem',
                marginRight:'2rem',
            
        }
        
    },
    paragraph2:{

        fontSize:'1.25rem',
        color:'#868686',
        fontFamily:'Raleway',
        // fontStyle:'italic',
        maxWidth:'300',
        marginLeft:'5rem',
        marginRight:'5rem',
        // color:'#868686',

        [theme.breakpoints.down('md')]:{


                fontSize:'1rem',
                // marginLeft:0,
                textAlign:'center',
                // marginLeft:'2rem',
                // marginRight:'2rem',
            
        },
        [theme.breakpoints.down('sm')]:{


                fontSize:'1rem',
                // marginLeft:0,
                textAlign:'center',
                marginLeft:'2rem',
                marginRight:'2rem',
            
        }
        
    },
    paragraph3:{

        fontSize:'1.25rem',
        color:'#868686',
        fontFamily:'Raleway',
        // fontStyle:'italic',
        maxWidth:'300',
        marginLeft:'1rem',
        marginRight:'1rem',
        // color:'#868686',

        [theme.breakpoints.down('md')]:{


                fontSize:'1rem',
                // marginLeft:0,
                textAlign:'center',
                // marginLeft:'2rem',
                // marginRight:'2rem',
            
        },
        [theme.breakpoints.down('sm')]:{


                fontSize:'1rem',
                // marginLeft:0,
                textAlign:'center',
                marginLeft:'2rem',
                marginRight:'2rem',
            
        }
        
    },
   

        

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
        <Grid container direction='column' >
        <Grid item>
            <Typography className={classes.Typography}>
                About Us
            </Typography>
            
        </Grid>
        <Grid item>
            <Typography className={classes.paragraph}>
                Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about
                in the best way possible. Arc development will use that principle to provide fast, modern,  inexpensive, and aeshetic software to the widwest and beyond.
            </Typography>
            
        </Grid>
        <Grid item container direction={matchesMD ?'column':'row'} alignItems='center' >
        <Grid item container  direction='column' sm style={{maxWidth:matchesMD ?'40em':'80em'}}>
            <Typography className={classes.Typography}>
                History
            </Typography>
            <Typography paragraph className={classes.paragraph2} style={{fontWeight:'bold'}}>
            We're the new kid on the block.
            </Typography>
            <Typography paragraph className={classes.paragraph2}>
            Founded in 2019, we're ready to get our hands on the world's business problems.
            </Typography>
            <Typography paragraph className={classes.paragraph2}>
            It all started with one question: why aren't all businesses using available technology?
            There are many different answers to that question: economics barriers, social barriers, educational barriers, and sometimes institutional barriers.
            </Typography>
            <Typography paragraph className={classes.paragraph2}>
            We aim to be powerful force in overcoming these obstacles. Recent developments in software engineering and computing power, comounded by the proliferation of 
            smart phones, has opened up infinite words of possibility. Things taht have always been done by hand can now be done digitally and automatically, and completely
            new methodes of interaction are created daily. Taking full advantage of these advancements is the name of the game.
            </Typography>
            <Typography className={classes.paragraph2}>
            All thes change can be a lot to keep up with, and that's where we come in.
            </Typography>
        </Grid>
        <Grid item sm>
        <img alt='history' src={history} height={matchesMD ?250:350}/>
        </Grid>
        </Grid>
        <Grid item container direction='column' alignItems='center'>
        <Typography className={classes.Typography}>
            Team
        </Typography>
        <Typography className={classes.paragraph2}>
            Zachary Reece, Founder
        </Typography>
        <Typography className={classes.paragraph2}>
            I started coding when I was 9 years old.
        </Typography>
        <Avatar alt='founder' src={profile} style={{height:'10em', width:'10em'}}/>

        </Grid>
        <Grid item container direction={matchesMD ?'column':'row'} alignItems={matchesMD ?'center':undefined} style={{marginBottom:'5rem'}}>
        <Grid item>   
        <Grid item sm container direction='column' style={{marginLeft:matchesSM ?0:'2.5rem'}}>
        <Grid item style={{maxWidth:matchesMD ?'50%':'100%'}}>
        <img alt='yearbook' src={yearbook} style={{maxWidth:matchesMD ?'20em':'100%'}}/>
        </Grid>
        <Typography style={{textAlign:matchesMD ?'center':undefined}}>
            A page from my Sophomore yearbook
        </Typography>
        </Grid>

        </Grid>
        <Grid item direction='column' sm style={{marginTop:'1.5rem', maxWidth:matchesMD ?'40em':'80em'}}>
        <Typography paragraph className={classes.paragraph3}>
            I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning _ learning about
            computrersn learning mathematics ans philosophy, styudyung design, always just learning.
            
        </Typography>
        <Typography className={classes.paragraph3}>
            Now I'm ready to apply everything I've learned, and to help others with the intuition I have developed.

        </Typography>
        </Grid>
       
        <Grid item style={{marginRight:matchesSM ?0:'2.5rem'}}>
        <Grid item sm container direction='column'>
        <Grid item style={{maxWidth:matchesMD ?'50%':'100%'}}>
        <img alt='puppy' src={puppy} style={{maxWidth:matchesMD ?'20em':'100%'}}/>
        </Grid>
        <Typography style={{textAlign:matchesMD ?'center':undefined}}>
            A page from my Sophomore yearbook
        </Typography>
        </Grid>
        </Grid>
        </Grid>
        </Grid>
     
        </React.Fragment>


    )
}
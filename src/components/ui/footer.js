import React from 'react'
import { makeStyles } from '@material-ui/styles'
import theme from './theme'
import footerAdornment from '../../assets/Footer Adornment.svg'
import Grid from '@mui/material/Grid';
import { Hidden } from '@material-ui/core';
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import {Link} from "react-router-dom"

const useStyle = makeStyles(theme => ({
    footer:{
        backgroundColor:theme.palette.common.blue,
        zIndex:1302,
        position:"relative",
        // marginTop:'3rem'
       
        
    },

    footerImg:{
        verticalAlign:'bottom',
        width:'25rem',
        [theme.breakpoints.down('md')]:{
            width:'25rem'
        },
        [theme.breakpoints.down('sm')]:{
            width:'21rem'
        },
        [theme.breakpoints.down('xs')]:{
            width:'17rem'
        }
    },

    gridContainer:{
        position:"absolute"
    },
    gridItem:{
        color:'white',
        marginTop:"3em !important",
       
    },

    link:{
        color:'white',
        fontFamily:"Arial",
        fontSize:"0.75rem",
        fontWuight:"bold",
        textDecoration:'none',
        marginBottom:"1.2rem !important"

    },

    socialMedia:{
        position:'absolute',
        marginTop:'11rem',
        right:'1rem',
        color:'white',

        [theme.breakpoints.down('sm')]:{
            marginTop:'9rem',
        },

        [theme.breakpoints.down('xs')]:{
            marginTop:'7rem',
        }

    },
    socialMediaItem:{
        // position:'absolute',
        // color:'white',
       
        width:'3rem',
        height:'3rem'
    }


}))


export default function Footer(){
    const classes = useStyle(theme)
    return (

        <footer className={classes.footer}>
            <Hidden smDown>
            <Grid container justifyContent="center" className={classes.gridContainer} spacing={6}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column'>
                        <Grid item className={classes.link} component={Link} to='/'>
                            Home
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem} >
                    <Grid container direction='column'>
                        <Grid item className={classes.link} component={Link} to='/services'>
                            Services
                        </Grid>
                        <Grid item className={classes.link} component={Link} to='/customsoftware'>
                            Custom Software Development
                        </Grid>
                        <Grid item className={classes.link} component={Link} to='/mobileapps'>
                            ios/Android App Development
                        </Grid>
                        <Grid item className={classes.link} component={Link} to='/wevsites'> 
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' >
                        <Grid item className={classes.link} component={Link} to='/revolution'>
                                The Revolution
                            </Grid>
                            <Grid item className={classes.link}>
                                Vision
                            </Grid>
                            <Grid item className={classes.link}>
                                Technology
                            </Grid>
                            <Grid item className={classes.link}> 
                                Process
                            </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' >
                    <Grid item className={classes.link} component={Link} to='/about'>
                                About Us
                        </Grid>
                        <Grid item className={classes.link}>
                            History
                        </Grid>
                        <Grid item className={classes.link}>
                            Team
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' component={Link} to='/contact'>
                        <Grid item className={classes.link}>
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>

                
            </Grid>
            </Hidden>

            <Grid container justifyContent='flex-end' alignItems className={classes.socialMedia}>
                <Grid item className={classes.socialMediaItem}>
                    <img alt='facebook' src={facebook}/>
                </Grid>
                <Grid item className={classes.socialMediaItem}>
                    <img alt='twiter' src={twitter}/>
                </Grid>
                <Grid item className={classes.socialMediaItem}>
                    <img alt='instagram' src={instagram}/>
                </Grid>
            </Grid>
            
            <img className={classes.footerImg} alt='footer img' src={footerAdornment}/>
        </footer>
    )

}
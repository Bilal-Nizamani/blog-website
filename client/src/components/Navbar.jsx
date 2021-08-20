import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    component: {
        backgroundColor: "#ffff",
        color: 'black'
    },
    container: {
        justifyContent: 'center',
        '& > *': {
            padding: 20,
            textDecoration: "none",
            color: "inherit"
        }
    }
});

const Navbar = () => {

    const classes = useStyles();

    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>

                <NavLink exact to="/" > <Typography>HOME</Typography>  </NavLink>
                <NavLink exact to="/about"> <Typography>ABOUT</Typography>  </NavLink>
                <NavLink exact to="/contact"  > <Typography>CONTACT</Typography>   </NavLink>
                <NavLink exact to="/signin" > <Typography>Signin</Typography>  </NavLink>
                <NavLink exact to="/signup" > <Typography>Signup</Typography>  </NavLink>



            </Toolbar>

        </AppBar>


    )
}

export default Navbar;

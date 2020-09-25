import React from 'react';
import { Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="relative">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography  variant="h6" className={classes.title}>
                    <Link style={{textDecoration:'none', color:'white'}} to="/">
                Social Buddy
                   </Link>
                    </Typography>
                    <IconButton aria-label="show 1 new mails" color="inherit">
                        <Badge badgeContent={1} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="show 3 new mails" color="inherit">
                        <Badge badgeContent={3} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton  color="inherit">
                        <Badge color="secondary">

                            <AccountCircle />
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>
            
        </div>
    );
};

export default Header;
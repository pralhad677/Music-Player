

import React from 'react';
import { createStyles, Theme, makeStyles,withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { ListItemProps } from '@material-ui/core/ListItem'; 
// import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'; 
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import {Home} from '@material-ui/icons';
import {Search} from '@material-ui/icons';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MuiListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      // backgroundColor: theme.palette.background.paper,
      backgroundColor:"#1d0002",
    },
  }),  
);

const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "red",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    },
    "&$selected:hover": {
      backgroundColor: "purple",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "green"
      }
    },
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
      "& .MuiListItemIcon-root": { //hover grda icon chai magena color ma change hun eho
        color: "magenta"
      }
    }
  },
  selected: {}
})(MuiListItem);



export default function SimpleList() {
  const classes = useStyles();
  
  const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);
  
  const handleListItemClick = (event:any, index:number) => {
    setSelectedIndex(index);
  };


  return (
    <div className={classes.root}>

<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>More</Typography>
        </AccordionSummary>
        <AccordionDetails>
            
     
<Typography>
<List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
      
          </Typography>
          </AccordionDetails>
        </Accordion>
  
    </div>
  );
}

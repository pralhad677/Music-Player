import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import Signup from '../Signup/Index'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex:  6,
      color: 'green', 
      backgroundColor:"white",
      height: "40rem",
      width: "40rem",
      margin:"auto"
      
    },
    close:{
      cursor: "pointer",
      position: "absolute", 
      top: 0,
      right:0
    },
    button: {
      backgroundColor:"white"
    }
  }),
);
interface Props{
  open: boolean,
  handleClose: () => void
}

let SimpleBackdrop: React.FC<Props> = ({ children,open,handleClose})=> {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };
return (
    <div>
    {/* <Button variant="outlined" color="secondary" onClick={handleToggle} className={ classes.button}>
        SinUp
      </Button> */}
    {children}
      <Backdrop className={classes.backdrop} open={open}  >
        <Signup />
        <CloseIcon className={classes.close} onClick={handleClose} />
      </Backdrop>
    </div>
  );
}
  
export default SimpleBackdrop

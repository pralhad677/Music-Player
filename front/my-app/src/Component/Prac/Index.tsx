import React from 'react'
import {Button,withStyles } from '@material-ui/core'

const style = () => ({
  default: {
    borderRadius:'10px'
  },
  containedPrimary: {
    "&:hover": {
      backgroundColor: 'red',
      color:'white'
    }
  } 
})
  
function Index({ classes }: {classes:any}) {
  // const classes = style()
  return (
    <div>
      <Button variant="contained" color="primary" classes={{root: classes.default, containedPrimary:classes.containedPrimary}}>
        Practice
      </Button> 
    </div>
  ) 
}

export default withStyles(style)(Index)

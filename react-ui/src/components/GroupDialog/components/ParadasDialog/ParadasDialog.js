import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Paradas from "../Paradas"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


 


export default function ParadasDialog(props) {
  const {open,onClose, linea} = props
  const [valor, setvalor] =React.useState('')
  const classes = useStyles();

  const handleChange = (event) => {
    setvalor( event.target.value );
  };


  const handleOk =() => 
  {
    console.log('ok')
    onClose(valor)
  }

  const handleClose = () => 
  {
    onClose('')
  }
  return (
    <div>
     
      <Dialog linea = {linea} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Nueva parada</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Indique la parada a añadir
          </DialogContentText>
          <Grid container spacing={3}>
         
          <Grid item xs={12}>
            <Paradas></Paradas>
          </Grid>

         <Grid item xs={12}>
          <Paper className={classes.paper}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nueva Parada"
            type="number"
            fullWidth
            onChange={handleChange}

          />          
          </Paper>
         </Grid>
        </Grid>           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleOk} color="primary">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

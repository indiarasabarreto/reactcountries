import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import css from './countries.module.css';

function Country ({ country }) {
    const [openDialog, setOpenDialog] = useState(false);

    const { name, flag, capital, population, region, area } = country;

    const handleOpen = () => {
      setOpenDialog(true);
    };

    const handleClose = () => {
      setOpenDialog(false);
    };

   return (
      <div>
        <div className={`${css.country} ${css.border}`} onClick={handleOpen}>
          <img className={css.flag} src={flag} alt={name} />
          <span className={css.countryName}>{name}</span>
        </div>
        
        <Dialog
            open={openDialog}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Informações"}</DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div className={`${css.country}`}>
                <img className={css.flag} src={flag} alt={name} />
                <span className={css.countryName}>Nome: {name}</span>
                <span className={css.countryName}>Capital: {capital}</span>
                <span className={css.countryName}>População: {population}</span>
                <span className={css.countryName}>Área: {area}</span>
                <span className={css.countryName}>Região: {region}</span>
              </div>
            </DialogContentText>
          </DialogContent>
          
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Fechar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
   );
  }

  export default Country;
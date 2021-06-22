import { useState } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
  Grid,
} from '@material-ui/core';

const ReadMoreDialog = ({ open, setOpen, setInputValue, ...props }) => {

  const handleClose = () => {
    setOpen(false);
  };

  const handleImport = () => {
    setInputValue(props.content.trim());
    setOpen(false);
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'sm'}
      open={open}
      onClose={handleClose}
      PaperProps={{ style: { paddingTop: '0.5rem' } }}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle>
        <Grid container style={{ alignItems: 'baseline' }}>
          <Grid item xs={6}>
            <Typography variant='h5'>
              {props.title}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='subtitle2' align='right'>
              {props.author}
            </Typography>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography variant='body1' style={{ whiteSpace: 'pre-wrap' }}>
            {props.content}
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleImport} color="primary" variant='contained'>
          Import
        </Button>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReadMoreDialog;

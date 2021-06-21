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
  // const [open, setOpen] = useState(true);

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
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          <Grid container style={{ alignItems: 'baseline' }}>
            <Grid item xs={6}>
              <Typography variant='h6' inline>
                {props.title}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='subtitle2' inline align='right'>
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

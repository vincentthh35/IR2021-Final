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
  Tabs,
  Tab,
} from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';
import { useAsync } from 'react-async-hook';
import { submitArticle, getLyrics } from '../axios';

const fetchLyrics = async (songId) => {
  if (songId) {
    return await getLyrics(songId);
  }
};

const ArticleLyricsDialog = ({ poem, open, songId, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
    setTabValue(0);
  };
  const [tabValue, setTabValue] = useState(0);

  // const songId = useAsync(fetchSongId, [poem]);
  const lyrics = useAsync(fetchLyrics, [songId]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const renderSong = () => {
    return (<>
      {lyrics.loading &&
      (
        <Typography variant='subtitle1' style={{ whiteSpace: 'pre-wrap' }}>
            Loading lyrics...
        </Typography>
      )}
      {lyrics.error &&
      (
        <Typography variant='subtitle1' style={{ whiteSpace: 'pre-wrap' }}>
            Error occurred when loading lyrics...
        </Typography>
      )}
      {lyrics.result &&
      (
        <Typography variant='subtitle1' style={{ whiteSpace: 'pre-wrap' }}>
            {lyrics.result}
        </Typography>
      )}
    </>);
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'sm'}
      onClose={handleClose}
      open={open}
      PaperProps={{ style: { padding: '0.5rem' } }}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle>
        <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        >
          <Tab label="文章" />
          <Tab label="歌詞" />
        </Tabs>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {(tabValue == 0)
          ? (<Typography variant='subtitle1' style={{ whiteSpace: 'pre-wrap' }}>
              {poem}
            </Typography>)
          : (renderSong())}
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center', paddingTop: '0.7rem' }}>
        <ReactAudioPlayer
          src={`http://140.112.30.57:10726/api/getMusic?id=${songId}`}
          controls
        />
      </DialogActions>
    </Dialog>
  );
};

export default ArticleLyricsDialog;

import {
  Grid,
  TextField,
  Button,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useFormStyles } from '../styles';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import ReactPlayer from 'react-player';

import { submitArticle, getMusic, getLyrics } from '../axios';

const ArticleInputPaper = ({ displaySnackMessage, inputValue, setInputValue }) => {
  const classes = useFormStyles();

  const [audioURL, setAudioURL] = useState('');

  const {
    handleSubmit, control, reset,
    formState: { errors }
  } = useForm();

  const handleUploadFile = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type === 'text/plain' &&
          file.name.slice(-4) === '.txt')
      {
        // read and set input
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
          const result = reader.result.trim();
          // filter word number
          if (result.length <= 5000) {
            setInputValue(reader.result.trim());
          } else {
            displaySnackMessage(`Too much words! (${result.length} words total)`, 'error');
            console.error(`Too much words! (${result.length} words total)`);
          }
        };
        reader.onerror = () => {
          console.error('reader error!');
        };
      } else {
        // validate form?
        displaySnackMessage('Only accept .txt file!', 'error');
        console.error('Only accept .txt file!');
      }
    }
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const customValidate = () => {
    if (inputValue.trim() === '') return false;
    else return true;
  };

  const onSubmit = async (data) => {
    submitArticle(inputValue);
    const songId = 20;
    const f = async () => {
      return await getMusic(20);
    }
    // console.log(f());
    const ff = await f();
    console.log(ff);
    setAudioURL(ff);
  };

  return (
    <Paper className={classes.paperRoot}>
      <form style={{ width: '100%' }} autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} className={classes.gridRoot}>
          <Grid item>
            <ReactPlayer url={audioURL} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>
              輸入文章
            </Typography>
          </Grid>
          <Grid item xs={12} lg={10} xl={10}>
            <Controller
              name="article"
              control={control}
              defaultValue=''
              rules={{ validate: customValidate }}
              render={(props) => (
                <TextField
                  {...props.field}
                  multiline
                  rowsMax={5}
                  label='Input article'
                  onChange={(value) => {
                    props.field.onChange(value);
                    onInputChange(value);
                  }}
                  value={inputValue}
                  fullWidth
                  variant='outlined'
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={1} xl={1}>
            <Button
              variant='contained'
              color='primary'
              type='submit'
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12} lg={1} xl={1}>
            <Button
              variant='outlined'
              color='primary'
              component='label'
            >
              Upload
              <input
                type='file'
                hidden
                // multiple (allow upload multiple files)
                onChange={handleUploadFile}
              />
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ArticleInputPaper;

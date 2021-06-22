import {
  Grid,
  Paper,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import { useState, useEffect } from 'react';

import { getPoems, getPoemNumber } from '../axios';
import GridCard from '../components/GridCard';

import { makeStyles } from '@material-ui/core/styles';
import { useFormStyles } from '../styles';

import { useAsync } from 'react-async-hook';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      justifyContent: 'center',
      display: 'flex',
    },
  },
}));

const fetchPoems = async (currentPage) => {
  const start = (currentPage - 1) * 30;
  return (await getPoems(start, start+29)).poems;
};

const fetchPoemNumber = async () => {
  return await getPoemNumber();
}

const PoemBrowser = ({ setInputValue }) => {
  const classes = useFormStyles();
  const pageClasses = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const poemList = useAsync(fetchPoems, [currentPage]);
  const poemNum = useAsync(fetchPoemNumber, []);

  const handleChange = (e, v) => {
    setCurrentPage(v);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.paperRoot}>
          <Grid container spacing={3} className={classes.cardGridRoot}>
            <Grid item xs={12}>
              <Typography variant='h6'>
                範例詩集
              </Typography>
              {poemList.loading && <CircularProgress />}
            </Grid>
            {poemList.loading &&
              (<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
              </Grid>)}
            {poemList.error &&
              (<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h3' color='primary'>Error!</Typography>
              </Grid>)}
            {poemList.result && poemList.result.map((e, i) =>
              <GridCard
                title={e.title}
                content={e.poem.trim().split('\n').map((e) => e.trim()).join('\n')}
                author={e.author}
                setInputValue={setInputValue}
                id={`grid-card-${i}`}
                key={`grid-card-${i}`}
              />
            )}
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Grid item xs={12} className={classes.paginationRoot}>
            <Paper className={classes.paginationPaper} elevation={10}>
              <Pagination
                count={Math.ceil(poemNum.result / 30)}
                page={currentPage}
                onChange={handleChange}
                size='large'
                classes={pageClasses}
              />
            </Paper>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PoemBrowser;

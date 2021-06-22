import { makeStyles } from '@material-ui/core/styles';

export const useFormStyles = makeStyles({
  paperRoot: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: '1vw',
    paddingRight: '1vw',
    justifyContent: 'center',
    display: 'flex',
  },
  gridRoot: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardGridRoot: {
    padding: 20,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  paginationRoot: {
    position: 'fixed',
    width: '30%',
    bottom: '1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  paginationPaper: {
    display: 'flex',
    height: '3.5rem',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    paddingLeft: 0,
  },
});

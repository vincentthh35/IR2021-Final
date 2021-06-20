import { makeStyles } from '@material-ui/core/styles';

export const useFormStyles = makeStyles({
  paperRoot: {
    width: '100vw',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: '1vw',
    paddingRight: '1vw',
    display: 'flex',
    justifyContent: 'center',
  },
  gridRoot: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    paddingLeft: 0,
  },
});

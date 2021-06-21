import { makeStyles } from '@material-ui/core/styles';

export const useFormStyles = makeStyles({
  paperRoot: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: '1vw',
    paddingRight: '1vw',
    justifyContent: 'center',
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
    // flexWrap: 'nowrap',
    // overflowX: 'auto'
  },
  checkbox: {
    paddingLeft: 0,
  },
});

import { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  Button,
} from '@material-ui/core';

import ReadMoreDialog from './ReadMoreDialog';

const GridCard = ({ title, content, author, setInputValue }) => {
  const [open, setOpen] = useState(false);

  const trimArticle = (article) => {
    const trimmed = article.trim();
    const lines = trimmed.split('\n').map((e) => e.trim());
    if (lines.length > 5) {
      return lines.slice(0, 5).join('\n') + '\n...';
    } else {
      return lines.join('\n');
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleImport = () => {
    setInputValue(content.trim());
  }

  const trimmedContent = trimArticle(content);
  const readMore = trimmedContent.slice(-4) === '\n...';

  return (<>
    <ReadMoreDialog
      open={open}
      setOpen={setOpen}
      setInputValue={setInputValue}
      title={title}
      content={content}
      author={author}
    />
    <Grid item xs={12} lg={4} xl={3} style={{ minWidth: '300px' }}>
      <Card variant='outlined'>
        <CardContent>
          <Grid container style={{ alignItems: 'baseline' }}>
            <Grid item xs={6}>
              <Typography variant='h6'>
                {title}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='subtitle2' align='right'>
                {author}
              </Typography>
            </Grid>
          </Grid>
          <Divider variant='fullWidth'/>
          <br />
          <Typography variant='body2' style={{ whiteSpace: 'pre-wrap' }}>
            {trimmedContent}
          </Typography>
        </CardContent>
        {
          readMore
            ? (<CardActions>
                <Button size='small' variant='outlined' onClick={handleOpen}>Read more...</Button>
                <Button size='small' variant='outlined' onClick={handleImport}>Import</Button>
              </CardActions>)
            : ""
        }
      </Card>
    </Grid>
  </>);
};

export default GridCard;

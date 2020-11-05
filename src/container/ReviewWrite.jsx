import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import {SearchAppBar} from '../templates'
import {useHistory} from 'react-router-dom'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ReviewWrite() {

  const [movieId, setMovieId] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const history = useHistory()
  const write = () => {
    alert(`Title: ${title}, Content: ${content}, MovieId: ${movieId}`)
    axios.post(`http://127.0.0.1:8080/api/reviewpost`,{'title':title, 'content': content, 'movie_id': movieId})
    .then(res => {
        alert(`WRITING SUCCESS`)
    })
    .catch(
        e => {
            alert(`Writing ${e}`)
        }
    )

}

  const options = [
    {
        label: "Select Movie",
        value: "0",
      },
    {
      label: "Tenet",
      value: "1",
    },
    {
      label: "TV Show",
      value: "2",
    },
  ];

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <AppBar position="absolute">
        <SearchAppBar></SearchAppBar>
      </AppBar>
      <div className={classes.paper} style={{margin:'100px 0'}}>
        <Avatar className={classes.avatar}>
          <BorderColorIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          리뷰를 작성해주세요
        </Typography>
        <div class="mb-3" style={{margin: '26px 0 0 0'}}>
                            <select value={movieId}
                                    style={{width: '250px', height: '60px'}} 
                                    onChange={e=>setMovieId(e.target.value)}>
                                {options.map(o=>(
                                    <option value={o.value}>{o.label}</option>
                                ))}
                            </select>
        </div>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="제목"
            onChange= {e => setTitle(e.target.value)}
          />
          <TextField
          id="outlined-multiline-static"
          label="리뷰"
          multiline
          required
          fullWidth
          rows={4}
          variant="outlined"
          onChange= {e => setContent(e.target.value)}
          />
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {write}
            href = "/review-list"
            
          >
            등록
          </Button> */}
                                  <button type="button">
                                  <Link to="/review-list" class="btn btn-sm btn-primary" id="btnSave" onClick={write}>
                                  등록
                                  </Link>
                                  </button>

          <Grid container>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}


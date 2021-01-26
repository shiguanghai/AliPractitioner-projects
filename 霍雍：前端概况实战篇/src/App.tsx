import React, { useState } from 'react';
import './App.css';
import { useAPI, fetch } from './rapper';
import {
  Button,
  CircularProgress,
  InputBase,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField
} from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/RemoveCircleOutline'
import SearchIcon from '@material-ui/icons/Search'
import StarOutlined from '@material-ui/icons/StarOutlined'
import StarBorder from '@material-ui/icons/StarBorder'
import { fade, makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors';

const Icon = ({ fav, ...rest }: any) => fav ?
  <StarOutlined {...rest} /> : <StarBorder {...rest} />

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function App() {
  const [timestamp, setTimestamp] = useState(0)
  const [data] = useAPI['GET/todo/list']({ timestamp })
  const [todoName, setTodoName] = useState('')
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  const createTodoHandler = async () => {
    setLoading(true)
    await fetch['PUT/todo']({ name: todoName })
    setLoading(false)
    setTodoName('')
    setTimestamp(Date.now())
  }

  const deleteTodoHandler = async (id: number) => {
    setLoading(true)
    await fetch['DELETE/todo']({ id })
    setLoading(false)
    setTimestamp(Date.now())
  }

  const classes = useStyles()

  return (
    <div className="App">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          value={query}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      {loading && <CircularProgress style={{ margin: 8 }} />}
      <List>
        {data?.data.sort((x, y) => (x.fav === y.fav) ?
          0 : x.fav ? 
          -1 : 1
          ).filter(x => query.trim() === '' ? 
            true : x.name.indexOf(query.trim()) > -1
            ).map(x => (
              <ListItem key={x.id} style={{ backgroundColor: x.fav ? grey[200] : '' }}>
                <ListItemText primary={x.name} />
                <ListItemSecondaryAction>
                  <RemoveIcon style={{ cursor: 'pointer' }} onClick={() => deleteTodoHandler(x.id)} />
                  <Icon
                    fav={x.fav}
                    style={{ cursor: 'pointer' }}
                    onClick={async () => {
                      const res = await fetch['POST/todo/fav']({ id: x.id });
                      if (res.isOk) {
                        setTimestamp(Date.now()) 
                      }
                    }} 
                  />
                </ListItemSecondaryAction>
              </ListItem>
            )
          )
        }
      </List>
      <div className="Control">
        <TextField 
          placeholder="请输入TODO名称"
          value={todoName}
          onChange={e => setTodoName(e.target.value)}
        />
        <Button
          variant="outlined"
          color="primary"
          disabled={todoName.trim() === ''}
          style={{ marginLeft: 8 }}
          onClick={createTodoHandler}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default App;

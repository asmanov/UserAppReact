import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TextField, Button, Box } from '@mui/material';

function App({name}) {
  const [username, setUserName] = useState();
  const [pass, setPass] = useState();

  

  return (
    <>
      <Box className="Box" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>{name}</h2>
      <form  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12}}>
        <TextField label="Name" name="name" value={name} type="file"/>
        <TextField type="password" label="Password" name="password" value={pass} />
        <Button fill="none">LogIn</Button>
      </form>
    </Box>
    </>
  )
}

export default App



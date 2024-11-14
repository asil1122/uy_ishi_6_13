import { Button, Container, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { removeState } from '../../config/store';
import { Form } from '../../components/form';

export const Header = () => {
    const navigate = useNavigate();
  
    const logout = () => {
      removeState('userData')
      navigate('/')
    }

  return (
      <Stack bgcolor={'white'} px={'50px'}  direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <h1>Header</h1>
        <Form/>
        <Button variant='contained' onClick={()=> logout()}>log out</Button>
      </Stack>
  )
}

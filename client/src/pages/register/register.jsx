import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRegister } from '../../service/useRegister'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const { handleSubmit,register,reset } = useForm()
  const { mutate } = useRegister()
  const navigate = useNavigate();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate('/')
      }
    })
    reset();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(submit)}>
        <Stack>
          <TextField variant='outlined' placeholder='Name' {...register('name')} />
          <TextField variant='outlined' placeholder='Email' type='email' {...register('email')} />
          <TextField variant='outlined' placeholder='Password' type='password' {...register('password')} />
        </Stack>
        <Button variant='contained' type='submit'>Submit</Button>
      </form>
    </Container>
  )
}

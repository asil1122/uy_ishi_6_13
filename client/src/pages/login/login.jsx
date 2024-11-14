import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUsers } from '../../service/useCreateUsers';

export const Login = () => {
  const { handleSubmit, register, reset } = useForm();
  const { mutate } = useCreateUsers();
  const navigate = useNavigate();

  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        navigate('/app', { replace: true });
      }
    });
    reset();
  }
  

  return (
    <Container>
      <Stack>
        <form onSubmit={handleSubmit(submit)}>
          <Stack>
            <TextField variant='outlined' placeholder='Email' type='email' {...register('email')} />
            <TextField variant='outlined' placeholder='Password' type='password' {...register('password')}/>
          </Stack>
          <Stack>
            <Button type='submit' variant='contained' >send</Button>
            <Link to={'/register'}>
              <Button>
                Register
              </Button>
            </Link>
          </Stack>
        </form>
      </Stack>
    </Container>
  )
}

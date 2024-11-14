import React from 'react'
import { useDebounce } from '../../config/useDebounce'
import { useSearch } from '../../service/useSearch'
import { Stack } from '@mui/material'

export const Form = () => {
  const [input, setInput] = React.useState('')
  const debounceValue = useDebounce(input)
  const { data, isLoading } = useSearch(debounceValue)
  return (
    <Stack position={'relative'}>
      <input type='text' style={
        {
          fontWeight: 400,
          fontSize: '14px',
          borderRadius: '50px',
          padding: '20px 20px 20px 20px',
          width: '600px',
          margin: '0 auto',
          marginTop: '42px'
        }
      } 
      value={input} onChange={(e) => setInput(e.target.value)} />
      {isLoading ? (
        <div color='#fff'>Loading...</div>
      ) : (
        <Stack zIndex={1} position={'absolute' } top={'110px'}  width={'100%'} boxShadow={"0px 0px 99px -9px rgba(161,137,161,1)"}>
          {data.map((item) => (
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap={'20px'}
              bgcolor={'#fff'}
              key={item.id}
              p={'20px'}
              border={'1px solid grey'}
            >
              <img style={{ width: '150px' }} src={item.image} alt="img" />
              <h3>{item.title}</h3>
            </Stack>
          ))}
        </Stack>
      )}

    </Stack>
  )
}

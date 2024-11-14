import { Rating, Stack, Typography, Box } from '@mui/material';
import React from 'react';

export const Card = ({ item }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        width: '285px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        height: 'auto',
      }}
    >
      <Box sx={{ width: '100%', height: '400px', overflow: 'hidden' }}>
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src={item.image}
          alt={item.title}
        />
      </Box>

      <Stack spacing={1} padding={2}>
        <Typography variant="h6" fontWeight="bold">
          {item.title}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          {item.authors}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {item.genre}
        </Typography>

        <Rating name="read-only" value={item.rating} precision={0.5} readOnly />
      </Stack>
    </Stack>
  );
};

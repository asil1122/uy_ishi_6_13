import { Stack, Checkbox, List, ListItem, ListItemIcon, ListItemText, Grid2 } from '@mui/material';
import React, { useState } from 'react';
import { Card } from '../../components/card';
import { useGetGenre } from './service/query/useGetGenre';

const genres = ['Technology', 'Finance', 'Programming', 'Engineering', 'DIY', 'Music Industry', 'Mathematics'];

export const Home = () => {
  const [selectedGenre, setSelectedGenres] = useState([]);
  const { data } = useGetGenre([]);

  const books = selectedGenre.length > 0 ? data.filter((data) => selectedGenre.includes(data.genre)) : data;

  return (
    <Stack p="20px" direction="row">
      <Stack
        sx={{
          maxHeight: '100%',
          maxWidth: '400px',
          backgroundColor: '#ffffff',
          padding: 2,
        }}
      >
        <List>
          {genres.map((index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Checkbox
                  onChange={(e) =>
                    setSelectedGenres(
                      (prev) =>
                        e.target.checked
                          ? [...prev, index]
                          : prev.filter((g) => g !== index)
                    )
                  }
                />
              </ListItemIcon>
              <ListItemText primary={index} />
            </ListItem>
          ))}
        </List>
      </Stack>

      <Stack
        sx={{
          width: '100%',
          backgroundColor: '#f5f5f5',
          padding: '20px',
          borderRadius: '25px',
        }}
      >
        <Grid2 container spacing={"20px"}>
          {books?.map((item) => (
            <Grid2 size={3} key={item.id}>
              <Card item={item} />
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </Stack>
  );
};

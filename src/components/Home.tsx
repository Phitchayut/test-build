import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { fetchAttractions } from '../api/fetchAttractions';

interface Attraction {
  id: number;
  name: string;
  coverimage: string;
  detail: string;
}
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const BasicCard: FC = async () => {
  const attractions: Attraction[] = await fetchAttractions();
  return (
    <div className="grid grid-cols-4">
      {attractions?.map((item: Attraction, index: number) => (
        <React.Fragment key={index}>
          <Card sx={{ minWidth: 275 }} key={index}>
            <CardContent>
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <Image
                src={item.coverimage}
                width={300}
                height={300}
                alt="logo"
                className="w-full"
              />
              <Typography variant="body2">
                {item.detail}
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button href={`/attraction/${item.id}`} size="small">
                View Detail
              </Button>
            </CardActions>
          </Card>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BasicCard;

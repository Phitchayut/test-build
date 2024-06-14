import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { fetchAttraction } from '../../../api/fetchAttractions';

interface PageProps {
  params: {
    id: string;
  };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const id = params.id;
  const attraction = await fetchAttraction({ id });
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {attraction.name}
          </Typography>
          <Image
            src={attraction.coverimage}
            width={300}
            height={300}
            alt="logo"
            className=""
          />
          <Typography variant="body2">{attraction.detail}</Typography>
        </CardContent>
      </Card>
      <Button href="/" variant="contained">
        Back
      </Button>
    </div>
  );
};

export default Page;

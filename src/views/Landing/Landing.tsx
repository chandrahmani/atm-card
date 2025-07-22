import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import ATMCard from '@/components/AtmCard/AtmCard';

const Landing: FC = () => {
  return <Box p={3} gap={3}>
    <Typography variant='h3'>Hello, This Is  My ATM Card!</Typography>
   <ATMCard  cardNumber='1234567812345678' cardHolder='Chand Rahmani' expiry='07/28' cvv='123' />

  </Box>
};

export default Landing;
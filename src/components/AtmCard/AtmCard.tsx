import React, { useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Paper,
  Button,
} from '@mui/material';

type ATMCardProps = {
  cardNumber: string;
  cardHolder: string;
  expiry: string;
  cvv: string;
};

const ATMCard: React.FC<ATMCardProps> = ({
  cardNumber,
  cardHolder,
  expiry,
  cvv,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <Box sx={{ perspective: 1000 }}>
      <Box
        sx={{
          position: 'relative',
          width: isMobile ? '100%' : 400,
          height: 220,
          mx: 'auto',
          mb: 2,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: 'transform 0.8s',
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'none',
          }}
        >
          {/* Front Side */}
          <Paper
            elevation={4}
            sx={{
              backfaceVisibility: 'hidden',
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
              borderRadius: '20px',
              color: '#fff',
              p: 3,
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              ATM / Debit Card
            </Typography>

            <Typography variant="h5" sx={{ letterSpacing: '2px', mb: 3 }}>
              {cardNumber.replace(/(.{4})/g, '$1 ')}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 16,
                left: 24,
                right: 24,
              }}
            >
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  Card Holder
                </Typography>
                <Typography variant="body1">{cardHolder}</Typography>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  Expires
                </Typography>
                <Typography variant="body1">{expiry}</Typography>
              </Box>
            </Box>
          </Paper>

          {/* Back Side */}
          <Paper
            elevation={4}
            sx={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #000000, #434343)',
              borderRadius: '20px',
              color: '#fff',
              p: 3,
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Box
                sx={{
                  height: '40px',
                  background: '#111',
                  borderRadius: '4px',
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              CVV
            </Typography>
            <Box
              sx={{
                background: '#fff',
                color: '#000',
                width: '80px',
                textAlign: 'center',
                borderRadius: '4px',
                p: '4px',
              }}
            >
              {cvv}
            </Box>
            <Typography
              variant="caption"
              sx={{ position: 'absolute', bottom: 16, right: 24, opacity: 0.6 }}
            >
              Signature Required
            </Typography>
          </Paper>
        </Box>
      </Box>

      <Box textAlign="center">
        <Button onClick={handleFlip} variant="contained" color="primary">
          {flipped ? 'Show Front' : 'Show Back'}
        </Button>
      </Box>
    </Box>
  );
};

export default ATMCard;

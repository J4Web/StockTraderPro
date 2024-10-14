import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import Image from 'next/image';
import UpTrend from '../../../public/trends/upward.svg';

const Footer = () => {
  return (
    <Box
      sx={{
        px: 3,
        py: 4,
        backgroundColor: 'inherit', 
        borderTop: '1px solid #333',
        borderRadius: '1rem 1rem 0 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2, // Margin bottom for spacing
        }}
      >
        <Image src={UpTrend} alt="upward trend" width={35} height={35} />
        <Link
          href={'/'}
          style={{
            color: 'white',
            letterSpacing: '.1rem',
            marginLeft: '0.5rem', // Space between logo and text
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'inherit',
              fontWeight: '600',
              fontSize: {
                xs: '1rem',
                sm: '1.25rem',
              },
            }}
          >
            STOCK TRADER PRO
          </Typography>
        </Link>
      </Box>

      <hr style={{ border: 'none', height: '1px', backgroundColor: '#333', width: '100%' }} />

      {/* Copyright and Social Links */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          pt: 2,
          flexDirection: {
            xs: 'column', // Stack vertically on mobile
            sm: 'row', // Align horizontally on larger screens
          },
        }}
      >
        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'inherit',
            fontWeight: '500',
            textAlign: {
              xs: 'center',
              sm: 'left',
            },
            pb: {
              xs: 2,
              sm: 0,
            },
            color: '#aaa', // Lighter text color
          }}
        >
          © {new Date().getFullYear()} j4web. All rights reserved
        </Typography>

        {/* Social Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link
            target="_blank"
            href={'https://github.com/J4Web/StockTraderPro'}
            style={{ color: 'white' }}
          >
            <GitHub
              sx={{
                height: '1.8rem',
                width: '1.8rem',
                '&:hover': {
                  color: '#66BB6A', 
                },
              }}
            />
          </Link>
          <Link
            target="_blank"
            href={'https://www.linkedin.com/in/j4web'}
            style={{ color: 'white' }}
          >
            <LinkedIn
              sx={{
                height: '1.8rem',
                width: '1.8rem',
                '&:hover': {
                  color: '#66BB6A', 
                },
              }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

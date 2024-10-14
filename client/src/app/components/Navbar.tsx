'use client';
import React, { useState, useEffect, FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  useMediaQuery, useTheme,
} from '@mui/material';
import { Person, CandlestickChart } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '@/lib/redux/api/profileApi';
import { signout } from '@/lib/redux/slices/authSlice';
import Image from 'next/image';
import UpTrend from '../../../public/trends/upward.svg'

const settings = ['Sign out'];

const Navbar: FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const pathname = usePathname();
  const dispatch = useDispatch();

  const { isSignedIn } = useSelector((state: any) => state.auth);

  const [logout] = useLogoutMutation();

  useEffect(() => {
    const handleScroll = () => {
      // Here, 100 is the amount of pixels scrolled before changing the navbar style
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    userLogout();
  };

  // Handle user logout
  const userLogout = async () => {
    const resLogout = await logout('');
    dispatch(signout(resLogout));
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
        width: '100vw',
        boxShadow: 'none',
        transition: 'backgroundColor 0.5s',
        zIndex: 10,
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
        <Box
  sx={{
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',

  }}
>
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      flex: 1,
      minWidth: 0,
    }}
  >
    <Image
      src={UpTrend}
      alt="upward trend"
      width={35}
      height={35}
    />
    <Link
      href={'/'}
      style={{
        color: 'white',
        fontWeight: 700,
        letterSpacing: '.1rem',
      }}
    >
     <Typography
      noWrap
      sx={{
        fontWeight: '600',
        fontSize: {
          xs: '1rem', // Smaller size on mobile
          md: '1rem',
        },
        whiteSpace: 'nowrap', // Prevent wrapping of text
        overflow: 'hidden', // Ensure long text gets hidden gracefully
        textOverflow: 'ellipsis', // Add ellipsis if text overflows
        lineHeight: 1.5, // Adjust line height for better spacing
      }}
    >
      {isSmallScreen ? 'STP' : 'STOCK TRADER PRO'}
    </Typography>
    </Link>
  </Box>

  {/* Right items */}
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: isSmallScreen ? 1 : 2,
      flexShrink: 0,
    }}
  >
    {/* {!isSignedIn && pathname !== '/signin' && pathname !== '/signup' && (
      <>
        <Link href={'/signin'} className='nav_link'>
          SignIn
        </Link>
        <Link href={'/signup'} className='nav_link'>
          SignUp
        </Link>
      </>
    )} */}

    {isSignedIn && (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title='Open settings'>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar sx={{ background: 'transparent' }}>
              <Person
                sx={{
                  color: 'white',
                }}
              />
            </Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '40px' }}
          id='menu-appbar'
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          disableScrollLock={true}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign='center'>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    )}
  </Box>
</Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

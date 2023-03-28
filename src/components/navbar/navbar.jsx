import { Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from './../../constans/index';
import { colors } from './../../constans/colors';
import { Searchbar } from '../';
const Navbar = () => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={2}
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <Link to={'/'} style={{display:'flex',alignItems: 'center'}}>
        <img src={logo} alt='logo' height={50} /><span style={{fontSize:'30px', textDecoration:'none', color:'#000', fontWeight:'bold'}}>My Tube</span>
      </Link>
      <Searchbar/>
      <Box />
    </Stack>
  );
};

export default Navbar;

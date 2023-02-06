import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../Styles/BasicMenu.scss'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='Hamb-Menu'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><a className='Nav-Tags' href="/cake">Cakes</a></MenuItem>
        <MenuItem onClick={handleClose}><a className='Nav-Tags'href="/macaroons">Macaroons</a></MenuItem>
        <MenuItem onClick={handleClose}><a className='Nav-Tags' href="/minicakes">MiniCakes</a></MenuItem>
        <MenuItem onClick={handleClose}><a className='Nav-Tags' href="/candybar">CandyBar</a></MenuItem>
        <MenuItem onClick={handleClose}><a className='Nav-Tags' href="/order">Place Your Order</a></MenuItem>
        <MenuItem onClick={handleClose}><a className='Nav-Tags' href="/about">About Us</a></MenuItem>
      </Menu>
    </div>
  );
}

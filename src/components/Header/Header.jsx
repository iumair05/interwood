'use client';
import React, { useState } from 'react';
import {
  Button,
  Drawer,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Collapse,
  Badge,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { routes } from '@/utils/routes';
const navIcons = {
  Home: { icon: <HomeIcon />, path: '/' },
  Office: { icon: <BusinessIcon />, path: '/office' },
  // Reviews: { icon: <RateReviewIcon />, path: '/reviews' },
  Contact: { icon: <ContactMailIcon />, path: '/contact' },
};

const homeDropdownSections = [
  {
    title: 'Bedroom',
    items: ['Bed Sets', 'Bedside Tables', 'Dressing Tables', 'Wall Mirrors', 'Free-Standing', 'Clothes Stands'],
  },
  {
    title: 'Living',
    items: ['Sofa Sets', 'Sofa Beds'],
  },
  {
    title: 'Dining',
    items: ['Dining Table Sets', 'Dining Tables', 'Dining Chairs', 'Dining Trolleys', 'Bar Stools'],
  },
  {
    title: 'Seating',
    items: ['Occasional Chairs', 'Ottomans'],
  },
  {
    title: 'Study',
    items: ['Study Tables'],
  },
  {
    title: 'Kids',
    items: ['Kids Single Beds', 'Kids Bunk Beds'],
  },
];

const officeDropdownSections = [
  {
    title: 'Workspaces',
    items: ['Private Offices', 'Meeting Rooms', 'Hot Desks'],
  },
  {
    title: 'Amenities',
    items: ['Wi-Fi', 'Coffee Bar', 'Lounge Area'],
  },
  {
    title: 'Locations',
    items: ['Downtown', 'Uptown', 'Suburban'],
  },
  {
    title: 'Support',
    items: ['Help Desk', 'Maintenance', 'Security'],
  },
  {
    title: 'Membership',
    items: ['Plans', 'Pricing', 'Corporate'],
  },
  {
    title: 'Resources',
    items: ['Events', 'Blog', 'Case Studies'],
  },
];
const Header = () => {

  const { items } = useSelector(state => state.cart);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElHome, setAnchorElHome] = useState(null);
  const [anchorElOffice, setAnchorElOffice] = useState(null);
  const [openMobileHome, setOpenMobileHome] = useState(false);
  const [openMobileOffice, setOpenMobileOffice] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  const openHomeMenu = Boolean(anchorElHome);
  const openOfficeMenu = Boolean(anchorElOffice);
  return (
    <header className="w-full sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <Link href="/" className="font-bold text-xl">Logo</Link>
      
      <div className="hidden md:flex items-center justify-between w-full">
        
        <div className="w-1/3"></div>
        <div className="flex-1 flex justify-center">
          <nav className="flex space-x-8 items-center">
            {/* Home Dropdown */}
            <div
              onMouseEnter={(e) => setAnchorElHome(e.currentTarget)}
              onMouseLeave={() => setAnchorElHome(null)}
              className="relative"
            >
              <Button
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ color: 'gray', textTransform: 'none' }}
              >
                Home
              </Button>
              <Menu
                anchorEl={anchorElHome}
                open={openHomeMenu}
                onClose={() => setAnchorElHome(null)}
                MenuListProps={{ onMouseLeave: () => setAnchorElHome(null) }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'left',
                  horizontal: 'center',
                }}
                sx={{
                  '& .MuiPaper-root': {
                    width: '100%',
                    maxWidth: '72rem',
                    margin: 'auto',
                    padding: '1.5rem',
                    backgroundColor: '#fff',
                    boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                    marginTop: '1rem',
                  },
                }}
              >
                <div className="flex flex-row gap-8 w-full">
                  {homeDropdownSections.map((section, idx) => (
                    <div key={idx} className="flex-1 min-w-0">
                      <p className="text-base font-semibold text-[#c4a58a] mb-4">{section.title}</p>
                      <div className="flex flex-col">
                        {section.items.map((item, i) => (
                          <MenuItem key={i} sx={{ color: 'gray', fontSize: '14px' }} onClick={() => setAnchorElHome(null)}>
                            {item}
                          </MenuItem>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Menu>
            </div>

            {/* Office Dropdown */}
            <div
              onMouseEnter={(e) => setAnchorElOffice(e.currentTarget)}
              onMouseLeave={() => setAnchorElOffice(null)}
              className="relative"
            >
              <Button
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ color: 'gray', textTransform: 'none' }}
              >
                Office
              </Button>
              <Menu
                anchorEl={anchorElOffice}
                open={openOfficeMenu}
                onClose={() => setAnchorElOffice(null)}
                MenuListProps={{ onMouseLeave: () => setAnchorElOffice(null) }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                sx={{
                  '& .MuiPaper-root': {
                    width: '100%',
                    maxWidth: '72rem',
                    margin: 'auto',
                    padding: '1.5rem',
                    marginTop: '1rem',
                  },
                }}
              >
                <div className="flex flex-row gap-8 w-full">
                  {officeDropdownSections.map((section, idx) => (
                    <div key={idx} className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#c4a58a] mb-4">{section.title}</p>
                      <div className="flex flex-col">
                        {section.items.map((item, i) => (
                          <MenuItem key={i} sx={{ color: 'gray', fontSize: '14px' }} onClick={() => setAnchorElOffice(null)}>{item}</MenuItem>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Menu>
            </div>

            {/* Static Links */}
            {['Contact'].map((link, index) => (
              <Link key={index} href={`/${link.toLowerCase()}`} className="text-gray-600 text-sm hover:text-gray-800">{link}</Link>
            ))}
          </nav>
        </div>

        {/* Right side - Buttons and icons */}
        <div className="w-1/3 flex justify-end items-center space-x-4">
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000',
              borderRadius: '8px',
              textTransform: 'none',
              color: '#fff',
              '&:hover': { backgroundColor: '#111' },
            }}
          >
            3D Build
          </Button>

          <div className="flex items-center space-x-2">
            <IconButton>
              <PersonIcon className="cursor-pointer" />
            </IconButton>

            <Link href={`${routes.cart}`}>
              <IconButton>
                <Badge badgeContent={items.length} color="error" size="small">
                  <ShoppingCartIcon className="cursor-pointer" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </div>
      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <div className="w-72 h-full flex flex-col p-6 bg-white overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold text-black">Logo</span>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <nav className="flex flex-col space-y-4">
          {/* Home Collapse */}
          <div className="flex flex-col">
            <button
              onClick={() => setOpenMobileHome((prev) => !prev)}
              className="flex justify-between items-center text-gray-700 hover:text-black transition-colors mb-4"
            >
              <div className="flex items-center space-x-2">
                <ListItemIcon sx={{ minWidth: 0 }}>{navIcons['Home'].icon}</ListItemIcon>
                <span>Home</span>
              </div>
              {openMobileHome ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
            </button>
            <Collapse in={openMobileHome} timeout="auto" unmountOnExit>
              <div className="pl-4 mt-2 flex flex-col space-y-3">
                {homeDropdownSections.map((section, sIdx) => (
                  <div key={sIdx}>
                    <p className="text-xs font-bold text-[#c4a58a]">{section.title}</p>
                    {section.items.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="text-sm text-gray-600 hover:text-black ml-2 block mb-4"
                        onClick={toggleDrawer(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </Collapse>
          </div>
          {/* Office Collapse */}
          <div className="flex flex-col">
            <button
              onClick={() => setOpenMobileOffice((prev) => !prev)}
              className="flex justify-between items-center text-gray-700 hover:text-black transition-colors mb-4"
            >
              <div className="flex items-center space-x-2">
                <ListItemIcon sx={{ minWidth: 0 }}>{navIcons['Office'].icon}</ListItemIcon>
                <span>Office</span>
              </div>
              {openMobileOffice ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
            </button>
            <Collapse in={openMobileOffice} timeout="auto" unmountOnExit>
              <div className="pl-4 mt-2 flex flex-col space-y-3">
                {officeDropdownSections.map((section, sIdx) => (
                  <div key={sIdx}>
                    <p className="text-xs font-bold text-[#c4a58a]">{section.title}</p>
                    {section.items.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="text-sm text-gray-600 hover:text-black ml-2 block mb-4"
                        onClick={toggleDrawer(false)}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </Collapse>
          </div>
          {/* Static mobile links */}
          {['Contact'].map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors mb-4"
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon sx={{ minWidth: 0 }}>{navIcons[link].icon}</ListItemIcon>
              <span>{link}</span>
            </a>
          ))}
        </nav>
        <div className="mt-6">
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#000',
              borderRadius: '8px',
              textTransform: 'none',
              color: '#fff',
              '&:hover': { backgroundColor: '#111' },
            }}
            onClick={toggleDrawer(false)}
          >
            3D Build
          </Button>
        </div>
      </div>
    </Drawer>
    </header>
  );
};
export default Header;
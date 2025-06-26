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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const navIcons = {
  Home: <HomeIcon />,
  Office: <BusinessIcon />,
  Reviews: <RateReviewIcon />,
  Contact: <ContactMailIcon />,
};

// HOME: Menu structured in categories
const homeDropdownSections = [
  {
    title: 'Bedroom',
    items: ['Bed Sets', 'Bedside Tables', 'Dressing Tables', 'Wall Mirrors', 'Free-Standing Wardrobes', 'Clothes Stands'],
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
    items: ['Occasional Chairs', 'Ottomans, Stools & Benches'],
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

// OFFICE: Menu structured in categories
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

      <div className="font-bold text-xl">Logo</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
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
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                '& .MuiPaper-root': {
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '2rem',
                  padding: '1.5rem',
                  maxWidth: '900px',
                  backgroundColor: '#fff',
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                },
              }}
            >
              {homeDropdownSections.map((section, idx) => (
                <div key={idx} className="flex flex-col min-w-[400px]">
                  <p className="text-base font-semibold text-gray-900 mb-2">{section.title}</p>
                  {section.items.map((item, i) => (
                    <MenuItem key={i} sx={{ paddingLeft: '0.5rem' }}>
                      {item}
                    </MenuItem>
                  ))}
                </div>
              ))}
            </Menu>
          </div>
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
              sx={{
                '& .MuiPaper-root': {
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '2rem',
                  padding: '1rem',
                  maxWidth: '800px',
                },
              }}
            >
              {officeDropdownSections.map((section, idx) => (
                <div key={idx} className="flex flex-col min-w-[400px]">
                  <p className="text-sm font-semibold text-gray-800 mb-2">{section.title}</p>
                  {section.items.map((item, i) => (
                    <MenuItem key={i}>{item}</MenuItem>
                  ))}
                </div>
              ))}
            </Menu>
          </div>

          {/* Static Links */}
          {['Reviews', 'Contact'].map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            borderRadius: '8px',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#111' },
          }}
        >
          3D Build
        </Button>
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
            <span className="text-xl font-semibold">Logo</span>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <nav className="flex flex-col space-y-2">
            {/* Home Collapse */}
            <div className="flex flex-col">
              <button
                onClick={() => setOpenMobileHome((prev) => !prev)}
                className="flex justify-between items-center text-gray-700 hover:text-black transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <ListItemIcon sx={{ minWidth: 0 }}>{navIcons['Home']}</ListItemIcon>
                  <span>Home</span>
                </div>
                {openMobileHome ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
              </button>
              <Collapse in={openMobileHome} timeout="auto" unmountOnExit>
                <div className="pl-4 mt-2 flex flex-col space-y-3">
                  {homeDropdownSections.map((section, sIdx) => (
                    <div key={sIdx}>
                      <p className="text-xs font-bold text-gray-800">{section.title}</p>
                      {section.items.map((item, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="text-sm text-gray-600 hover:text-black ml-2 block"
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
                className="flex justify-between items-center text-gray-700 hover:text-black transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <ListItemIcon sx={{ minWidth: 0 }}>{navIcons['Office']}</ListItemIcon>
                  <span>Office</span>
                </div>
                {openMobileOffice ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
              </button>
              <Collapse in={openMobileOffice} timeout="auto" unmountOnExit>
                <div className="pl-4 mt-2 flex flex-col space-y-3">
                  {officeDropdownSections.map((section, sIdx) => (
                    <div key={sIdx}>
                      <p className="text-xs font-bold text-gray-800">{section.title}</p>
                      {section.items.map((item, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="text-sm text-gray-600 hover:text-black ml-2 block"
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
            {['Reviews', 'Contact'].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors"
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon sx={{ minWidth: 0 }}>{navIcons[link]}</ListItemIcon>
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

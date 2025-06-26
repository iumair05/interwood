"use client";
import Image from "next/image";
import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
  SvgIcon,
} from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import FooterImage from "../../../public/images/footerImage.png";

const TikTokIcon = (props) => (
  <SvgIcon viewBox="0 0 448 512" {...props}>
    <path d="M448,209.3v-63.4c-45.9,0-88.2-14.2-123.2-38.4v128.4c0,142.6-115.5,258.1-258.1,258.1
      C29.4,493,0,463.6,0,427.9s29.4-65.1,65.1-65.1c35.7,0,65.1,29.4,65.1,65.1c0,11.1-2.9,21.5-8,30.6
      c52.1-17.1,89.8-67.2,89.8-126.2V0h89.8C301.8,58.3,370,112.6,448,112.6z" />
  </SvgIcon>
);

export default function Footer() {
  return (
    <Box component="footer" className="relative overflow-hidden -mt-1">
    {/* Background Image */}
    <Box
      className="absolute inset-0 -z-10"
      
      sx={{
        backgroundImage: `url(${FooterImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  
    {/* Footer Content */}
    <Container maxWidth="lg" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <Grid container spacing={6} className="text-white">
        {/* -------- Column 1 -------- */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="font-semibold mb-4">
            INFORMATION
          </Typography>
          <ul className="space-y-2 text-sm">
            {[
              "About Us",
              "Store Locator",
              "Product Catalogues",
              "Blog",
              "Payments",
              "Shipping",
              "Authorized Dealers",
              "Careers",
              "Terms of Offers for Sale",
              "Terms of Use",
              "Privacy Policy",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Grid>
  
        {/* -------- Column 2 -------- */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="font-semibold mb-4">
            USER AREA
          </Typography>
          <ul className="space-y-2 text-sm">
            {[
              "Corporate",
              "Contact Us",
              "Corporate Form",
              "Information / Lead Form",
              "Rewards",
              "Loyalty Form",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Grid>
  
        {/* -------- Column 3 -------- */}
        <Grid item xs={12} md={6}>
          <Box className="flex flex-col gap-6">
            {/* Social Icons */}
            <div>
              <Typography variant="h6" className="font-semibold mb-2">
                FOLLOW US
              </Typography>
              <Box className="flex flex-wrap gap-3">
                {[TikTokIcon, YouTubeIcon, LinkedInIcon, InstagramIcon, TwitterIcon, FacebookIcon].map(
                  (Icon, i) => (
                    <IconButton
                      key={i}
                      aria-label="social-link"
                      className="text-white hover:text-gray-300"
                    >
                      <Icon fontSize="medium" />
                    </IconButton>
                  )
                )}
              </Box>
            </div>
  
            {/* Newsletter */}
            <div>
              <Typography variant="h6" className="font-semibold mb-2">
                JOIN OUR MAILING LIST
              </Typography>
              <Typography variant="body2" className="mb-4 max-w-md">
                Subscribe to our newsletter to get the latest news and product
                updates directly to your email. Just a second to subscribe
                today 👇
              </Typography>
  
              <Box
                component="form"
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 max-w-md border-b border-white"
              >
                <TextField
                  variant="standard"
                  placeholder="Enter your mail address"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                    className: "placeholder-white/70 text-white",
                  }}
                  sx={{ input: { py: 1 } }}
                />
                <IconButton type="submit" className="text-white">
                  <ArrowForwardRoundedIcon />
                </IconButton>
              </Box>
            </div>
          </Box>
        </Grid>
  
        {/* -------- Column 4 -------- */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" className="font-semibold mb-4">
            CONTACT INFO
          </Typography>
          <Typography variant="body2" className="mb-2">
            021-111-203-203
          </Typography>
          <Typography variant="body2">info@jaeedsoft.com</Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
  
  );
}

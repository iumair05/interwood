"use client";

import { Box, Button, Checkbox, TextField, Typography, FormControlLabel, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const SubscribeButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#bfa58a", // Muted brown color
  color: "#fff",
  textTransform: "none",
  padding: "8px 24px",
  fontWeight: 500,
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#a68c75",
  },
}));

export default function NewsletterSignup() {
  return (
    <Box className="flex justify-center items-center py-12 ">
      <Container className=" bg-white rounded-xl shadow-sm p-8 text-center !max-w-3xl">
        <Typography variant="h5" component="h2" className="!font-bold !mb-2">
          Join Our Newsletter
        </Typography>
        <Typography variant="body2" className="text-gray-600 !mb-6">
          Subscribe to receive updates on new collections, special offers, and exclusive design tips.
        </Typography>

        <Box className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
          <TextField
            variant="outlined"
            placeholder="Enter your email address"
            size="small"
            fullWidth
            className="bg-white"
          />
          <SubscribeButton>
            Subscribe
          </SubscribeButton>
        </Box>

        <FormControlLabel
          control={<Checkbox size="small" />}
          label={
            <Typography variant="caption" className="text-gray-500">
              I agree to receive marketing emails and accept the Privacy Policy.
            </Typography>
          }
          className="justify-center"
        />
      </Container>
    </Box>
  );
}

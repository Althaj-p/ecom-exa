import { Box, Container, Typography, IconButton, Grid } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4 }}>
      <Container>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              We are committed to providing the best service and resources to help
              our customers achieve their goals. Stay connected with us for more updates.
            </Typography>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body2">+1 234 567 890</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body2">contact@yourdomain.com</Typography>
            </Box>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" href="https://facebook.com">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        {/* Bottom Note */}
        <Box sx={{ textAlign: 'center', mt: 4, pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

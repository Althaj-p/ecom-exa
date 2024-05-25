import { Box, IconButton,Container} from "@mui/material";
import React from "react";

export default function Footer() {
  return (
      <Box sx={{ backgroundColor: 'primary.main', p: 2,color:'white' }}>
        <Container>
      <Box sx={{ display: 'flex',justifyContent:'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
      <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      This Box uses MUI System props for quick customization.
    </Box>
      <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      This Box uses MUI System props for quick customization.
    </Box>
      <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      This Box uses MUI System props for quick customization.
    </Box>
      </Box>
    </Container>
    </Box>
  );
}

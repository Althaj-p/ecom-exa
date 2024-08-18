import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";

const categoryItems = [
  { title: "Watches111", image: "https://via.placeholder.com/150?text=Watches" },
  { title: "TVs", image: "https://via.placeholder.com/150?text=TVs" },
  { title: "Printers", image: "https://via.placeholder.com/150?text=Printers" },
  { title: "Keyboards", image: "https://via.placeholder.com/150?text=Keyboards" },
  { title: "Watches", image: "https://via.placeholder.com/150?text=Watches" },
  { title: "TVs", image: "https://via.placeholder.com/150?text=TVs" },
  { title: "Printers", image: "https://via.placeholder.com/150?text=Printers" },
  { title: "Keyboards", image: "https://via.placeholder.com/150?text=Keyboards" },
  { title: "Watches", image: "https://via.placeholder.com/150?text=Watches" },
  { title: "Keyboards111", image: "https://via.placeholder.com/150?text=Keyboards" },
];

export default function CategorySection() {
  return (
    <Box sx={{ mt: 2, p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Best of Electronics
      </Typography>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {categoryItems.map((item, index) => (
          <Card key={index} sx={{ minWidth: 200, maxWidth: 230 }}>
            <CardMedia
              component="img"
              height="250"
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

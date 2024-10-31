import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemButton, ListItemIcon, Radio, Typography, Button, Box, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

const addresses = [
  {
    id: 1,
    name: 'Mohammed Althaj',
    type: 'WORK',
    phone: '7902559371',
    address: 'Primalcodes Technologies, 2nd floor, Jaslu Centre, Near Post Office West Hill, Calicut 673005, Kerala, India, Kozhikode',
  },
  {
    id: 2,
    name: 'Mohammed Althaj P',
    type: 'HOME',
    phone: '7902559371',
    address: '480, Pandikkad melattur road, Kakkulam highschool padi, Malappuram, Kerala - 676521',
  },
];

export default function AddressSelection() {
  const [selectedAddress, setSelectedAddress] = useState(1);

  const handleSelectAddress = (id) => {
    setSelectedAddress(id);
  };

  return (
    <Box sx={{padding: '24px', bgcolor: '#f5f5f5'}}>
      <Typography variant="h6" gutterBottom>
        2 DELIVERY ADDRESS
      </Typography>

      <List>
        {addresses.map((address) => (
          <React.Fragment key={address.id}>
            <ListItem
              disablePadding
              sx={{
                bgcolor: selectedAddress === address.id ? 'primary.light' : 'background.paper',
                borderRadius: 2,
                mb: 1,
                boxShadow: selectedAddress === address.id ? 1 : 0,
              }}
            >
              <ListItemButton onClick={() => handleSelectAddress(address.id)}>
                <ListItemIcon>
                  <Radio checked={selectedAddress === address.id} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1">
                      {address.name} <Typography component="span" variant="caption" color="text.secondary">({address.type})</Typography>
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="body2">{address.address}</Typography>
                      <Typography variant="body2">Phone: {address.phone}</Typography>
                    </>
                  }
                />
              </ListItemButton>

              <Button startIcon={<EditIcon />} size="small">
                Edit
              </Button>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Add a new address" />
          </ListItemButton>
        </ListItem>
      </List>

      {/* <Box sx={{ mt: 2 ,justifyContent:'center',display:'flex'}} >
        <Button variant="contained"  color="primary">
          Deliver Here
        </Button>
      </Box> */}
    </Box>
  );
}

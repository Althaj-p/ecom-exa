// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Radio from '@mui/material/Radio';
// import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';

// export default function AddressList() {
//   const [selectedValue, setSelectedValue] = React.useState(null); // Single selection

//   const handleToggle = (value) => () => {
//     setSelectedValue(value); // Set the selected value
//   };

//   return (
//     <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '8px', boxShadow: 1, padding: 2 }}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `radio-list-label-${value}`;

//         return (
//           <ListItem
//             key={value}
//             secondaryAction={
//               <IconButton edge="end" aria-label="comments">
//                 <CommentIcon />
//               </IconButton>
//             }
//             disablePadding
//           >
//             <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//               <ListItemIcon>
//                 <Radio
//                   edge="start"
//                   checked={selectedValue === value}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{ 'aria-labelledby': labelId }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`Address ${value + 1}`} />
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }
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
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
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

      <Box sx={{ mt: 2 }}>
        <Button variant="contained" fullWidth color="primary">
          Deliver Here
        </Button>
      </Box>
    </Box>
  );
}

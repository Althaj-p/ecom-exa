import React from 'react';
import { Box, Typography, Button, Card, CardContent, TextField, Divider, Radio, RadioGroup, FormControlLabel, IconButton } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function PaymentOptions() {
  return (
    <Box sx={{ padding: '24px', bgcolor: '#f5f5f5' }}>
      <Typography variant="h6" gutterBottom color="primary">
        PAYMENT OPTIONS
      </Typography>

      <Box sx={{ bgcolor: '#fff', p: 2, borderRadius: 1, boxShadow: 1, mt: 2 }}>
        <Box sx={{ bgcolor: '#FFF3CD', p: 1, display: 'flex', alignItems: 'center' }}>
          <AccessTimeIcon color="warning" sx={{ mr: 1 }} />
          <Typography variant="body2" color="textSecondary">
            Complete payment in <strong>00 : 13 : 44</strong>
          </Typography>
        </Box>

        <RadioGroup defaultValue="debitCard" sx={{ mt: 2 }}>
          <FormControlLabel
            value="debitCard"
            control={<Radio />}
            label={
              <Box display="flex" alignItems="center">
                <Typography variant="body2">Federal Bank Debit Card</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>xxxx xxxx xxxx 3065</Typography>
              </Box>
            }
          />
          <Box sx={{ pl: 4, mt: 1, display: 'flex', alignItems: 'center' }}>
            <TextField label="CVV" variant="outlined" size="small" sx={{ width: '80px' }} />
            <IconButton>
              <InfoOutlinedIcon fontSize="small" color="action" />
            </IconButton>
            <Button variant="contained" color="warning" sx={{ ml: 2 }}>CONTINUE</Button>
          </Box>

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            value="upi"
            control={<Radio />}
            label={
              <Box display="flex" alignItems="center">
                <Typography variant="body2">UPI</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>Pay by any UPI app</Typography>
              </Box>
            }
          />

          <FormControlLabel
            value="wallets"
            control={<Radio />}
            label={
              <Box display="flex" alignItems="center">
                <Typography variant="body2">Wallets</Typography>
              </Box>
            }
          />

          <FormControlLabel
            value="creditDebitCard"
            control={<Radio />}
            label={
              <Box display="flex" alignItems="center">
                <Typography variant="body2">Credit / Debit / ATM Card</Typography>
              </Box>
            }
          />
        </RadioGroup>
      </Box>
    </Box>
  );
}

export default PaymentOptions;

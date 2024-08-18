// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Typography, Button, Grid, Paper } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     padding: theme.spacing(2),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// const ProductDetailPage = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Typography variant="h4" gutterBottom>
//             Product Name
//           </Typography>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>
//             {/* Product Image */}
//             <img src="https://via.placeholder.com/300x200" alt="Product" />
//           </Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>
//             {/* Product Details */}
//             <Typography variant="h6" gutterBottom>
//               Price: $XX.XX
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </Typography>
//             <Button variant="contained" color="primary">
//               Add to Cart
//             </Button>
//           </Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default ProductDetailPage;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, Paper, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
}));

const ProductDetailPage = () => {
  const classes = useStyles();

  // Example Product Data (Replace with actual data)
  const product = {
    name: 'Product Name',
    imageUrl: 'https://via.placeholder.com/300x200',
    price: '$XX.XX',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <img src={product.imageUrl} alt={product.name} className={classes.image} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Price: {product.price}
            </Typography>
            <Divider />
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetailPage;


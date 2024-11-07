import ProductItem from "../ProductItem";
import { Grid, Typography } from "@mui/material";

export default function OfferProducts({ products }) {
    if (!products || products.length === 0)return null;
    return (
        <Grid item xs={12} md={12} sx={{ mt: 2, p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Top Offers
            </Typography>
            <Grid container spacing={3} mt={1}>
                {products.map((product) => (
                    // Wrapping ProductItem with Grid item for correct layout
                    <Grid key={product.id} item xs={12} sm={6} md={3}>
                        <ProductItem product={product} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

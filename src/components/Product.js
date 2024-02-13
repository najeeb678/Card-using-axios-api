import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Product = (props) => {
  return (
    
    <>
     
    <Card sx={{ maxWidth: 320,minHeight:370,margin:'20px 10px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.thumbnail}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
        Price: ${props.price}
        </Button>
        <Button size="small" color="primary">
         Stock {props.stock}
        </Button>
      </CardActions>
    </Card>
    </>);
};

export default Product;


// import React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// const Product = (props) => {

//   return (
//     <>
//     <Typography variant="h2" style={{ textAlign: "center" }}>Fetching Data Using Axios</Typography>
//     <Card className={props.className} sx={{ maxWidth: 250 }}>
//       <CardMedia sx={{ height: 140 }} image={props.image} />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {props.productName}
//         </Typography>
//         <Typography variant="h5" color="text.secondary">
//           Price: {props.price}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button variant="contained" >Add to Cart</Button>
//       </CardActions>
//     </Card></>
//   );
// };
// export default Product;

// const Product = (product) => {
//   const { productName, image, price } = product;
//   return (
//     <Card sx={{ maxWidth: 250 }}>
//       <CardMedia sx={{ height: 140 }} image={image} />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {productName}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {price}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button variant="contained">Add to Cart</Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default Product;

import React, { useEffect, useState } from "react";
import Product from "./components/Product";

import "./App.css";

import axios from "axios";
import { Container, Grid, Typography } from "@mui/material";


function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const[Error,setError]=useState(null)

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setFetchedData(response.data.products);
      })
      .catch((err) => {
        console.log("Error :", err);
        setError(err);
      });
  }, []);

  return (
    <Container>
      <div className="cardContainer" >
        <Typography variant="h2"sx={{Padding :'20px' , margin:'50px', fontStyle:'bold'}}>Fetching Data Using Axios</Typography>
        {Error && <Typography variant="h4" color="error">Error: {Error.message}</Typography>}




        <Grid container spacing={1}>
          {fetchedData.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Product {...product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default App;

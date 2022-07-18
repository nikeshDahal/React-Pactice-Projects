import * as React from "react";
import classes from './About.module.css'
import Card from "@mui/material/Card";
import pic from "../static/Nikesh.jpg";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <Card sx={{ maxWidth:285, margin: "auto" , marginTop:"2rem" , height:'275px' , padding:'1%' , textAlign:"center" }}>
        <CardMedia
        className = {classes.cardmedia}
        component="img"
        image={pic}
        alt="Nikesh"
        style={{ width:"25%"}}
      />
      <hr/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nikesh Dahal
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Developer || Web-services 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        EBP- 00483
        </Typography>
       
      </CardContent>
    </Card>
  );
}







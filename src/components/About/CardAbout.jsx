import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function CardAbout({ image, title, description }) {
  return (
    <div>
      <Card className="card-about">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
            className="image"
          />
          <CardContent style={{ padding: "10% 0" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                fontSize: "16px",
                letterSpacing: ".15 rem",
                fontWeight: "bold",
                margin: "10px 0",
                color: "rgb(0 0 0 / 65%)",
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

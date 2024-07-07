import React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import "../../App.css";
export default function Subscribe() {
  const [subsribe, setSubscribe] = useState("");
  function handleSubsribe(e) {
    console.log(subsribe);
  }
  return (
    <div
      className="center-column"
      style={{
        height: "70vh",
        backgroundColor: "#27292c",
        color: "#FFFFFF",
        marginBlock: "5%",
      }}
    >
      <p className="title">Subscribe</p>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum vestibulum.{" "}
      </p>
      <Stack
        spacing={0}
        direction="row"
        style={{
          justifyContent: "center",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <input
          label="Your Email"
          variant="filled"
          style={{
            width: "40%",
            borderRadius: "20px 0 0 20px",
            border: "none",
            outline: "none",
            padding: "10px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
          value={subsribe.trim(" ")}
          onChange={(e) => {
            setSubscribe(e.target.value);
          }}
        />
        <button
          className="dark-btn subs"
          style={{
            borderRadius: "0 20px 20px 0",
          }}
          onClick={handleSubsribe}
        >
          Subscribe
        </button>
      </Stack>
    </div>
  );
}

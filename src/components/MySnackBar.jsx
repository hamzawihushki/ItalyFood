import * as React from "react";

import Snackbar from "@mui/material/Snackbar";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
export default function MySnackBar({ open, message }) {
  return (
    <Stack>
      <div>
        <Snackbar open={open} autoHideDuration={6000}>
          <Alert variant="filled" severity="success">
            {message}
          </Alert>
        </Snackbar>
      </div>{" "}
    </Stack>
  );
}

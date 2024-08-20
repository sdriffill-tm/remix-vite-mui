import { Container, Typography, Link, Button, TextField } from "@mui/material";
// import Stack from "@mui/material-pigment-css/Stack";
import type { MetaFunction } from "@remix-run/node";
import ProTip from "~/components/ProTip";
import { Link as RemixLink } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Container maxWidth="sm">
      {/* <Stack sx={{ my: 4 }} spacing={2}> */}
      <div sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }} color="primary">
          Remix + MUI + Vite Example
        </Typography>
        <ProTip />
        <TextField label="Text Field" />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <RemixLink to="/error">Test Error Boundary</RemixLink>
        <Copyright />
      </div>
      {/* </Stack> */}
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

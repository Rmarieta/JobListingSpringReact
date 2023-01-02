import * as React from "react";
import { Box, Tab, Typography } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Create from "./Create";

export default function Home() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          alignItems: "center",
          backgroundColor: "#333333",
          padding: "10px",
        }}
      >
        <Typography variant="h3" sx={{ margin: "2%" }} align="center">
          Employer Dashboard
        </Typography>
        <Box
          sx={{
            width: "90px",
            height: "50px",
            textAlign: "center",
            backgroundColor: "#282828",
            borderRadius: "5px",
            marginLeft: "5%",
            marginRight: "10%",
            boxSizing: "border-box",
            ":hover": {
              backgroundColor: "#222222",
              border: "solid 2px #3874cb",
              boxShadow: "rgba(0, 0, 0, 0.1) 0 8px 15px",
            },
          }}
        >
          <a href="/">
            <Box
              sx={{
                width: "100%",
                position: "relative",
                top: "20%",
                fontSize: "20px",
              }}
            >
              Home
            </Box>
          </a>
        </Box>
      </Box>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Create Post" value="1" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Create />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

import React from "react";
import { Typography } from "@mui/material";
import "../App.css";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#333333",
          padding: "10px",
          borderBottom: "solid 2px #3874cb",
        }}
      >
        <Typography sx={{ margin: "5%" }} variant="h3" align="center">
          JobUpMock: Hiring Platform
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          gap: "10%",
          marginTop: "60px",
        }}
      >
        <Box
          sx={{
            width: "50%",
            backgroundColor: "#333333",
            padding: "30px",
            marginLeft: "8%",
            borderRadius: "10px",
            ":hover": {
              backgroundColor: "#383838",
              boxShadow: "rgba(0, 0, 0, 0.25) 0 8px 15px",
              transform: "translateY(-1px)",
            },
          }}
        >
          <a href="/employer/dashboard">
            <Box
              sx={{
                width: "100%",
                height: "100%",
                fontSize: "20px",
              }}
            >
              Hire talent
            </Box>
          </a>
        </Box>
        <Box
          sx={{
            width: "50%",
            backgroundColor: "#333333",
            padding: "30px",
            marginRight: "8%",
            borderRadius: "10px",
            ":hover": {
              backgroundColor: "#383838",
              boxShadow: "rgba(0, 0, 0, 0.25) 0 8px 15px",
              transform: "translateY(-1px)",
            },
          }}
        >
          <a href="/employee/feed">
            <Box
              sx={{
                width: "100%",
                height: "100%",
                fontSize: "20px",
              }}
            >
              Get Job Now
            </Box>
          </a>
        </Box>
      </Box>
    </div>
  );
};

export default Home;

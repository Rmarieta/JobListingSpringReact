import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState();

  //
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `http://localhost:8080/allPosts/${query}`
      );
      setPost(response.data);
    };
    const fetchInitialPosts = async () => {
      const response = await axios.get(`http://localhost:8080/allPosts`);
      console.log(response);
      setPost(response.data);
    };
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);
  console.log(post);
  return (
    <Grid container spacing={3} sx={{ padding: "2%" }}>
      <Grid item xs={12} sx={12} md={12} lg={12}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              placeholder="Search..."
              sx={{
                width: "100%",
                backgroundColor: "#333333",
                borderRadius: "5px",
                input: { color: "#dfdfdf" },
              }}
              fullWidth
              onChange={(e) => setQuery(e.target.value)}
            />
          </Box>

          <Box
            sx={{
              backgroundColor: "#333333",
              width: "18%",
              maxWidth: "180px",
              minWidth: "110px",
              height: "100%",
              borderRadius: "5px",
              textAlign: "center",

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
                  fontSize: "18px",
                  position: "relative",
                  top: "25%",
                }}
              >
                Hire talent
              </Box>
            </a>
          </Box>
        </Box>
      </Grid>
      {post &&
        post.map((p) => {
          return (
            <Grid
              key={p.id}
              item
              xs={12}
              md={6}
              lg={4}
              sx={{ display: "flex" }}
            >
              <Card
                sx={{
                  padding: "4%",
                  overflow: "hidden",
                  width: "95%",
                  backgroundColor: "#333333",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontSize: "2rem", fontWeight: "600", color: "#dfdfdf" }}
                >
                  {p.profile}
                </Typography>
                <Typography
                  sx={{ color: "#989898", marginTop: "2%" }}
                  variant="body"
                >
                  Description: {p.desc}
                </Typography>
                <br />
                <br />
                <Typography variant="h6" sx={{ color: "#c5c5c5" }}>
                  Years of Experience: {p.exp} years
                </Typography>

                <Typography
                  gutterBottom
                  variant="body"
                  sx={{ color: "#c5c5c5" }}
                >
                  Skills :{" "}
                </Typography>
                {p.techs.map((s, i) => {
                  return (
                    <Typography
                      variant="body"
                      gutterBottom
                      key={i}
                      sx={{ color: "#c5c5c5" }}
                    >
                      {s},{` `}
                    </Typography>
                  );
                })}
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Feed;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "@mui/material/Button";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Calculate } from "@mui/icons-material";

const nodes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

function App() {
  const [count, setCount] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const [fromNode, setFromNode] = useState<string | null>("");
  const [toNode, setToNode] = useState<string | null>("");

  return (
    <>
      <Typography variant="h1">Dijkstra's Algorithm Calculator</Typography>
      <Typography variant="h5" marginBottom="3rem">
        Discovering Optimal Routes Through Nodes Using Dijkstra's Method
      </Typography>
      <Card sx={{ minWidth: "40rem" }}>
        <CardContent style={{ padding: "0rem" }}>
          <Grid container spacing={0} sx={{ height: "100%" }}>
            <Grid xs={6} padding="3rem" item={true}>
              <Typography
                variant="h5"
                component="div"
                align="left"
                paddingBottom={"1rem"}
              >
                Select Path
              </Typography>
              {/* Take user input */}
              <Box component="section" sx={{}}>
                <Typography
                  variant="body1"
                  align="left"
                  paddingBottom={"0.5rem"}
                >
                  From Node
                </Typography>
                <Box marginBottom={"1rem"}>
                  <FormControl fullWidth>
                    <InputLabel id="from-label">Select</InputLabel>
                    <Select
                      labelId="from-label"
                      id="demo-simple-select"
                      value={fromNode}
                      label="From Node"
                      sx={{ width: "10rem" }}
                      onChange={(e) => setFromNode(e.target.value as string)}
                    >
                      {nodes.map((node) => (
                        <MenuItem key={`fromNode_${node}`} value={node}>
                          {node}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Typography
                  variant="body1"
                  align="left"
                  paddingBottom={"0.5rem"}
                >
                  From Node
                </Typography>
                <Box marginBottom={"1rem"}>
                  <FormControl fullWidth>
                    <InputLabel id="to-label">Select</InputLabel>
                    <Select
                      labelId="to-label"
                      id="demo-simple-select"
                      value={toNode}
                      label="To Node"
                      sx={{ width: "10rem" }}
                      onChange={(e) => setToNode(e.target.value as string)}
                    >
                      {nodes.map((node) => (
                        <MenuItem key={`toNode_${node}`} value={node}>
                          {node}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <Button variant="outlined" sx={{ marginRight: "1rem" }}>
                    Clear
                  </Button>
                  <Button variant="contained">
                    Calculate
                    <Calculate sx={{ marginLeft: "0.75rem" }}></Calculate>
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid xs={6} sx={{ background: "#f2f3f6" }} item={true}>
              {/* Result */}
              <Box padding="3rem">
                {!showResults && (
                  <Box>
                    <img src="/images/christopher-gower-m_HRfLhgABo-unsplash.jpg"></img>
                  </Box>
                )}
                {showResults && (
                  <Box>
                    <Typography variant="h5" marginBottom={"1rem"} align="left">
                      Results
                    </Typography>
                    <Box
                      padding={"2rem"}
                      sx={{ background: "white" }}
                      borderRadius={"0.5rem"}
                    >
                      <Typography variant="body1" align="left">
                        SHOW RESULTS HERE
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default App;

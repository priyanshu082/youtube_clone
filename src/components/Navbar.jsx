import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"

export const Navbar = () => (
  <Stack 
  direction="row" 
  alignItems="center" 
  p={2} 
  sx={{ position: 'sticky', background: "#000", top: 0, justifyContent: 'space-between' }}>
  
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="logo" height={45} /><Typography color="red" variant="h4" fontWeight="bold" ml="8px">
      Priya
      </Typography>
      <Typography color="white" variant="h4" fontWeight="bold">
      nshu
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar
import { Search } from '@mui/icons-material';
import { Paper, IconButton } from '@mui/material'
import { colors } from './../../constans/colors';
const SearchBar = () => {
  return (
    <Paper component={"form"} sx={{border: `0.2px solid ${colors.secondary}`, pl: 2, boxShadow: "none"}}>
      <input type={"text"} placeholder='Search...' className='search-bar'/>
      <IconButton>
        <Search/>
      </IconButton>
    </Paper>
  )
}
export default SearchBar
import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import { colors } from "./../../constans/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);
    }
  };
  return (
    <Paper
      component={"form"}
      onSubmit={SubmitHandler}
      sx={{
        border: `0.2px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input
        type={"text"}
        placeholder="Search..."
        className="search-bar"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};
export default SearchBar;

import { Stack } from "@mui/system";
import { category } from "../../constans";
import { colors } from "./../../constans/colors";
const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            borderRadius: "0",
            background: item.name === selectedCategory && colors.secondary,
            color: item.name === selectedCategory && "#fff",
            margin: "0 1px" 
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span style={{ color: item.name === selectedCategory ? "#fff": colors.secondary, marginRight: "15px" }}>
            {item.icon}
          </span>
          <span>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;

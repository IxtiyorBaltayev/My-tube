import { Stack } from "@mui/system";
import { category } from "../../constans";
import { colors } from './../../constans/colors';
const Category = () => {
  return <Stack direction={"row"} sx={{overflowX: "scroll"}}>
    {category.map(item=>(
      <button key={item.name} className='category-btn' style={{borderRadius: '0'}}>
        <span style={{color: colors.secondary, marginRight: '15px'}}>{item.icon}</span>
        <span>{item.name}</span>
      </button>
    ))}
  </Stack>
};

export default Category;

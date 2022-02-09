import Button from "@mui/material/Button";

//types
import { CartItemType } from "../App";

//styles
import { Wrapper } from "./item.styles";

type Props = {
  item: CartItemType;
  handleAddToCard: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCard }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCard(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;

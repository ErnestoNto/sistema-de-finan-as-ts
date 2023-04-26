import React from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";
import { categories } from "../../data/Categories";
import { formatDate } from "../../helpers/ListFuntions";

type Props = {
  item: Item;
};

const TableItem = ({ item }: Props) => {
  
  return (
    <C.Container>
      <td>{formatDate(item.date)}</td>
      <C.Category color={categories[item.category].color}>
        <td>{categories[item.category].title}</td>
      </C.Category>
      <td>{item.title}</td>
      <td>R$ {item.value.toFixed(2)}</td>
    </C.Container>
  );
};

export default TableItem;

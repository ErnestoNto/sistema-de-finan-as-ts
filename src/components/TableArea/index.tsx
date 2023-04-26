import React from 'react'
import * as C from './styles'
import { Item } from '../../types/Item'
import TableItem from '../TableItem'

type Props = {
  filteredList: Item[]
}

const TableArea = ({filteredList}: Props) => {
  return (
    <C.Container>
      <thead>
        <tr>
          <C.TableHead width={100}>Data</C.TableHead>
          <C.TableHead width={130}>Categoria</C.TableHead>
          <C.TableHead>Título</C.TableHead>
          <C.TableHead width={120}>Valor</C.TableHead>
        </tr>
      </thead>
      <tbody>
          {filteredList.map(item => (
            <TableItem item={item} />
          ))}
      </tbody>
    </C.Container>
  )
}

export default TableArea

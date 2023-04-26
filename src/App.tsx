import { useEffect, useState } from 'react'
import * as C from './styles'
import { Items } from './data/Items'
import { filterList, getDate } from './helpers/ListFuntions'
import { Item } from './types/Item'
import TableArea from './components/TableArea'
import InfoArea from './components/InfoArea'
import { categories } from './data/Categories'
import FormArea from './components/FormArea'

export const App = () => {
  const [list, setList] = useState(Items)
  const [currentDate, setCurrentDate] = useState(getDate())
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterList(list, currentDate));
    
  }, [list, currentDate])

  useEffect(() => {
    const expenseList = filteredList.filter(item => categories[item.category].expense) 
    const incomeList = filteredList.filter(item => !categories[item.category].expense) 

    const expenseCount = expenseList.reduce((accun, item) => accun += item.value, 0)
    const incomeCount = incomeList.reduce((accun, item) => accun += item.value, 0)

    setExpense(expenseCount)
    setIncome(incomeCount)    

  }, [filteredList])
  
  const changeDate = (date: string) => {
    setCurrentDate(date)
  }

  const createItem = (item: Item) => {
    setList([...list, item])
  }

  return (
    <div>
      <C.Header>
        <h1>Sistema de finanças</h1>
      </C.Header>

      <C.Container>
        
        <InfoArea
          currentDate={currentDate}
          changeDate={changeDate}
          income={income}
          expense={expense}
        />

        <FormArea createItem={createItem} />

        <TableArea filteredList={filteredList} />
      </C.Container>
    </div>
  )
}
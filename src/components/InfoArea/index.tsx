import React from 'react'
import * as C from './styles'
import { Item } from '../../types/Item'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import { transformDate } from '../../helpers/ListFuntions'
import ResumeItem from '../ResumeItem'

type Props = {
    currentDate: string
    changeDate: (date: string) => void
    income: number
    expense: number
}

const InfoArea = ({currentDate, changeDate, income, expense}: Props) => {

  const handlePrevMonth = () => {
    let [year, month] = currentDate.split('-')
    let newDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    newDate.setMonth(newDate.getMonth() - 1)

    changeDate(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    let [year, month] = currentDate.split('-')
    let newDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    newDate.setMonth(newDate.getMonth() + 1)

    changeDate(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`)
  }

  return (
    <C.Container>
      <C.MonthArea>
        <FaArrowLeft onClick={() => handlePrevMonth()} /> 
        {transformDate(currentDate)}
        <FaArrowRight onClick={() => handleNextMonth()} />
      </C.MonthArea>
      <C.MoneyArea>
        <ResumeItem title='Renda' value={income}/>
        <ResumeItem title='Despesa' value={expense}/>
        <ResumeItem title='Balanço' value={income - expense} color={income - expense > 0 ? '#59CD90' : '#E24E1B'}/>
      </C.MoneyArea>
    </C.Container>
  )
}

export default InfoArea

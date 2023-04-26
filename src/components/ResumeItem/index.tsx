import React from 'react'
import * as C from './styles'

type Props = {
    title: string
    value: number
    color?: string
}

const ResumeItem = ({title, value, color}: Props) => {
  return (
    <C.MoneyContainer color={color}>
      <h3>{title}</h3>
      <span>R$ {value.toFixed(2)}</span>
    </C.MoneyContainer>
  )
}

export default ResumeItem

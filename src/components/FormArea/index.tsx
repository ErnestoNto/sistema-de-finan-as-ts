import React from 'react'
import * as C from './styles'
import { Item } from '../../types/Item'

type Props = {
    createItem: (item: Item) => void
}

const FormArea = ({createItem}: Props) => {
    const [date, setDate] = React.useState('') //yyyy-mm-dd
    const [category, setCategory] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [value, setValue] = React.useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if(date === '' || category === '' || title === '' || value === '') return alert('Preencha todos os campos')

        let [year, month, day] = date.split('-')

        const newItem: Item = {
            date: new Date(parseInt(year), parseInt(month) - 1, parseInt(day)), 
            category, 
            title, 
            value: parseFloat(value)
        } 

        createItem(newItem)
        setCategory('Categoria')
        setDate('')
        setTitle('')
        setValue('')
    }
    
  return (
    <C.FormContainer onSubmit={handleSubmit}>
        <input 
            type="date"
            onChange={(e) => setDate(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
            <option selected disabled={true}>Categoria</option>
            <option value="salary">Salário</option>
            <option value="food">Alimentação</option>
            <option value="rent">Aluguel</option>
        </select>
        <input 
            type="text" 
            placeholder='Digite o título'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input 
            type="text" 
            placeholder='Digite o valor'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <button>Adicionar</button>
    </C.FormContainer>
  )
}

export default FormArea

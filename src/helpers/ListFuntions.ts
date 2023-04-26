import { Item } from "../types/Item"

export const getDate = ():string => {
    const date = new Date()

    return `${date.getFullYear()}-${date.getMonth() + 1}`
}

export const filterList = (list: Item[], currentDate: string) => {
    let [year, month] = currentDate.split('-')
    let newList: Item[] = []

    list.filter(item => {
        if(item.date.getFullYear() === parseInt(year) && item.date.getMonth() + 1 === parseInt(month)){
            newList.push(item)
        }
    })

    return newList
}

export const formatDate = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    return `${addZero(day)}/${addZero(month + 1)}/${year}`
}

const addZero = (date: number) => date < 10 ? `0${date}` : date

export const transformDate = (date: string) => {
    let [year, month] = date.split('-')
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    return `${months[parseInt(month) - 1]} de ${year}`
}
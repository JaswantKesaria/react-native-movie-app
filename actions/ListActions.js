import { 
    ADD_LIST_ITEM, 
    CLEAR_LIST_ITEM } from "../types/ListTypes"

export const addListItem = (item) => {
    return {
        type: ADD_LIST_ITEM,
        payload:item
    }
}
export const clearListItem = () => {
    return {
        type: CLEAR_LIST_ITEM
    }
}
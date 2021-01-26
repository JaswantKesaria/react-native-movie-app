import { SEARCH_START, SEARCH_END } from "../types/HomeTypes"

export const searchChanged = (searchText) => {
    return {
        type: SEARCH_START,
        payload: searchText
    }
}
export const searchEnded = () => {
    return {
        type: SEARCH_END,
    }
}
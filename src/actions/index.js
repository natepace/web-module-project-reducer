export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SET_MEMORY_TO_TOTAL = "SET_MEMORY_TO_TOTAL";
export const RESET_MEMORY = "RESET_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOp = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const setMemTotal = () => {
    return({type:SET_MEMORY_TO_TOTAL})
}

export const resetMemory = () => {
    return({type:RESET_MEMORY})
}
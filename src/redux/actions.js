export const addTask = (text) => ({ type: "ADD_TASK", payload: text });
export const switchingTask = (id) => ({ type: "SWITCHING_TASK", payload: id });
export const deleteTask = (id) => ({ type: "DELETE_TASK", payload: id });
export const setFilter = (filter) => ({ type: "SET_FILTER", payload: filter });
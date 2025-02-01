const initialState = {
    tasks: [
        { id: 1, text: "Task 1", completed: false },
        { id: 2, text: "Task 2", completed: true },
        { id: 3, text: "Task 3", completed: false },
        { id: 4, text: "Task 4", completed: true }
    ],
    filter: "all"
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return { ...state, tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }] };
        case "SWITCHING_TASK":
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task)
            };
        case "DELETE_TASK":
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case "SET_FILTER":
            return { ...state, filter: action.payload };
        default:
            return state;
    }
};

export default tasksReducer;
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Learn React",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    editTodo: (id, todo) => {},
    removeTodo: (id) => {},
    toggleTodo: (id) => {},
})


export const useTodoContext = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

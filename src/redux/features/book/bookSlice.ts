import type { IBook } from "@/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface  InitialState { 
    books: IBook[];
}
const initialState : InitialState ={ 
    books: [],
}

const bookSlice =  createSlice({ 
    name: "book",
    initialState,
    reducers: {
        addBook : (state, action: PayloadAction<IBook>) => { 
           state.books.push(action.payload)
        }
    }
})

export const {addBook}  = bookSlice.actions
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading: false,
    cards: [],
    loadingCount: 10,
    currentItemID: 0,
    currentPage: 1,
    userInput: "",
    error: ''
}

export const fetchCards = createAsyncThunk('search/searchcards', async (obj) => {
    return axios
        .get(`https://api.github.com/search/repositories?q=${obj.userInput}&per_page=50`)
        .then(response => response.data)
})


export const projectSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setLoadingCount: (state, action) => {
            state.loadingCount = action.payload
        },
        setCurrentItemID: (state, action) => {
            state.currentItemID = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setUserInput: (state, action) => {
            state.userInput = action.payload
        }

    },
    extraReducers: builder => {
        builder.addCase(fetchCards.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchCards.fulfilled, (state, action) => {
            state.loading = false
            state.cards = action.payload
            state.error = ''
        })
        builder.addCase(fetchCards.rejected, (state, action) => {
            state.loading = false
            state.cards = []
            state.error = action.error.message
        })
    }
})




// Action creators are generated for each case reducer function
export const { search, setLoadingCount, setCurrentItemID, setCurrentPage, setUserInput } = projectSlice.actions
export default projectSlice.reducer
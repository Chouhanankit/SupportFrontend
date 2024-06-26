import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

const ticketSlice = createSlice({
    name: "ticket",
    initialState: {
        ticket: {},
        tickets: [],
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTickets.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
                state.message = ""
            })
            .addCase(getTickets.fulfilled, (state, action) => {
                state.tickets = action.payload
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.message = ""
            })
            .addCase(getTickets.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getTicket.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
                state.message = ""
            })
            .addCase(getTicket.fulfilled, (state, action) => {
                state.ticket = action.payload
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.message = ""
            })
            .addCase(getTicket.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(addTicket.pending, (state) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
                state.message = ""
            })
            .addCase(addTicket.fulfilled, (state, action) => {
                state.ticket = action.payload
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.message = ""
            })
            .addCase(addTicket.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })

    },
},
);

export default ticketSlice.reducer;

export const getTickets = createAsyncThunk("FETCH/TICKETS", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    try {
        return await ticketService.fetchTickets(token)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const getTicket = createAsyncThunk("FETCH/TICKET", async (id, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await ticketService.fetchTicket(token, id)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})
export const addTicket = createAsyncThunk("CREATE/TICKET", async (formData, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await ticketService.createTicket(token, formData)
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsInitialState = {
    list:[],
    isLoading: false,
    error: null,
};

const extraAction = [fetchContacts, addContact, deleteContact];

const getAction = type => extraAction.map(action => action[type]);

const pendingReducer = state => {
    state.isLoading = true;
};

const fulfilledReducer = state => {
    state.isLoading = false;
    state.error = null;
}

const rejectedReducer = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const fetchContactsFulfilledReducer = (state, action) => {
    state.list = action.payload;
};

const addContactReducer = (state, action) => {
    state.list.push(action.payload);
};

const deleteContactReducer = (state, action) => {
    const index = state.list.findIndex(contact => contact.id === action.payload.id);
    state.list.splice(index, 1);
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,    
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
            .addCase(addContact.fulfilled, addContactReducer)
            .addCase(deleteContact.fulfilled, deleteContactReducer)
            .addMatcher(
                isAnyOf(...getAction("fulfilled")),
                fulfilledReducer
            )
            .addMatcher(
                isAnyOf(...getAction("pending")),
                pendingReducer
            )
            .addMatcher(
                isAnyOf(...getAction("rejected")),
                rejectedReducer
            )
});


export const contactsReducer = contactsSlice.reducer;
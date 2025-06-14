import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice"
import filtersReducer from "./filters/slice"
import authReducer from "./auth/slice"
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
} 

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: persistReducer(authPersistConfig, authReducer)
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export const persistor = persistStore(store);
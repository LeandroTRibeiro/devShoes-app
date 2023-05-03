import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer  from './reducers/ShoppingCartReducer';

export const store = configureStore({
    reducer: {
        shoppingCartReducer: shoppingCartReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
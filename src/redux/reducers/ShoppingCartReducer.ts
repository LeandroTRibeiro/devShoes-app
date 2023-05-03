import { createSlice } from "@reduxjs/toolkit";

type ProductType = {
    productId: string, 
    name: string, 
    description: string, 
    amount: number,
    stock: number, 
    price: number,
    delivery: number,
    discount: number, 
    side: string 
};

export const slice = createSlice({
    name: 'shoppingCartReducer',
    initialState: {
        userId: '01',
        products: [] as ProductType[] 
    },
    reducers: {
        addToCart: (state, action) => {
            const index = state.products.findIndex((item) => {
                if(item.productId === action.payload.productId) {
                    return true;
                }
            });
            
            if(index >= 0) {
                state.products[index].amount < state.products[index].stock ? state.products[index].amount =  state.products[index].amount + 1 : state.products[index].amount = state.products[index].amount;
            } else {
                state.products.push({
                    productId: action.payload.productId,
                    amount: action.payload.amount,
                    stock: action.payload.stock,
                    price: action.payload.price,
                    delivery: action.payload.delivery,
                    discount: action.payload.discount,
                    name: action.payload.name,
                    description: action.payload.description,
                    side: action.payload.side
                });
            }
        },
        setCart: (state, action) => {
            state.products = action.payload;
        },
        deleteToCart: (state, action) => {
            const index = state.products.findIndex((item) => {
                if(item.productId === action.payload) {
                    return true;
                }
            });

            if(index >= 0) {
                state.products.splice(index, 1);
            }
        },
        addAmount: (state, action) => {
            state.products.map((item) => {
                if(item.productId === action.payload) {
                    item.amount = item.amount + 1;
                };
            })
        },
        delAmount: (state, action) => {
            state.products.map((item) => {
                if(item.productId === action.payload) {
                    if(item.amount > 1) {
                        item.amount = item.amount - 1;
                    };
                };
            });
        }
    }
});

export const { addToCart, setCart, deleteToCart, addAmount, delAmount } = slice.actions;
export default slice.reducer;
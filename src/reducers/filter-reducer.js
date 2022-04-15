
function filterReducer(state,action){
    switch(action.type){
        case "SORT_BY":
            return{...state,sortByPrice:action.payload};
        case 'PRICE_FILTER' : 
        console.log(action)
            return {...state ,filterByPrice:action.payload};
        case 'CATEGORY_FILTER' :
            return {...state ,filterByCategory: state.filterByCategory.includes(action.payload) ? state.filterByCategory.filter((val) => val !== action.payload  )  : [...state.filterByCategory ,action.payload]  };
        case 'RATING_FILTER' : 
            return {...state , filterByRatings:action.payload};
        case 'CLEAR' : 
        return {...state , 
            sortByPrice:null,
            filterByPrice:null,
            filterByCategory:[],
            filterByRatings:null,
            };
         
        case "ADD-TO-CART":
            return {
            ...state,
                cart: [...state.cart, { ...action.payload }],
          
            // cartItemsCount: state.cartItemsCount + 1,
        //   totalCost: Number(state.totalCost) + Number(action.payload.price),
        //   ItemsCost: Number(state.ItemsCost) + Number(action.payload.price),

        };
        
        default:
            return {...state};    
    }
}
export {filterReducer}
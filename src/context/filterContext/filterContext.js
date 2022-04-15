import { createContext , useReducer , useContext} from "react";
import { sortedData,FilterCategoryData ,FilterPriceData,FilterRatingData} from "../../utils/filterutils";
import { useProduct } from "../productContext/ProductContext";
import { filterReducer } from "../../reducers/filter-reducer";


const filterContext = createContext(null);

const initialState = {
    sortByPrice:null,
    filterByPrice:null,
    filterByCategory:[],
    filterByRatings:null,
  }

function FilterProvider({children}){


const [state , dispatch] = useReducer(filterReducer , initialState);                             //we are calling the filterReducer in reducers   

const {products} = useProduct();

const newsortedData = sortedData(state,products)

const newFilterPriceData = FilterPriceData (state,newsortedData )
const newFilterCatagoryData = FilterCategoryData(state,newFilterPriceData )
const finaldata = FilterRatingData(state,newFilterCatagoryData)


return (
    <filterContext.Provider value={{state,dispatch,finaldata,newFilterCatagoryData}}>
        {children}
    </filterContext.Provider>
);
}

const useFilter = () =>useContext(filterContext)
export { FilterProvider,useFilter};


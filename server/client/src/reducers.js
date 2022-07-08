import { combineReducers } from 'redux';
import headerReducer from './Redux/HeaderMenu/header.reducer';
import footerReducer from './Redux/HeaderMenu/footer.reducer';
import bottomSliderReducer from './Redux/HeaderMenu/bottomSlider.reducer';
import bottomNavBarReducer from './Redux/HeaderMenu/bottomNavBar.reducer';
import locationReducer from './Redux/HeaderMenu/location.reducer';
import brandListLogoReducer from './Redux/HeaderMenu/brandListLogo.reducer';
import topMenuLinksReducer from './Redux/HeaderMenu/topMenuLinks.reducer';
import topSliderReducer from './Redux/HeaderMenu/topSlider.reducer';
import productsReducer from './Redux/HeaderMenu/products.reducer';

const rootReducer = combineReducers({
    headerData : headerReducer,
    footerData : footerReducer,
    productsData : productsReducer,
    bottomSliderData : bottomSliderReducer,
    bottomNavBarData : bottomNavBarReducer,
    locationData : locationReducer,
    brandListLogoData : brandListLogoReducer,
    topMenuLinksData : topMenuLinksReducer,
    topSliderData : topSliderReducer,
    productsData : productsReducer,
    
})

export default rootReducer

import ApiService from '../../ApiService';
const getData = new ApiService('https://andysappcopy.herokuapp.com');
//===========data from the server ===================

export const getBottomNavBarData = () => {
    return async dispatch => {
        const res = await getData.get('/bottomNavBar')
        dispatch({ type: "GET_BOTTOM_NAV_BAR_DATA", payload: res })
    }
};

export const getLocationData = () => {
    return async dispatch => {
        const res = await getData.get('/location')
        dispatch({ type: "GET_LOCATION_DATA", payload: res })
    }
};

export const getBrandListLogoData = () => {
    return async dispatch => {
        const res = await getData.get('/brandListLogo')
        dispatch({ type: "GET_BRAND_LIST_LOGO_DATA", payload: res })
    }
};

export const getTopMenuLinksData = () => {
    return async dispatch => {
        const res = await getData.get('/topMenuLinks')
        dispatch({ type: "GET_TOP_MENU_LINKS_DATA", payload: res })
    }
};

export const getTopSliderData = () => {
    return async dispatch => {
        const res = await getData.get('/topSlider')
        dispatch({ type: "GET_TOP_SLIDER_DATA", payload: res })
    }
};

export const getBottomSliderData = () => {
    return async dispatch => {
        const res = await getData.get('/bottomSlider')
        dispatch({ type: "GET_BOTTOM_SLIDER_DATA", payload: res })
    }
};

export const getFooterData = () => {
    return async dispatch => {
        const res = await getData.get('/footer')
        dispatch({ type: "GET_FOOTER_DATA", payload: res })
    }
};

export const getProductsData = () => {
    return async dispatch => {
        const res = await getData.get('/products')
        dispatch({ type: "GET_PRODUCTS_DATA", payload: res })
    }
};
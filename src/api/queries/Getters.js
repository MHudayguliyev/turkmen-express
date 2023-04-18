import {get} from '../api_helpers/api_helpers'


export const GetProducts = () => {
    return get(`products/list`)
}
export const GetCategories = () => {
    return get(`library/categories/list`)
}
export const GetSubCategoriesByCategory = (id) => {
    return get(`library/categories/${id}/subcategories/list`)
}
export const GetBrands = () => {
    return get(`library/brands/list`)
}
export const GetProductsByBrands = (id) => {
    return get(`products/brands/${id}/list`)
} 
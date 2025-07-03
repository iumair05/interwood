import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1`;

// Furniture Categories
export async function fetchCategories(query) {
    const { data } = await axios.get('/category/allCategories', {
        baseURL,
        params: { query },
    });
    return data;
}

export function useRequestCategories(query) {
    return useQuery({
        queryKey: ['subCategories', query],
        queryFn: () => fetchCategories(query),
        enabled: !!query,
    });
}

// SubCategories API
export async function fetchSubCategoriesChild(subCategoryId) {
    const { data } = await axios.get(`/subcategory/${subCategoryId}`, {
        baseURL,
    });
    return data;
}

export function useRequestSubCategoriesChild(subCategoryId) {
    return useQuery({
        queryKey: ['subCategoriesChild', subCategoryId],
        queryFn: () => fetchSubCategoriesChild(subCategoryId),
        enabled: !!subCategoryId,
    });
}

// SubCategoryChild Product
export async function fetchSubCategoryChildProducts(subCategoryChildId) {
    const { data } = await axios.get(`/subcategory_child/${subCategoryChildId}`, {
        baseURL,
    });
    return data;
}

export function useRequestSubCategoryChildProducts(subCategoryChildId) {
    return useQuery({
        queryKey: ['subCategoryChildProducts', subCategoryChildId],
        queryFn: () => fetchSubCategoryChildProducts(subCategoryChildId),
        enabled: !!subCategoryChildId,
    });
}

// Product Details
export async function fetchProductDetails(productId) {
    const { data } = await axios.get(`/product/${productId}`, {
        baseURL,
    });
    return data;
}

export function useRequestProductDetails(productId) {
    return useQuery({
        queryKey: ['productDetails', productId],
        queryFn: () => fetchProductDetails(productId),
        enabled: !!productId,
    });
}
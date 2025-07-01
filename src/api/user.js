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
        queryKey: ['categories', query],
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
        queryKey: ['subCategories', subCategoryId],
        queryFn: () => fetchSubCategoriesChild(subCategoryId),
        enabled: !!subCategoryId,
    });
}

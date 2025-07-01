import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1`;

// Home Categories
export async function fetchHomeCategories(query) {
    const { data } = await axios.get('/category/allCategories', {
        baseURL,
        params: { query },
    });
    return data;
}

export function useRequestHomeCategories(query) {
    return useQuery({
        queryKey: ['homeCategories', query],
        queryFn: () => fetchHomeCategories(query),
    });
}

// Office Categories
export async function fetchOfficeCategories(query) {
    const { data } = await axios.get('/category/allCategories', {
        baseURL,
        params: { query },
    });
    return data;
}

export function useRequestOfficeCategories(query) {
    return useQuery({
        queryKey: ['homeCategories', query],
        queryFn: () => fetchHomeCategories(query),
    });
}
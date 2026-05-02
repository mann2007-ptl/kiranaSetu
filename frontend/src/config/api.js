/**
 * Centralized API configuration for KiranaSetu frontend.
 * 
 * In development: VITE_API_URL can be empty (Vite proxy handles /api requests).
 * In production (Vercel): VITE_API_URL = "https://kiranasetu.onrender.com"
 */

export const API_BASE = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? 'https://kiranasetu.onrender.com' : '');

/**
 * Wrapper around fetch that auto-prepends the API base URL
 * and injects the Authorization header from localStorage.
 *
 * @param {string} path - API path starting with /api/...
 * @param {RequestInit} options - Standard fetch options
 * @returns {Promise<Response>}
 */
export async function apiFetch(path, options = {}) {
    const token = localStorage.getItem('token');

    const headers = {
        ...options.headers,
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    return fetch(`${API_BASE}${path}`, {
        ...options,
        headers,
    });
}

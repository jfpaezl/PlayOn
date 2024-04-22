// apiService.ts
export interface RequestOptions {
    method: string;
    headers?: { [key: string]: string };
    body?: string | FormData | URLSearchParams | null;
}

/**
 * The function `apiService` is an asynchronous function in TypeScript that makes an API request using
 * fetch and returns the response data as a Promise.
 * @param {string} url - The `url` parameter is a string that represents the URL of the API endpoint
 * that you want to make a request to.
 * @param {RequestOptions} [options] - The `options` parameter in the `apiService` function is an
 * optional parameter of type `RequestOptions`. It allows you to specify additional settings for the
 * API request, such as the HTTP method, headers, and request body. If `options` is not provided when
 * calling the `apiService`
 * @returns The `apiService` function returns a Promise that resolves to the JSON response from the API
 * if the request is successful. If there is an error during the API request, it will throw an error
 * and log the error message to the console before rethrowing the error.
 */
export async function apiService(url: string, options?: RequestOptions): Promise<any> {
    try {
        const response = await fetch(url, {
            method: options?.method || 'GET',
            credentials: 'include',
            headers: options?.headers,
            body: options?.body,
        });
        if (!response.ok) {
            throw new Error(`Error al realizar la solicitud: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error: ${(error as Error).message}`);    
        throw error;
    }
}
import { apiService } from '../apiService';
import { ImageDto } from '../../dto/imagenDto';

// ver como se va a devolver la data y mapear como se devuelve los datos que necesita el componente
interface ImageResponse {
    id: number;
    url: string;
    alt: string;
}

export async function getImages(): Promise<ImageDto[]> {
    try {
        const response = await apiService(''); // Add the URL of the API endpoint
        return response.map((item:ImageResponse) => new ImageDto(item.id, item.url, item.alt));
    } catch (error) {
        return Promise.reject(error);
    }
}

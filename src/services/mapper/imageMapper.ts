import { apiService } from '../apiService';
import { ImageDto } from '../dto/imagenDto';

export async function getImages(): Promise<ImageDto[]> {
    try {
        const response = await apiService(''); // Add the URL of the API endpoint
        return response.map((item:ImageDto) => new ImageDto(item.id, item.url, item.alt));
    } catch (error) {
        return Promise.reject(error);
    }
}

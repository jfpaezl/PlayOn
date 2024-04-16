export class ImageDto {
    id: number;
    url: string;
    alt: string;
    constructor(id: number, url: string, alt: string) {
        this.id = id;
        this.url = url;
        this.alt = alt;
    }
}
interface PortFolioItemEntity {
    id: number,
    title: string,
    description: string,
    url: string,
    shortDescription: string,
    images: ImageEntity[]
}
interface ImageEntity {
    url: string,
    imageTitle: boolean
}

export type { PortFolioItemEntity };
export class Wish {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public current_price: string,
        public image_large: string,
        public image_thumbnail: string,
        public affiliate_url: string,
        public brand: string,
        public sku: string,
        public type: string,
    ) {}
}

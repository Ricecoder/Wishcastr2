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


// affiliate_url:"https://www.amazon.com/Nintendo-New-3DS-XL-Galaxy-Style/dp/B01KOFZOYW?psc=1&SubscriptionId=AKIAISFMWONIHJJHH5TA&tag=wishcastr-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01KOFZOYW"
// brand:"Nintendo"
// current_price:199
// description:"Galaxy↵The New Nintendo 3DS XL system plays all Nintendo DS games. Nintendo DS games will not appear in 3D↵AC Adapter sold separately. New Nintendo 3DS XL uses the same AC adapter as Nintendo DSi, Nintendo 3DS and 2DS.↵3D Mode recommended for Ages 7+"
// id:null
// image_large:"https://images-na.ssl-images-amazon.com/images/I/51lev59IEGL.jpg"
// image_thumbnail:"https://images-na.ssl-images-amazon.com/images/I/31KKKk0K67L._SL110_.jpg"
// sku:"B01KOFZOYW"
// title:"Nintendo New 3 Ds Xl   Galaxy Style"
// type:"AmazonProduct"
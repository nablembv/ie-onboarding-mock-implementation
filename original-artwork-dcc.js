const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('bvdcc.key');
const locale = 'en_GB';

const products = [
	{
		productId: "670237345",
		productName: "Original Artwork 1 of 1",
		productDescription: "Hang this original 8.5 by 11 piece of art on your wall of choice. The Boom Shakalaka spider will delight your friends and satisfy your need for original hand drawn ART. Sharpie on Paper.",
		productImageURL: "https://cdn.shopify.com/s/files/1/0422/7341/products/boom-shakalaka-original.png?&_accept=image/avif",
		productPageURL: "https://help.shopify.com/en/manual/products/purchase-options",
		brandId: "del_ventos_doodles",
		brandName: "Del Vento's Doodles",
		categoryPath: [
			{
				id: "boom_shakala",
				Name: "Boom Shakalaka",
			},
			{
				id: "spider_in_stream",
				Name: "Spider in Stream",
			}
		],
	}
];

//Passes catalog data and privateKey into the token; encoded as RS256
function signCatalogUpdate(products, privateKey) {
    return products.map(product => jwt.sign(
    	{
    		locale,
    		catalogProducts: [ product ],
    	},
    	privateKey,
    	{
    		algorithm: "RS256",
    	}
    ));
}

//Assigns the returned output from the signCatalogUpdate function to a variable which is then visible on front-end
const bvDCC = signCatalogUpdate(products, privateKey);

//Outputs DCC product data in a console log, and enters 2 spaces for any NULL values 
console.log(JSON.stringify(bvDCC, null, 2));
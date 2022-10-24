const jwt = require('jsonwebtoken');
const fs = require('fs');

const privateKey = fs.readFileSync('bvdcc.key');
const locale = 'en_GB';

const products = [
	{
		productId: "670256189",
		productName: "Signed Reprint 8 x 10 - Full Color",
		productDescription: "Hang this signed 8 x 10 reprint piece of art on your wall of choice. The Boom Shakalaka spider will delight your friends and satisfy your need for amazing hand.",
		productImageURL: "https://cdn.shopify.com/s/files/1/0422/7341/products/boom-shakalaka-reprint-color.png?_accept=image%2Favif",
		productPageURL: "https://help.shopify.com/en/manual/products/add-update-products",
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
		family: "283999157",
	},
	{
		productId: "670256193",
		productName: "Signed Reprint 8 x 10 - Black and White",
		productDescription: "Hang this signed 8 x 10 reprint piece of art on your wall of choice. The Boom Shakalaka spider will delight your friends and satisfy your need for amazing hand.",
		productImageURL: "https://cdn.shopify.com/s/files/1/0422/7341/products/boom-shakalaka-reprint-bw.png?_accept=image%2Favif",
		productPageURL: "https://help.shopify.com/en/manual/products/inventory",
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
		family: "283999157",
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
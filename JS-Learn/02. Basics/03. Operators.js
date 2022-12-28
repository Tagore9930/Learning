/**
 * Guess percentage formula:- discount = (( listingPrice - sellingPrice) / listingPrice) * 100.
 *  a + ((b * c) / d) + e
 *
 */

var listingPrice = 799;
var sellingPrice = 199;

var discountPercentage = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log(discountPercentage);

var displayDiscountPercentage = Math.round(discountPercentage);

console.log(displayDiscountPercentage + "% offer");
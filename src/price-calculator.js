var PC = {
	CONFIG: {
		ADDITIONAL_PRICE_NEW_PRODUCT: 25,
		ADDITIONAL_PRICE_OLD_PRODUCT: 35,
		REBATE_COMPANY_USER: 5,
		REBATE_NEW_PRODUCT_PUBLISHED_TODAY: 10
	}, 

	calculateAdditionalPrice : function(productType){
		if (productType === 'new') {
			return PC.CONFIG.ADDITIONAL_PRICE_NEW_PRODUCT;
		} else {
			return PC.CONFIG.ADDITIONAL_PRICE_OLD_PRODUCT;
		}
	}, 

	calculateRebate: function(userType, productType, publishDate){
		var rebateSum = 0;
		if (userType === 'company') {
			rebateSum += PC.CONFIG.REBATE_COMPANY_USER;
		}
		if (productType === 'new' && publishDate.toDateString() === new Date().toDateString()) {
			rebateSum += PC.CONFIG.REBATE_NEW_PRODUCT_PUBLISHED_TODAY;
		}
		return rebateSum;
	}
};

var calculatePrice = function (userType, productType, price, publishedDate) {
	var additionalPrice = PC.calculateAdditionalPrice(productType);
	var rebate = PC.calculateRebate(userType, productType, publishedDate);
	return price + additionalPrice - rebate;
}

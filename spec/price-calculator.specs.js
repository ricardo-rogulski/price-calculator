describe('price calculator', function(){

	//Normal user ones
	it('should calc price right', function(){
		var userType = 'normal';
		var productType = 'new';
		var price = 10;
		var publishedDate = new Date();

		var expected = 25;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right', function(){
		var userType = 'normal';
		var productType = 'new';
		var price = 10;
		var publishedDate = new Date(Date.now() - 86400000);

		var expected = 35;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right', function(){
		var userType = 'normal';
		var productType = 'old';
		var price = 10;
		var publishedDate = new Date();

		var expected = 45;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right', function(){
		var userType = 'normal';
		var productType = 'old';
		var price = 10;
		var publishedDate = new Date(Date.now() - 86400000);

		var expected = 45;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	//Company user ones
	it('should calc price right', function(){
		var userType = 'company';
		var productType = 'new';
		var price = 10;
		var publishedDate = new Date();

		var expected = 20;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right', function(){
		var userType = 'company';
		var productType = 'new';
		var price = 10;
		var publishedDate = new Date(Date.now() - 86400000);

		var expected = 30;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right', function(){
		var userType = 'company';
		var productType = 'old';
		var price = 10;
		var publishedDate = new Date();

		var expected = 40;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});

	it('should calc price right', function(){
		var userType = 'company';
		var productType = 'old';
		var price = 10;
		var publishedDate = new Date(Date.now() - 86400000);

		var expected = 40;
		var actual = calculatePrice(userType, productType, price, publishedDate);
		expect(expected).to.equal(actual);
	});


});
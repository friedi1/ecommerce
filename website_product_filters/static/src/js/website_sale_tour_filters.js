(function (){
    'use strict';
    openerp.Tour.register({
        id: 'shop_test_filters',
        name: 'Test Shop With filters',
        path: '/browse',
        mode: 'test',
        steps: [
            {
                title: 'Click on category Computers',
                element: 'a[href="/browse/computers-2"]',
            },
            {
                title: 'Click on category Devices',
                content: "Here we check if the products on the tree are the right ones to render on popular products",
                waitFor: '.subcategories:contains("Laptops"), .subcategories:contains("Computers"), .subcategories:contains("Devices")',
                element: 'li[data-categid="11"] a',
            },
            {
                title: 'Click on category Keyboard / Mouse',
                content: "This step will wait to see if it finds the subcagtegories on the main div of subcategories",
                waitFor: '.subcategories:contains("Keyboard / Mouse"), .subcategories:contains("Screen"), .subcategories:contains("Speakers")',
                element: 'li[data-categid="15"] a:contains("Keyboard / Mouse")',
            },
            {
                title: 'Select 16 GB filter on memory section',
                waitNot: '*[data-name="iPad Mini"],[data-name="iPad Retina Display"]',
                waitFor: '.js_attributes label:contains(16 GB), .js_attributes label:contains(32 GB)',
                element: 'label:contains(16 GB) input',
            },
            {
                title: 'Select price range of 0 to 100 USD',
                waitFor: '.sort_bar h4:contains(16 GB)',
                element: '.js_attributes input[name=range]input[value=1]',
            },
            {
                title: 'Click on category Computers',
                waitFor: 'a:contains(Computers)',
                element: 'ul.breadcrumb li:contains(Computers) a',
            },
            {
                title: 'Click on subcategory Computers',
                waitFor: 'a:contains(Computers)',
                element: '.nav-pills ul a:contains(Computers)',
            },
            {
                title: 'Click on category Computer all-in-one',
                waitFor: 'a:contains("Computer all-in-one")',
                element: 'li[data-categid="22"] a:contains("Computer all-in-one")',
            },
            {
                title: 'Filter by 16GB iPad',
                waitFor: '.js_attributes label:contains(16 GB), .js_attributes label:contains(32 GB)',
                element: 'label:contains(16 GB) input',
            },
            {
                title: 'Filter by White value on iPad',
                waitFor: '.sort_bar h4:contains(16 GB)',
                element: '.js_attributes label.css_attribute_color input[value="2-3"]',
            },
            {
                title: 'Click on Filter 32GB on iPad',
                waitFor: '.sort_bar h4:contains(White)',
                element: 'label:contains(32 GB) input',
            },
            {
                title: 'Delete 32GB from checkbox list',
                element: '.sort_bar h4:contains(32 GB) a.removable-badge',
            },
            {
                title: 'Uncheck checkbox White Filter',
                element: '.js_attributes label.css_attribute_color input[value="2-3"]',
            },
            {
                title: 'Click on Filter 200 - 500 price range',
                waitNot: '.sort_bar h4:contains(White) a.removable-badge',
                element: 'label:contains(200) input',
            },
            {
                title: 'Uncheck checkbox 200 - 500 price range',
                waitNot: 'h5:contains(iPad Retina Display)',
                element: 'label:contains(200) input',
            },
            {
                title: 'Uncheck checkbox filter by 16GB',
                waitFor: 'h5:contains(iPad Retina Display)',
                element: 'label:contains(16 GB) input',
            },
            {
                title: 'Uncheck checkbox filter by 32GB',
                waitNot: '.sort_bar h4:contains(16 GB)',
                element: 'label:contains(32 GB) input',
            },
            {
                title: 'Click on Filter Brand Apple',
                waitNot: '.sort_bar h4:contains(32 GB)',
                element: 'label:contains(Apple)',
            },
            {
                title: 'Uncheck checkbox Brand Apple',
                waitNot: 'h5:contains(Google Nexus Tab)',
                element: 'label:contains(Apple)',
            },
            {
                title: 'Click on category Computers',
                waitFor: 'h5:contains(Samsung Galaxy Tab), h5:contains(Google Nexus Tab)',
                element: 'ul.breadcrumb li:contains(Computers) a',
            },
            {
                title: 'Click on subcategory Computers',
                waitFor: 'a:contains(Computers)',
                element: '.nav-pills ul a:contains(Computers)',
            },
            {
                title: 'Click on category Computer all-in-one',
                waitFor: 'a:contains("Computer all-in-one")',
                element: 'li[data-categid="22"] a:contains("Computer all-in-one")',
            },
            {
                title: 'Click on Filter Unknown Memory',
                waitFor: 'a:contains(Computers)',
                element:   'form.js_attributes label:contains(Unknown) input:not(:checked)',

            },
            {
                title: 'Wait for products to appear and tag to dissapear',
                waitFor: '.sort_bar h4:contains(Unknown)',
                waitNot: 'h5:contains(iPad Retina Display), h5:contains(iPhone 6s Plus)',
            },
            {
                title: 'Uncheck the Unknown Memory filter',
                element:   'form.js_attributes label:contains(Unknown) input:checked',
            },
            {
                title: 'Finish Tour',
                waitNot: '.sort_bar h4:contains(Unknown)',
                waitFor: 'h5:contains(iPad Retina Display), h5:contains(iPhone 6s Plus)',
            },
        ],
    });

}());

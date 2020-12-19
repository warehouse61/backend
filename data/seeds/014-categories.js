
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
      // Inserts seed entries
      return knex('categories').insert([
        {category: 'Antiques and Primitives'},
        {category: 'Beauty/Health/Medical'},
        {category: 'Bedding/Bath/Baby'},
        {category: 'Books/Stamps/Ephemera'},
        {category: 'Clothing/Shoes/Handbags'},
        {category: 'Coin and Currency'},
        {category: 'Commerical and Industrial'},
        {category: 'Electronics/TVs/Cameras'},
        {category: 'Fantasy/Gothic/Mythcal'}, 
        {category: 'Fine Art'},
        {category: 'Firearms/Weaponry/Military'},
        {category: 'Furniture'},
        {category: 'Glass/China/Pottery'},
        {category: 'Heavy and Farm Equipment'},
        {category: 'Historical Artifacts'},  
        {category: 'Holiday/Sewing/Crafts'},
        {category: 'Home Decor and Lighting'},
        {category: 'Housewares and Small Appliances'},
        {category: 'Jewelry and Watches'},
        {category: 'Large Applicances'},
        {category: 'Lawn/Garden/Home Improvement'},
        {category: 'Motor Vehicles/Collector Cars/Marine'},
        {category: 'Movies/Music/Video Games'},
        {category: 'Musical Instruments'},
        {category: 'Odds and Ends (Miscellaneous)'},
        {category: 'Office Furniture and Supplies'},
        {category: 'Outdoors and Sporting Goods'},
        {category: 'Precious Stones and Metals'},
        {category: 'Real Estate'},
        {category: 'Soft Goods and Textiles'},
        {category: 'Sports Memorabilila'},
        {category: 'Storage Units'},
        {category: 'Tools and Garage'},
        {category: 'Toys and Hobbies'},
        {category: 'Vintage and Rare Collectibles'},
        {category: 'Wall Art/Mirrors/Clocks'},
      ]);
    
};

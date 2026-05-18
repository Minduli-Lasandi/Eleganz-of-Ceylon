// Create an array of all the products
const products = [
    {
      name: 'Porcelain Elephant Statue',
      description: 'Two porcelain elephant statues. Height-4"+. Colour-Red,Blue & Gold.',
      image: 'images/products/arts_crafts/1.jpg',
      price: 4.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Wooden Elephant Statue',
      description: 'Hand made wooden elephant statue. Height-4".',
      image: 'images/products/arts_crafts/2.jpg',
      price: 5.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Marble Elephant Statue',
      description: 'Hand made Marble stone. Height-3".',
      image: 'images/products/arts_crafts/3.jpg',
      price: 7.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Wooden Elephant Statue',
      description: 'Hand made Rose wood. Height-6". Colour-Brown',
      image: 'images/products/arts_crafts/4.jpg',
      price: 9.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Wooden Elephant Statue',
      description: 'Hand made Rose Wood. Height-4".',
      image: 'images/products/arts_crafts/5.jpg',
      price: 6.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Elephant Wall Decoration',
      description: 'Hand made Rose wood. Height-3ft. Colour-Brown',
      image: 'images/products/arts_crafts/6.jpg',
      price: 80.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Elephant Wall Decoration',
      description: 'Hand made Rose wood. Height-3ft. Colour-Black',
      image: 'images/products/arts_crafts/7.jpg',
      price: 70.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Wooden Elephant Statue',
      description: 'Hand made Rose wood. Height-4".',
      image: 'images/products/arts_crafts/8.jpg',
      price: 5.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Wooden Elephant Statue',
      description: 'Trunk Up- Hand Made Rose Wood. Height-3".',
      image: 'images/products/arts_crafts/9.jpg',
      price: 4.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Coconut Shell Bowl',
      description: 'Hand Made Coconut Shell Bowl. Salad, Smoothie, Cereal, Ice Cream or Buddha Bowl',
      image: 'images/products/arts_crafts/10.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Bamboo Pittu Maker',
      description: 'Hand made Traditional Bamboo Puttu maker. With Handle/Steamer.',
      image: 'images/products/arts_crafts/11.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Mango Wood Cutting Board',
      description: 'Best Kitchen Reversible Chopping Board for Meat Cheese and Vegetables. With Handle. 33cm x 23cm x 2cm.',
      image: 'images/products/arts_crafts/12.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: '3 Soup spoons',
      description: 'Coconut shell spoon. 3 pieces.',
      image: 'images/products/arts_crafts/13.jpg',
      price: 1.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Multipurpose Bamboo Basket',
      description: 'Hand made multipurpose bamboo basket. 21cm Diameter.',
      image: 'images/products/arts_crafts/14.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Multipurpose Bamboo Basket',
      description: 'Hand made multipurpose bamboo basket. 30cm Diameter.',
      image: 'images/products/arts_crafts/15.jpg',
      price: 3.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Coconut Shell Juice Cup',
      description: 'Hand made Coconut Shell Juice Cup. Hot Drinks, Juice and Shakes',
      image: 'images/products/arts_crafts/16.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Coconut Shell Juice Cup',
      description: 'Hand made Coconut Shell Juice Cup. Hot Drinks, Juice and Shakes',
      image: 'images/products/arts_crafts/17.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Coconut Shell Ice Cream Cup',
      description: 'Hand Made Coconut Shell Ice Cream Cup/Bowl with Spoon. Natural, Organic. 1 cup.',
      image: 'images/products/arts_crafts/18.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Coconut Ladle Medium',
      description: 'Made from Coconut Shell and Coconut Wood. Hand made.',
      image: 'images/products/arts_crafts/19.jpg',
      price: 1.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Bamboo Pen Holder',
      description: 'Hand made Bamboo pen holder. Office decoration- Gift- Bamboo Showpiece.".',
      image: 'images/products/arts_crafts/20.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Ball Point Pen',
      description: 'Bamboo, Coconut shell Blue Pen. Natural & Eco-friendly pen.',
      image: 'images/products/arts_crafts/21.jpg',
      price: 1.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Multipurpose Bamboo Basket',
      description: 'Fruits, Vegetables, etc. Organic, Hand made',
      image: 'images/products/arts_crafts/22.jpg',
      price: 5.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Bamboo Serving Tray - Round',
      description: '(25cm Diameter) Tea, Coffee. Organic, Hand Made, Made from Bamboo',
      image: 'images/products/arts_crafts/23.jpg',
      price: 4.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Bamboo Serving Tray - Rectangle',
      description: '(30cm x 22cm) Tea, Coffee. Organic, Hand Made, Made from Bamboo',
      image: 'images/products/arts_crafts/24.jpg',
      price: 4.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Bamboo Basket with Lid',
      description: 'Multipurpose basket. Hand made.',
      image: 'images/products/arts_crafts/25.jpg',
      price: 4.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Bamboo Table Mat',
      description: '(40cm x 30cm) Kitchen & Dining Placement.',
      image: 'images/products/arts_crafts/26.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Bamboo Basket',
      description: 'Hand made Bamboo basket. (7" x 7" x 7")',
      image: 'images/products/arts_crafts/27.jpg',
      price: 4.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Single Piece Bamboo Tong',
      description: 'Hand Made tong for Kitchen. Natural, Organic.',
      image: 'images/products/arts_crafts/28.jpg',
      price: 1.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Bamboo Serving Tray - Oval',
      description: '(35cm x 25cm) Made from Bamboo. Hand made.',
      image: 'images/products/arts_crafts/29.jpg',
      price: 3.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Bamboo Basket wth Handle',
      description: 'Hand made Multipurpose basket. Round shape. 22cm Diameter.".',
      image: 'images/products/arts_crafts/30.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Bamboo Shoe Horn (Pack of 2)',
      description: 'Hand Made Bamboo Wood Shoe Horn. Helps Put on Shoes',
      image: 'images/products/arts_crafts/31.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Bamboo Hooks/ Key Holders',
      description: 'Wall Mounted. Natural & Eco friendly Decorative Multipurpose Hanger.',
      image: 'images/products/arts_crafts/32.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Coconut Wood Fork (Pack of 3)',
      description: 'Natural - Organic - Hand Made',
      image: 'images/products/arts_crafts/33.jpg',
      price: 1.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Wooden Rotti Roller Board',
      description: 'Wooden Chapati/Rotti Board and Roller. Set- 30cm Rolling Board and Roller.',
      image: 'images/products/arts_crafts/34.jpg',
      price: 3.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Coconut Wood Nonstick Spatula',
      description: 'Natural - Organic - Hand Made.',
      image: 'images/products/arts_crafts/35.jpg',
      price: 1.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Lord Buddha Statue',
      description: 'Hand made Wooden Buddha Statue. Height-4"',
      image: 'images/products/arts_crafts/36.jpg',
      price: 4.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Bamboo Straw Set',
      description: 'Natural, eco-friendly. Kitchen, cafe, restaurant. Length-8″, 25 bamboo straws.',
      image: 'images/products/arts_crafts/37.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Gini Raksha (Fire Demon) Mask',
      description: 'Handmade using 100% Kaduru wood. Traditional Sri Lankan mask. Token of good fortune in homes and business.',
      image: 'images/products/arts_crafts/38.jpg',
      price: 40.00,
      category: 'artsAndCrafts'
    },
    {
      name: '18 Sanniya (Medicine Demon) Mask',
      description: '10″ x 7″. Handmade using 100% Kaduru wood. Token of good fortune in homes and business.',
      image: 'images/products/arts_crafts/39.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Natural Pentagon Dream Catcher',
      description: '"Vee Karalkadaya" Handmade dream catcher made of paddy spikes, cinnamon sticks.',
      image: 'images/products/arts_crafts/40.jpg',
      price: 10.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Natural Triangle Dream Catcher',
      description: '"Vee Karalkadaya" Handmade. Made of paddy spikes, cinnamon sticks, wooden beads.',
      image: 'images/products/arts_crafts/41.jpg',
      price: 2.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Amazing Yogi Carving',
      description: 'Hancrafted using mahogany wood, 19cm in height.',
      image: 'images/products/arts_crafts/42.jpg',
      price: 15.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Ancient King Wooden Statue',
      description: '18th Century Sri Lankan King’s head, hand crafted on soft Balsa wood including every fine facial feature. 8″',
      image: 'images/products/arts_crafts/43.jpg',
      price: 35.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Black & White Gara Yaka Mask 10"',
      description: 'Handmade using 100% Kaduru wood. Traditional Sri Lankan mask. Protecting you against evil eye and evil mouth.',
      image: 'images/products/arts_crafts/44.jpg',
      price: 40.00,
      category: 'artsAndCrafts'
    },
    {
      name: 'Ceylon Finest Black Tea',
      description: 'Black tea - English breakfast. 20 tea bags in caddy',
      image: 'images/products/foods_beverages/1.png',
      price: 5.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Laksala Silvertips - 10 Tea Bags',
      description: '10 Pyramid tea bags. Each tea bag weight 2g.',
      image: 'images/products/foods_beverages/2.png',
      price: 3.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Ceylon Flavoured Cinnamon Tea',
      description: 'Ceylon finest flavoured cinnomon tea. 20 tea bags.',
      image: 'images/products/foods_beverages/3.png',
      price: 4.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Laksala Organic Green Tea',
      description: 'Ceylon flavoured organic green tea. in reed box 100g',
      image: 'images/products/foods_beverages/4.png',
      price: 6.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Sour Sop - Ceylon Flavoured Tea',
      description: 'Laksala ceylon flavoured tea sour sop in reed box 100g.',
      image: 'images/products/foods_beverages/5.png',
      price: 5.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Ceylon Organic Green Tea Caddy',
      description: 'Ceylon finest organnically grown green tea. 20 pyramid tea bags.',
      image: 'images/products/foods_beverages/6.png',
      price: 5.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Laksala Pure Ceylon Black Tea.',
      description: 'Laksala pure ceylon black team FBOP in a glass jar.',
      image: 'images/products/foods_beverages/7.png',
      price: 8.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Ceylon Cinnomon Tea (200g)',
      description: 'Laksala celon cinnomon tea 200g BOP.',
      image: 'images/products/foods_beverages/8.png',
      price: 8.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Ceylon Cinnomon Sticks 100g',
      description: 'Ceylon finest spices cinnomon sticks.',
      image: 'images/products/foods_beverages/9.png',
      price: 3.00,
      category: 'foodsAndBeverages'
    },    
    {
      name: 'Cinnomon Toothpicks - 100',
      description: 'A uniqueue Sri lankan Cinnomon product.',
      image: 'images/products/foods_beverages/10.png',
      price: 1.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Pure Ceylon Golden Tips Tea',
      description: 'Laksala pure ceylon tea golden tips in a glass jar. 40g.',
      image: 'images/products/foods_beverages/11.png',
      price: 3.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Cinnomon Toothpicks - 200',
      description: 'A uniqueue Sri lankan Cinnomon product.',
      image: 'images/products/foods_beverages/12.png',
      price: 2.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Pure Ceylon Cinnamon Sticks',
      description: '100g - Finest quality pure cinnamon sticks.',
      image: 'images/products/foods_beverages/13.png',
      price: 3.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Pure Ceylon Cinnamon Sticks',
      description: '250g - Classic Ceylon Cinnamon Sticks Gift pack.',
      image: 'images/products/foods_beverages/14.png',
      price: 6.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Ceylon FInest Cinnamon Powder',
      description: '100g - Laksala finest cinnamon powder in metal can.',
      image: 'images/products/foods_beverages/15.png',
      price: 3.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Ceylon Black Pepper - 100g',
      description: 'Laksala ceylon black pepper container.',
      image: 'images/products/foods_beverages/16.png',
      price: 2.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Ceylon Mace - 50g',
      description: 'Laksala ceylon mace container.',
      image: 'images/products/foods_beverages/17.png',
      price: 2.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Ceylon Cloves - 100g',
      description: 'Laksala ceylon cloves container.',
      image: 'images/products/foods_beverages/18.png',
      price: 3.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Ceylon Dried Ginger - 100g',
      description: 'Laksala ceylon dried ginger container.',
      image: 'images/products/foods_beverages/19.png',
      price: 3.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Ceylon Nutmeg - 100g',
      description: 'Laksala ceylon nutmeg container.',
      image: 'images/products/foods_beverages/20.png',
      price: 3.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Assorted Ceylon Spices - 150g',
      description: 'Cloves, Chill Pods, Nutmeg, Coriander, Black Pepper, Mace, Cardamom, Cinnamon, Fenugreek',
      image: 'images/products/foods_beverages/21.png',
      price: 6.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Chicken Curry Mix - 100g',
      description: 'Laksala chicken curry mix.',
      image: 'images/products/foods_beverages/22.png',
      price: 2.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Garam Masala - 100g',
      description: 'Laksala Garam masala.',
      image: 'images/products/foods_beverages/23.png',
      price: 2.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Ceylon White Pepper - 100g',
      description: 'Laksala ceylon white pepper container.',
      image: 'images/products/foods_beverages/24.png',
      price: 2.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Kithul Flour - 100g',
      description: '100% ceylon natural dietary - kithul flour.',
      image: 'images/products/foods_beverages/29.png',
      price: 2.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Kithul Syrup - 500g',
      description: 'Fresh from the flowers of the kithul trees.',
      image: 'images/products/foods_beverages/25.png',
      price: 5.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Virgin Coconut Oil - 1000ml',
      description: 'Ceylon organic virgin coconut oil.',
      image: 'images/products/foods_beverages/26.png',
      price: 4.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Sambol Food Jars',
      description: '3 sambol jars in a tray. (250x3)',
      image: 'images/products/foods_beverages/27.png',
      price: 9.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Organic Coconut Flour',
      description: '400g - Laksala organic coconut flour.',
      image: 'images/products/foods_beverages/28.png',
      price: 4.00,
      category: 'foodsAndBeverages'
    },  
    {
      name: 'Batik Shirt - Men',
      description: 'Orange Colour, Size - L',
      image: 'images/products/fashion_clothing/1.jpg',
      price: 8.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Batik Shirt - Men',
      description: 'Yellow Colour, Size - L',
      image: 'images/products/fashion_clothing/2.jpg',
      price: 8.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Batik Shirt - Men',
      description: 'Brown & White Colour, Size - L',
      image: 'images/products/fashion_clothing/3.jpg',
      price: 8.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Batik Sarong - Men',
      description: 'Dark Green',
      image: 'images/products/fashion_clothing/4.jpg',
      price: 8.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Batik Shirt - Men',
      description: 'White & Blue, Size - L',
      image: 'images/products/fashion_clothing/5.jpg',
      price: 10.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Batik Shirt - Men',
      description: 'White & Red, Size - L',
      image: 'images/products/fashion_clothing/6.jpg',
      price: 10.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Batik Shirt & Sarong',
      description: 'Orange Colour, Size - L',
      image: 'images/products/fashion_clothing/7.jpg',
      price: 13.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Batik Shirt & Sarong',
      description: 'Blue colour, Size - L',
      image: 'images/products/fashion_clothing/8.jpg',
      price: 13.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Batik Shirt and Sarong - Kids',
      description: 'Orange Colour, Size - M',
      image: 'images/products/fashion_clothing/9.jpg',
      price: 11.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Batik Shirt and Sarong - Kids',
      description: 'White & Blue, Size - M',
      image: 'images/products/fashion_clothing/10.jpg',
      price: 11.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Black T-Shirt',
      description: 'Sri Lanka Elephant printed, Free Size',
      image: 'images/products/fashion_clothing/11.jpg',
      price: 5.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Black T-Shirt',
      description: 'I love Sri Lanka, Free Size',
      image: 'images/products/fashion_clothing/12.jpg',
      price: 5.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Black T-Shirt',
      description: 'Sri Lanka flag printed, Free size',
      image: 'images/products/fashion_clothing/13.jpg',
      price: 5.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Black T-Shirt',
      description: 'Sri Lanka printed, Free size',
      image: 'images/products/fashion_clothing/14.jpg',
      price: 5.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Black T-Shirt',
      description: 'Sri Lanka cricket, Free size',
      image: 'images/products/fashion_clothing/15.jpg',
      price: 5.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Black T-Shirt',
      description: 'Sri Lankan Traditonal demon Mask, Free size',
      image: 'images/products/fashion_clothing/16.jpg',
      price: 5.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Black T-Shirt',
      description: 'Sri Lankan Map printrd, Free size',
      image: 'images/products/fashion_clothing/17.jpg',
      price: 5.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'White T-Shirt',
      description: 'Sri Lankan Map printrd, Free size',
      image: 'images/products/fashion_clothing/18.jpg',
      price: 5.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Black T-Shirt',
      description: '"LANKA" printed, Free size',
      image: 'images/products/fashion_clothing/19.jpg',
      price: 5.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Couple Black T-Shirts',
      description: 'Sri Lankan Elephant printed, Free Size, 2 t-shirts',
      image: 'images/products/fashion_clothing/20.jpg',
      price: 8.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Couple White T-Shirts',
      description: 'Sri Lankan Elephant printed, Free Size, 2 t-shirts',
      image: 'images/products/fashion_clothing/21.jpg',
      price: 8.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Couple Ash-colour T-Shirts',
      description: 'Sri Lankan Elephant printed, Free Size, 2 t-shirts',
      image: 'images/products/fashion_clothing/22.jpg',
      price: 9.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Hoodie - Red',
      description: 'Sri Lanka, Uni-sex',
      image: 'images/products/fashion_clothing/23.jpg',
      price: 12.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Hoodie - White',
      description: 'Sri Lankan Elephant, Uni-sex',
      image: 'images/products/fashion_clothing/24.jpg',
      price: 13.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Hoodie - Blue',
      description: 'I love Sri Lanka, Uni-sex',
      image: 'images/products/fashion_clothing/25.jpg',
      price: 12.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Hoodie - Black',
      description: 'Sri Lanka, Uni-sex',
      image: 'images/products/fashion_clothing/26.jpg',
      price: 12.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Hoodie - Black',
      description: 'Sri Lankan Mountains, Uni-sex',
      image: 'images/products/fashion_clothing/27.jpg',
      price: 11.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Hoodie - Black',
      description: 'Colombo Sri Lanka, Uni-sex',
      image: 'images/products/fashion_clothing/28.jpg',
      price: 11.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Hoodie - Ash-colour',
      description: 'Sri lanka, Ladies',
      image: 'images/products/fashion_clothing/29.jpg',
      price: 11.00,
      category: 'fashionAndClothing'
    },  
    {
      name: 'Glow - Renewing All-Day Protector',
      description: 'True Turmeric, Vitamin-C - 100g',
      image: 'images/products/cosmetics_wellness/1.jpg',
      price: 13.00,
      category: 'cosmeticsAndWellness'
    },  
    {
      name: 'White Mint Facial Cleansing Foam',
      description: '150ml',
      image: 'images/products/cosmetics_wellness/2.jpg',
      price: 12.00,
      category: 'cosmeticsAndWellness'
    },  
    {
      name: 'Body Spray - 200ml',
      description: 'Lavender Tuberose',
      image: 'images/products/cosmetics_wellness/3.jpg',
      price: 10.00,
      category: 'cosmeticsAndWellness'
    },  
    {
        name: 'Skin Balance - Moringa Herb',
        description: 'Discoloration Treatment Face Serum 30ml',
        image: 'images/products/cosmetics_wellness/4.jpg',
        price: 13.00,
        category: 'cosmeticsAndWellness'
    },
    {
      name: '14 Days Of Spring',
      description: 'Spa Ceylon - Wellness & Beauty Calendar. Gift bundles',
      image: 'images/products/cosmetics_wellness/5.jpg',
      price: 34.00,
      category: 'cosmeticsAndWellness'
    },  
    {
      name: 'Virgin Coconut- MakeUp Remover',
      description: 'Facial cleaning wipes. Skin wellness',
      image: 'images/products/cosmetics_wellness/6.jpg',
      price: 8.00,
      category: 'cosmeticsAndWellness'
    },  
    {
      name: 'Neroli Jasmine- Hand wash',
      description: '250ml. Spa-Ceylon',
      image: 'images/products/cosmetics_wellness/7.jpg',
      price: 9.00,
      category: 'cosmeticsAndWellness'
    },  
    {
      name: 'Sal & Saffron Facial Protector',
      description: '100g. Vitamin-A rich, glow activating day facial protector. Face care',
      image: 'images/products/cosmetics_wellness/8.jpg',
      price: 15.00,
      category: 'cosmeticsAndWellness'
    },  
    {
      name: 'Baby Soothing Aloe Gel',
      description: '250ml',
      image: 'images/products/cosmetics_wellness/9.jpg',
      price: 8.00,
      category: 'cosmeticsAndWellness'
    },  
    {
      name: 'Marissa Eau De Perfume',
      description: '50ml',
      image: 'images/products/cosmetics_wellness/10.jpg',
      price: 26.00,
      category: 'cosmeticsAndWellness'
    },  
    {
      name: 'Intensive Under Eye Treatment',
      description: '20ml - White rice',
      image: 'images/products/cosmetics_wellness/11.jpg',
      price: 13.00,
      category: 'cosmeticsAndWellness'
    },  
    {
      name: 'Niroli Jasmine Hair Treatment Masque',
      description: '150ml',
      image: 'images/products/cosmetics_wellness/12.jpg',
      price: 15.00,
      category: 'cosmeticsAndWellness'
    },  
    {
      name: 'Skin SMooth Bakuchiol - 30ml',
      description: 'Retional alternative age refining day & night facial serum',
      image: 'images/products/cosmetics_wellness/13.jpg',
      price: 20.00,
      category: 'cosmeticsAndWellness'
    },  
    {
      name: 'Sandalwood Vetiver',
      description: 'Gentle Hair cleanser - 250ml',
      image: 'images/products/cosmetics_wellness/14.jpg',
      price: 11.00,
      category: 'cosmeticsAndWellness'
    },  
    {
      name: 'Soothing Eye Serum',
      description: 'White Sandal - 30ml',
      image: 'images/products/cosmetics_wellness/15.jpg',
      price: 9.00,
      category: 'cosmeticsAndWellness'
    },  
    {
      name: 'Glow - Facial CLeansing Foam',
      description: 'True Turmeric, Vitamin-C - 150ml',
      image: 'images/products/cosmetics_wellness/16.jpg',
      price: 7.00,
      category: 'cosmeticsAndWellness'
    }
  ];
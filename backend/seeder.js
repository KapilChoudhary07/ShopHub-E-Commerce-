const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const products = [
  // ── MEN ──────────────────────────────────────────
  {
    name: "Nike Air Max Shoes",
    price: 3499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    brand: "Nike",
    category: "Men",
    description: "Lightweight running shoes with air cushion sole for all-day comfort.",
    countInStock: 10,
    rating: 4.5,
    numReviews: 120
  },
  {
    name: "Adidas Ultraboost",
    price: 2999,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
    brand: "Adidas",
    category: "Men",
    description: "Responsive boost cushioning for energy return with every stride.",
    countInStock: 15,
    rating: 4.3,
    numReviews: 95
  },
  {
    name: "Puma Dry Cell T-Shirt",
    price: 799,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80",
    brand: "Puma",
    category: "Men",
    description: "Moisture-wicking cotton blend t-shirt for active wear.",
    countInStock: 20,
    rating: 4.2,
    numReviews: 60
  },
  {
    name: "Levi's 511 Slim Jeans",
    price: 1999,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
    brand: "Levi's",
    category: "Men",
    description: "Classic slim fit stretch denim in mid-rise waist.",
    countInStock: 25,
    rating: 4.6,
    numReviews: 150
  },
  {
    name: "Men's Formal Shirt",
    price: 1299,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80",
    brand: "Arrow",
    category: "Men",
    description: "Wrinkle-free cotton formal shirt for office and events.",
    countInStock: 18,
    rating: 4.4,
    numReviews: 75
  },

  // ── WOMEN ────────────────────────────────────────
  {
    name: "Women's Handbag",
    price: 1499,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
    brand: "Lavie",
    category: "Women",
    description: "Spacious stylish tote bag with premium faux leather finish.",
    countInStock: 12,
    rating: 4.5,
    numReviews: 80
  },
  {
    name: "Ethnic Kurti",
    price: 999,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    brand: "Biba",
    category: "Women",
    description: "Floral print cotton kurti with embroidery detailing.",
    countInStock: 20,
    rating: 4.2,
    numReviews: 40
  },
  {
    name: "Women's Sneakers",
    price: 1899,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    brand: "Skechers",
    category: "Women",
    description: "Lightweight memory foam sneakers for everyday casual wear.",
    countInStock: 14,
    rating: 4.4,
    numReviews: 65
  },
  {
    name: "Women's Sunglasses",
    price: 799,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
    brand: "Fastrack",
    category: "Women",
    description: "UV400 polarized cat-eye sunglasses with metal frame.",
    countInStock: 30,
    rating: 4.3,
    numReviews: 55
  },
  {
    name: "Women's Wristwatch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    brand: "Titan",
    category: "Women",
    description: "Elegant rose gold analog watch with leather strap.",
    countInStock: 10,
    rating: 4.6,
    numReviews: 90
  },

  // ── ELECTRONICS ──────────────────────────────────
  {
    name: "Apple Watch Series 9",
    price: 24999,
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80",
    brand: "Apple",
    category: "Electronics",
    description: "Advanced health sensors, always-on display and crash detection.",
    countInStock: 5,
    rating: 4.8,
    numReviews: 200
  },
  {
    name: "Sony WH-1000XM5",
    price: 1999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    brand: "Sony",
    category: "Electronics",
    description: "Industry-leading noise cancelling over-ear headphones.",
    countInStock: 18,
    rating: 4.4,
    numReviews: 110
  },
  {
    name: "HP Pavilion Laptop",
    price: 55999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
    brand: "HP",
    category: "Electronics",
    description: "Intel i5 12th gen, 16GB RAM, 512GB SSD full HD display.",
    countInStock: 7,
    rating: 4.7,
    numReviews: 85
  },
  {
    name: "Canon EOS DSLR Camera",
    price: 45999,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
    brand: "Canon",
    category: "Electronics",
    description: "24.1MP APS-C sensor with dual pixel autofocus system.",
    countInStock: 4,
    rating: 4.6,
    numReviews: 70
  },
  {
    name: "JBL Flip 6 Speaker",
    price: 1299,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    brand: "JBL",
    category: "Electronics",
    description: "Waterproof portable Bluetooth speaker with 12hr battery.",
    countInStock: 15,
    rating: 4.4,
    numReviews: 90
  },
  {
    name: "Logitech Gaming Mouse",
    price: 899,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",
    brand: "Logitech",
    category: "Electronics",
    description: "High precision 25K DPI optical sensor gaming mouse.",
    countInStock: 30,
    rating: 4.6,
    numReviews: 150
  },

  // ── KIDS ─────────────────────────────────────────
  {
    name: "Remote Control Toy Car",
    price: 499,
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80",
    brand: "Funskool",
    category: "Kids",
    description: "Full function RC car with rechargeable battery and LED lights.",
    countInStock: 40,
    rating: 4.1,
    numReviews: 30
  },
  {
    name: "Baby Soft Shoes",
    price: 599,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80",
    brand: "Babyhug",
    category: "Kids",
    description: "Anti-slip soft sole shoes for toddlers aged 0-18 months.",
    countInStock: 25,
    rating: 4.3,
    numReviews: 20
  },
  {
    name: "Kids Backpack",
    price: 699,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    brand: "Skybags",
    category: "Kids",
    description: "Lightweight cartoon printed school bag with ergonomic straps.",
    countInStock: 35,
    rating: 4.2,
    numReviews: 45
  },

  // ── BEAUTY ───────────────────────────────────────
  {
    name: "Lakme Lipstick Set",
    price: 599,
    image: "https://images.unsplash.com/photo-1586495777744-4e6b23c0f1c1?w=600&q=80",
    brand: "Lakme",
    category: "Beauty",
    description: "Long lasting matte finish lipstick set of 3 shades.",
    countInStock: 50,
    rating: 4.3,
    numReviews: 85
  },
  {
    name: "Neutrogena Face Wash",
    price: 349,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80",
    brand: "Neutrogena",
    category: "Beauty",
    description: "Oil-free acne-fighting gentle daily facial cleanser.",
    countInStock: 60,
    rating: 4.5,
    numReviews: 120
  },
  {
    name: "Himalaya Face Cream",
    price: 199,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    brand: "Himalaya",
    category: "Beauty",
    description: "Nourishing herbal moisturizer with aloe vera and turmeric.",
    countInStock: 80,
    rating: 4.4,
    numReviews: 95
  },
  {
  name: "Raymond Blazer",
  price: 4999,
  image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=600&q=80",
  brand: "Raymond",
  category: "Men",
  description: "Premium wool blend slim fit blazer for formal occasions.",
  countInStock: 8,
  rating: 4.5,
  numReviews: 65
},
{
  name: "Men's Sports Watch",
  price: 1799,
  image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80",
  brand: "Casio",
  category: "Men",
  description: "Water resistant digital sports watch with stopwatch and alarm.",
  countInStock: 20,
  rating: 4.4,
  numReviews: 88
},
{
  name: "Men's Leather Wallet",
  price: 699,
  image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
  brand: "WildHorn",
  category: "Men",
  description: "Genuine leather bifold wallet with RFID blocking technology.",
  countInStock: 35,
  rating: 4.3,
  numReviews: 110
},
{
  name: "Men's Sunglasses",
  price: 999,
  image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
  brand: "Ray-Ban",
  category: "Men",
  description: "Polarized UV400 wayfarer sunglasses with acetate frame.",
  countInStock: 22,
  rating: 4.6,
  numReviews: 74
},

// ── WOMEN ────────────────────────────────────────
{
  name: "Women's Yoga Pants",
  price: 1199,
  image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
  brand: "Decathlon",
  category: "Women",
  description: "High waist stretchable yoga pants with side pocket.",
  countInStock: 28,
  rating: 4.5,
  numReviews: 92
},
{
  name: "Women's Silk Saree",
  price: 3499,
  image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
  brand: "Nalli",
  category: "Women",
  description: "Pure Kanjivaram silk saree with golden zari border.",
  countInStock: 10,
  rating: 4.7,
  numReviews: 48
},
{
  name: "Women's Gold Earrings",
  price: 1899,
  image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
  brand: "Tanishq",
  category: "Women",
  description: "22KT gold plated jhumka earrings with pearl drop.",
  countInStock: 15,
  rating: 4.6,
  numReviews: 55
},
{
  name: "Women's Sports Shoes",
  price: 2299,
  image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
  brand: "Nike",
  category: "Women",
  description: "Breathable mesh running shoes with responsive foam sole.",
  countInStock: 18,
  rating: 4.4,
  numReviews: 70
},

// ── ELECTRONICS ──────────────────────────────────
{
  name: "Samsung 4K Smart TV 43\"",
  price: 32999,
  image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
  brand: "Samsung",
  category: "Electronics",
  description: "43 inch 4K UHD Smart TV with built-in Alexa and Netflix.",
  countInStock: 6,
  rating: 4.7,
  numReviews: 145
},
{
  name: "iPad Air",
  price: 59999,
  image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
  brand: "Apple",
  category: "Electronics",
  description: "M1 chip, 10.9 inch Liquid Retina display, 256GB storage.",
  countInStock: 5,
  rating: 4.8,
  numReviews: 180
},
{
  name: "Mechanical Keyboard",
  price: 2499,
  image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=600&q=80",
  brand: "Keychron",
  category: "Electronics",
  description: "TKL wireless mechanical keyboard with RGB backlight.",
  countInStock: 20,
  rating: 4.6,
  numReviews: 95
},
{
  name: "GoPro Hero 11",
  price: 34999,
  image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80",
  brand: "GoPro",
  category: "Electronics",
  description: "5.3K60 waterproof action camera with HyperSmooth stabilization.",
  countInStock: 8,
  rating: 4.7,
  numReviews: 115
},

// ── KIDS ─────────────────────────────────────────
{
  name: "LEGO Classic Set",
  price: 1299,
  image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80",
  brand: "LEGO",
  category: "Kids",
  description: "790 piece classic brick box for creative building fun.",
  countInStock: 25,
  rating: 4.8,
  numReviews: 95
},
{
  name: "Kids Cycle 20\"",
  price: 3999,
  image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80",
  brand: "Hero",
  category: "Kids",
  description: "20 inch kids bicycle with training wheels and front basket.",
  countInStock: 12,
  rating: 4.5,
  numReviews: 42
},
{
  name: "Kids Drawing Kit",
  price: 449,
  image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
  brand: "Faber-Castell",
  category: "Kids",
  description: "60 piece art kit with crayons, sketches and watercolors.",
  countInStock: 50,
  rating: 4.3,
  numReviews: 38
},

// ── BEAUTY ───────────────────────────────────────
{
  name: "Mamaearth Vitamin C Serum",
  price: 499,
  image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&q=80",
  brand: "Mamaearth",
  category: "Beauty",
  description: "1% Vitamin C face serum for glowing and even skin tone.",
  countInStock: 70,
  rating: 4.4,
  numReviews: 130
},
{
  name: "Biotique Shampoo",
  price: 249,
  image: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=600&q=80",
  brand: "Biotique",
  category: "Beauty",
  description: "Ayurvedic bio kelp fresh growth shampoo for hair fall control.",
  countInStock: 90,
  rating: 4.2,
  numReviews: 75
},
{
  name: "Maybelline Foundation",
  price: 599,
  image: "https://images.unsplash.com/photo-1631214524020-3c69b37ebe4a?w=600&q=80",
  brand: "Maybelline",
  category: "Beauty",
  description: "Fit Me matte and poreless liquid foundation SPF 22.",
  countInStock: 45,
  rating: 4.3,
  numReviews: 105
},
{
  name: "The Body Shop Body Butter",
  price: 1299,
  image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&q=80",
  brand: "The Body Shop",
  category: "Beauty",
  description: "Shea butter deeply moisturizing body butter for dry skin.",
  countInStock: 35,
  rating: 4.6,
  numReviews: 88
},
{
  name: "Gillette Shaving Kit",
  price: 399,
  image: "https://images.unsplash.com/photo-1585232351009-aa87416c7674?w=600&q=80",
  brand: "Gillette",
  category: "Beauty",
  description: "Complete shaving kit with razor, gel and aftershave lotion.",
  countInStock: 55,
  rating: 4.4,
  numReviews: 60
},
];

const seedData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Dummy data inserted successfully —", products.length, "products");
    process.exit();
  } catch (err) {
    console.log("❌ Error:", err);
    process.exit(1);
  }
};

seedData();
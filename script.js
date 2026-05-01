// Product Data
        const products = [
            // Curtains
            {
                id: 1,
                name: "Velvet Blackout Curtains",
                category: "curtains",
                price: 89.99,
                image: "img/1.avif",
                description: "Luxurious velvet curtains with 100% blackout lining. Perfect for bedrooms and media rooms.",
                rating: 4.8,
                reviews: 124,
                colors: ["7ft", "9ft"]
            },
            {
                id: 2,
                name: "Patch Design Curtains",
                category: "curtains",
                price: 64.99,
                image: "img/2.avif",
                description: "Light-filtering linen curtains that add elegance while maintaining privacy.",
                rating: 4.6,
                reviews: 89,
                colors: ["7ft", "9ft"]
            },
            {
                id: 3,
                name: "Digital Print Design Curtains",
                category: "curtains",
                price: 74.99,
                image: "img/3.avif",
                description: "Energy-efficient thermal curtains that keep your home comfortable year-round.",
                rating: 4.7,
                reviews: 203,
                colors: ["7ft", "9ft"]
            },
            {
                id: 4,
                name: "Premium Office Curtains",
                category: "curtains",
                price: 59.99,
                image: "img/4.avif",
                description: "Hand-woven macrame curtain perfect for doorways and room dividers.",
                rating: 4.9,
                reviews: 67,
                colors: ["7ft", "9ft"]
            },
            {
                id: 5,
                name: "AC Curtains",
                category: "curtains",
                price: 59.99,
                image: "img/5.avif",
                description: "Premium AC curtains with thick fabric, stylish design, light-blocking, heat-resistant, washable, perfect for privacy and cooling rooms.",
                rating: 4.9,
                reviews: 67,
                colors: ["7ft", "9ft"]
            },
            
            // Bedsheets
            {
                id: 6,
                name: "Premium Cotton Bedsheet",
                category: "bedsheets & covers",
                price: 129.99,
                image: "img/6.jpeg",
                description: "1000-thread count Egyptian cotton sheets for ultimate luxury and comfort.",
                rating: 4.9,
                reviews: 312,
                colors: ["Single", "Double", "Kings"]
            },
            {
                id: 7,
                name: "Linen Bedsheet",
                category: "bedsheets & covers",
                price: 99.99,
                image: "img/7.avif",
                description: "Breathable linen-blend duvet cover that gets softer with every wash.",
                rating: 4.7,
                reviews: 156,
                colors: ["Single", "Double", "Kings"]
            },
            {
                id: 8,
                name: "Printed Floral Bedsheet",
                category: "bedsheets & covers",
                price: 79.99,
                image: "img/8.avif",
                description: "Vibrant floral print bed set with matching pillowcases and fitted sheet.",
                rating: 4.5,
                reviews: 98,
                colors: ["Single", "Double", "Kings"]
            },
            {
                id: 9,
                name: "Quilted Bedsheet",
                category: "bedsheets & covers",
                price: 109.99,
                image: "img/9.jpeg",
                description: "Eco-friendly bamboo sheets that are naturally hypoallergenic and moisture-wicking.",
                rating: 4.8,
                reviews: 178,
                colors: ["Single", "Double", "Kings"]
            },
            {
                id: 10,
                name: "Pillow Covers",
                category: "bedsheets & covers",
                price: 109.99,
                image: "img/10.avif",
                description: "Soft, stylish pillow cover made from durable fabric, featuring hidden zipper, washable material, perfect for sofa and bed.",
                rating: 4.8,
                reviews: 178,
                colors: ["Pcs"]
            },
            {
                id: 11,
                name: "Bloster Covers",
                category: "bedsheets & covers",
                price: 109.99,
                image: "img/11.avif",
                description: "Soft, durable bolster cover with elegant design, hidden zipper, washable fabric, perfect for comfort, support, sofa, bed décor.",
                rating: 4.8,
                reviews: 178,
                colors: ["Pcs"]
            },
            {
                id: 12,
                name: "Cushion Covers",
                category: "bedsheets & covers",
                price: 109.99,
                image: "img/12.avif",
                description: "Soft, stylish cushion cover made from durable fabric, hidden zipper, washable material, perfect for sofa, chair, bed décor.",
                rating: 4.8,
                reviews: 178,
                colors: ["Pcs"]
            },

            // Doormats
            {
                id: 13,
                name: "Rubber Outdoor Mat",
                category: "carpets & doormats",
                price: 34.99,
                image: "img/13.avif",
                description: "Natural coir fiber mat with non-slip backing. Durable and eco-friendly.",
                rating: 4.6,
                reviews: 245,
                colors: ["16 X 24", "17 X 27"]
            },
            {
                id: 14,
                name: "Bath Mat",
                category: "carpets & doormats",
                price: 44.99,
                image: "img/14.avif",
                description: "Heavy-duty rubber mat with drainage holes. Perfect for high-traffic areas.",
                rating: 4.7,
                reviews: 189,
                colors: ["16 X 24", "17 X 27"]
            },
            {
                id: 15,
                name: "Premium Room Mat",
                category: "carpets & doormats",
                price: 49.99,
                image: "img/15.avif",
                description: "Customizable doormat with your family name or welcome message.",
                rating: 4.9,
                reviews: 423,
                colors: ["16 X 24", "17 X 27"]
            },
            {
                id: 16,
                name: "Washable Indoor Mat",
                category: "carpets & doormats",
                price: 29.99,
                image: "img/16.avif",
                description: "Low-profile washable mat perfect for indoor entryways and kitchens.",
                rating: 4.5,
                reviews: 134,
                colors: ["16 X 24", "17 X 27"]
            },

            // Sofa Covers
            {
                id: 17,
                name: "Fitted Sofa Slipcover",
                category: "sofa-materials",
                price: 79.99,
                image: "img/17.avif",
                description: "Elastic stretch cover that fits most sofa sizes. Easy to install and machine washable.",
                rating: 4.6,
                reviews: 567,
                colors: ["10 Seater", "16 Seater", "L-Sofa"]
            },
            {
                id: 18,
                name: "Quilted Sofa Protector",
                category: "sofa-materials",
                price: 69.99,
                image: "img/18.jpeg",
                description: "Reversible quilted protector with anti-slip backing. Pet and kid-friendly.",
                rating: 4.7,
                reviews: 892,
                colors: ["10 Seater", "16 Seater", "L-Sofa"]
            },
            {
                id: 19,
                name: "Velvet Sofa Throw",
                category: "sofa-materials",
                price: 89.99,
                image: "img/19.jpeg",
                description: "Luxurious velvet throw blanket that doubles as a stylish sofa cover.",
                rating: 4.8,
                reviews: 234,
                colors: ["10 Seater", "16 Seater", "L-Sofa"]
            },
            {
                id: 20,
                name: "Waterproof Sofa Cover",
                category: "sofa-materials",
                price: 59.99,
                image: "img/20.jpeg",
                description: "100% waterproof cover that protects against spills and stains.",
                rating: 4.5,
                reviews: 445,
                colors: ["10 Seater", "16 Seater", "L-Sofa"]
            },

            // Sofa Materials
            {
                id: 21,
                name: "Premium Upholstery Fabric",
                category: "sofa-materials",
                price: 24.99,
                image: "img/21.avif",
                description: "High-quality upholstery fabric by the yard. Perfect for DIY projects and reupholstering.",
                rating: 4.7,
                reviews: 123,
                colors: ["Sweat Lether Fabrics","Lether Fabrics","Polyster Fabrics","Various Varities"]
            },
            {
                id: 22,
                name: "Foam Sheets",
                category: "sofa-materials",
                price: 34.99,
                image: "img/22.avif",
                description: "Complete leather restoration kit with patches, dye, and tools.",
                rating: 4.4,
                reviews: 89,
                colors: ["High Density Foam", "HR-Foam", "Memory Foam"]
            },
            {
                id: 23,
                name: "Foam Cushion Insert",
                category: "sofa-materials",
                price: 44.99,
                image: "img/23.avif",
                description: "High-density foam cushion for sofa restoration. Custom sizes available.",
                rating: 4.6,
                reviews: 156,
                colors: ["Memory Foam Cushion","Fibre Cushion"]
            },
            {
                id: 24,
                name: "Sofa Legs Set",
                category: "sofa-materials",
                price: 39.99,
                image: "img/24.avif",
                description: "Modern wooden sofa legs set of 4. Easy installation with included hardware.",
                rating: 4.8,
                reviews: 267,
                colors: ["Pcs"]
            },
            {
                id: 25,
                name: "Premium Blankets",
                category: "blankets",
                price: 39.99,
                image: "img/25.avif",
                description: "Soft, warm blanket made from premium fabric, lightweight, cozy, durable, washable, perfect for winter comfort and relaxation.",
                rating: 4.8,
                reviews: 267,
                colors: ["Single","Double",]
            },
            {
                id: 26,
                name: "Rosepetal Blankets",
                category: "blankets",
                price: 39.99,
                image: "img/26.avif",
                description: "Luxurious rosepetal blanket made from ultra-soft fabric, warm, lightweight, cozy, washable, perfect for elegant comfort daily.",
                rating: 4.8,
                reviews: 267,
                colors: ["Single","Double",]
            },
            {
                id: 27,
                name: "Premium Comforter",
                category: "blankets",
                price: 39.99,
                image: "img/27.avif",
                description: "Premium comforter crafted with ultra-soft fabric, fluffy filling, warm, lightweight, durable, washable, perfect for luxurious sleep.",
                rating: 4.8,
                reviews: 267,
                colors: ["Single","Double",]
            },
            {
                id: 28,
                name: "Quilts",
                category: "blankets",
                price: 39.99,
                image: "img/28.avif",
                description: "Soft premium quilt with cozy filling, lightweight warmth, durable stitching, washable fabric, perfect for comfortable restful sleep.",
                rating: 4.8,
                reviews: 267,
                colors: ["Single","Double",]
            },
            {
                id: 29,
                name: "Mosquito Nets",
                category: "mosquito nets",
                price: 39.99,
                image: "img/29.avif",
                description: "Durable mosquito net with fine mesh protection, breathable fabric, easy installation, washable, perfect for peaceful sleep.",
                rating: 4.8,
                reviews: 267,
                colors: ["Single","Double","Kings"]
            },
            {
                id: 30,
                name: "Foldable Mosquito Nets",
                category: "mosquito nets",
                price: 39.99,
                image: "img/30.avif",
                description: "Foldable mosquito net with fine mesh protection, easy setup, lightweight, washable, portable, perfect for peaceful sleep.",
                rating: 4.8,
                reviews: 267,
                colors: ["Single","Double","Kings"]
            },
            {
                id: 31,
                name: "Carpets",
                category: "carpets & doormats",
                price: 39.99,
                image: "img/31.avif",
                description: "Soft, durable carpet with elegant design, easy to clean, non-slip backing, perfect for comfort, warmth, and décor.",
                rating: 4.8,
                reviews: 267,
                colors: ["4 X 6","5 X 7"]
            },
            {
                id: 32,
                name: "Dohars",
                category: "blankets",
                price: 39.99,
                image: "img/32.avif",
                description: "Soft breathable dohar made from premium fabric, lightweight comfort, cozy layers, washable, perfect for all-season sleep.",
                rating: 4.8,
                reviews: 267,
                colors: ["Single","Double"]
            },
            {
                id: 33,
                name: "Cottonwaste",
                category: "cottonwaste",
                price: 39.99,
                image: "img/33.webp",
                description: "Soft, breathable white cotton fabric offering comfort, durability, elegance, and everyday versatile style.",
                rating: 4.8,
                reviews: 267,
                colors: ["100% Pure Cotton","Refined Semar"]
            },
            {
                id: 34,
                name: "Mattress",
                category: "cottonwaste",
                price: 39.99,
                image: "img/34.avif",
                description: "Soft white cotton mattress provides breathable comfort, durable support, and peaceful restful sleep daily.",
                rating: 4.8,
                reviews: 267,
                colors: ["100% Pure Cotton"]
            },
            {
                id: 35,
                name: "Mattress Protector",
                category: "cottonwaste",
                price: 39.99,
                image: "img/35.avif",
                description: "Durable mattress protector offers waterproof safety, softness, hygiene, and long-lasting sleeping comfort.",
                rating: 4.8,
                reviews: 267,
                colors: ["Single","Double"]
            },
            {
                id: 36,
                name: "Pillow",
                category: "cottonwaste",
                price: 39.99,
                image: "img/36.avif",
                description: "Soft white cotton pillow offers breathable comfort, gentle support, and relaxing sleep every night.",
                rating: 4.8,
                reviews: 267,
                colors: ["100% Pure Cotton","Refined Semar"]
            },
            {
                id: 37,
                name: "Bloster",
                category: "cottonwaste",
                price: 39.99,
                image: "img/37.avif",
                description: "Soft white cotton bolster offers cozy support, breathable comfort, and elegant everyday relaxation.",
                rating: 4.8,
                reviews: 267,
                colors: ["100% Pure Cotton","Refined Semar"]
            },
            {
                id: 38,
                name: "Polyster Staple Fibre",
                category: "polyster staple fibre",
                price: 39.99,
                image: "img/38.avif",
                description: "Premium polyester staple fibre offers softness, durability, resilience, and long-lasting comfort for filling.",
                rating: 4.8,
                reviews: 267,
                colors: ["Virgin Fibre","Recycled Fibre"]
            }
        ];

        let cart = [];
        let currentCategory = 'all';

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts();
            setupScrollListener();
        });

        function setupScrollListener() {
            window.addEventListener('scroll', () => {
                const navbar = document.getElementById('navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('nav-scrolled');
                } else {
                    navbar.classList.remove('nav-scrolled');
                }
            });
        }

        function renderProducts() {
            const grid = document.getElementById('products-grid');
            const filtered = currentCategory === 'all' 
                ? products 
                : products.filter(p => p.category === currentCategory);
            
            grid.innerHTML = filtered.map((product, index) => `
                <div class="product-card group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden fade-in" style="animation-delay: ${index * 0.05}s">
                    <div class="relative overflow-hidden aspect-[3/4]">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition duration-500">
                        <div class="product-overlay absolute inset-0 bg-black/40 opacity-0 transition duration-300 flex items-center justify-center space-x-3">
                            <button onclick="quickView(${product.id})" class="p-3 bg-white rounded-full hover:bg-brand-100 transition transform hover:scale-110" title="Quick View">
                                <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                </svg>
                            </button>
                            <button class="p-3 bg-brand-600 rounded-full hover:bg-brand-700 transition transform hover:scale-110" title="Add to Cart">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                                </svg>
                            </button>
                        </div>
                        <div class="absolute top-3 left-3">
                            <span class="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-brand-800 capitalize">
                                ${product.category.replace('-', ' ')}
                            </span>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-2">
                            <div class="flex items-center space-x-1">
                                <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <span class="text-sm font-medium text-gray-700">${product.rating}</span>
                                <span class="text-sm text-gray-500">(${product.reviews})</span>
                            </div>
                            <span class="text-lg font-bold text-brand-700"></span>
                        </div>
                        <h3 class="font-semibold text-gray-900 mb-1 group-hover:text-brand-700 transition">${product.name}</h3>
                        <p class="text-sm text-gray-500 line-clamp-2">${product.description}</p>
                        <div class="mt-3 flex flex-wrap gap-2">
                            ${product.colors.map(color => `
                                <span class="px-2 py-1 bg-brand-50 text-brand-800 text-xs rounded-md">${color}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function filterProducts(category) {
            currentCategory = category;
            
            // Update button states
            document.querySelectorAll('.category-btn').forEach(btn => {
                if (btn.dataset.category === category) {
                    btn.classList.remove('bg-brand-100', 'text-brand-800');
                    btn.classList.add('bg-brand-700', 'text-white');
                } else {
                    btn.classList.remove('bg-brand-700', 'text-white');
                    btn.classList.add('bg-brand-100', 'text-brand-800');
                }
            });
            
            renderProducts();
            
            // Scroll to products if not already there
            const productsSection = document.getElementById('products');
            const rect = productsSection.getBoundingClientRect();
            if (rect.top > window.innerHeight || rect.bottom < 0) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // function addToCart(productId) {
        //     const product = products.find(p => p.id === productId);
        //     const existingItem = cart.find(item => item.id === productId);
            
        //     if (existingItem) {
        //         existingItem.quantity++;
        //     } else {
        //         cart.push({ ...product, quantity: 1 });
        //     }
            
        //     updateCartUI();
        //     showToast(`${product.name} added to cart!`);
        // }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
        }

        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartUI();
                }
            }
        }

        function updateCartUI() {
            const count = cart.reduce((sum, item) => sum + item.quantity, 0);
            const badge = document.getElementById('cart-count');
            
            if (count > 0) {
                badge.textContent = count;
                badge.classList.remove('hidden');
                badge.classList.add('cart-badge');
                setTimeout(() => badge.classList.remove('cart-badge'), 300);
            } else {
                badge.classList.add('hidden');
            }
            
            const cartItems = document.getElementById('cart-items');
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="text-center text-gray-500 mt-20">
                        <svg class="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                        </svg>
                        <p>Your cart is empty</p>
                        <button onclick="toggleCart(); scrollToProducts()" class="mt-4 text-brand-600 font-medium hover:underline">Start Shopping</button>
                    </div>
                `;
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="flex items-center space-x-4 bg-gray-50 p-4 rounded-xl">
                        <img src="${item.image}" class="w-20 h-20 object-cover rounded-lg" alt="${item.name}">
                        <div class="flex-1">
                            <h4 class="font-semibold text-gray-900 text-sm">${item.name}</h4>
                            <p class="text-brand-700 font-bold mt-1"></p>
                            <div class="flex items-center space-x-2 mt-2">
                                <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100">-</button>
                                <span class="text-sm font-medium w-6 text-center">${item.quantity}</span>
                                <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-100">+</button>
                            </div>
                        </div>
                        <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-500 transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </button>
                    </div>
                `).join('');
            }
            
            // const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            // document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
        }

        function toggleCart() {
            const sidebar = document.getElementById('cart-sidebar');
            const panel = document.getElementById('cart-panel');
            
            if (sidebar.classList.contains('hidden')) {
                sidebar.classList.remove('hidden');
                setTimeout(() => {
                    panel.classList.remove('translate-x-full');
                }, 10);
            } else {
                panel.classList.add('translate-x-full');
                setTimeout(() => {
                    sidebar.classList.add('hidden');
                }, 300);
            }
        }

        function quickView(productId) {
            const product = products.find(p => p.id === productId);
            const modal = document.getElementById('quick-view-modal');
            const content = document.getElementById('quick-view-content');
            
            content.innerHTML = `
                <div class="grid md:grid-cols-2">
                    <div class="relative h-64 md:h-auto">
                        <img src="${product.image}" class="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none" alt="${product.name}">
                    </div>
                    <div class="p-8 space-y-6">
                        <div>
                            <span class="text-sm font-semibold text-brand-600 uppercase tracking-wide">${product.category.replace('-', ' ')}</span>
                            <h2 class="font-serif text-3xl font-bold text-gray-900 mt-2">${product.name}</h2>
                            <div class="flex items-center space-x-2 mt-2">
                                <div class="flex text-yellow-400">
                                    ${Array(5).fill(0).map((_, i) => `
                                        <svg class="w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    `).join('')}
                                </div>
                                <span class="text-gray-500">(${product.reviews} reviews)</span>
                            </div>
                        </div>
                        
                        <p class="text-gray-600 leading-relaxed">${product.description}</p>
                        
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-3">Available Sizes</h4>
                            <div class="flex flex-wrap gap-2">
                                ${product.colors.map(color => `
                                    <button class="px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-brand-500 hover:bg-brand-50 transition text-sm font-medium">${color}</button>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-between pt-4 border-t">
                            <span class="text-3xl font-bold text-brand-700"></span>
                            <button ; closeQuickView();" class="px-8 py-3 bg-brand-700 text-white rounded-lg font-semibold hover:bg-brand-800 transition shadow-lg flex items-center space-x-2">
                                
                                <span>Customization Available</span>
                            </button>
                        </div>
                    </div>
                </div>
                <button onclick="closeQuickView()" class="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition">
                    <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            `;
            
            modal.classList.remove('hidden');
            setTimeout(() => {
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function closeQuickView() {
            const modal = document.getElementById('quick-view-modal');
            const content = document.getElementById('quick-view-content');
            
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').textContent = message;
            
            toast.classList.remove('translate-y-20', 'opacity-0');
            
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        function scrollToProducts() {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }

        function handleContactSubmit(e) {
            e.preventDefault();
            showToast('Message sent successfully! We will get back to you soon.');
            e.target.reset();
        }

        function handleNewsletter(e) {
            e.preventDefault();
            showToast('Thank you for subscribing! Check your inbox for a welcome offer.');
            e.target.reset();
        }

        function checkout() {
            if (cart.length === 0) {
                showToast('Your cart is empty!');
                return;
            }
            showToast('Proceeding to checkout... (Demo)');
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }
export const PRODUCT_CATEGORIES = [
  {
    label: 'Best Sellers',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor picks',
        href: ``,
        imageSrc: '/images/woman.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=ui_kits&sort=desc',
        imageSrc: '/images/samsung.png',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=ui_kits',
        imageSrc: '/images/products 1.png',
      },
    ],
  },
  {
    label: 'Products',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Picks',
        href: `/products?category=icons`,
        imageSrc: '/images/products 1.png',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=icons&sort=desc',
        imageSrc: '/images/laptop-white-background-3d-rendering-computer-generated-image.jpg',
      },
      {
        name: 'Bestselling',
        href: '/products?category=icons',
        imageSrc: '/images/products 3.png',
      },
    ],
  },
]


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
}

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Ballpoint Pen Set',
    description: 'Set of 5 high-quality ballpoint pens in assorted colors',
    price: 24.99,
    category: 'Pens',
    stock: 15,
    image: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'A4 Lined Notebook',
    description: 'Professional lined notebook with 200 pages',
    price: 12.99,
    category: 'Notebooks',
    stock: 32,
    image: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Highlighter Markers Pack',
    description: 'Set of 6 fluorescent highlighter markers',
    price: 8.99,
    category: 'Markers',
    stock: 28,
    image: '/placeholder.svg'
  },
  {
    id: '4',
    name: 'Desktop Organizer',
    description: 'Wooden desk organizer with multiple compartments',
    price: 34.99,
    category: 'Office Supplies',
    stock: 12,
    image: '/placeholder.svg'
  },
  {
    id: '5',
    name: 'Sticky Notes Variety Pack',
    description: 'Colorful sticky notes in various sizes',
    price: 6.99,
    category: 'Office Supplies',
    stock: 45,
    image: '/placeholder.svg'
  },
  {
    id: '6',
    name: 'Mechanical Pencil Set',
    description: 'Professional mechanical pencils with lead refills',
    price: 18.99,
    category: 'Pencils',
    stock: 22,
    image: '/placeholder.svg'
  }
];

const categories = ['All', 'Pens', 'Notebooks', 'Markers', 'Pencils', 'Office Supplies'];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const { toast } = useToast();

  const filteredProducts = selectedCategory === 'All' 
    ? mockProducts 
    : mockProducts.filter(product => product.category === selectedCategory);

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
    toast({
      title: "Added to cart",
      description: "Item has been added to your cart successfully.",
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Stationery Shop</h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price}
                  </span>
                  <Badge variant="secondary">
                    {product.stock} in stock
                  </Badge>
                </div>
                <Badge variant="outline">{product.category}</Badge>
              </CardContent>
              <CardFooter className="flex gap-2">
                {cart[product.id] ? (
                  <div className="flex items-center gap-2 w-full">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="flex-1 text-center font-semibold">
                      {cart[product.id]}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => addToCart(product.id)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button 
                    className="w-full" 
                    onClick={() => addToCart(product.id)}
                  >
                    Add to Cart
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

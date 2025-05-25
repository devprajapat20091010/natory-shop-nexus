
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, Package, ShoppingCart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Stationery Shop</h1>
            <nav className="flex space-x-4">
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link to="/shop">
                <Button>Shop Now</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our Stationery Shop
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover premium stationery supplies for your office, school, and creative projects. 
            From pens and notebooks to organizers and art supplies.
          </p>
          <Link to="/shop">
            <Button size="lg" className="text-lg px-8 py-3">
              <Store className="mr-2 h-5 w-5" />
              Start Shopping
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Package className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <CardTitle>Quality Products</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Premium stationery supplies from trusted brands
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <ShoppingCart className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <CardTitle>Easy Shopping</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Simple and secure online shopping experience
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-purple-600 mb-4" />
              <CardTitle>Customer Support</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Dedicated support team ready to help you
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Store className="h-12 w-12 mx-auto text-orange-600 mb-4" />
              <CardTitle>Wide Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Extensive catalog of office and school supplies
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Categories Preview */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Pens', 'Notebooks', 'Markers', 'Pencils', 'Office Supplies', 'Art Supplies'].map((category) => (
              <Link key={category} to="/shop">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="h-16 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                      <Package className="h-8 w-8 text-gray-600" />
                    </div>
                    <p className="font-semibold text-sm">{category}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

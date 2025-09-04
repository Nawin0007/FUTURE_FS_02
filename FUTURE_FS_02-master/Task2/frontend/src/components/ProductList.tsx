import React, { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { products, categories } from '../data/products';

interface ProductListProps {
  searchTerm: string;
}

export const ProductList: React.FC<ProductListProps> = ({ searchTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl shadow-inner">
      {/* Filters */}
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden flex items-center space-x-2 px-4 py-2 rounded-lg bg-pink-500 text-white shadow hover:bg-pink-600 transition"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </button>

          {/* Filter group */}
          <div
            className={`flex flex-col sm:flex-row gap-4 ${
              showFilters ? 'block' : 'hidden sm:flex'
            }`}
          >
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition ${
                    selectedCategory === category.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-6">
        <p className="text-gray-600 text-sm sm:text-base">
          <span className="font-medium text-gray-900">
            {filteredAndSortedProducts.length}
          </span>{' '}
          product{filteredAndSortedProducts.length !== 1 ? 's' : ''} found
          {searchTerm && (
            <span className="italic text-gray-500"> for "{searchTerm}"</span>
          )}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredAndSortedProducts.map(product => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg mb-4">
            No products found matching your criteria 😕
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSortBy('name');
            }}
            className="mt-2 px-5 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

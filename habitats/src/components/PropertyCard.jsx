export const PropertyCard = ({ property, isFeatured = false }) => (
  <div className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow ${isFeatured ? 'border-2 border-red-100' : ''}`}>
    <div className="relative h-48 overflow-hidden">
      <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
      {isFeatured && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          Populaire
        </div>
      )}
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-800">{property.title}</h3>
          <p className="text-sm text-gray-600">{property.location}</p>
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="ml-1 text-sm text-gray-700">{property.rating}</span>
        </div>
      </div>
      <div className="mt-2">
        <span className="font-bold text-red-500">{property.price}€</span>
        <span className="text-sm text-gray-600"> / nuit</span>
      </div>
    </div>
  </div>
);
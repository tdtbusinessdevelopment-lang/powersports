import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/variants';

export default function ProductCard({ product }) {
  const isPod = product.type === 'pod';

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-[2rem] shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full transition-shadow hover:shadow-2xl"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow text-center justify-center min-h-[100px]">
        {product.type === 'tent' && (
          <div className="flex flex-col items-center">
            <h3 className="text-black text-[15px] font-bold leading-tight">
              {product.name}
            </h3>
            <p className="text-black text-[13px] font-bold">
              {product.code}
            </p>
          </div>
        )}

        {product.type === 'other' && (
          <h3 className="text-black text-[15px] font-bold leading-tight px-4">
            {product.name}
          </h3>
        )}

        {isPod && (
          <div className="space-y-0.5">
            <p className="text-[13px] font-bold text-black">
              Rated capacity: <span className="font-medium">{product.capacity}</span>
            </p>
            <p className="text-[13px] font-bold text-black">
              Overall dimension: <span className="font-medium">{product.dimensions}</span>
            </p>
            <p className="text-[13px] font-bold text-black">
              Chamber weight: <span className="font-medium">{product.weight}</span>
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

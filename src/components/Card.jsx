import { motion } from "framer-motion";

const Card = ({ title, content, index, isCentered = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          delay: index * 0.1 + 0.3,
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full ${
        isCentered ? "mx-auto" : ""
      }`}
      style={{ maxWidth: "600px" }}
    >
      <div className="p-6 flex-1">
        <motion.h3 
          className="text-2xl font-bold text-[#d62828] mb-4 font-tajawal"
          initial={{ x: -30 }}
          animate={{ 
            x: 0,
            transition: {
              delay: index * 0.1 + 0.4,
              duration: 0.5
            }
          }}
        >
          {title}
        </motion.h3>
        
        <div className="space-y-3 text-right" dir="rtl">
          {content.map((paragraph, pIndex) => (
            <motion.p
              key={pIndex}
              className="text-xl text-gray-800 font-scheherazade leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: index * 0.1 + 0.5 + pIndex * 0.05,
                  duration: 0.4
                }
              }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="bg-[#4f772d] h-2"
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: 1,
          transition: {
            delay: index * 0.1 + 0.6,
            duration: 0.5,
            ease: "easeOut"
          }
        }}
      />
    </motion.div>
  );
};

export default Card;
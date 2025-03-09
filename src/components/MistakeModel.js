import { motion } from "framer-motion";
import { useState } from "react";

const MistakeModel = ({ mistake, réponse, onBack }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-lg text-right cursor-pointer hover:bg-opacity-20 transition duration-300 w-full max-w-3xl mx-auto"
    >
      <p className="text-2xl md:text-3xl text-white font-scheherazade mb-4">
        {mistake}
      </p>
      {showAnswer && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl md:text-2xl text-white font-scheherazade leading-relaxed"
        >
          {réponse}
        </motion.p>
      )}
      <div className="flex justify-between items-center mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAnswer(!showAnswer)}
          className="bg-[#4f772d] text-white text-xl md:text-2xl font-scheherazade font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#31572c] hover:shadow-lg transition duration-300"
        >
          {showAnswer ? "إخفاء الإجابة" : "عرض الإجابة"}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="bg-[#d4af37] text-white text-xl md:text-2xl font-scheherazade font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#c2a035] hover:shadow-lg transition duration-300"
        >
          العودة
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MistakeModel;
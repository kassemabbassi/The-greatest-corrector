import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function SubjectsComponent() {
  const router = useRouter();

  const handleReturn = () => {
    router.push("/"); // Redirige vers la page d'accueil
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-white" dir="rtl">
      {/* En-tête avec logos et titre */}
      <div className="w-full flex items-center justify-center gap-4 mb-8">
        {/* Logo à gauche : Étoile islamique */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 md:w-20 md:h-20 bg-[#4f772d] rounded-full flex items-center justify-center shadow-lg hover:bg-[#31572c] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-12 h-12 md:w-16 md:h-16 text-white"
          >
            <path
              fill="currentColor"
              d="M32 2l6 18h18l-14 10 6 18-16-12-16 12 6-18L8 20h18l6-18z"
            />
          </svg>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#4f772d] to-[#90a955] bg-clip-text text-transparent font-amiri text-center tracking-wide"
        >
          المصلح الأعظم
        </motion.h1>

        {/* Logo à droite : Étoile islamique */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 md:w-20 md:h-20 bg-[#4f772d] rounded-full flex items-center justify-center shadow-lg hover:bg-[#31572c] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-12 h-12 md:w-16 md:h-16 text-white"
          >
            <path
              fill="currentColor"
              d="M32 2l6 18h18l-14 10 6 18-16-12-16 12 6-18L8 20h18l6-18z"
            />
          </svg>
        </motion.div>
      </div>

      {/* Slogan (sous-titre) en vert et gras */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl md:text-4xl text-[#4f772d] font-bold mb-16 font-amiri italic text-center leading-relaxed"
      >
        مواضيع مجال العقيدة
      </motion.p>

      {/* Liste des sujets */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full flex flex-col items-center mb-12"
      >
        <div className="w-full max-w-4xl space-y-8">
          {[
            "الكتب السماويّة",
            "صفات الله",
            "صنع الله",
            "الرسل",
          ].reduce((acc, subject, index, arr) => {
            if (index % 2 === 0) {
              const pair = [
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (subject === "الكتب السماويّة") {
                      router.push("/conceptual-mistakes/relation-with-heavenly-books");
                    } else if (subject === "صفات الله") {
                      router.push("/conceptual-mistakes/attributes-of-god");
                    } else if (subject === "صنع الله") {
                      router.push("/conceptual-mistakes/creation-of-god");
                    } else if (subject === "الرسل") {
                      router.push("/conceptual-mistakes/the-messengers");
                    }
                  }}
                  className="bg-[#f0f4f8] rounded-lg p-6 shadow-lg text-center cursor-pointer hover:bg-[#e2e8f0] transition duration-300 w-full md:w-[48%]"
                >
                  <p className="text-2xl md:text-3xl text-[#4f772d] font-amiri">
                    {subject}
                  </p>
                </motion.div>
              ];

              if (index + 1 < arr.length) {
                const nextSubject = arr[index + 1];
                pair.push(
                  <motion.div
                    key={index + 1}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index + 1) * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (nextSubject === "الكتب السماويّة") {
                        router.push("/conceptual-mistakes/relation-with-heavenly-books");
                      } else if (nextSubject === "صفات الله") {
                        router.push("/conceptual-mistakes/attributes-of-god");
                      } else if (nextSubject === "صنع الله") {
                        router.push("/conceptual-mistakes/creation-of-god");
                      } else if (nextSubject === "الرسل") {
                        router.push("/conceptual-mistakes/the-messengers");
                      }
                    }}
                    className="bg-[#f0f4f8] rounded-lg p-6 shadow-lg text-center cursor-pointer hover:bg-[#e2e8f0] transition duration-300 w-full md:w-[48%]"
                  >
                    <p className="text-2xl md:text-3xl text-[#4f772d] font-amiri">
                      {nextSubject}
                    </p>
                  </motion.div>
                );
              }

              acc.push(
                <div
                  key={`group-${index}`}
                  className={`flex ${pair.length === 1 ? "justify-center" : "justify-between"} gap-6`}
                >
                  {pair}
                </div>
              );
            }
            return acc;
          }, [])}
        </div>
      </motion.div>

      {/* Bouton de retour */}
      <motion.button
        onClick={handleReturn}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#4f772d] text-white text-2xl md:text-3xl font-amiri font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#31572c] hover:shadow-lg transition duration-300"
      >
        العودة إلى الصفحة الرئيسية
      </motion.button>
    </div>
  );
}

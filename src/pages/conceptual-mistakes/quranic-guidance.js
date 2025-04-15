import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function SubjectsComponent() {
  const router = useRouter();

  const handleReturn = () => {
    router.push("/");
  };

  // Liste des sujets et leurs routes
  const subjects = [
    {
      title: "مفهوم الخشوع",
      route: "/conceptual-mistakes/understanding-Khushu"
    },
    {
      title: "آداب التلاوة",
      route: "/conceptual-mistakes/quran-recitation-etiquette"
    },
    
  ];

  // Fonction pour regrouper les sujets par paires
  const groupSubjects = () => {
    const groups = [];
    for (let i = 0; i < subjects.length; i += 2) {
      groups.push(subjects.slice(i, i + 2));
    }
    return groups;
  };

  const subjectGroups = groupSubjects();
  const handleReturn1 = () => {
    // You can replace this with your navigation logic
    // If using React Router, you would use navigate or history.push
    window.history.back(); // Simple navigation back to previous page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 sm:p-6 bg-white" dir="rtl">
      {/* En-tête responsive */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8">
        {/* Logo gauche */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#4f772d] rounded-full flex items-center justify-center shadow-lg hover:bg-[#31572c] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white"
          >
            <path fill="currentColor" d="M32 2l6 18h18l-14 10 6 18-16-12-16 12 6-18L8 20h18l6-18z"/>
          </svg>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#4f772d] to-[#90a955] bg-clip-text text-transparent font-amiri text-center tracking-wide"
        >
          المصلح الأعظم
        </motion.h1>

        {/* Logo droite */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#4f772d] rounded-full flex items-center justify-center shadow-lg hover:bg-[#31572c] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white"
          >
            <path fill="currentColor" d="M32 2l6 18h18l-14 10 6 18-16-12-16 12 6-18L8 20h18l6-18z"/>
          </svg>
        </motion.div>
      </div>

      {/* Sous-titre */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl text-[#4f772d] font-bold mb-8 sm:mb-12 md:mb-16 font-amiri italic text-center leading-relaxed"
      >
        مواضيع مجال العبادات
      </motion.p>

      {/* Liste des sujets responsive */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full flex flex-col items-center mb-8 sm:mb-12"
      >
        <div className="w-full max-w-6xl space-y-4 sm:space-y-6">
          {subjectGroups.map((group, groupIndex) => (
            <div 
              key={`group-${groupIndex}`} 
              className={`flex flex-col sm:flex-row ${group.length === 1 ? 'justify-center' : 'justify-between'} gap-4 sm:gap-6 w-full`}
            >
              {group.map((subject, subjectIndex) => (
                <motion.div
                  key={`${groupIndex}-${subjectIndex}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (groupIndex * 2 + subjectIndex) * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push(subject.route)}
                  className={`bg-[#f0f4f8] rounded-lg p-4 sm:p-6 shadow-lg text-center cursor-pointer hover:bg-[#e2e8f0] transition duration-300 ${
                    group.length === 1 ? 'w-full max-w-md mx-auto' : 'w-full sm:w-[48%]'
                  }`}
                >
                  <p className="text-xl sm:text-2xl md:text-3xl text-[#4f772d] font-amiri">
                    {subject.title}
                  </p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bouton de retour responsive */}
      <motion.button
        onClick={handleReturn}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#4f772d] text-white text-lg sm:text-xl md:text-2xl font-amiri font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-[#31572c] hover:shadow-lg transition duration-300"
      >
        العودة إلى الصفحة الرئيسية
      </motion.button>
   
    </div>
    
  );
}
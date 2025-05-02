import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image"; 
export default function SubjectsComponent() {
  const router = useRouter();

  const handleReturn = () => {
    router.push("/");
  };

  // Liste des sujets et leurs routes
  const subjects = [
    {
      title: "آداب الطريق، الزيارة، الاستئذان، والأكل",
      route: "/conceptual-mistakes/Etiquette-in-Daily-Life"
    },
    {
      title: "صلة الرحم",
      route: "/conceptual-mistakes/Maintaining-family-ties"
    },
    {
      title: "العمل والجد",
      route: "/conceptual-mistakes/Work-and-diligence"
    },
    {
      title:"قيم الأمانة، التعاون، الصدق، والإخلاص",
      route:"/conceptual-mistakes/integrity-cooperation-honesty-sincerity"
    }
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
        {/* Logo à gauche - Version statique (comme du texte) */}
                 <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                <Image
                  src="/1.png"
                  alt="Logo"
                  width={112}  // Réduit depuis 128
                  height={112} // Réduit depuis 128
                  className="object-contain w-full h-full" // Ajouté pour une meilleure adaptation
                />
              </div>
               {/* Titre principal avec le symbole ﷺ */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#4f772d] to-[#90a955] bg-clip-text text-transparent font-amiri text-center tracking-wide">
              المصلح الأعظم
            </h1>
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#4f772d] mr-2 font-arabic"
            >
              ﷺ
            </motion.span>
          </motion.div>
          
          
        </div>
                      {/* Logo à gauche - Version statique (comme du texte) */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                <Image
                  src="/1.png"
                  alt="Logo"
                  width={112}  // Réduit depuis 128
                  height={112} // Réduit depuis 128
                  className="object-contain w-full h-full" // Ajouté pour une meilleure adaptation
                />
              </div>
      </div>

      {/* Sous-titre */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl text-[#4f772d] font-bold mb-8 sm:mb-12 md:mb-16 font-amiri italic text-center leading-relaxed"
      >
        مواضيع مجال الأخلاق 
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
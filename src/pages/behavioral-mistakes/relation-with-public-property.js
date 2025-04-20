import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";
import {useRouter} from "next/router";
import Image from "next/image";
const mistakesList = [
  {
    id: 1,
    betise: "الاسراف في استخدام الماء",
    reponse: `
    الأساليب النبويّة في التعامل مع هذا الخطأ:
      *الاعتدال في استخدام الموارد
      🕊 من هديه ﷺ:
      أنَّ النَّبيَّ صلَّى اللَّهُ عليهِ وسلَّمَ مرَّ بسَعدٍ وَهوَ يتوضَّأُ، فقالَ : ما هذا السَّرَفُ يا سَعدُ ؟ قالَ : أفي الوضوءِ سَرفٌ قالَ : نعَم، وإن كنتَ على نَهْرٍ جارٍ.
      📘 رواه ابن ماجه في سننه.
      الدلالة: 
      النبي ﷺ يعلّمنا أن الإسراف في أي مورد من موارد الحياة، حتى الماء الذي هو مصدر الحياة، يتنافى مع التوازن الذي أمرنا به. يجب على المسلم أن يُحسن استخدام الموارد بشكل معتدل. 
      💡 التطبيق:
      نشاط "الماء نعمة": يُطلب من التلاميذ في بداية الدرس كتابة أو سرد مواقف شعروا فيها بقيمة الماء، وكيف أن استخدامه يجب أن يتم بحذر.
      حمله توعويّة تعرض ضعف الموارد المائيّة اليوم ودور الانسان في الحفاظ عليها أو هدرها.
    `
  },
  {
    id: 3,
    betise: "إتلاف الممتلكات العامة",
    reponse: `
    الأساليب النبويّة في التعامل مع هذا الخطأ:
      *حماية الأمانة المشتركة
      🕊 من هديه ﷺ:
      قال رسول الله ﷺ:
      "إن الله يحب إذا عمل أحدكم عملاً أن يتقنه."
      📘 رواه مسلم في صحيحه.
      الدلالة:
      النبي ﷺ يُعلّمنا أهمية العناية بالممتلكات العامة والاعتناء بها، مما يعكس التقدير للأمانة التي نُحسن بها استغلال الموارد المشتركة.
      💡 التطبيق:
      نادي "العناية بالممتلكات العامة": يتم تشجيع التلاميذ على المساهمة في حماية الممتلكات العامة في المدرسة، مثل العناية بالأثاث، الأوراق، أو الأدوات.
    `
  },
  {
    id: 2,
    betise: "إلقاء الفضلات في غير الأماكن المخصّصة",
    reponse: `
    الأساليب النبويّة في التعامل مع هذا الخطأ:
      *المحافظة على النظافة:
      🕊 من هديه ﷺ:
      "الطهور شطر الإيمان."
      📘 رواه مسلم في صحيحه.
      الدلالة:
      النظافة تعتبر جزءًا من الإيمان في الإسلام، النبي ﷺ يُشجّع على المحافظة على البيئة والاعتناء بالمكان الذي نعيش فيه، من خلال تجنب إلقاء الفضلات في الأماكن غير المخصصة لذلك.
      💡 التطبيق:
      نشاط "مكان نظيف": يُطلب من الطلاب أن يتعاونوا في تنظيف مساحة معينة من المدرسة أو الفصل الدراسي، مع التأكيد على أهمية الحفاظ على البيئة والمكان.
      يُقال لهم:
      "كيف يمكننا الحفاظ على نظافة بيئتنا المدرسية والمجتمع الذي نعيش فيه؟"
    `
  },

];

export default function Others() {
  const router = useRouter();
  const [selectedMistake, setSelectedMistake] = useState(null);
  
  const groupMistakes = () => {
    const groups = [];
    for (let i = 0; i < mistakesList.length; i += 2) {
      groups.push(mistakesList.slice(i, i + 2));
    }
    return groups;
  };

  const mistakeGroups = groupMistakes();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 sm:p-6 bg-white" dir="rtl">
      {/* En-tête avec logos et titre */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8">
         <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                <Image
                  src="/1.png"
                  alt="Logo"
                  width={112}  // Réduit depuis 128
                  height={112} // Réduit depuis 128
                  className="object-contain w-full h-full" // Ajouté pour une meilleure adaptation
                />
              </div>
                      <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#4f772d] to-[#90a955] bg-clip-text text-transparent font-amiri text-center tracking-wide"
                      >
                        المصلح الأعظم
                      </motion.h1>
                      {/* Logo à droite */}
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
        className="text-xl sm:text-2xl md:text-3xl text-[#4f772d] font-bold mb-6 sm:mb-8 font-amiri italic text-center leading-relaxed"
      >
        قائمة الأخطاء وتصحيحها
      </motion.p>

      {/* Liste des bêtises */}
      <AnimatePresence mode="wait">
        {!selectedMistake ? (
          <motion.div
            key="mistake-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl space-y-4 sm:space-y-6"
          >
            {mistakeGroups.map((group, index) => (
              <motion.div
                key={index}
                className={`flex flex-col sm:flex-row ${group.length === 1 ? 'justify-center' : 'justify-between'} gap-4 sm:gap-6 w-full`}
              >
                {group.map((mistake) => (
                  <motion.div
                    key={mistake.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setSelectedMistake(mistake.id)}
                    className={`cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-white/30 backdrop-blur-sm rounded-2xl ${
                      group.length === 1 ? 'w-full max-w-lg' : 'w-full sm:w-1/2'
                    }`}
                  >
                    <MistakeModel
                      betise={mistake.betise}
                      reponse={mistake.reponse}
                      isSelected={false}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="selected-mistake"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-white/30 backdrop-blur-sm rounded-2xl"
          >
            <MistakeModel
              betise={mistakesList.find((m) => m.id === selectedMistake).betise}
              reponse={mistakesList.find((m) => m.id === selectedMistake).reponse}
              isSelected={true}
              onClick={() => setSelectedMistake(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton de retour */}
      {selectedMistake && (
        <motion.button
          onClick={() => setSelectedMistake(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 sm:mt-8 bg-[#4f772d] text-white text-lg sm:text-xl md:text-2xl font-amiri font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-[#31572c] hover:shadow-lg transition duration-300 flex items-center gap-2 sm:gap-3"
        >
          <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          العودة إلى القائمة
        </motion.button>
      )}
        {/* Nouveau bouton pour retourner aux domaines */}
        <motion.button
        onClick={() => router.push('/')} // Redirection vers la page relation-with-creed
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 sm:mt-6 bg-[#90a955] text-white text-lg sm:text-xl md:text-2xl font-amiri font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-[#4f772d] hover:shadow-lg transition duration-300 flex items-center gap-2 sm:gap-3"
      >
        <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        العودة إلى المجالات
      </motion.button>
    </div>
  );
}
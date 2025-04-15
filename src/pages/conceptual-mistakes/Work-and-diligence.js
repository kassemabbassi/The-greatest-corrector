import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";

const mistakesList = [
    {
        id: 23,
        betise: "الخلط بين الجد والتشدد",
        reponse: `
        * الأسلوب النبوي: الحث على الموازنة بين العبادة والراحة  
        📖 الحديث:  
        قال ﷺ لعبد الله بن عمرو: «إن لربك عليك حقًا، وإن لنفسك عليك حقًا، ولأهلك عليك حقًا، فأعطِ كل ذي حق حقه»  
        رواه البخاري في صحيحه (1968)  
        🔎 الدلالة:  
        النبي ﷺ لم يُربِّ أصحابه على التشدد والحرمان، بل على التوازن النابع من فهم عميق للإنسان: أن له روحًا تتوق للعبادة، وجسدًا يحتاج للراحة، وأهلاً ينتظرون الودّ. بأسلوب تربوي رحيم، وجه النبي ﷺ عبد الله بن عمرو ليُدرك أن العبادة لا تعني الانقطاع عن الحياة، بل تعني أن نعبد الله ونحن نعيش الحياة بكامل أبعادها، فنكون جادين دون قسوة، ومتعبدين دون غلو، ومحبين دون انشغال.  
        🏠📚 تطبيق في البيت أو القسم:  
        يُعلن طفل في الفصل بحماس: "أنا لا أريد أن ألعب بعد اليوم، سأبقى أدرس وأتعبد فقط!"  
        فيطلب منه المربي أن يرسم ميزانًا، ثم يقول له:  
        "ضع في أحد الكفتين: الصلاة، قراءة القرآن، الدراسة. وفي الكفة الأخرى: اللعب، الضحك مع الأهل، المشي، الراحة. هل ترى كيف يتوازن الميزان؟"  
        فيقول الطفل: "نعم، إذا أهملت أحدهما اختل التوازن."  
        فيقول المربي: "النبي ﷺ قال: (إن لنفسك عليك حقًا). العبادة ليست أن تتعب نفسك فقط، بل أن تعرف متى تتعبها ومتى تريحها، ومتى تضحك، ومتى تصلي."
        `
      },
      {
        id: 24,
        betise: "الظن أن العمل اليدوي أو البسيط أقل قيمة",
        reponse: `
        * الأسلوب النبوي: القدوة العملية في احترام العمل  
        📖 الحديث:  
        سُئلت عائشة رضي الله عنها: "ما كان رسولُ الله ﷺ يصنعُ في بيتِه؟"  
        قالت: "كان يكون في مِهنةِ أهلِه."  
        رواه البخاري في صحيحه (676)  
        🔎 الدلالة:  
        في هذا الموقف البسيط، يضع النبي ﷺ أسسًا عظيمة لبناء شخصية الطفل المتواضعة والعاملة. فهو ﷺ لم يعلّم بالكلام فقط، بل بالفعل؛ إذ شارك في أعمال البيت، وخاط ثوبه، وأصلح نعله، فلم يعتبر العمل اليدوي نقصًا في المكانة، بل كمالًا في الرجولة والقدوة. هذا الأسلوب النبوي يزرع في المتعلم أن الشرف لا يكون في المظاهر، بل في النفع والبذل والتواضع. وهكذا يَسقُط في نفسه وهم أن من يعمل بيده أقل قيمة.  
        🏠📚 تطبيق في البيت أو القسم:  
        يُطلب من التلاميذ في القسم أن يُحضِر كلٌّ منهم صورة أو وصفًا لعمل يُجيده أحد أفراد أسرته: الزراعة، الخياطة، النجارة، المطبخ… ثم يُكتب على اللوح:  
        "ما العمل الذي شارك فيه النبي ﷺ؟"  
        يرد الأطفال: "الخياطة، والخدمة في البيت."  
        يُطلب من كل طفل أن يُقلّد في اليوم التالي أحد أعمال أهله، ثم يكتب سطرًا يقول فيه:  
        "أنا فخورٌ أنني ساعدت أبي/أمي في…"  
        في البيت، يُشجع الطفل على مساعدة والده في ترتيب أدوات الزراعة أو تنظيف ساحة البيت، ويُقال له:  
        "أنت الآن تقتدي برسول الله ﷺ، هو كان يساعد أهله، وأنت تفعل مثله تمامًا."
        `
      }
      
      
            
      
]

export default function Others() {
  const [selectedMistake, setSelectedMistake] = useState(null);
  
  // Add navigation function for returning to domains page
  const handleReturn = () => {
    // You can replace this with your navigation logic
    // If using React Router, you would use navigate or history.push
    window.history.back(); // Simple navigation back to previous page
  };
  
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

      {/* Sous-titre centré */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl text-[#4f772d] font-bold mb-6 sm:mb-8 font-amiri italic text-center leading-relaxed"
      >
        قائمة الأخطاء وتصحيحها
      </motion.p>

      {/* Liste responsive */}
      <AnimatePresence mode="wait">
        {!selectedMistake ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl space-y-4 sm:space-y-6 px-4 sm:px-6"
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
                      group.length === 1 ? 'w-full max-w-3xl' : 'w-full sm:w-1/2'
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
            key="detail"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-white/30 backdrop-blur-sm rounded-2xl px-4 sm:px-6"
          >
            <MistakeModel
              betise={mistakesList.find(m => m.id === selectedMistake).betise}
              reponse={mistakesList.find(m => m.id === selectedMistake).reponse}
              isSelected={true}
              onClick={() => setSelectedMistake(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton de retour pour les détails */}
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
      
      {/* Bouton de retour vers la page des domaines */}
      <motion.button
        onClick={handleReturn}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 sm:mt-8 bg-[#4f772d] text-white text-lg sm:text-xl md:text-2xl font-amiri font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-[#31572c] hover:shadow-lg transition duration-300"
      >
        العودة إلى المجالات
      </motion.button>
    </div>
  );
}
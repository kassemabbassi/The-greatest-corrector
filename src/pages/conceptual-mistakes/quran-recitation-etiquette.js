import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";

const mistakesList = [
    {
        id: 28,
        betise: "الصوت الجميل أهم من التدبر",
        reponse: `
        * الأسلوب النبوي: توجيه الاهتمام للتدبر في القرآن  
        📖 الحديث:  
        قال ﷺ: "إن هذا القرآن أُنزل بلغة العرب، فاعقلوا ما فيه."  
        رواه مسلم في صحيحه(818)  
        🔎 الدلالة:  
        في هذا الحديث، يوجه النبي ﷺ المسلمين إلى أهمية التدبر في القرآن. فالتلاوة ليست مجرد حروف أو صوت جميل، بل هي تفاعل مع المعاني التي يحتويها القرآن. النبي ﷺ يُحث المسلمين على أن يعقلوا ويفهموا ما يقرؤونه.  
        الحديث يعلمنا أن القرآن يجب أن يكون مصدراً للفهم والتطبيق في الحياة اليومية، ويجب أن لا نتعامل معه ككتاب لتلاوة فقط، بل كمرشد وهدى يلزمنا التأمل والتدبر في معانيه.  
        🏠📚 تطبيق في البيت أو القسم:  
        عندما يكون الطفل مشغولًا بقراءة القرآن بسرعة، يوجهه المربي قائلاً:  
        "القراءة ليست مجرد سرعة، بل يجب أن نفهم كل كلمة ونشعر بها."  
        ثم يطلب منه أن يقرأ آية واحدة بتركيز، متوقفًا عند كل كلمة ليفكر في معناها. بعد القراءة، يسأله المربي:  
        "هل تستطيع أن تشرح لي ماذا تعني هذه الآية؟ كيف يمكنك تطبيقها في حياتك؟"  
        يُشجّع الطفل على التفكير في كيفية تطبيق المعنى في تصرفاته اليومية.
        `
      },
      {
        id: 29,
        betise: "ضرورة ضم اليدين أثناء التلاوة",
        reponse: `
        * الأسلوب النبوي: التعليم بالفعل والملاحظة  
        📖 الحديث:  
        لم يُنقل عن النبي ﷺ ولا عن الصحابة أنهم ضمّوا أيديهم أثناء التلاوة. الضمّ إنما يكون في الصلاة، لا عند قراءة القرآن خارجها.  
        🔎 الدلالة:  
        النبي ﷺ لم يُنقل عنه أنه كان يضم يديه أثناء التلاوة، مما يدل على أن الضم هو من آداب الصلاة، وليس من آداب التلاوة. التلاوة يجب أن تكون عملية مريحة، حيث لا ينبغي أن يُضاف إليها أفعال خارجية تجعل المتعلم يركز على حركاته بدلاً من تدبر الآيات. هذا الأسلوب يوضح أن التلاوة تتطلب خشوعًا قلبياً ونية صافية، دون التشويش على الفعل نفسه بحركات قد تكون غير ضرورية.  
        🏠📚 تطبيق في البيت أو القسم:  
        عندما يلاحظ المربي أن أحد الأطفال يضم يديه أثناء قراءة القرآن، يسأله:  
        "هل نحن في صلاة الآن؟"  
        إذا أجاب الطفل: "لا."  
        يُعِيده المربي قائلاً:  
        "إذًا، قراءة القرآن تكون بدون ضم اليدين، يمكنك أن تقرأ بأريحية وأنت موجه قلبك لله."  
        ثم يُشجّع الطفل على قراءة الآية أو الجزء بتركيز، مُرشدًا إياه لعدم تشتيت الانتباه بأفعال غير مرتبطة بالقراءة.
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
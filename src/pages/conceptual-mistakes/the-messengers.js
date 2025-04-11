import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";

const mistakesList = [
  {
    id: 1,
    betise: "سوء فهم العصمة حيث يعتقد البعض أن الرسل معصومون من كل خطأ",
    reponse: `
      الأساليب النبوية في تصحيح سوء فهم العصمة:
      * بيان أن الرسل بشر ولكن محفوظون في التبليغ
      📖 الحديث:
      قال ﷺ في دعائه: "ربّ اغفر لي خطيئتي يوم الدين."
      رواه البخاري (834) ومسلم (2716) في صحيحيهما
      🔎 الدلالة:
      دعاء النبي ﷺ بالمغفرة يدل على بشريته، لكنّه معصوم في تبليغ الدين، وهذا يُربي الطفل على التوازن بين احترام الرسل وعدم تأليههم.
      🏠📚 تطبيق في البيت أو القسم:
      يقول طفل: "هل الأنبياء لا يخطئون أبدًا؟"
      يرد المربي: "هم لا يخطئون في تبليغ الدين، لكنهم بشر، ينامون ويجوعون ويجتهدون."
      👨🏫 تعليق المربي:
      "عصمة الأنبياء تعني أنهم لا يُخطئون في تبليغ رسالة الله، لكنهم بشرٌ يعلّموننا من خلال اجتهادهم."
      
      *  عرض مواقف اجتهادية للأنبياء
      📖 الحديث:
      قال ﷺ: "إنما أنا بشر، وإنكم تختصمون إليّ، ولعل بعضكم أن يكون ألحن بحجته من بعض..."
      رواه البخاري (6967) ومسلم في صحيحيهما (1713)
      🔎 الدلالة:
      يبيّن النبي ﷺ أنه قد يُحكم في بعض الأمور بحسب ظاهرها، وهذا إقرار بالبشرية دون نقص الرسالة. تربويًا، هذا يرسّخ الفهم الواقعي للأنبياء.
      🏠📚 تطبيق في البيت أو القسم:
      يعرض المربي مشهدًا تمثيليًا لحكم بين طفلين ثم يسأل: "هل أخطأت في الحكم؟" ثم يربطها بما فعله النبي ﷺ.
    `
  },
  {
    id: 2,
    betise: "الاعتقاد بأن معجزات الرسل كانت مجرد قصص خيالية وليست حقائق",
    reponse: `
      الأساليب النبوية في إثبات حقيقة معجزات الرسل:
      *  تذكير بأن المعجزة واقعة وشاهدها الناس
      📖 الحديث:
      قال ﷺ: "والله ما من عبد يسمع بي ثم لا يؤمن بي إلا دخل النار."
      رواه مسلم في صحيحه (153)
      🔎 الدلالة:
      النبي ﷺ يربط الإيمان به بالإيمان برسالته ومعجزاته، مما يُبيّن أن المعجزة حقيقية لا خيال، وأن الناس شهدوها وصدقوها.
      🏠📚 تطبيق في البيت أو القسم:
      يعرض المربي فيديو علمي عن انشقاق القمر ثم يقول: "هل يمكننا نحن أن نشق القمر؟ هذه كانت معجزة للنبي ﷺ، وليست قصة خيال."
      
      *  توثيق الشهود على المعجزة
      📖 الحديث:
      قال أنس رضي الله عنه: "رأيت الماء ينبع من بين أصابع رسول الله ﷺ."
      رواه البخاري في صحيحه (3576)
      🔎 الدلالة:
      الصحابي يروي معجزة حدثت أمام عينيه، وهذا يدحض وهم الخيال، ويُعلّم الطفل التمييز بين القصة الحقيقية والوهم.
      🏠📚 تطبيق في البيت أو القسم:
      يروي المربي القصة بلغة درامية ثم يسأل: "هل هذه خيال؟ من رواها؟ كم واحد رأى ذلك؟"
    `
  },
  {
    id: 3,
    betise: "التفريق بين مكانة الرسل ووظائفهم",
    reponse: `
      الأساليب النبوية في التفريق بين مكانة الرسل ووظائفهم:
      *بيان وحدة الرسالة واختلاف الزمان
      📖 الحديث:
      قال ﷺ: "الأنبياء إخوة لعلات، أمهاتهم شتى ودينهم واحد."
      رواه البخاري (3443) ومسلم (2365) في صحيحيهما 
      🔎 الدلالة:
      النبي ﷺ يوضّح أن الرسل يشتركون في الهدف (الدعوة إلى التوحيد)، ويختلفون في الشريعة والزمان، مما يربي المتعلم على احترام جميع الرسل وعدم التفريق بينهم.
      🏠📚 تطبيق في البيت أو القسم:
      يسأل المربي: "هل يعقل أن يُرسل الله نبيًا لغير هدف؟ جميعهم أُرسلوا ليعلّمونا الإيمان بالله."
      ثم يُعلق: "مثل الإخوة في الأسرة، لكل واحد دور، لكنهم كلهم يجتمعون على محبة الأم."
    `
  }
];

export default function Others() {
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

      {/* Bouton de retour responsive */}
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
    </div>
  );
}
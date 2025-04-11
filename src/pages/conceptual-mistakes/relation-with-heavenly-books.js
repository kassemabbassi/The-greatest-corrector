import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";

const mistakesList = [
    {
    id: 16,
    betise: "الظنّ أنّ الكتب السماوية مجرد قصص تاريخية وليست توجيهات للحياة اليومية",
    reponse: `
      الأساليب النبوية لربط الكتب السماوية بالحياة العملية:
      *  التأكيد على التطبيق العملي للوحي
      📖 الحديث:
      قال النبي ﷺ:
      "من لا يعمل بما علم فقد جهل."
      رواه الترمذي (2650) في سننه  
      🔎 الدلالة:
      النبي ﷺ يبيّن أن المعرفة التي لا تتحول إلى عمل ليست إلا جهلًا، حيث يؤكد أن الوحي ليس مجرد سرد للقصص، بل هو مصدر لتوجيهات عملية يجب أن تُطبق في الحياة اليومية. تربويًا، هذا يعزز من فهم الطفل بأن الكتب السماوية هي هداية عملية وليست مجرد تاريخ.
      🏠📚 تطبيق في البيت أو القسم:
      يطلب المربي من المتعلم ذكر بعض التوجيهات الواردة في القرآن أو الأحاديث النبوية (مثل الصدق، الأمانة، الصلاة)، ثم يسألهم:
      "كيف يمكننا تطبيق هذا التوجيه في حياتنا اليومية؟"
      وبعد ذلك، يطلب منهم كتابة مواقف مروا بها وطبقوا فيها هذه التوجيهات.
      
      *  عرض الآثار المترتبة على الفعل
      📖 الحديث:
      قال النبي ﷺ: "مثل الذي يقرأ القرآن وهو حافظ له مع السفرة الكرام البررة..."
      رواه البخاري في صحيحه (4937)
      🔎 الدلالة:
      النبي ﷺ يربط بين قراءة القرآن وتكريم الملائكة للقارئ، ليربط الطفل بين العمل بالكتاب والمكانة عند الله. تربويًا، هذا يُعزّز احترام النص وفاعليته في حياة المسلم.
      🏠📚 تطبيق في البيت أو القسم:
      يقول المربي "من منكم قرأ اليوم من القرآن؟" ثم يسأل: "ما الأثر الذي تركه فيك؟"
    `
  },
  {
    id: 17,
    betise: "عدم التفريق بين التحريف الذي وقع في بعض الكتب السماوية وبين بقاء القرآن محفوظًا",
    reponse: `
      الأساليب النبوية لبيان حفظ القرآن وتميزه عن الكتب المحرفة:
      *  التحدي والإعجاز في ألفاظ القرآن
      📖 الحديث:
      قال النبي ﷺ:
      "والذي نفسي بيده، لو أن أحدكم يُذهب بحبل إلى الأرض السابعة، ثم يجد كلامًا مثل هذا القرآن، لجئت به."
      رواه الحاكم وصححه الألباني في السلسلة الصحيحة(رقم 2591)
      🔎 الدلالة:
      النبي ﷺ يُظهر استحالة الإتيان بمثل القرآن ولو بُحث عنه في أعماق الأرض، وفي هذا إثبات لإعجازه وتفرّده. تربويًا، يُساعد هذا الأسلوب على ترسيخ أن القرآن لا يُضاهى، ولا يمكن لأحد أن يضيف عليه أو يبدّله، فهو محفوظ بحفظ الله.
      🏠📚 تطبيق في البيت أو القسم:
      يعرض المربي على المتعلمين مقاطع من كتب بشرية تُشبه القصص أو الحكم، ثم يُقارنها بآيات من القرآن، ويسأل:
      "هل تجدون نفس الروح؟ نفس البلاغة؟ نفس التأثير؟"
      ثم يوضّح لهم أن البشر لا يستطيعون تقليد القرآن ولو اجتمعوا.
      
      *  التحذير من تحريف النصوص
      📖 الحديث:
      قال ﷺ: "لا تكذبوا عليّ، فإن من كذب عليّ فليتبوأ مقعده من النار."
      رواه البخاري في صحيحه (1291)
      🔎 الدلالة:
      تحذير النبي ﷺ من الكذب حتى في النقل عنه، دليل على أن التحريف مرفوض. تربويًا، يُرسّخ قيمة الأمانة، ويدفع الطفل للتساؤل عن صدق الكتب الأخرى، وامتياز القرآن بالحفظ.
      🏠📚 تطبيق في البيت أو القسم:
      يسأل المربي : "لماذا نحفظ القرآن كما هو؟ هل يمكن تغييره؟" ثم يعرض مثالًا على نص تاريخي تغيّر مع الزمن.
    `
  },{
    id: 15,
    betise: "عدم الربط بين الكتب السماوية بدياناتها والرسل الذين أنزلت عليهم",
    reponse: `
      الأساليب النبوية لتعليم الترابط بين الرسالات السماوية:
      *  الإقرار مع الإضافة التوضيحية
      📖 الحديث:
      قال رسول الله ﷺ:
      "الأنبياء إخوة لعلات، أمهاتهم شتى ودينهم واحد."
      رواه البخاري في صحيحه  (3443)
      🔎 الدلالة:
      أقر النبي ﷺ أن هناك اختلافًا ظاهريًا في تفاصيل الشرائع، لكنه أضاف توضيحًا بأن الدين واحد، ما يعني أن جميع الأنبياء جاؤوا برسالة واحدة من عند الله، وإن اختلفت في بعض التفاصيل. هذا الأسلوب يُوجّه ذهن المتعلم إلى الوحدة بين الرسالات، مع مراعاة الخصوصيات.
      🏠📚 تطبيق في البيت أو القسم:
      يرسم المربي شجرة تُظهر الأنبياء الثلاثة: موسى، عيسى، ومحمد عليهم السلام، ويضع بجانب كل نبي اسمه واسم الكتاب الذي نزل عليه. ثم يسأل:
      "ما الذي يجمع هؤلاء الأنبياء رغم اختلاف الأزمنة والكتب؟"
      ثم يقود النقاش لاكتشاف أنهم جميعًا جاؤوا بدين واحد من عند الله.
      
      *  التفسير بالتمثيل الواقعي
      📖 الحديث:
      قال النبي ﷺ:
      "مثل الأنبياء كمثل رجل بني دارًا، فأحسنها وأكملها، إلا موضع لبنة في زاوية، فكان الناس يطوفون بها ويعجبون منها، ويقولون: هلّا وضعت هذه اللبنة؟ فقال: أنا اللبنة، وأنا خاتم النبيين."
      رواه البخاري في صحيحه  (3535)
      🔎 الدلالة:
      النبي ﷺ هنا استخدم التمثيل الواقعي ليبين أن كل الأنبياء جاءوا ليكملوا البناء الذي بدأه من قبله، وأن الرسالة الإلهية واحدة، وبالتالي كل كتاب سماوي هو جزء من البناء الكلي للإيمان. هذا الأسلوب يوضح أنه رغم تنوع الرسالات، إلا أنها مترابطة وتكمل بعضها.
      🏠📚 تطبيق في البيت أو القسم:
      يمكن للمربي أن يعرض أمام الأطفال نموذجًا مصغرًا لبناء (مثل مكعبات اللعب)، ثم يسألهم:
      "ماذا يحدث إذا وضعنا حجرًا ناقصًا في هذا البناء؟ ماذا يحصل لو حاولنا بناء جدار كامل بغير لبنة واحدة؟"
      ثم يشرح لهم أن الكتب السماوية جاءت لتكمل بعضها وتسد نقصًا في الفهم أو الحاجة للبشر.
    `
  },

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
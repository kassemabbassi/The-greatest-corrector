import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";

const mistakesList = [

  {
    id: 19,
    betise: "نسبة الصفات البشرية إلى الله (كالنوم، النسيان...)",
    reponse: `
    الأساليب النبوية في تنزيه الله عن النقائص وبيان بطلان نسبة الصفات البشرية إليه (كالنوم والنسيان):
  *  النفي المباشر لصفات النقص
  📖 الحديث:
  قال ﷺ: "إن الله لا ينام، ولا ينبغي له أن ينام..."
  رواه مسلم في صحيحه (179)  
  🔎 الدلالة:
  النبي ﷺ ينفي عن الله صفة من صفات النقص (النوم)، ليُرسّخ أن الله ليس كمثله شيء. تربويًا، هذا يُساعد الطفل على تنزيه الله وتنقية تصوّره العقائدي.
  🏠📚 تطبيق في البيت أو القسم:
  يطلب المربي من المتعلمين أن يرفعوا أذرعهم لمدة، ثم يسأل: "تعبتم؟"
  ثم يقول: "الله لا ينام ولا يتعب، هو ليس مثلنا."
  `
  }
,  
{
  id: 20,
  betise: "الاعتقاد أنّ رحمة الله تعني عدم الحساب على الأخطاء",
  reponse: `
  الأساليب النبوية في تصحيح الاعتقاد بأن رحمة الله تعني إهمال الحساب على الأخطاء:
*  ضرب المثل العملي لتحفيز الشعور بالمسؤولية
📖 الحديث:
قال النبي ﷺ:
"مثل القائم على حدود الله والواقع فيها، كمثل قوم استهموا على سفينة... فأصاب بعضهم أعلاها وبعضهم أسفلها، فكان الذين في أسفلها إذا استقوا من الماء مروا على من فوقهم، فقالوا: لو أنّا خرقنا في نصيبنا خرقًا ولم نؤذِ من فوقنا، فإن تركوهم وما أرادوا هلكوا جميعًا، وإن أخذوا على أيديهم نجوا ونجوا جميعًا."
رواه البخاري في صحيحه (2493) 
🔎 الدلالة:
يضرب النبي ﷺ مثلًا يوضح أن التساهل في الخطأ يؤدي للهلاك، حتى وإن كانت النية "طيبة". الرحمة لا تعني ترك الناس يخطئون دون محاسبة. تربويًا، هذا يُنمّي في الطفل وعيًا جماعيًا بالمسؤولية، ويعلّمه أن الرحمة تترافق مع التصحيح والتوجيه.
🏠📚 تطبيق في البيت أو القسم:
يرسم المربي سفينة على اللوح، ويقسمها إلى طابق علوي وسفلي، ثم يسرد القصة، ويسأل:
"لو خرق أحدهم السفينة، هل نقول له: الله غفور؟ أم نوقفه؟"
ثم يُعلّق: "الله غفور، لكن لا يسمح لنا بالإفساد."
👨🏫 تعليق المربي:
"الرحمة الحقيقية أن نحمي أنفسنا وغيرنا من الخطأ، وأن نُحاسب أنفسنا قبل أن نُحاسب."

*  بيان أن الله يجمع بين الرحمة والعقاب
📖 الحديث:
قال ﷺ: "ما أحد أصبر على أذى سمعه من الله، يدّعون له الولد وهو يعافيهم ويرزقهم."
رواه البخاري في صحيحه (7378)
🔎 الدلالة:
النبي ﷺ يُبيّن عظمة حلم الله، لكنه لا ينفي الحساب والعقوبة لمن يستحقها. تربويًا، هذا يُربي الطفل على الحياء من الله، لا التمادي في المعصية.
🏠📚 تطبيق في البيت أو القسم:
يسأل المربي: "هل يعقل أن يعفو الأب دائمًا دون أن يُنبه؟ فكيف بالله الذي لا يغفل عن شيء؟"
`
}

,
{
  id: 18,
  betise: "الله في كل مكان",
  reponse: `
  الأساليب النبوية في بيان صفات الله:
*  السؤال التوجيهي لاكتشاف التصور
📖 الحديث:
قال ﷺ للجارية: "أين الله؟" قالت: "في السماء." قال: "من أنا؟" قالت: "أنت رسول الله." قال: "أعتقها، فإنها مؤمنة."
رواه مسلم (537) في صحيحه  
🔎 الدلالة:
النبي ﷺ يستخرج العقيدة الصحيحة من الفتاة بالسؤال، فيؤكد أن الإيمان يقوم على التصور الصحيح لله. تربويًا، هذا الأسلوب يحفّز الطفل على التفكير بنفسه، مما يُرسّخ المعلومة في ذهنه.
🏠📚 تطبيق في البيت أو القسم:
يسأل المربي: "أين ربنا؟ هل ترونه؟" ثم يشير إلى السماء ويقول: "الذي خلقنا فوق كل شيء، وهو يرانا ويسمعنا."

* التذكير بعظمة الله وعدم مماثلته لخلقه
📖 الحديث:
قال ﷺ: "إنكم لا تدعون أصمّ ولا غائبًا، إنما تدعون سميعًا بصيرًا قريبًا."
رواه البخاري في صحيحه (2992)  
🔎 الدلالة:
يُبيّن النبي ﷺ قرب الله من عباده بعلمه وقدرته، لا بذاته، مما يُزيل الغموض في تصوّر الأطفال لمكان الله. تربويًا، يُوازن بين القرب الإيماني والعلو الحقيقي.
🏠📚 تطبيق في البيت أو القسم:
يقول أحد المتعلمين: "ربنا في كل مكان."
يرد المربي: "هل يمكن أن يكون الله داخل هذه الطاولة؟ داخل الثلاجة؟" ثم يقول: "هو معنا بعلمه، لكنه فوقنا في السماء."
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

      {/* Sous-titre */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl md:text-4xl text-[#4f772d] font-bold mb-8 font-amiri italic text-center leading-relaxed"
      >
        قائمة الأخطاء وتصحيحها
      </motion.p>

     {/* Liste des bêtises - partie modifiée */}
           <AnimatePresence mode="wait">
             {!selectedMistake ? (
               <motion.div
                 key="mistake-list"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.5 }}
                 className="w-full max-w-6xl space-y-6"
               >
                 {mistakeGroups.map((group, index) => (
                   <motion.div
                     key={index}
                     className={`flex ${group.length === 1 ? 'justify-center' : 'justify-between'} gap-6`}
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
                           group.length === 1 ? 'w-full max-w-lg' : 'w-1/2'
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
          className="mt-8 bg-[#4f772d] text-white text-xl md:text-2xl font-amiri font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#31572c] hover:shadow-lg transition duration-300 flex items-center gap-3"
        >
          <FaArrowLeft className="w-6 h-6" /> 
          العودة إلى القائمة
        </motion.button>
      )}
    </div>
  );
}
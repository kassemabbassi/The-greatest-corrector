import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";
import {useRouter} from "next/router";
import {Image} from "next/image";
const mistakesList = [

      {
        id: 22,
        betise: "الاعتقاد أن الصلاة مجرد حركات دون إدراك معانيها وأهميتها",
        reponse: `
        الأساليب النبويّة في التعامل مع هذا الخطأ:
      * الأسلوب النبوي: التحفيز العاطفي وربط العمل بالجزاء المحبوب  
      📖 الحديث:  
      قال رسول الله ﷺ:  
      "أرأيتُم لو أنَّ نهرًا بباب أحدِكم يغتسلُ فيه كلَّ يومٍ خمسَ مرَّاتٍ، هل يبقى من درنهِ شيء؟"  
      قالوا: لا يبقى من درنهِ شيء.  
      قال: "فذلك مثلُ الصَّلواتِ الخمسِ، يمحو اللهُ بهنَّ الخطايا."  
      رواه البخاري (528) ومسلم (667)
      
      🔎 الدلالة:  
      النبي ﷺ استخدم التشبيه المحسوس المرتبط بشعور محبوب — النظافة — ليُقرب أثر الصلاة إلى قلب المتعلم. فالربط العاطفي بين الصلاة والنقاء يُحفز الرغبة فيها حبًا في أثرها الجميل، لا مجرد أداء حركات.  
      تربويًا: يُعلمنا هذا الأسلوب أن ربط الفعل بالجزاء المحبب يُنشئ علاقة إيجابية بين الطفل والعبادة، فيُصلي وهو يدرك أثرها الروحي والنفسي.
      
      🏠📚   التطبيق:  
      يحضر المربي:  
      - كوب ماء  
      - ورقة بلاستيكية مرسوم عليها قلب صغير  
      - نقاط سوداء بالقلم
      
      ثم يقول:  
      "هذا قلبنا… وأحيانًا نخطئ فتصبح عليه ذنوب."  
      ثم:  
      "صلّينا صلاة..." — يرش بعض الماء فتمسح نقاط.  
      "صلّينا ثانية..." — يكرر الرش.  
      حتى تزول كل النقاط.  
      
      يسأل: "ماذا حدث لقلبنا؟"  
      يجيب الأطفال: "نظف!"  
      فيعلق:  
      "كذلك تفعل الصلاة — تنظف قلوبنا مثلما الماء ينظف جسدنا."
      
      💡 نشاط إضافي في البيت:  
      - يُعلق ورقة على الحائط فيها قلب  
      - كلما صلى الطفل صلاة في وقتها، يضع نجمًا صغيرًا ذهبيًا على القلب  
      - في نهاية الأسبوع، يرى كم أصبح قلبه لامعًا.  
      `
      },
      {
        id: 23,
        betise: "الاعتقاد أن عدم التركيز أو التحدث أثناء الصلاة لا يؤثر على صحتها",
        reponse: `
        الأساليب النبويّة في التعامل مع هذا الخطأ:
      * الأسلوب النبوي للإصلاح: توضيح الخطأ بلطف وتحفيز الخشوع  
      📖 الحديث:  
      قال ﷺ للمسيء في صلاته: "ارجع فصلِّ فإنك لم تصلِّ."  
      رواه البخاري (793)
      
      🔎 الدلالة:  
      النبي ﷺ لم يوبخ المسيء، بل أوضح له برفق أن الصلاة ليست مجرد أداء حركات، بل تتطلب الطمأنينة والخشوع.  
      تربويًا: يعلمنا هذا الأسلوب أن الصلاة لحظة اتصال حقيقية مع الله تتطلب حضور القلب والجسد معًا، وليس أداء آلي.
      
      🏠📚   التطبيق:  
      يحضر المربي كرة صغيرة ويقول:  
      "هل لو رميت هذه الكرة بسرعة بدون تركيز، ستصل الهدف؟"  
      يجيب الطفل: "لا."  
      فيشرح المربي:  
      "كذلك الصلاة — إذا صلينا بسرعة وبدون قلب، لا تصل إلى الله كما نريد."  
      ثم يُطلب من الأطفال أداء صلاة قصيرة بهدوء وتركيز، مع تنظيم مسابقة "أكثر الأطفال تركيزًا" لزيادة التحفيز.
      
      * الأسلوب النبوي للإصلاح: تعزيز الخشوع بأسلوب تحفيزي  
      📖 الحديث:  
      قال ﷺ: "ما من امرئٍ مسلمٍ تحضرهُ صلاةٌ مكتوبةٌ، فيُحسنُ وضوءَها وخشوعَها وركوعَها، إلا كانت كفارةً لما قبلها من الذنوب ما لم تُؤْتَ كبيرةٌ."  
      رواه مسلم (667)
      
      🔎 الدلالة:  
      النبي ﷺ يربط بين حسن أداء الصلاة بخشوع وبين مغفرة الذنوب، ليُعزز في ذهن المتعلم أن الصلاة ليست واجبًا شكليًا بل وسيلة لتطهير النفس.
      
      🏠📚  التطبيق:  
      - يُحضر المربي لوحة بها قلوب نظيفة وأخرى ملوثة.  
      - يقول: "هل تعرف أن الصلاة تنظف قلوبنا؟"  
      - يسأل: "ماذا يحدث لو صليت بخشوع؟"  
      - يجيب الطفل: "يغفر الله لي."  
      - يُعلق المربي: "كل صلاة فرصة لنُطهر قلوبنا ونقترب من الله."
      
      💡 نشاط تفاعلي:  
      بعد الصلاة، يُطلب من الأطفال تأمل مشاعرهم:  
      - هل شعروا براحة؟  
      - هل يشعرون أنهم أقرب لله؟  
      هذا النشاط يُرسّخ ارتباط الخشوع بالراحة الروحية والسكينة.  
      `
      },    {
        id: 21,
        betise: "النية في الصلاة يجب التلفظ بها جهرًا",
        reponse: `
        الأساليب النبويّة في التعامل مع هذا الخطأ:
      * الأسلوب النبوي: تصحيح الفهم بالفعل العملي  
      📖 الحديث:  
      كان ﷺ إذا قام إلى الصلاة كبّر، ولم يُنقل عنه التلفظ بالنية.  
      رواه البخاري ومسلم  
      
      🔎 الدلالة:  
      النبي ﷺ لم يتلفظ بالنية قبل الصلاة، بل كان يُجسّدها بالقلب والعمل. هذا يُعلّم أن النية أمر داخلي بين العبد وربه، لا تحتاج إلى جهر أو تصنّع. تربيـويًا، يُرشد هذا الأسلوب الطفل إلى أن الإسلام دين يُراعي الفطرة والصدق والبساطة، وأن حضور القلب يكفي دون الحاجة إلى ألفاظ زائدة.
      
      🏠📚   التطبيق:  
      قبل الصلاة، يحضّر المربي بطاقتين:  
      - الأولى مكتوب عليها: "اللهم إني نويت أن أصلي الظهر أربع ركعات..."  
      - الثانية: يقف الطفل بهدوء ويكبّر للصلاة دون كلام.
      
      يسأل المربي:  
      "أي الطريقتين أقرب لما فعله النبي ﷺ؟"  
      فيجيب الأطفال: "الثانية!"  
      فيشرح:  
      "أحسنتم. النية بالقلب، والنبي ﷺ لم يتلفظ بها، بل كبّر مباشرة."
      
      ثم يجري نشاطًا:  
      يطلب من الأطفال أن يتخيلوا أنهم يريدون شرب الماء.  
      ويسأل:  
      "هل تقول: نويت أن أشرب الماء؟ أم تذهب وتشرب؟"  
      يضحكون ويجيبون: "نشرب مباشرة!"  
      فيعلق المربي:  
      "كذلك النية — مادمت تنوي الخير وتبدأ فيه، فقلبك هو مَن يتكلم."  
      `
      },
      
      
      ];

export default function Others() {
  const router = useRouter();
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
      
      {/* Nouveau bouton pour retourner aux domaines */}
      <motion.button
        onClick={() => router.push('/conceptual-mistakes/In-the-field-of-acts-of-worship')} // Redirection vers la page relation-with-creed
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
import { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Upload, ArrowLeft, Volume2, AlertCircle, CheckCircle, Clock, Mic } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface HomeUserModeProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'ar';
}

export default function HomeUserMode({ onNavigate, language }: HomeUserModeProps) {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const content = {
    en: {
      title: "Home Wound Scanner",
      subtitle: "Simple & Easy Wound Care",
      upload: "Upload Photo",
      camera: "Use Camera",
      voice: "Voice Guide",
      analyzing: "Analyzing wound...",
      results: "Analysis Results",
      playVoice: "Play Voice Guide",
      severity: "Severity Level",
      action: "Recommended Action",
      followup: "Follow-up",
      newScan: "New Scan"
    },
    ar: {
      title: "ماسح الجروح المنزلي",
      subtitle: "عناية بسيطة وسهلة بالجروح",
      upload: "رفع صورة",
      camera: "استخدام الكاميرا",
      voice: "مرشد صوتي",
      analyzing: "جاري تحليل الجرح...",
      results: "نتائج التحليل",
      playVoice: "تشغيل المرشد الصوتي",
      severity: "مستوى الخطورة",
      action: "الإجراء الموصى به",
      followup: "المتابعة",
      newScan: "فحص جديد"
    }
  };

  const t = content[language];

  const mockResults = {
    en: [
      {
        severity: "Mild",
        color: "text-green-400",
        bg: "bg-green-500/20",
        icon: CheckCircle,
        title: "Minor Surface Wound",
        action: "Clean with saline solution and apply sterile dressing. Change dressing daily.",
        followup: "Monitor for 3-5 days. Seek medical help if redness or swelling increases.",
        voice: "Your wound appears mild. Please clean it with saline and apply a sterile dressing. Monitor it for the next few days."
      },
      {
        severity: "Moderate",
        color: "text-yellow-400",
        bg: "bg-yellow-500/20",
        icon: AlertCircle,
        title: "Possible Infection Signs",
        action: "Clean wound thoroughly. Apply antibiotic ointment. Visit a doctor within 24 hours.",
        followup: "Doctor consultation recommended. Do not delay treatment.",
        voice: "Signs of infection detected. Please consult a doctor within 24 hours. Clean the wound and apply antibiotic ointment."
      },
      {
        severity: "Severe",
        color: "text-red-400",
        bg: "bg-red-500/20",
        icon: AlertCircle,
        title: "Urgent Medical Attention",
        action: "Seek emergency care immediately. Do not attempt home treatment.",
        followup: "Visit emergency room now.",
        voice: "Severe burn or deep wound suspected. Please seek emergency medical care immediately. Do not attempt home treatment."
      }
    ],
    ar: [
      {
        severity: "خفيف",
        color: "text-green-400",
        bg: "bg-green-500/20",
        icon: CheckCircle,
        title: "جرح سطحي بسيط",
        action: "نظف بمحلول ملحي وضع ضمادة معقمة. غيّر الضمادة يومياً.",
        followup: "راقب لمدة 3-5 أيام. اطلب المساعدة الطبية إذا زاد الاحمرار أو التورم.",
        voice: "يبدو جرحك خفيفاً. يرجى تنظيفه بمحلول ملحي ووضع ضمادة معقمة. راقبه خلال الأيام القليلة القادمة."
      },
      {
        severity: "متوسط",
        color: "text-yellow-400",
        bg: "bg-yellow-500/20",
        icon: AlertCircle,
        title: "علامات عدوى محتملة",
        action: "نظف الجرح جيداً. ضع مرهم مضاد حيوي. قم بزيارة الطبيب خلال 24 ساعة.",
        followup: "يُنصح باستشارة الطبيب. لا تؤخر العلاج.",
        voice: "تم اكتشاف علامات عدوى. يرجى استشارة الطبيب خلال 24 ساعة. نظف الجرح وضع مرهم مضاد حيوي."
      },
      {
        severity: "شديد",
        color: "text-red-400",
        bg: "bg-red-500/20",
        icon: AlertCircle,
        title: "عناية طبية عاجلة",
        action: "اطلب الرعاية الطبية الطارئة فوراً. لا تحاول العلاج المنزلي.",
        followup: "قم بزيارة غرفة الطوارئ الآن.",
        voice: "يُشتبه في حرق شديد أو جرح عميق. يرجى طلب الرعاية الطبية الطارئة فوراً. لا تحاول العلاج المنزلي."
      }
    ]
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        analyzeWound();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeWound = () => {
    setAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const randomResult = mockResults[language][Math.floor(Math.random() * mockResults[language].length)];
      setResult(randomResult);
      setAnalyzing(false);
    }, 3000);
  };

  const playVoice = () => {
    if (result?.voice && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(result.voice);
      utterance.lang = language === 'ar' ? 'ar-SA' : 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 min-h-screen px-6 py-8"
    >
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => onNavigate('choice')}
          className="text-white/60 hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'en' ? 'Back' : 'رجوع'}
        </Button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">{t.title}</h1>
          <p className="text-lg text-white/70">{t.subtitle}</p>
        </motion.div>

        {!analyzing && !result && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.label
              whileHover={{ scale: 1.02 }}
              className="glass-card-strong rounded-2xl p-8 cursor-pointer group"
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
              />
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{t.upload}</h3>
                <p className="text-white/60 text-sm">{language === 'en' ? 'Upload a photo from your device' : 'ارفع صورة من جهازك'}</p>
              </div>
            </motion.label>

            <motion.label
              whileHover={{ scale: 1.02 }}
              className="glass-card-strong rounded-2xl p-8 cursor-pointer group"
            >
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleUpload}
                className="hidden"
              />
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{t.camera}</h3>
                <p className="text-white/60 text-sm">{language === 'en' ? 'Take a photo with your camera' : 'التقط صورة بالكاميرا'}</p>
              </div>
            </motion.label>
          </div>
        )}

        {analyzing && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card-strong rounded-3xl p-12 text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"
            >
              <Camera className="w-12 h-12 text-white" />
            </motion.div>
            <h2 className="text-2xl font-bold text-white mb-4">{t.analyzing}</h2>
            <div className="flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}

        {result && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="space-y-6"
          >
            {uploadedImage && (
              <Card className="glass-card-strong p-4">
                <img
                  src={uploadedImage}
                  alt="Uploaded wound"
                  className="w-full h-64 object-cover rounded-xl"
                />
              </Card>
            )}

            <Card className="glass-card-strong p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{t.results}</h2>
                <Button
                  onClick={playVoice}
                  className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300"
                >
                  <Volume2 className="w-4 h-4 mr-2" />
                  {t.playVoice}
                </Button>
              </div>

              <div className={`${result.bg} rounded-xl p-6 mb-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <result.icon className={`w-8 h-8 ${result.color}`} />
                  <div>
                    <p className="text-white/60 text-sm">{t.severity}</p>
                    <h3 className={`text-2xl font-bold ${result.color}`}>{result.severity}</h3>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{result.title}</h4>
              </div>

              <div className="space-y-4">
                <div className="glass-card rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">{t.action}</h4>
                      <p className="text-white/70 leading-relaxed">{result.action}</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">{t.followup}</h4>
                      <p className="text-white/70 leading-relaxed">{result.followup}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => {
                  setResult(null);
                  setUploadedImage(null);
                }}
                className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              >
                {t.newScan}
              </Button>
            </Card>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

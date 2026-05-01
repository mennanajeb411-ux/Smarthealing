import { motion } from 'motion/react';
import { Activity, Brain, Hospital, Home, Globe, Zap, Shield, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

interface LandingPageProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
}

export default function LandingPage({ onNavigate, language, setLanguage }: LandingPageProps) {
  const content = {
    en: {
      title: "SmartHeal",
      subtitle: "AI-Powered Personalized Wound Care Platform",
      description: "Helping wounds heal faster with intelligent image analysis, clinical data, and real-time treatment recommendations.",
      tagline: "Smarter Healing. Personalized Care.",
      buttons: {
        scan: "Start Free Scan",
        demo: "Hospital Demo",
        learn: "Learn More"
      },
      features: [
        { icon: Brain, title: "AI Analysis", desc: "Computer vision wound detection" },
        { icon: Hospital, title: "Clinical Grade", desc: "Hospital-ready accuracy" },
        { icon: Zap, title: "Instant Results", desc: "Recommendations in seconds" },
        { icon: Shield, title: "Safe & Secure", desc: "Medical-grade privacy" }
      ],
      stats: [
        { value: "98%", label: "Accuracy Rate" },
        { value: "50+", label: "Hospitals" },
        { value: "10K+", label: "Patients Helped" },
        { value: "<30s", label: "Avg Analysis Time" }
      ],
      mission: "Transform wound treatment using artificial intelligence by providing fast, personalized, and accessible wound-care recommendations."
    },
    ar: {
      title: "سمارت هيل",
      subtitle: "منصة رعاية الجروح الذكية بالذكاء الاصطناعي",
      description: "مساعدة الجروح على الشفاء بشكل أسرع من خلال التحليل الذكي للصور والبيانات السريرية والتوصيات العلاجية الفورية.",
      tagline: "شفاء أذكى. رعاية مخصصة.",
      buttons: {
        scan: "ابدأ الفحص المجاني",
        demo: "عرض توضيحي للمستشفيات",
        learn: "اعرف المزيد"
      },
      features: [
        { icon: Brain, title: "تحليل ذكي", desc: "كشف الجروح بالرؤية الحاسوبية" },
        { icon: Hospital, title: "مستوى سريري", desc: "دقة جاهزة للمستشفيات" },
        { icon: Zap, title: "نتائج فورية", desc: "توصيات في ثوانٍ" },
        { icon: Shield, title: "آمن ومحمي", desc: "خصوصية طبية عالية" }
      ],
      stats: [
        { value: "98%", label: "معدل الدقة" },
        { value: "50+", label: "مستشفى" },
        { value: "10K+", label: "مريض تمت مساعدته" },
        { value: "<30s", label: "متوسط وقت التحليل" }
      ],
      mission: "تحويل علاج الجروح باستخدام الذكاء الاصطناعي من خلال توفير توصيات سريعة ومخصصة وسهلة الوصول للعناية بالجروح."
    }
  };

  const t = content[language];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 min-h-screen"
    >
      {/* Header */}
      <nav className="px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-2"
        >
          <Activity className="w-8 h-8 text-cyan-400" />
          <span className="text-2xl font-bold text-white">{t.title}</span>
        </motion.div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
            className="text-white hover:bg-white/10"
          >
            <Globe className="w-4 h-4 mr-2" />
            {language === 'en' ? 'العربية' : 'English'}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-block px-4 py-2 rounded-full glass-card mb-6">
            <p className="text-cyan-300 text-sm">{t.tagline}</p>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">{t.title}</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-white/90 mb-4 font-semibold">
            {t.subtitle}
          </h2>

          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <Button
              size="lg"
              onClick={() => onNavigate('choice')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg glow-effect"
            >
              <Zap className="w-5 h-5 mr-2" />
              {t.buttons.scan}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('dashboard')}
              className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 px-8 py-6 text-lg"
            >
              <Hospital className="w-5 h-5 mr-2" />
              {t.buttons.demo}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('library')}
              className="border-blue-400/50 text-blue-300 hover:bg-blue-400/10 px-8 py-6 text-lg"
            >
              {language === 'en' ? 'Treatment Library' : 'مكتبة العلاجات'}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
            {t.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {t.features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card rounded-2xl p-6 text-center cursor-pointer"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Footer Disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-0 left-0 right-0 p-4 text-center"
      >
        <p className="text-white/40 text-xs">
          {language === 'en'
            ? "SmartHeal provides AI guidance only and does not replace professional medical diagnosis."
            : "يوفر سمارت هيل إرشادات الذكاء الاصطناعي فقط ولا يحل محل التشخيص الطبي المهني."
          }
        </p>
      </motion.div>
    </motion.div>
  );
}

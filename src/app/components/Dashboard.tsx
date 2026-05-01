import { motion } from 'motion/react';
import { ArrowLeft, Users, AlertTriangle, TrendingUp, Download, Activity, Heart, Flame } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DashboardProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'ar';
}

export default function Dashboard({ onNavigate, language }: DashboardProps) {
  const content = {
    en: {
      title: "Hospital Dashboard",
      subtitle: "Real-time Wound Care Analytics",
      stats: {
        totalCases: "Total Cases Today",
        highRisk: "High Risk Patients",
        burnCases: "Burn Cases",
        avgHealing: "Avg Healing Time"
      },
      charts: {
        dailyTrends: "Daily Wound Cases Trend",
        woundTypes: "Wound Type Distribution",
        healingProgress: "Healing Progress Rate"
      },
      export: "Export Report",
      patientList: "Recent Patients",
      priority: "Priority",
      status: "Status",
      viewDetails: "View Details"
    },
    ar: {
      title: "لوحة تحكم المستشفى",
      subtitle: "تحليلات رعاية الجروح الفورية",
      stats: {
        totalCases: "إجمالي الحالات اليوم",
        highRisk: "المرضى عالي الخطورة",
        burnCases: "حالات الحروق",
        avgHealing: "متوسط وقت الشفاء"
      },
      charts: {
        dailyTrends: "اتجاه حالات الجروح اليومية",
        woundTypes: "توزيع أنواع الجروح",
        healingProgress: "معدل تقدم الشفاء"
      },
      export: "تصدير التقرير",
      patientList: "المرضى الحديثون",
      priority: "الأولوية",
      status: "الحالة",
      viewDetails: "عرض التفاصيل"
    }
  };

  const t = content[language];

  const dailyData = [
    { day: 'Mon', cases: 12 },
    { day: 'Tue', cases: 19 },
    { day: 'Wed', cases: 15 },
    { day: 'Thu', cases: 22 },
    { day: 'Fri', cases: 18 },
    { day: 'Sat', cases: 14 },
    { day: 'Sun', cases: 10 }
  ];

  const woundTypeData = [
    { name: language === 'en' ? 'Burns' : 'حروق', value: 35, color: '#ef4444' },
    { name: language === 'en' ? 'Diabetic' : 'سكري', value: 28, color: '#f59e0b' },
    { name: language === 'en' ? 'Surgical' : 'جراحي', value: 20, color: '#06b6d4' },
    { name: language === 'en' ? 'Pressure' : 'فراش', value: 12, color: '#8b5cf6' },
    { name: language === 'en' ? 'Other' : 'أخرى', value: 5, color: '#64748b' }
  ];

  const healingData = [
    { week: 'W1', improved: 15, stable: 8, declined: 2 },
    { week: 'W2', improved: 22, stable: 6, declined: 1 },
    { week: 'W3', improved: 28, stable: 5, declined: 1 },
    { week: 'W4', improved: 35, stable: 3, declined: 0 }
  ];

  const recentPatients = [
    { id: 'P-001', priority: 'High', status: language === 'en' ? 'Critical' : 'حرجة', color: 'text-red-400 bg-red-500/20' },
    { id: 'P-002', priority: 'Medium', status: language === 'en' ? 'Improving' : 'تتحسن', color: 'text-yellow-400 bg-yellow-500/20' },
    { id: 'P-003', priority: 'Low', status: language === 'en' ? 'Stable' : 'مستقرة', color: 'text-green-400 bg-green-500/20' },
    { id: 'P-004', priority: 'High', status: language === 'en' ? 'Urgent' : 'عاجل', color: 'text-red-400 bg-red-500/20' },
    { id: 'P-005', priority: 'Medium', status: language === 'en' ? 'Monitoring' : 'مراقبة', color: 'text-yellow-400 bg-yellow-500/20' }
  ];

  const stats = [
    { icon: Users, label: t.stats.totalCases, value: '48', color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
    { icon: AlertTriangle, label: t.stats.highRisk, value: '12', color: 'text-red-400', bg: 'bg-red-500/20' },
    { icon: Flame, label: t.stats.burnCases, value: '18', color: 'text-orange-400', bg: 'bg-orange-500/20' },
    { icon: Heart, label: t.stats.avgHealing, value: '8.5d', color: 'text-green-400', bg: 'bg-green-500/20' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 min-h-screen px-6 py-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => onNavigate('landing')}
              className="text-white/60 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'en' ? 'Back' : 'رجوع'}
            </Button>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <h1 className="text-4xl font-bold text-white">{t.title}</h1>
              <p className="text-lg text-white/70">{t.subtitle}</p>
            </motion.div>
          </div>

          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
            <Download className="w-4 h-4 mr-2" />
            {t.export}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="glass-card-strong p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{stat.label}</p>
                      <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-card-strong p-6">
              <h3 className="text-xl font-semibold text-white mb-6">{t.charts.dailyTrends}</h3>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={dailyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Line type="monotone" dataKey="cases" stroke="#06b6d4" strokeWidth={3} dot={{ fill: '#06b6d4', r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="glass-card-strong p-6">
              <h3 className="text-xl font-semibold text-white mb-6">{t.charts.woundTypes}</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={woundTypeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {woundTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="glass-card-strong p-6">
              <h3 className="text-xl font-semibold text-white mb-6">{t.charts.healingProgress}</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={healingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="week" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="improved" fill="#10b981" name={language === 'en' ? 'Improved' : 'تحسنت'} />
                  <Bar dataKey="stable" fill="#f59e0b" name={language === 'en' ? 'Stable' : 'مستقرة'} />
                  <Bar dataKey="declined" fill="#ef4444" name={language === 'en' ? 'Declined' : 'تراجعت'} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="glass-card-strong p-6">
            <h3 className="text-xl font-semibold text-white mb-6">{t.patientList}</h3>
            <div className="space-y-3">
              {recentPatients.map((patient, i) => (
                <motion.div
                  key={patient.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{patient.id}</p>
                      <p className="text-white/60 text-sm">{t.priority}: {patient.priority}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={`px-4 py-2 rounded-full ${patient.color}`}>
                      {patient.status}
                    </div>
                    <Button size="sm" variant="outline" className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10">
                      {t.viewDetails}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}

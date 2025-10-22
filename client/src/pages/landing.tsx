import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  Stethoscope, 
  TestTube, 
  BedDouble, 
  FileText, 
  Shield, 
  Database, 
  BarChart3,
  Calendar,
  Building2,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Zap,
  Lock,
  Settings,
  ChevronDown
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  hospitalName: z.string().min(2, "Hospital name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const features = [
  {
    icon: Users,
    title: "Patient Management",
    description: "Complete patient registration, records, and history tracking with advanced search capabilities",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Stethoscope,
    title: "Doctor Management",
    description: "Comprehensive doctor profiles, schedules, earnings tracking, and performance analytics",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Calendar,
    title: "OPD Management",
    description: "Streamline outpatient appointments, consultations, and follow-ups with automated reminders",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TestTube,
    title: "Pathology Lab",
    description: "Order tests, track results, generate reports, and integrate with lab equipment seamlessly",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: BedDouble,
    title: "In-Patient Admissions",
    description: "Manage admissions, room transfers, discharges, and bed allocation with real-time updates",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: FileText,
    title: "Billing & Payments",
    description: "Comprehensive billing with multiple payment methods, insurance claims, and financial reporting",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description: "Real-time insights, financial summaries, occupancy rates, and customizable dashboards",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Shield,
    title: "Audit Logs",
    description: "Complete activity tracking for compliance, security, and operational transparency",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Database,
    title: "Backup & Restore",
    description: "Automated backups with one-click restore, ensuring your data is always protected",
    color: "from-amber-500 to-yellow-500"
  },
  {
    icon: Building2,
    title: "Multi-Location Support",
    description: "Manage multiple hospital branches from a unified platform with centralized oversight",
    color: "from-cyan-500 to-blue-500"
  },
];

function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Animated background layers */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950"
      />
      
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl" />
      </motion.div>

      <motion.div 
        style={{ y: y3, opacity, scale }}
        className="relative h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-black/40 backdrop-blur-md rounded-full border border-white/20"
          data-testid="badge-next-gen"
        >
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Next-Generation Hospital Management
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
          data-testid="heading-hmsync"
        >
          HMSync
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white max-w-4xl"
          data-testid="heading-tagline"
        >
          Advanced Control. Owner-First.{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Fully Customizable.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl leading-relaxed"
          data-testid="text-description"
        >
          The complete hospital management system designed for modern healthcare facilities. 
          Take control with advanced features, customizable workflows, and unparalleled flexibility.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl shadow-blue-500/50 dark:shadow-blue-400/30 group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-request-demo"
          >
            Request a Demo
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-2 bg-white/60 dark:bg-black/40 backdrop-blur-md hover:bg-white dark:hover:bg-black/60"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-explore-features"
          >
            Explore Features
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

function HorizontalScrollFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Split features into two rows
  const firstRow = features.slice(0, 5);
  const secondRow = features.slice(5, 10);

  // First row: scroll from left (0%) to right (-100% to show all cards)
  const x1 = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-100%"]);
  
  // Second row: scroll from right (0%) to left (100%)
  const x2 = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef} 
      id="features" 
      className="relative bg-white dark:bg-gray-950"
      style={{ height: "350vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-12">
        <div className="container mx-auto px-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent" data-testid="heading-features">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="text-features-desc">
              Everything you need to run a modern hospital, all in one platform
            </p>
          </motion.div>
        </div>

        <div className="space-y-6">
          {/* First Row - Scrolls Left to Right */}
          <motion.div style={{ x: x1 }} className="flex gap-6 px-6">
            {firstRow.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={`row1-${index}`}
                  className="flex-shrink-0 w-[320px]"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl" data-testid={`card-feature-${index}`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 shadow-lg`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed" data-testid={`text-feature-desc-${index}`}>
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Second Row - Scrolls Right to Left */}
          <motion.div style={{ x: x2 }} className="flex gap-6 px-6 justify-end">
            {secondRow.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={`row2-${index}`}
                  className="flex-shrink-0 w-[320px]"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl" data-testid={`card-feature-${index + 5}`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 shadow-lg`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" data-testid={`text-feature-title-${index + 5}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed" data-testid={`text-feature-desc-${index + 5}`}>
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ImmersiveSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-purple-950 to-pink-950">
      <motion.div style={{ y }} className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-8 text-white" data-testid="heading-immersive">
            Redefining{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Healthcare
            </span>
            {" "}Management
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-12" data-testid="text-immersive-desc">
            Bringing everything together in one powerful, customizable platform. 
            Unified workflows, real-time insights, and complete control.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2" data-testid="feature-unified">
              <CheckCircle2 className="w-6 h-6 text-blue-400" />
              <span className="text-lg">Fully Integrated Platform</span>
            </div>
            <div className="flex items-center gap-2" data-testid="feature-realtime">
              <CheckCircle2 className="w-6 h-6 text-purple-400" />
              <span className="text-lg">Real-Time Updates</span>
            </div>
            <div className="flex items-center gap-2" data-testid="feature-scalable">
              <CheckCircle2 className="w-6 h-6 text-pink-400" />
              <span className="text-lg">Infinitely Scalable</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function WhyChooseSection() {
  const whyChoose = [
    {
      icon: Settings,
      title: "Fully Customizable",
      description: "Tailor every aspect to match your hospital's unique workflow and requirements",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Owner-First Control",
      description: "Complete control over your data, system configuration, and user management",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Advanced Features",
      description: "Role-based access, multi-user support, real-time updates, and powerful automation",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Sparkles,
      title: "Modern Interface",
      description: "Beautiful, intuitive design with dark mode support that your staff will love using",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white" data-testid="heading-why-choose">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">HMSync</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="text-why-choose-desc">
            Built for hospital owners who demand excellence and control
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {whyChoose.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="p-10 h-full bg-white dark:bg-gray-800 border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl" data-testid={`card-why-${index}`}>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} p-4 mb-6 shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white" data-testid={`text-why-title-${index}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed" data-testid={`text-why-desc-${index}`}>
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-12 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white max-w-4xl mx-auto shadow-2xl" data-testid="card-custom-quote">
            <h3 className="text-4xl font-bold mb-4" data-testid="heading-custom-pricing">Get Custom Pricing</h3>
            <p className="text-xl mb-8 opacity-90" data-testid="text-custom-pricing-desc">
              Every hospital is unique. Let's discuss your specific needs and create a tailored solution.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-contact-sales"
            >
              Contact Sales
              <ArrowRight className="ml-2" />
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      hospitalName: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form submitted:", data);
    toast({
      title: "Demo Request Received!",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-32 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent" data-testid="heading-contact">
            Request a Demo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="text-contact-desc">
            See HMSync in action and discover how it can transform your hospital operations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-10 h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-2" data-testid="card-contact-info">
              <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white" data-testid="heading-get-in-touch">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4" data-testid="contact-email">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-3">
                    <Mail className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">sales@hmsync.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3">
                    <Phone className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-location">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 p-3">
                    <MapPin className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">Global Healthcare Solutions HQ</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/50 dark:bg-black/20 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300 italic text-lg">
                  "HMSync has transformed how we manage our hospital. The customization options and 
                  real-time analytics have improved our efficiency by 40%."
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-4 font-semibold">
                  - Dr. Sarah Johnson, City General Hospital
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-10 bg-white dark:bg-gray-800 border-2" data-testid="card-contact-form">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">Your Name *</label>
                  <Input
                    {...form.register("name")}
                    placeholder="John Doe"
                    className="text-lg p-6 border-2 focus:border-blue-500"
                    data-testid="input-name"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-500 mt-2" data-testid="error-name">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">Email Address *</label>
                  <Input
                    {...form.register("email")}
                    type="email"
                    placeholder="john@hospital.com"
                    className="text-lg p-6 border-2 focus:border-blue-500"
                    data-testid="input-email"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-500 mt-2" data-testid="error-email">{form.formState.errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">Hospital Name *</label>
                  <Input
                    {...form.register("hospitalName")}
                    placeholder="City General Hospital"
                    className="text-lg p-6 border-2 focus:border-blue-500"
                    data-testid="input-hospital"
                  />
                  {form.formState.errors.hospitalName && (
                    <p className="text-sm text-red-500 mt-2" data-testid="error-hospital">{form.formState.errors.hospitalName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">Phone Number *</label>
                  <Input
                    {...form.register("phone")}
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="text-lg p-6 border-2 focus:border-blue-500"
                    data-testid="input-phone"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-sm text-red-500 mt-2" data-testid="error-phone">{form.formState.errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">Message *</label>
                  <Textarea
                    {...form.register("message")}
                    placeholder="Tell us about your hospital's needs..."
                    className="min-h-[150px] text-lg p-6 border-2 focus:border-blue-500 resize-none"
                    data-testid="input-message"
                  />
                  {form.formState.errors.message && (
                    <p className="text-sm text-red-500 mt-2" data-testid="error-message">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl"
                  data-testid="button-submit"
                >
                  Send Demo Request
                  <ArrowRight className="ml-2" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" data-testid="footer-brand">
              HMSync
            </h3>
            <p className="text-gray-400 text-lg" data-testid="footer-description">
              Advanced hospital management for the modern age
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <p data-testid="footer-email">sales@hmsync.com</p>
              <p data-testid="footer-phone">+1 (555) 123-4567</p>
              <p data-testid="footer-location">Global Healthcare Solutions</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a href="#features" className="block text-gray-400 hover:text-white transition-colors" data-testid="link-features">Features</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors" data-testid="link-contact">Contact</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors" data-testid="link-privacy">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p data-testid="footer-copyright">&copy; 2025 HMSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="relative">
      <ThemeToggle />
      <HeroSection />
      <HorizontalScrollFeatures />
      <ImmersiveSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

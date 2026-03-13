import { useEffect, useState } from 'react'
import { 
  Leaf, TrendingUp, Award, Zap, Recycle, 
  BarChart3, CheckCircle2, ArrowRight, Calculator,
  BookOpen, Users, Target, Sparkles, ChevronDown,
  Sprout, TreePine, Wind, Droplets, Sun
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [carbonFootprint, setCarbonFootprint] = useState({
    electricity: '',
    transport: '',
    waste: ''
  })
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Плавная прокрутка к секции
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const calculateCarbon = () => {
    const elec = parseFloat(carbonFootprint.electricity) || 0
    const trans = parseFloat(carbonFootprint.transport) || 0
    const waste = parseFloat(carbonFootprint.waste) || 0
    return (elec * 0.5 + trans * 2.3 + waste * 0.5).toFixed(2)
  }

  const pathStages = [
    {
      stage: 1,
      title: 'Оценка текущего состояния',
      duration: '1-2 мес',
      description: 'Проведите аудит экологического воздействия вашего бизнеса',
      tasks: ['Расчет углеродного следа', 'Анализ потребления ресурсов'],
      icon: BarChart3,
      color: 'bg-blue-500'
    },
    {
      stage: 2,
      title: 'Разработка стратегии',
      duration: '2-3 мес',
      description: 'Сформулируйте четкие цели по снижению экологического воздействия',
      tasks: ['Постановка целей', 'План мероприятий'],
      icon: Target,
      color: 'bg-green-500'
    },
    {
      stage: 3,
      title: 'Быстрые победы',
      duration: '3-6 мес',
      description: 'Начните с простых и эффективных мер',
      tasks: ['LED-освещение', 'Сортировка отходов'],
      icon: Zap,
      color: 'bg-yellow-500'
    },
    {
      stage: 4,
      title: 'Масштабные проекты',
      duration: '6-12 мес',
      description: 'Реализуйте крупные экологические инициативы',
      tasks: ['Энергоаудит', 'Внедрение ВИЭ'],
      icon: TrendingUp,
      color: 'bg-orange-500'
    },
    {
      stage: 5,
      title: 'Сертификация',
      duration: '1-3 года',
      description: 'Получите признание ваших экологических усилий',
      tasks: ['ISO 14001', 'ESG-рейтинг'],
      icon: Award,
      color: 'bg-emerald-600'
    }
  ]

  const quickWins = [
    { action: 'Переход на LED-освещение', cost: 'Низкая', effect: 'Экономия 30-50% энергии', roi: '150%' },
    { action: 'Сортировка отходов', cost: 'Минимальная', effect: 'Снижение ТКО на 40%', roi: '200%' },
    { action: 'Цифровизация документов', cost: 'Средняя', effect: 'Сокращение бумаги на 70%', roi: '120%' },
    { action: 'Энергоаудит', cost: 'Средняя', effect: 'Выявление потерь 10-20%', roi: '300%' }
  ]

  const esgLeaders = [
    { company: 'Норильский никель', rating: 'AAA', sector: 'Металлургия', investment: '180 млрд ₽', reduction: '-45% выбросов' },
    { company: 'ФосАгро', rating: 'AAA', sector: 'Химия', investment: '50 млрд ₽', reduction: '-30% энергии' },
    { company: 'Сбербанк', rating: 'AAA', sector: 'Банки', investment: '25 млрд ₽', reduction: 'Углеродная нейтральность' },
    { company: 'Северсталь', rating: 'AA', sector: 'Металлургия', investment: '97 млрд ₽', reduction: '-96 тыс. тонн' },
    { company: 'РУСАЛ', rating: 'AA', sector: 'Металлургия', investment: '100 млрд ₽', reduction: '-67% фтористого водорода' }
  ]

  const tips = [
    {
      category: 'Энергоэффективность',
      icon: Zap,
      tips: [
        'Установите датчики движения для освещения',
        'Используйте энергоэффективное оборудование класса А+++',
        'Настройте автоматическое отключение оборудования'
      ]
    },
    {
      category: 'Управление отходами',
      icon: Recycle,
      tips: [
        'Внедрите раздельный сбор мусора',
        'Найдите переработчиков для ваших отходов',
        'Сократите использование одноразовой упаковки'
      ]
    },
    {
      category: 'Вода и ресурсы',
      icon: Droplets,
      tips: [
        'Установите водосберегающие устройства',
        'Используйте системы сбора дождевой воды',
        'Внедрите замкнутые циклы водопользования'
      ]
    },
    {
      category: 'Транспорт',
      icon: Wind,
      tips: [
        'Поощряйте использование общественного транспорта',
        'Создайте инфраструктуру для велосипедистов',
        'Оптимизируйте маршруты доставки'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-eco">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'glass shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-[#2D5A3D]">EcoStartup</span>
            </button>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-700 hover:text-[#2D5A3D] transition-colors">О проекте</button>
              <button onClick={() => scrollToSection('path')} className="text-sm font-medium text-gray-700 hover:text-[#2D5A3D] transition-colors">Путь</button>
              <button onClick={() => scrollToSection('analysis')} className="text-sm font-medium text-gray-700 hover:text-[#2D5A3D] transition-colors">Анализ</button>
              <button onClick={() => scrollToSection('calculator')} className="text-sm font-medium text-gray-700 hover:text-[#2D5A3D] transition-colors">Калькулятор</button>
              <button onClick={() => scrollToSection('tips')} className="text-sm font-medium text-gray-700 hover:text-[#2D5A3D] transition-colors">Советы</button>
            </div>
            <Button 
              onClick={() => scrollToSection('path')}
              className="bg-gradient-primary hover:opacity-90 text-white"
            >
              Начать путь
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#4A7C59]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#7C9A6B]/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-[#2D5A3D]/10 text-[#2D5A3D] border-[#2D5A3D]/20">
            <Sparkles className="w-3 h-3 mr-1" />
            Проект для техникума
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2D5A3D] mb-6 leading-tight">
            От стартапа к<br />
            <span className="bg-gradient-to-r from-[#2D5A3D] to-[#4A7C59] bg-clip-text text-transparent">
              экологичному бизнесу
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Пошаговый путь развития вашего бизнеса с учетом экологических стандартов
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('path')}
              className="bg-gradient-primary hover:opacity-90 text-white text-lg px-8"
            >
              Начать свой путь
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('about')}
              className="border-[#2D5A3D] text-[#2D5A3D] hover:bg-[#2D5A3D]/10 text-lg px-8"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Узнать больше
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '54%', label: 'Снижение выбросов', icon: TreePine },
              { value: '2.1x', label: 'Быстрее рост', icon: TrendingUp },
              { value: '+12%', label: 'Маржинальность', icon: BarChart3 },
              { value: '180 млрд', label: 'Инвестиций', icon: Sprout }
            ].map((stat, i) => (
              <div key={i} className="glass rounded-2xl p-4 card-hover">
                <stat.icon className="w-8 h-8 text-[#4A7C59] mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-[#2D5A3D]">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover:opacity-70 transition-opacity"
        >
          <ChevronDown className="w-8 h-8 text-[#4A7C59]" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#4A7C59]/10 text-[#4A7C59]">О проекте</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-4">
              Почему экологический рейтинг важен?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Финансовая выгода',
                description: 'Компании с высоким ESG-рейтингом получают финансирование на 1,1 п.п. дешевле'
              },
              {
                icon: Users,
                title: 'Привлечение клиентов',
                description: '64% потребителей готовы платить больше за экологически устойчивые продукты'
              },
              {
                icon: Award,
                title: 'Конкурентное преимущество',
                description: 'Высокий экорейтинг открывает доступ к госзакупкам и крупным контрактам'
              }
            ].map((item, i) => (
              <Card key={i} className="card-hover border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D5A3D] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Path Section */}
      <section id="path" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#4A7C59]/10 text-[#4A7C59]">Путь развития</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-4">
              5 этапов к экологичному бизнесу
            </h2>
          </div>

          <div className="space-y-6">
            {pathStages.map((stage, i) => (
              <Card key={i} className="card-hover border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className={`${stage.color} p-6 md:p-8 flex items-center justify-center md:w-40`}>
                      <div className="text-center">
                        <stage.icon className="w-10 h-10 text-white mx-auto mb-2" />
                        <div className="text-white/80 text-sm">Этап {stage.stage}</div>
                        <div className="text-white font-bold text-sm">{stage.duration}</div>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex-1">
                      <h3 className="text-xl font-bold text-[#2D5A3D] mb-2">{stage.title}</h3>
                      <p className="text-gray-600 mb-4">{stage.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {stage.tasks.map((task, j) => (
                          <Badge key={j} variant="secondary" className="bg-gray-100 text-gray-700">
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                            {task}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section id="analysis" className="section-padding bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#4A7C59]/10 text-[#4A7C59]">Анализ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-4">
              Анализ российских компаний
            </h2>
          </div>

          <Tabs defaultValue="leaders" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="leaders">Лидеры ESG</TabsTrigger>
              <TabsTrigger value="wins">Быстрые победы</TabsTrigger>
            </TabsList>

            <TabsContent value="leaders">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-[#2D5A3D]">Топ-5 компаний по ESG-рейтингу</CardTitle>
                  <CardDescription>Данные RAEX на конец 2025 года</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Компания</TableHead>
                        <TableHead>Рейтинг</TableHead>
                        <TableHead>Отрасль</TableHead>
                        <TableHead>Инвестиции</TableHead>
                        <TableHead>Эффект</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {esgLeaders.map((leader, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium">{leader.company}</TableCell>
                          <TableCell>
                            <Badge className="bg-[#2D5A3D] text-white">{leader.rating}</Badge>
                          </TableCell>
                          <TableCell>{leader.sector}</TableCell>
                          <TableCell>{leader.investment}</TableCell>
                          <TableCell className="text-[#4A7C59]">{leader.reduction}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wins">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-[#2D5A3D]">Быстрые победы для стартапа</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Мероприятие</TableHead>
                        <TableHead>Стоимость</TableHead>
                        <TableHead>Эффект</TableHead>
                        <TableHead>ROI</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {quickWins.map((win, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium">{win.action}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className={`
                              ${win.cost === 'Низкая' ? 'border-green-500 text-green-600' : ''}
                              ${win.cost === 'Минимальная' ? 'border-emerald-500 text-emerald-600' : ''}
                              ${win.cost === 'Средняя' ? 'border-yellow-500 text-yellow-600' : ''}
                            `}>
                              {win.cost}
                            </Badge>
                          </TableCell>
                          <TableCell>{win.effect}</TableCell>
                          <TableCell className="text-[#4A7C59] font-bold">{win.roi}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#4A7C59]/10 text-[#4A7C59]">Калькулятор</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-4">
              Расчет углеродного следа
            </h2>
          </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <Label htmlFor="electricity" className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    Электроэнергия (кВт·ч/мес)
                  </Label>
                  <Input
                    id="electricity"
                    type="number"
                    placeholder="1000"
                    value={carbonFootprint.electricity}
                    onChange={(e) => setCarbonFootprint({...carbonFootprint, electricity: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="transport" className="flex items-center gap-2 mb-2">
                    <Wind className="w-4 h-4 text-blue-500" />
                    Транспорт (км/мес)
                  </Label>
                  <Input
                    id="transport"
                    type="number"
                    placeholder="500"
                    value={carbonFootprint.transport}
                    onChange={(e) => setCarbonFootprint({...carbonFootprint, transport: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="waste" className="flex items-center gap-2 mb-2">
                    <Recycle className="w-4 h-4 text-green-500" />
                    Отходы (кг/мес)
                  </Label>
                  <Input
                    id="waste"
                    type="number"
                    placeholder="100"
                    value={carbonFootprint.waste}
                    onChange={(e) => setCarbonFootprint({...carbonFootprint, waste: e.target.value})}
                  />
                </div>
              </div>

              <Button 
                onClick={() => setShowResult(true)}
                className="w-full bg-gradient-primary hover:opacity-90 text-white text-lg py-6"
              >
                <Calculator className="mr-2 w-5 h-5" />
                Рассчитать углеродный след
              </Button>

              {showResult && (
                <div className="mt-8 p-6 bg-gradient-to-r from-[#2D5A3D]/10 to-[#4A7C59]/10 rounded-xl animate-slide-up">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">Ваш углеродный след</div>
                    <div className="text-5xl font-bold text-[#2D5A3D] mb-4">
                      {calculateCarbon()} <span className="text-2xl">кг CO₂/мес</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700">
                      <TreePine className="w-3 h-3 mr-1" />
                      Нужно посадить {Math.round(parseFloat(calculateCarbon()) / 20)} деревьев
                    </Badge>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tips Section */}
      <section id="tips" className="section-padding bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#4A7C59]/10 text-[#4A7C59]">Советы</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-4">
              Экологические лайфхаки для бизнеса
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((category, i) => (
              <Card key={i} className="card-hover border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-[#2D5A3D]">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.tips.map((tip, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#4A7C59] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#4A7C59]/10 text-[#4A7C59]">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D]">
              Часто задаваемые вопросы
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Что такое ESG-рейтинг?',
                a: 'ESG-рейтинг — это оценка компании по экологическим (Environmental), социальным (Social) и управленческим (Governance) критериям.'
              },
              {
                q: 'Как быстро можно улучшить экорейтинг?',
                a: 'Простые меры дают эффект за 1-3 месяца. Для значительного улучшения рейтинга обычно требуется 1-2 года системной работы.'
              },
              {
                q: 'Дает ли экорейтинг налоговые льготы?',
                a: 'В России пока нет прямых налоговых льгот, но компании с хорошей экорепутацией имеют преимущества при участии в госзакупках.'
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-4 bg-white">
                <AccordionTrigger className="text-left font-medium text-[#2D5A3D]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Sun className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Готовы начать свой зеленый путь?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Начните с малого — каждое экологическое действие приближает вас к устойчивому бизнесу
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            onClick={() => scrollToSection('path')}
            className="text-[#2D5A3D] text-lg px-8"
          >
            <Sprout className="mr-2 w-5 h-5" />
            Начать сейчас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A3D2A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-xl">EcoStartup</span>
              </div>
              <p className="text-white/60 text-sm">
                Помогаем стартапам стать экологически ответственными
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О проекте</button></li>
                <li><button onClick={() => scrollToSection('path')} className="hover:text-white transition-colors">Путь развития</button></li>
                <li><button onClick={() => scrollToSection('calculator')} className="hover:text-white transition-colors">Калькулятор</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Проект</h4>
              <p className="text-white/60 text-sm">
                Индивидуальный проект<br />2025 год
              </p>
            </div>
          </div>
          <Separator className="bg-white/10 mb-8" />
          <div className="text-center text-white/40 text-sm">
            © 2025 EcoStartup Path
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ArticleCard from '@/components/ArticleCard';
import WikiEditor from '@/components/WikiEditor';
import ModerationPanel from '@/components/ModerationPanel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeView, setActiveView] = useState('home');

  const trendingArticles = [
    {
      title: 'Введение в квантовые вычисления',
      description: 'Полное руководство по основам квантовой физики и квантовых компьютеров для начинающих',
      author: 'Анна Кузнецова',
      category: 'Наука',
      tags: ['квантовая физика', 'технологии', 'будущее'],
      views: 1234,
      lastUpdated: '2 часа назад'
    },
    {
      title: 'История искусственного интеллекта',
      description: 'От первых нейронных сетей до современных LLM моделей - путь развития ИИ',
      author: 'Дмитрий Соколов',
      category: 'Технологии',
      tags: ['ИИ', 'машинное обучение', 'история'],
      views: 2156,
      lastUpdated: '5 часов назад'
    },
    {
      title: 'Основы веб-разработки 2024',
      description: 'Современный стек технологий для создания веб-приложений',
      author: 'Елена Волкова',
      category: 'Программирование',
      tags: ['веб', 'разработка', 'frontend'],
      views: 3421,
      lastUpdated: '1 день назад'
    },
    {
      title: 'Путеводитель по космическим исследованиям',
      description: 'Актуальная информация о миссиях NASA, SpaceX и других космических агентств',
      author: 'Михаил Петров',
      category: 'Космос',
      tags: ['космос', 'NASA', 'SpaceX'],
      views: 987,
      lastUpdated: '3 часа назад'
    },
    {
      title: 'Экология и устойчивое развитие',
      description: 'Как технологии помогают решать экологические проблемы планеты',
      author: 'Ольга Смирнова',
      category: 'Экология',
      tags: ['экология', 'устойчивость', 'климат'],
      views: 1543,
      lastUpdated: '6 часов назад'
    },
    {
      title: 'Блокчейн и криптовалюты: полное руководство',
      description: 'Разбираемся в технологии блокчейн и криптовалютах без сложных терминов',
      author: 'Сергей Новиков',
      category: 'Финансы',
      tags: ['блокчейн', 'криптовалюты', 'технологии'],
      views: 2890,
      lastUpdated: '4 часа назад'
    }
  ];

  const categories = [
    { name: 'Наука', count: 234, icon: 'Microscope' },
    { name: 'Технологии', count: 456, icon: 'Cpu' },
    { name: 'Программирование', count: 678, icon: 'Code' },
    { name: 'Космос', count: 123, icon: 'Rocket' },
    { name: 'Экология', count: 89, icon: 'Leaf' },
    { name: 'Финансы', count: 167, icon: 'DollarSign' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {activeView === 'home' && (
        <>
          <HeroSection />
          
          <div className="container py-12">
            <Tabs defaultValue="trending" className="w-full">
              <div className="flex items-center justify-between mb-6">
                <TabsList>
                  <TabsTrigger value="trending">
                    <Icon name="TrendingUp" className="mr-2 h-4 w-4" />
                    Популярное
                  </TabsTrigger>
                  <TabsTrigger value="recent">
                    <Icon name="Clock" className="mr-2 h-4 w-4" />
                    Недавнее
                  </TabsTrigger>
                  <TabsTrigger value="categories">
                    <Icon name="Folder" className="mr-2 h-4 w-4" />
                    Категории
                  </TabsTrigger>
                </TabsList>

                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setActiveView('editor')}>
                    <Icon name="PenSquare" className="mr-2 h-4 w-4" />
                    Редактор
                  </Button>
                  <Button variant="outline" onClick={() => setActiveView('moderation')}>
                    <Icon name="Shield" className="mr-2 h-4 w-4" />
                    Модерация
                  </Button>
                </div>
              </div>

              <TabsContent value="trending" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {trendingArticles.map((article, index) => (
                    <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                      <ArticleCard {...article} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recent" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[...trendingArticles].reverse().map((article, index) => (
                    <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                      <ArticleCard {...article} />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="categories" className="mt-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {categories.map((category, index) => (
                    <div
                      key={category.name}
                      className="p-6 border rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon name={category.icon as any} className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{category.name}</h3>
                            <p className="text-sm text-muted-foreground">{category.count} статей</p>
                          </div>
                        </div>
                        <Icon name="ArrowRight" className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </>
      )}

      {activeView === 'editor' && (
        <div className="container py-12">
          <Button variant="ghost" className="mb-6" onClick={() => setActiveView('home')}>
            <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Button>
          <WikiEditor />
        </div>
      )}

      {activeView === 'moderation' && (
        <div className="container py-12">
          <Button variant="ghost" className="mb-6" onClick={() => setActiveView('home')}>
            <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Button>
          <ModerationPanel />
        </div>
      )}
    </div>
  );
};

export default Index;
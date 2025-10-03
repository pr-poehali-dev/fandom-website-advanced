import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 animate-fade-in">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-slide-in">
            <Icon name="Sparkles" className="h-4 w-4" />
            Новая платформа для создания Wiki
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Создавайте знания
            <span className="block text-primary mt-2">вместе с сообществом</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Продвинутая wiki-платформа с инструментами модерации, редактором нового поколения и системой управления правами доступа
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full sm:w-96">
              <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Искать в базе знаний..."
                className="pl-12 h-12 text-base"
              />
            </div>
            <Button size="lg" className="h-12 px-8">
              <Icon name="PenSquare" className="mr-2 h-5 w-5" />
              Создать статью
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <Icon name="BookOpen" className="h-4 w-4" />
              <span>10,000+ статей</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" className="h-4 w-4" />
              <span>5,000+ авторов</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Globe" className="h-4 w-4" />
              <span>50+ категорий</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const WikiEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const formatOptions = [
    { icon: 'Bold', label: 'Жирный' },
    { icon: 'Italic', label: 'Курсив' },
    { icon: 'Underline', label: 'Подчеркнутый' },
    { icon: 'List', label: 'Список' },
    { icon: 'Link', label: 'Ссылка' },
    { icon: 'Image', label: 'Изображение' },
    { icon: 'Code', label: 'Код' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Редактор статей</h2>
          <p className="text-muted-foreground mt-1">Создайте новую статью или отредактируйте существующую</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Icon name="Save" className="mr-2 h-4 w-4" />
            Сохранить черновик
          </Button>
          <Button>
            <Icon name="Send" className="mr-2 h-4 w-4" />
            Опубликовать
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Основная информация</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Заголовок статьи</label>
            <Input
              placeholder="Введите заголовок..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-lg"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Категория</label>
            <Input
              placeholder="Выберите категорию..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Содержание</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="edit" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="edit">
                <Icon name="Edit" className="mr-2 h-4 w-4" />
                Редактирование
              </TabsTrigger>
              <TabsTrigger value="preview">
                <Icon name="Eye" className="mr-2 h-4 w-4" />
                Предпросмотр
              </TabsTrigger>
            </TabsList>

            <TabsContent value="edit" className="space-y-4">
              <div className="flex flex-wrap gap-2 p-2 bg-muted/50 rounded-lg">
                {formatOptions.map((option) => (
                  <Button
                    key={option.label}
                    variant="ghost"
                    size="sm"
                    className="h-8"
                  >
                    <Icon name={option.icon as any} className="h-4 w-4" />
                  </Button>
                ))}
              </div>

              <Textarea
                placeholder="Начните писать вашу статью..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[400px] font-mono text-sm"
              />
            </TabsContent>

            <TabsContent value="preview" className="min-h-[400px] p-6 bg-muted/20 rounded-lg">
              {content ? (
                <div className="prose prose-blue max-w-none">
                  <p className="whitespace-pre-wrap">{content}</p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px] text-muted-foreground">
                  <Icon name="FileText" className="h-16 w-16 mb-4 opacity-50" />
                  <p>Предпросмотр появится после начала редактирования</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Теги и метаданные</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Теги</label>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                wiki <Icon name="X" className="ml-1 h-3 w-3" />
              </Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                руководство <Icon name="X" className="ml-1 h-3 w-3" />
              </Badge>
            </div>
            <Input placeholder="Добавить тег..." />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WikiEditor;

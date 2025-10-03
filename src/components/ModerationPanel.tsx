import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const ModerationPanel = () => {
  const [autoModeration, setAutoModeration] = useState(true);

  const pendingArticles = [
    { id: 1, title: 'Новая статья о космосе', author: 'Иван Петров', status: 'pending', date: '2 часа назад' },
    { id: 2, title: 'История развития ИИ', author: 'Мария Сидорова', status: 'pending', date: '5 часов назад' },
    { id: 3, title: 'Основы квантовой физики', author: 'Алексей Иванов', status: 'pending', date: '1 день назад' },
  ];

  const users = [
    { id: 1, name: 'Иван Петров', role: 'Редактор', articles: 45, status: 'active' },
    { id: 2, name: 'Мария Сидорова', role: 'Автор', articles: 23, status: 'active' },
    { id: 3, name: 'Алексей Иванов', role: 'Модератор', articles: 89, status: 'active' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Панель модерации</h2>
          <p className="text-muted-foreground mt-1">Управление контентом и пользователями</p>
        </div>
        <Badge variant="secondary" className="text-sm">
          <Icon name="Shield" className="mr-2 h-4 w-4" />
          Права администратора
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">На модерации</CardTitle>
            <Icon name="Clock" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">+3 за последний час</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Активных пользователей</CardTitle>
            <Icon name="Users" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground mt-1">+89 за неделю</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Отчеты</CardTitle>
            <Icon name="AlertTriangle" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground mt-1">Требуют внимания</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Настройки модерации</CardTitle>
              <CardDescription>Управление автоматической модерацией контента</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Автомодерация</span>
              <Switch checked={autoModeration} onCheckedChange={setAutoModeration} />
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="articles" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="articles">
            <Icon name="FileText" className="mr-2 h-4 w-4" />
            Статьи
          </TabsTrigger>
          <TabsTrigger value="users">
            <Icon name="Users" className="mr-2 h-4 w-4" />
            Пользователи
          </TabsTrigger>
          <TabsTrigger value="reports">
            <Icon name="Flag" className="mr-2 h-4 w-4" />
            Жалобы
          </TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Статьи на модерации</CardTitle>
              <CardDescription>Ожидают одобрения или отклонения</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingArticles.map((article) => (
                <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-semibold">{article.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Автор: {article.author} • {article.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Eye" className="mr-2 h-4 w-4" />
                      Просмотр
                    </Button>
                    <Button variant="default" size="sm">
                      <Icon name="Check" className="mr-2 h-4 w-4" />
                      Одобрить
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Icon name="X" className="mr-2 h-4 w-4" />
                      Отклонить
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Управление пользователями</CardTitle>
              <CardDescription>Назначение ролей и управление доступом</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary">{user.name.substring(0, 2).toUpperCase()}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{user.name}</h4>
                      <p className="text-sm text-muted-foreground">{user.articles} статей</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Select defaultValue={user.role}>
                      <SelectTrigger className="w-[150px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Автор">Автор</SelectItem>
                        <SelectItem value="Редактор">Редактор</SelectItem>
                        <SelectItem value="Модератор">Модератор</SelectItem>
                        <SelectItem value="Администратор">Администратор</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Icon name="Settings" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Жалобы пользователей</CardTitle>
              <CardDescription>Обработка жалоб на контент и поведение</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Icon name="CheckCircle" className="h-16 w-16 text-muted-foreground/50 mb-4" />
                <p className="text-lg font-medium">Нет необработанных жалоб</p>
                <p className="text-sm text-muted-foreground mt-1">Все жалобы были рассмотрены</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ModerationPanel;

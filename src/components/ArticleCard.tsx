import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface ArticleCardProps {
  title: string;
  description: string;
  author: string;
  category: string;
  tags: string[];
  views: number;
  lastUpdated: string;
}

const ArticleCard = ({ title, description, author, category, tags, views, lastUpdated }: ArticleCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="outline" className="mb-2">
            <Icon name="Folder" className="mr-1 h-3 w-3" />
            {category}
          </Badge>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Icon name="Bookmark" className="h-4 w-4" />
          </Button>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2 mt-2">{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-7 w-7">
            <AvatarImage src="" alt={author} />
            <AvatarFallback className="text-xs">{author.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">{author}</p>
            <p className="text-muted-foreground text-xs">{lastUpdated}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Icon name="Eye" className="h-4 w-4" />
            <span>{views}</span>
          </div>
          <Button variant="ghost" size="sm" className="h-8">
            Читать
            <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;

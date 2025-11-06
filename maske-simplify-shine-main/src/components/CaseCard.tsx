import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CaseCardProps {
  company: string;
  challenge: string;
  solution: string;
  result: string;
  industry: string;
}

const CaseCard = ({ company, challenge, solution, result, industry }: CaseCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-elegant transition-smooth border-border bg-card">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-2xl">{company}</CardTitle>
          <Badge variant="secondary">{industry}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Desafio
          </h4>
          <CardDescription className="text-base">{challenge}</CardDescription>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Solução
          </h4>
          <CardDescription className="text-base">{solution}</CardDescription>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Resultado
          </h4>
          <CardDescription className="text-base font-medium text-foreground">
            {result}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseCard;

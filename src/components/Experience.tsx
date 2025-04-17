import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { jobs } from '@/data/experienceData';

const TimelineDot = () => (
  <div className="absolute left-0 w-3 h-3 bg-primary rounded-full mt-8 -ml-1.5 border border-white dark:border-gray-900" />
);

export default function ExperienceSection() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
          {jobs.map(({ company, rol, startTime, endTime, location, url, techs, description }) => (
            <div key={company.replace(' ', '-')} className="mb-8 ml-6">
              <TimelineDot />
              <Card className="mb-4">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {company} - {location}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {rol}
                      </p>
                    </div>
                    <Badge variant="secondary">{startTime} - {endTime}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold">
                    Technologies used
                  </CardTitle>
                  <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                    {techs.map((item: string, index: number) => (
                      <li key={`${company}-${index}`}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <CardContent>
                <CardTitle className="text-xl font-semibold">
                  Description
                </CardTitle>
                <ul className=" text-muted-foreground">
                  {description.map((item: string, index: number) => (
                    <li key={`${company}-${index}`} className="mb-2">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </div>
          ))}
          <Separator />
        </div>
      </div>
    </section>
  );
}


import Link from 'next/link';
import Image from 'next/image';
import JobListing from '@/components/custom/job-listing';
import { Button } from '@/components/ui/button';
import { Lightbulb, Users, TrendingUp, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const jobOpenings = [
  {
    title: 'Customer Support Specialist',
    location: 'Remote (India)',
    type: 'Full-time' as 'Full-time' | 'Part-time' | 'Contract' | 'Internship',
    description: 'Join our dynamic team to provide outstanding customer service for various clients. Excellent communication skills and a passion for helping others are a must.',
    applyLink: '/careers/customer-support-specialist',
  },
  {
    title: 'Call Center Team Lead',
    location: 'Bangalore, India (On-site)',
    type: 'Full-time' as 'Full-time' | 'Part-time' | 'Contract' | 'Internship',
    description: 'Lead and motivate a team of call center agents to achieve performance targets and ensure quality service delivery. Previous leadership experience required.',
    applyLink: '/careers/team-lead',
  },
  {
    title: 'AI Solutions Intern',
    location: 'Remote (India)',
    type: 'Internship' as 'Full-time' | 'Part-time' | 'Contract' | 'Internship',
    description: 'Exciting opportunity for students or recent graduates interested in AI and customer service technology. Work on real-world projects leveraging AI to improve customer engagement.',
    applyLink: '/careers/ai-intern',
  },
  {
    title: 'Business Development Manager',
    location: 'Remote (India)',
    type: 'Full-time' as 'Full-time' | 'Part-time' | 'Contract' | 'Internship',
    description: 'Drive growth by identifying new business opportunities and building strong client relationships in the BPO sector. Proven sales record essential.',
    applyLink: '/careers/bdm',
  },
];

export default function CareersPage() {
  return (
    <div className="py-12 md:py-20 bg-background">
      <div className="container">
        <section className="text-center mb-16 md:mb-24">
           {/* <Image 
            src="https://placehold.co/1200x400.png" 
            alt="Join Our Team at Xellara"
            width={1200}
            height={400}
            className="w-full h-auto object-cover rounded-xl mb-10 shadow-lg"
            data-ai-hint="diverse team working"
          /> */}
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">Join Our Team at Xellara</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Be part of a dynamic, innovative, and supportive team dedicated to shaping the future of customer engagement. We're looking for passionate individuals to help us grow.
          </p>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="font-headline text-3xl font-semibold text-center text-foreground mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-primary/20 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Innovate & Create</h3>
              <p className="text-sm text-muted-foreground">Contribute to cutting-edge solutions and make a real impact in the industry.</p>
            </div>
            <div className="text-center p-8 border border-primary/20 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Supportive Culture</h3>
              <p className="text-sm text-muted-foreground">Thrive in an inclusive environment that values collaboration and personal growth.</p>
            </div>
            <div className="text-center p-8 border border-primary/20 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Career Growth</h3>
              <p className="text-sm text-muted-foreground">We invest in our employees' development with opportunities for advancement.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-headline text-3xl font-semibold text-foreground mb-4">Current Openings</h2>
          <p className="text-muted-foreground mb-8">Find your next career opportunity at Xellara. We're always looking for talented individuals.</p>
          
          {/* Placeholder for search/filter bar */}
          <div className="mb-10 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Input type="text" placeholder="Search job titles or keywords" className="pl-10" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            {/* <Button variant="outline" className="sm:w-auto w-full">Filter</Button> This button is a placeholder for filter functionality */}
          </div>

          {jobOpenings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobOpenings.map((job) => (
                <JobListing key={job.title} {...job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No open positions at the moment. Please check back later!</p>
            </div>
          )}
        </section>

        <section className="mt-16 md:mt-24 text-center bg-accent text-accent-foreground p-8 md:p-12 rounded-xl">
          <h2 className="font-headline text-3xl font-semibold mb-4">Don't See a Fit?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always interested in hearing from talented individuals. If you believe you have skills that would benefit Xellara, send us your resume!
          </p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/80">
            <Link href="/contact?subject=General+Application">Submit General Application</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}

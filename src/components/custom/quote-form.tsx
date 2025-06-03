"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';


// Define server action function signature
async function submitQuoteFormAction(data: QuoteFormValues): Promise<{success: boolean, message: string}> {
  console.log("Quote form data submitted (client-side simulation):", data);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, message: "Your quote request has been submitted! We'll contact you shortly." };
}


const servicesItems = [
  { id: "voice-support", label: "Voice Support" },
  { id: "live-chat", label: "Live Chat Support" },
  { id: "email-handling", label: "Email Handling" },
  { id: "crm-ticketing", label: "Remote CRM & Ticketing Support" },
  { id: "internship-staffing", label: "Internship Staffing" },
  { id: "full-time-teams", label: "Full-Time Dedicated Teams" },
  { id: "consulting", label: "Consulting Services" },
] as const;


const quoteFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  phone: z.string().optional(),
  services: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one service.",
  }),
  projectDetails: z.string().min(20, { message: "Please provide at least 20 characters about your project." }).max(2000, {message: "Project details must not exceed 2000 characters."}),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export default function QuoteForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service');

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      services: preselectedService ? [preselectedService] : [],
      projectDetails: "",
    },
  });
  
  useEffect(() => {
    if (preselectedService) {
      form.setValue("services", [preselectedService]);
    }
  }, [preselectedService, form]);


  async function onSubmit(values: QuoteFormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitQuoteFormAction(values);
      if (result.success) {
        toast({
          title: "Quote Request Submitted!",
          description: result.message,
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: result.message || "There was a problem with your request.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="services"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Services Interested In</FormLabel>
                <FormDescription>
                  Select all services that apply to your needs.
                </FormDescription>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesItems.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="services"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...(field.value || []), item.id])
                                  : field.onChange(
                                      (field.value || []).filter(
                                        (value) => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Details / Requirements</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe your project, estimated volume, specific needs, or any questions you have."
                  className="min-h-[180px]"
                  {...field}
                />
              </FormControl>
               <FormDescription>
                Max 2000 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? "Submitting..." : "Request My Quote"}
        </Button>
      </form>
    </Form>
  );
}

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

async function submitPartnershipFormAction(data: PartnershipFormValues): Promise<{success: boolean, message: string}> {
  console.log("Partnership form data submitted (client-side simulation):", data);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true, message: "Your partnership inquiry has been submitted. We'll be in touch soon!" };
}

const partnershipFormSchema = z.object({
  companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  contactPerson: z.string().min(2, { message: "Contact person's name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  partnershipType: z.enum(["Referral Partner", "Technology Partner", "Reseller Partner", "Strategic Alliance", "Other"], {
    required_error: "You need to select a partnership type.",
  }),
  proposalDetails: z.string().min(20, { message: "Please provide at least 20 characters about your proposal." }).max(2000, {message: "Proposal details must not exceed 2000 characters."}),
});

export type PartnershipFormValues = z.infer<typeof partnershipFormSchema>;

export default function PartnershipForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<PartnershipFormValues>({
    resolver: zodResolver(partnershipFormSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      proposalDetails: "",
    },
  });

  async function onSubmit(values: PartnershipFormValues) {
    setIsSubmitting(true);
    try {
      const result = await submitPartnershipFormAction(values);
      if (result.success) {
        toast({
          title: "Inquiry Submitted!",
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
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Corp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactPerson"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name / Contact Person</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Smith" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="jane.smith@acme.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="partnershipType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Partnership</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a partnership type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Referral Partner">Referral Partner</SelectItem>
                  <SelectItem value="Technology Partner">Technology Partner</SelectItem>
                  <SelectItem value="Reseller Partner">Reseller Partner</SelectItem>
                  <SelectItem value="Strategic Alliance">Strategic Alliance</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="proposalDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Partnership Proposal Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Briefly describe your company and how you envision a partnership with Xellara..."
                  className="min-h-[150px]"
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
        <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground" disabled={isSubmitting}>
           {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
           {isSubmitting ? "Submitting..." : "Submit Partnership Inquiry"}
        </Button>
      </form>
    </Form>
  );
}

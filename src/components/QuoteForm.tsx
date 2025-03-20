import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, CheckCircle, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

// Définir le schéma de validation pour le formulaire
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères",
  }),
  company: z.string().optional(),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide",
  }),
  phone: z.string().min(10, {
    message: "Veuillez entrer un numéro de téléphone valide",
  }),
  serviceType: z.string({
    required_error: "Veuillez sélectionner un type de service",
  }),
  details: z.string().min(10, {
    message: "Veuillez fournir plus de détails sur votre projet",
  }).max(1000, {
    message: "Les détails ne doivent pas dépasser 1000 caractères",
  }),
  budget: z.string().optional(),
  deadline: z.date().optional(),
});

const serviceOptions = [
  { value: "site-vitrine", label: "Site vitrine" },
  { value: "e-commerce", label: "Site e-commerce" },
  { value: "application-web", label: "Application web" },
  { value: "application-mobile", label: "Application mobile" },
  { value: "refonte-site", label: "Refonte de site" },
  { value: "maintenance", label: "Maintenance" },
  { value: "seo", label: "Référencement (SEO)" },
  { value: "autre", label: "Autre" },
];

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialiser le formulaire avec useForm
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      details: "",
      budget: "",
    },
  });

  // Fonction pour gérer la soumission du formulaire
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simuler un délai d'envoi
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast("Demande envoyée avec succès", {
        description: "Nous vous contacterons dans les plus brefs délais.",
        action: {
          label: "Fermer",
          onClick: () => console.log("Toast fermé"),
        },
      });
    }, 1500);
  }

  if (isSubmitted) {
    return (
      <div className="w-full rounded-2xl p-8 flex flex-col items-center justify-center min-h-[500px] animate-fade-in glass-card">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-scale-up">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-center mb-4">Demande envoyée avec succès</h3>
        <p className="text-center text-gray-600 max-w-md mb-6">
          Merci pour votre demande de devis. Notre équipe va l'examiner et vous contactera dans les plus brefs délais.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
          className="mt-4 group relative overflow-hidden"
        >
          <span className="relative z-10">Nouvelle demande</span>
          <span className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-6 animate-fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="form-input-animation">
                <FormLabel>Nom complet</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Entrez votre nom complet" 
                    {...field} 
                    className="focus-within:border-primary transition-all duration-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="form-input-animation">
                <FormLabel>Entreprise <span className="text-muted-foreground">(optionnel)</span></FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Entrez le nom de votre entreprise" 
                    {...field} 
                    className="focus-within:border-primary transition-all duration-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="form-input-animation">
                <FormLabel>Adresse email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="exemple@email.com" 
                    {...field} 
                    className="focus-within:border-primary transition-all duration-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="form-input-animation">
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Entrez votre numéro de téléphone" 
                    {...field} 
                    className="focus-within:border-primary transition-all duration-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type de service</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="focus:ring-primary transition-all duration-300">
                    <SelectValue placeholder="Sélectionnez un type de service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {serviceOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem className="form-input-animation">
              <FormLabel>Détails du projet</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Décrivez vos besoins en détail..." 
                  className="resize-none min-h-[120px] focus-within:border-primary transition-all duration-300" 
                  {...field} 
                />
              </FormControl>
              <FormDescription>
                Incluez toutes les informations importantes pour nous aider à comprendre votre projet.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem className="form-input-animation">
                <FormLabel>Budget estimé <span className="text-muted-foreground">(optionnel)</span></FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Ex: 5000 €" 
                    {...field} 
                    className="focus-within:border-primary transition-all duration-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="deadline"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date limite <span className="text-muted-foreground">(optionnel)</span></FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                          "focus:ring-primary transition-all duration-300"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "d MMMM yyyy", { locale: fr })
                        ) : (
                          <span>Choisir une date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-6 text-base relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              <SendIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuoteForm;
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { IconSend2 } from "@tabler/icons-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

export const ContactPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const formSchema = z.object({
    name: z
      .string()
      .min(1, { error: t("Name is required") })
      .max(50, { error: t("Name exceeds 50 characters") }),
    email: z.email(),
    message: z.string().min(1, { error: t("Please leave your message") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, values, {
        publicKey: EMAIL_PUBLIC_KEY,
      });

      toast.info(t("Successfully sent! I will be reaching out shortly"));

      navigate({ to: "/" });
    } catch (error) {
      console.error(error);
      toast.error(
        t("Please try again later or try reaching with my social media")
      );
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl"> {t("Contact Me")} </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> {t("Name")} </FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel> {t("Email")} </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel> {t("Message")} </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t(
                      "Leave feedback about career opportunities, my works"
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            {t("Drop a message")}
            <IconSend2 />
          </Button>
        </form>
      </Form>
    </div>
  );
};

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-4xl flex flex-col px-6 sm:px-10">
        <main className="grow py-12">{children}</main>
      </div>
      <Footer />
    </>
  );
}

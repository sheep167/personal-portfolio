import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-3xl flex flex-col px-8">
        <main className="grow">{children}</main>
      </div>
      <Footer />
    </>
  );
}

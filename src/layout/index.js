import Header from 'components/header';
import Footer from 'components/footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto bg-slate-100 min-h-[calc(80vh-100px)] rounded p-5 my-4">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

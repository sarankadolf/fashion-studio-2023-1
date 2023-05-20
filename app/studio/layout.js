import Header from "@/components/header/header";


export default function StudioLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        <Header classes={undefined}/>
        <nav></nav>
   
        {children}
      </section>
    );
  }
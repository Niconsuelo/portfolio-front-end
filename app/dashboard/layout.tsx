export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav>soy un layout</nav>
   
        {children}
      </section>
    )
  }
  //layout es como componente, en el framework de next
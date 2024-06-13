export default function AdminLayout({ children }) {
    return (
      <html>
        <body>
          <aside></aside>
          <main>{children}</main>
        </body>
      </html>
    );
  }
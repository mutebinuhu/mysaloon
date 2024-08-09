import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

export default function AdminLayout({ children }) {
    return (
        <html>
            <body className="flex flex-col h-screen">
                <div className="sticky top-0 z-10">
                    <TopBar />
                </div>
                <div className="flex flex-grow">
                    <aside className="w-1/4 bg-gray-200">
                        <SideBar />
                    </aside>
                    <main className="flex-grow">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}

import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

export default function AdminLayout({ children }) {
    return (
        <html className="h-full bg-gray-100">
            <body className="h-full">
                <div className="min-h-full">
                    <TopBar />
                <header class="bg-white shadow">
                <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
                </header>
                    <main>
                        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {children}
                        </div>
                    </main>

                    </div>
            </body>
        </html>
    );
}

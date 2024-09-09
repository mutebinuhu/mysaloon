import SideBar from "./components/SideBar";
import TopAdminBar from "./components/TopAdminBar";
import TopBar from "./components/TopBar";

export default function AdminLayout({ children }) {
    return (
        <html className="h-full bg-gray-100">
            <body className="h-full">
                <div className="min-h-full">
                    <main>
                        <div class="">
                        {children}
                        </div>
                    </main>
                    </div>
            </body>
        </html>
    );
}

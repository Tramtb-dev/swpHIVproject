// src/pages/NotFoundPage.jsx
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-6">Không tìm thấy trang.</p>
            <Link
                to="/"
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Về trang chủ
            </Link>
        </div>
    );
}

import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Школа здоровья Влада Фадеева — Дарума Тайсо',description:'Движение, внимание и регулярная практика. Метод Дарума Тайсо, занятия и материалы Влада Фадеева.'};
export default function Layout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ru"><body>{children}</body></html>}

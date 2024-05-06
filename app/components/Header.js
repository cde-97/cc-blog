import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex item-center justify-between">
            <div>
                logo
            </div>
            <div className='flex items-center space-x-4 leading-5 sm:space-x-6'>
                {headerNavLinks.filter(link => link.href != '/').map(link => (
                    <Link
                        key={link.title}
                        href={link.href}
                        className='hidden font-medium text-gray-900 dark:text-gray-100 sm:block'
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
        </header>
    );
}
"use client";
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from "next/navigation";
import './SideHeader.css';

const SideHeader: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="side-header">
      <h2 onClick={() => router.push('/introduction')} className={pathname === '/introduction' ? 'current' : ''}>Introduction</h2>
      <div className="menu-section">
        <h3>Getting Started :</h3>
        <ul>
          <li 
            onClick={() => router.push('/chapters')} 
            className={pathname === '/chapters' ? 'current' : ''}
          >
            List of Chapters
          </li>
          <li 
            onClick={() => router.push('/get')} 
            className={pathname === '/get' ? 'current' : ''}
          >
            Get A Verse
          </li>
          <li 
            onClick={() => router.push('/reciters')} 
            className={pathname === '/reciters' ? 'current' : ''}
          >
            Available Reciters
          </li>
          <li 
            onClick={() => router.push('/recitation')} 
            className={pathname === '/recitation' ? 'current' : ''}
          >
            Audio Recitation
          </li>
        </ul>
      </div>
      <div className="menu-section">
        <h3>Resources</h3>
        <ul>
          <li 
            onClick={() => router.push('/about')} 
            className={pathname === '/about' ? 'current' : ''}
          >
            About
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideHeader;
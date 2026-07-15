import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // S'il y a une ancre dans l'URL (ex: #services), on défile jusqu'à cet élément
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      // Sinon, comportement par défaut : on remonte tout en haut
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
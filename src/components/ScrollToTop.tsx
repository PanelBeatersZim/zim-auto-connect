
import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const SCROLL_POS_KEY = "scroll-pos-cache-panelbeaters";

export function ScrollToTop() {
  const { pathname } = useLocation();
  const navType = useNavigationType();
  const lastPathRef = useRef("");

  useEffect(() => {
    // Restore scroll for browser back/forward
    if (navType === "POP") {
      const map = sessionStorage.getItem(SCROLL_POS_KEY);
      if (map) {
        try {
          const data = JSON.parse(map);
          if (data[pathname]) {
            window.scrollTo({ top: data[pathname], behavior: "auto" });
            return;
          }
        } catch {}
      }
    }
    // Default: scroll to top
    window.scrollTo({ top: 0 });
  }, [pathname, navType]);

  useEffect(() => {
    // Save previous page's scroll before navigating
    return () => {
      if (lastPathRef.current) {
        let data: Record<string, number> = {};
        const map = sessionStorage.getItem(SCROLL_POS_KEY);
        if (map) {
          try {
            data = JSON.parse(map);
          } catch {}
        }
        data[lastPathRef.current] = window.scrollY;
        sessionStorage.setItem(SCROLL_POS_KEY, JSON.stringify(data));
      }
      lastPathRef.current = pathname;
    };
  }, [pathname]);

  return null;
}

import {
  ELEMENTS_ON_ROW_DESKTOP,
  ELEMENTS_ON_ROW_MOBILE,
  ELEMENTS_ON_ROW_TABLET,
  ELEMENTS_ON_SCREEN_DESKTOP,
  ELEMENTS_ON_SCREEN_MOBILE,
  ELEMENTS_ON_SCREEN_TABLET,
  MOBILE_SCREEN,
  TABLET_SCREEN
} from 'constants';
import { useEffect, useState } from 'react';

interface ResizeState {
  width: number;
  isMobile: boolean;
  isTablet: boolean;
  elementsOnScreen: number;
  elementsOnRow: number;
}

export const useResize = (): ResizeState => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(
    window.innerWidth <= MOBILE_SCREEN
  );
  const [isTablet, setIsTablet] = useState<boolean>(
    window.innerWidth <= TABLET_SCREEN
  );

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      setIsTablet(newWidth <= TABLET_SCREEN);
      setIsMobile(newWidth <= MOBILE_SCREEN);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getElementsOnScreen = () => {
    if (isMobile) {
      return ELEMENTS_ON_SCREEN_MOBILE;
    } else if (isTablet) {
      return ELEMENTS_ON_SCREEN_TABLET;
    } else {
      return ELEMENTS_ON_SCREEN_DESKTOP;
    }
  };

  const getElementsOnRow = () => {
    if (isMobile) {
      return ELEMENTS_ON_ROW_MOBILE;
    } else if (isTablet) {
      return ELEMENTS_ON_ROW_TABLET;
    } else {
      return ELEMENTS_ON_ROW_DESKTOP;
    }
  };

  const elementsOnScreen = getElementsOnScreen();
  const elementsOnRow = getElementsOnRow();

  return { width, isMobile, isTablet, elementsOnScreen, elementsOnRow };
};

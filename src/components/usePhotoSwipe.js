import { useEffect, useState } from "react";
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from 'photoswipe/dist/photoswipe.esm.js';
import escape from 'lodash/escape';

import 'photoswipe/dist/photoswipe.css'

export const usePhotoSwipe = ({ dataSource }) => {
  const [lightbox] = useState(() => new PhotoSwipeLightbox({
    pswpModule: PhotoSwipe,
    dataSource,
    bgOpacity: 1.0,
  }));

  useEffect(() => {
    lightbox.on('uiRegister', function() {
      lightbox.pswp.ui.registerElement({
        name: 'custom-caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        html: 'Caption text',
        onInit: (el, pswp) => {
          lightbox.pswp.on('change', () => {
            el.innerHTML = lightbox.pswp.currSlide.data.captionHTML || '';
          });
        }
      });
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    }
  }, [lightbox]);

  return lightbox;
}
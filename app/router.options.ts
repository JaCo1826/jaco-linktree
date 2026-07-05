import type { RouterConfig } from '@nuxt/schema';

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (!from || !from.name) return { top: 0 };
    if (to.hash) return { el: to.hash, top: 80 };

    return { top: 0 };
  },
};

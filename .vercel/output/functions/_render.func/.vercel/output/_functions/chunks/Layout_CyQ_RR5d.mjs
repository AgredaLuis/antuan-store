import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as createAstro, a as renderComponent, f as renderHead, g as renderSlot } from './astro/server_BQUoTTc7.mjs';
/* empty css                          */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="items-center text-center 2xl:max-w-7xl lg:px-16 md:px-12 mx-auto px-8 w-xl xl:px-36"> <div class="flex flex-col gap-y-12 items-start justify-between lg:flex-row lg:items-center lg:py-16 pb-6 pt-16"> <div class="lg:text-center lg:mx-auto"> <div class="flex items-center text-negroni-500"> <div class="lg:text-center lg:mx-auto"> <p class="font-bold italic lg:mx-auto lg:text-4xl text-2xl">
Antuan Store.
</p> </div> </div> <nav class="flex justify-center gap-8"> <ul class="mt-12 flex gap-6 md:gap-8"> <li> <a href="https://wa.me/04248416642?text=Hola%2C%20estoy%20interesado%20en%20tus%20productos" rel="noreferrer" target="_blank" class="text-negroni-500 transition hover:text-negroni-500/75"> <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp icon</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg> </a> </li> <li> <a href="https://t.me/danadell?start=Hola%2C%20estoy%20interesado%20en%20tus%20productos" rel="noreferrer" target="_blank" class="text-negroni-500 transition hover:text-negroni-500/75"> <span class="sr-only">Telegram </span> <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg> </a> </li> </ul> </nav> </div> </div> </div> </footer>`;
}, "C:/Users/Agreda/Documents/Projects Code/antuan-store/src/components/global/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Agreda/Documents/Projects Code/antuan-store/node_modules/.pnpm/astro@4.14.5_rollup@4.21.0_typescript@5.5.4/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="bg-[#3E433E] antialiased" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/Agreda/Documents/Projects Code/antuan-store/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

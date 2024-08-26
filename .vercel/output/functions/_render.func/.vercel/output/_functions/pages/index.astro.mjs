/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, a as renderComponent, d as renderTransition } from '../chunks/astro/server_BQUoTTc7.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CLnyYu7l.mjs';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_CyQ_RR5d.mjs';
export { renderers } from '../renderers.mjs';

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="faq"> <div class="mx-auto px-8 max-w-4xl py-12 md:px-12"> <h2 class="text-negroni-500 font-bold md:text-6xl text-3xl tracking-tight text-center">
Preguntas Frecuentes
</h2> <div class="space-y-4 mt-8"> <details class="group [&_summary::-webkit-details-marker]:hidden" open> <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"> <h2 class="font-medium">
¿Cómo se realiza el pago y qué formas de pago se aceptan?
</h2> <svg class="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </summary> <p class="mt-4 px-4 leading-relaxed text-slate-50">
Actualmente aceptamos pagos a traves Binance , Pago movil ,
          Transferencia. Comunicate con nosotros para proporcionarte datos.
</p> </details> <details class="group [&_summary::-webkit-details-marker]:hidden"> <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"> <h2 class="font-medium">
¿Qué pasa si el producto no está disponible en stock?
</h2> <svg class="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </summary> <p class="mt-4 px-4 leading-relaxed text-slate-50">
Si el producto que deseas no está disponible en stock, te
          notificaremos y te ofreceremos alternativas o la posibilidad de
          preordenarlo.
</p> </details> <details class="group [&_summary::-webkit-details-marker]:hidden"> <summary class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"> <h2 class="font-medium">
¿Cómo se realizan las entregas y cuánto tiempo tardan?
</h2> <svg class="size-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </summary> <p class="mt-4 px-4 leading-relaxed text-slate-50">
Para los de zona Anzoategui, las entregas se hacen en persona. La hora
          y el dia de entrega se acuerda con luego de cancelar la compra.
</p> </details> </div> </div> </section>`;
}, "C:/Users/Agreda/Documents/Projects Code/antuan-store/src/components/landing/FAQ.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto px-8 max-w-7xl py-24 md:px-12"> <div class="mx-auto text-center"> <h1 class="text-negroni-500 font-bold md:text-6xl text-3xl tracking-tight">
Antuan Store<span class="md:block">Nuestros Productos</span> </h1> <p class="mt-8 text-white">
Se libre de comunicarte con nosotros para mas informacion
</p> <div class="flex justify-center flex-col gap-3 mt-10 sm:flex-row"> <a class="items-center h-12 justify-center font-semibold rounded-full border-negroni-500 duration-200 focus:outline-none inline-flex px-6 py-3 text-center w-full text-negroni-500 lg:w-auto border focus-visible:outline-negroni-500 text-negroni-500/80" href="https://wa.me/04248416642?text=Hola%2C%20estoy%20interesado%20en%20tus%20productos">Contactanos</a> <a class="items-center h-12 justify-center rounded-full font-semibold duration-200 focus:outline-none inline-flex px-6 py-3 text-center w-full border-2 hover:bg-transparent border-negroni-500 bg-negroni-500 focus-visible:outline-negroni-500 focus-visible:ring-negroni-500 hover:border-negroni-500 hover:text-negroni-500 lg:w-auto text-charcoal-500" href="#faq">Preguntas Frecuentes &nbsp; →</a> </div> </div> </div>`;
}, "C:/Users/Agreda/Documents/Projects Code/antuan-store/src/components/landing/Hero.astro", void 0);

const $$ProductsList = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://store.api.antuan01.com/api/products");
  const data = await response.json();
  return renderTemplate`${maybeRenderHead()}<section> <div class="mx-auto px-8 max-w-7xl py-12 md:px-12"> <div class="grid grid-cols-1 gap-6 lg:gap-y-32 md:grid-cols-3"> ${data.map((products) => renderTemplate`<a${addAttribute(`/${products.slug}`, "href")}> <figure${addAttribute(products.id, "id")} class="hover:cursor-pointer"> <div class="rounded-3xl overflow-hidden shadow-2xl"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full hover:scale-105 hover:contrast-125 duration-200", "src": products.image_url, "alt": products.slug, "width": "1310", "height": "873", "data-astro-transition-scope": renderTransition($$result, "wqvjwzfv", "", products.slug) })} </div> <div class="mt-4 flex justify-between px-6"> <div> <h3 class="font-medium text-negroni-500"> <span aria-hidden="true" class="inset-0"></span> ${products.name} </h3> <p class="mt-1 text-lg font-medium leading-6 text-white"> ${products.description} </p> </div> <p class="text-base text-tomato-500">$${products.price}</p> </div> </figure> </a>`)} </div> </div> </section>`;
}, "C:/Users/Agreda/Documents/Projects Code/antuan-store/src/components/landing/ProductsList.astro", "self");

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Antuan Store" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "ProductsList", $$ProductsList, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} </main> ` })}`;
}, "C:/Users/Agreda/Documents/Projects Code/antuan-store/src/pages/index.astro", void 0);

const $$file = "C:/Users/Agreda/Documents/Projects Code/antuan-store/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

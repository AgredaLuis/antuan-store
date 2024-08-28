/* empty css                                  */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as renderTransition, e as addAttribute } from '../chunks/astro/server_BQUoTTc7.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CLnyYu7l.mjs';
import { $ as $$Layout } from '../chunks/Layout_WLUtPtLt.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

async function fetchProductBySlug(slug) {
    const response = await fetch(`https://store.api.antuan01.com/api/products/${slug}`);
    const product = await response.json();
    return product;
  }

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const product = await fetchProductBySlug(slug);
  if (!product) {
    throw new Error(`Producto con el slug ${slug} no encontrado`);
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-ES").format(date);
  };
  const updatedAtFormatted = formatDate(product.updated_at);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Store - ${product.name}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex items-center"> <div class="mx-auto px-8 max-w-4xl py-12 md:px-12"> <article class="max-w-md overflow-hidden rounded-lg transition"> <figure> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full rounded-3xl shadow-2xl", "src": product.image_url, "alt": product.name, "width": "1310", "height": "873", "data-astro-transition-scope": renderTransition($$result2, "7ul4ve5c", "", product.slug) })} </figure> <div class="flex flex-col p-4 sm:p-6 tracking-wide"> <time${addAttribute(product.updated_at, "datetime")} class="block text-xs text-gray-500">
Actualizado el ${updatedAtFormatted} </time> <h3 class="mt-2 text-2xl font-semibold text-negroni-500"> ${product.name} </h3> <p class="mt-2 text-lg font-medium leading-6 text-white"> ${product.description} </p> <div class="flex justify-between text-white mt-2 text-lg"> <p>
Disponibles: <span class="text-tomato-500">${product.quantity}</span> </p> <p>Precio: <span class="text-tomato-500">$${product.price}</span></p> </div> <div class="flex flex-col mt-2 gap-2"> <span class="text-white text-lg">Métodos de Pago</span> <div class="flex gap-2"> <span class="items-center whitespace-nowrap rounded-full border-negroni-500 duration-200 focus:outline-none inline-flex px-2.5 py-0.5 text-sm border text-negroni-500 focus-visible:outline-negroni-500 text-negroni-500/80">
Binance
</span> <span class="items-center whitespace-nowrap rounded-full font-semibold duration-200 focus:outline-none text-center inline-flex px-2.5 py-0.5 text-sm border-2 border-negroni-500 bg-negroni-500 focus-visible:outline-negroni-500 focus-visible:ring-negroni-500 hover:border-negroni-500 lg:w-auto text-charcoal-500">
Pago Movil
</span> <span class="items-center whitespace-nowrap rounded-full border-negroni-500 duration-200 focus:outline-none inline-flex px-2.5 py-0.5 text-sm border text-negroni-500 focus-visible:outline-negroni-500 text-negroni-500/80">
Transferencia
</span> </div> </div> </div> </article> </div> </main> ` })}`;
}, "C:/Users/Agreda/Documents/Projects Code/antuan-store/src/pages/[slug].astro", "self");

const $$file = "C:/Users/Agreda/Documents/Projects Code/antuan-store/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "destr";
import "klona";
import "devalue";
import "vue3-smooth-scroll";
const _sfc_main = {
  props: {
    error: {
      type: Object,
      default: () => ({ statusCode: 404 })
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "error-page" }, _attrs))} data-v-7304a429>`);
  if ($props.error.statusCode === 404) {
    _push(`<h1 data-v-7304a429>404 - Страница не найдена</h1>`);
  } else {
    _push(`<h1 data-v-7304a429>Ошибка: ${ssrInterpolate($props.error.statusCode)}</h1>`);
  }
  if ($props.error.statusCode === 404) {
    _push(`<p data-v-7304a429>Извините, но страница, которую вы ищете, не существует.</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Вернуться на главную`);
      } else {
        return [
          createTextVNode("Вернуться на главную")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7304a429"]]);
export {
  error as default
};
//# sourceMappingURL=error-DBrKFqY6.js.map

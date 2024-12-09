<script lang="ts">
import { parseDocument } from 'htmlparser2'
import type { ChildNode } from 'domhandler/lib/node'

const tags = ['address', 'article', 'aside', 'footer', 'header', 'h1', 'h2', 'h3', 'h4',
  'h5', 'h6', 'hgroup', 'main', 'nav', 'section', 'blockquote', 'dd', 'div',
  'dl', 'dt', 'figcaption', 'figure', 'hr', 'li', 'main', 'ol', 'p', 'pre',
  'ul', 'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn',
  'em', 'i', 'kbd', 'mark', 'q', 'rb', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp',
  'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr', 'caption',
  'col', 'colgroup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr']

const attributes = ['abbr', 'accept', 'accept-charset', 'accesskey', 'action',
  'allow', 'alt', 'as', 'autocapitalize', 'autocomplete',
  'blocking', 'charset', 'cite', 'class', 'color', 'cols',
  'colspan', 'content', 'contenteditable', 'coords', 'crossorigin',
  'data', 'datetime', 'decoding', 'dir', 'dirname', 'download',
  'draggable', 'enctype', 'enterkeyhint', 'fetchpriority', 'for',
  'form', 'formaction', 'formenctype', 'formmethod', 'formtarget',
  'headers', 'height', 'hidden', 'high', 'href', 'hreflang',
  'http-equiv', 'id', 'imagesizes', 'imagesrcset', 'inputmode',
  'integrity', 'is', 'itemid', 'itemprop', 'itemref', 'itemtype',
  'kind', 'label', 'lang', 'list', 'loading', 'low', 'max',
  'maxlength', 'media', 'method', 'min', 'minlength', 'name',
  'nonce', 'optimum', 'pattern', 'ping', 'placeholder', 'popover',
  'popovertarget', 'popovertargetaction', 'poster', 'preload',
  'referrerpolicy', 'rel', 'rows', 'rowspan', 'sandbox', 'scope',
  'shape', 'size', 'sizes', 'slot', 'span', 'spellcheck', 'src',
  'srcdoc', 'srclang', 'srcset', 'start', 'step', 'style',
  'tabindex', 'target', 'title', 'translate', 'type', 'usemap',
  'value', 'width', 'wrap']

function getNodes(els: ChildNode[]): (VNode | null)[] {
  return els.map(getNode).filter(Boolean)
}

function getNode(el: ChildNode): VNode | null {
  if (el.type === 'text') {
    return el.data
  }

  if (!tags.includes(el.name)) {
    return null
  }

  const attrs = Object.fromEntries(
      Object
        .entries(el.attribs)
        .filter(([name]) => attributes.includes(name))
  )

  return h(el.name, attrs, getNodes(el.children))
}

export default {
  props: {
    data: String
  },
  setup(props) {
    const dom = parseDocument(props.data)
    return () => getNodes(dom.children)
  }
}
</script>

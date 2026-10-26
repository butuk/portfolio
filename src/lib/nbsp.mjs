// Non-breaking spaces for English running text, so short words never hang at the end of a line:
// after a, an, the, to, it, in and any one-letter word; after numbers; before "it"; before an em dash.
// Only ordinary spaces count as break points: \s would also match the non-breaking ones we insert.
const NB = ' ';
const SP = '[ \\t\\n]+';
const SHORT = new RegExp(`(^|[ \\t\\n\\u00a0("“])(a|an|the|to|it|in|[a-z])${SP}(?=\\S)`, 'gi');
const NUMBER = new RegExp(`(\\d[\\d.,]*[%+]?)${SP}(?=[A-Za-z])`, 'g');
const BEFORE_IT = new RegExp(`([^ \\t\\n])${SP}(it\\b)`, 'g');
const BEFORE_DASH = new RegExp(`${SP}—`, 'g');

export function nb(text) {
  if (typeof text !== 'string') return text;
  let out = text, prev;
  do { prev = out; out = out.replace(SHORT, `$1$2${NB}`); } while (out !== prev);
  return out
    .replace(NUMBER, `$1${NB}`)
    .replace(BEFORE_IT, `$1${NB}$2`)
    .replace(BEFORE_DASH, `${NB}—`);
}

// Remark plugin: applies nb() to every text node of a case's Markdown body.
export function remarkNbsp() {
  const walk = (node) => {
    if (node.type === 'text') node.value = nb(node.value);
    if (node.children) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}

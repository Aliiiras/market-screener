export function formatSubZeroCompact(value) {
  const str = value.toString();
  // just for numbers less than 0.1
  if (!str.includes('.') || value >= 0.1) return `$${value.toFixed(2)}`;

  const [, decimals = ''] = str.split('.');

  let zeroCount = 0;
  for (let char of decimals) {
    if (char === '0') zeroCount++;
    else break;
  }

  const firstNonZero = decimals[zeroCount] || '0';

  const subscriptMap = {
    '0': '₀',
    '1': '₁',
    '2': '₂',
    '3': '₃',
    '4': '₄',
    '5': '₅',
    '6': '₆',
    '7': '₇',
    '8': '₈',
    '9': '₉',
  };

  const sub = subscriptMap[zeroCount] || '';
  return `$0.0${sub}${firstNonZero}`;
}

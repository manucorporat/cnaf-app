

export interface Segment {
  min: number,
  max: number;
  text: string;
}

export function format(freq: number, addUnit = true, nuDecimals = 0): string {
  let result: number
  if (freq < 1000) {
    result = freq;
  } else if (freq < 1000000) {
    result = freq / 1000.0;
  } else {
    result = freq / 1000000.0;
  }
  return result.toFixed(nuDecimals) + (addUnit ? unit(freq) : '');
}

export function unit(freq: number): string {
  if (freq < 1000) {
    return 'KHz';
  } else if (freq < 1000000) {
    return 'MHz';
  } else {
    return 'GHz';
  }
}


export function searchDataPoints(data: any, factor: number, text: string) {
  const results = search(data, text);
  return generateDataPoint(results, factor);
}

export function search(data: any, text: string) {
  text = text.toLowerCase();
  return data
    .filter((d) => d.text.toLowerCase().includes(text));
}

function generateDataPoint(data: any[], factor: number) {
  const spacing = 4;
  const out = [];
  for (let r of data) {
    const min = Math.log10(r.min);
    const max = Math.log10(r.max);
    const size = (max - min) * factor;
    const x = (min * factor);
    const subSteps = size / spacing;
    for (var i = 0; i < subSteps; i++) {
      out.push([x + i * spacing, 1, 1]);
    }
  }
  return out;
}

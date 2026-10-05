export const imgs = (dir: string, prefix: string, n: number) => Array.from({ length: n }, (_, i) => `/images/${dir}/${prefix}-${String(i + 1).padStart(2, "0")}.jpg`);
export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

// lib/cdn-loader.ts
import {ImageLoaderProps} from "next/image";

export default function cdnLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
    const base = process.env.NEXT_PUBLIC_CDN_URL || '';
    return `${base}${src}?w=${width}&q=${quality || 75}`;
}
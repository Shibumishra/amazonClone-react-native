/// <reference types="react-scripts" />

declare module '*.css' {
  export default style as string
}

declare module '*.Image' {
  export default source as string
  
}

declare module '*.png' {
  export default source as string
}

declare module '*.png' {
  export default images as string

  const src: string;
  export default src;
}

declare namespace JSX {
  interface IntrinsicElements {
    'slot';
  }
}
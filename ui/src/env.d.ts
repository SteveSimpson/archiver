// Custom TypeScript declarations for static asset imports
// Allows importing images (svg, png, jpg, etc.) in TS/TSX files

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.gif' {
  const content: string
  export default content
}

declare module '*.webp' {
  const content: string
  export default content
}

declare module '*.bmp' {
  const content: string
  export default content
}

declare module '*.ico' {
  const content: string
  export default content
}

// If you use CSS modules, uncomment and adjust the next declaration
// declare module '*.module.css' {
//   const classes: { [key: string]: string }
//   export default classes
// }

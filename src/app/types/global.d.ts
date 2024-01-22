declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  import React from 'react'

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

type ObjectValues<T> = T[keyof T]

type OptionalKeys<T> = {
  [K in keyof T]: T extends Record<K, T[K]> ? never : K
}[keyof T]

declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.gif'

declare const __IS_DEV__: boolean
declare const __PROJECT__: 'frontend' | 'jest'

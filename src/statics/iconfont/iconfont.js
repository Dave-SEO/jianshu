import {createGlobalStyle} from 'styled-components'
export const GlobalStyle1 = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1589958396675'); /* IE9 */
  src: url('./iconfont.eot?t=1589958396675#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1589958396675') format('woff'),
  url('./iconfont.ttf?t=1589958396675') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1589958396675#iconfont') format('svg'); /* iOS 4.1- */
}
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-Aa:before {
    content: "\e636";
  }

  .icon-yanjing-copy:before {
    content: "\e600";
  }

  .icon-sousuo:before {
    content: "\e782";
  }
`
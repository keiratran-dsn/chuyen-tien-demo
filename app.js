/* Chuyển tiền — prototype 3 trạng thái người dùng */
(() => {
  'use strict';

  // ---------- Icons (xuất từ Figma) ----------
  const G = (id, a, b) => `<linearGradient id="${id}" x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" gradientUnits="userSpaceOnUse"><stop stop-color="#6788FF"/><stop offset="1" stop-color="#FD5CEA"/></linearGradient>`;
  const ICONS = {
    copy: `<svg viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.85383 3.40216C9.7947 3.30408 9.72606 3.21708 9.64966 3.14111C9.38016 2.87314 8.96589 2.69482 8.3938 2.69482H7.80884C7.646 2.69491 7.458 2.69507 7.25648 2.69525C7.02361 2.69545 6.77269 2.69567 6.52173 2.6958C5.7826 2.69617 5.04276 2.69592 4.76221 2.69583L4.64673 2.6958C4.08084 2.6993 3.67072 2.87862 3.40356 3.146C3.1364 3.41343 2.96518 3.81691 2.96509 4.35889V8.68018C2.96514 9.22529 3.13818 9.63008 3.40747 9.89795C3.484 9.97407 3.57218 10.043 3.67232 10.1026V10.6431C3.67232 10.8417 3.68945 11.031 3.72282 11.2097C3.33019 11.0889 2.9841 10.8871 2.70239 10.6069C2.2125 10.1196 1.96514 9.44282 1.96509 8.68018V4.35889C1.96519 3.59987 2.21071 2.92629 2.69653 2.43994C3.18247 1.95351 3.86219 1.7014 4.64185 1.69678H5.23267L5.78699 1.69635L6.52173 1.6958L7.25608 1.69525L7.80884 1.69482H8.3938C9.17937 1.69482 9.8647 1.94486 10.3547 2.43213C10.6494 2.72513 10.8563 3.08674 10.9744 3.49434C10.7416 3.43368 10.4878 3.40198 10.2151 3.40198L9.85383 3.40216Z" fill="url(#gc0)"/><path d="M11.2627 4.36157C12.071 4.36165 12.7745 4.61862 13.2773 5.11841C13.7803 5.61855 14.0352 6.3148 14.0352 7.09985V11.5667C14.0352 12.3481 13.782 13.0409 13.2832 13.5403C12.7844 14.0394 12.0866 14.2991 11.2842 14.304H9.33984C8.85573 14.3041 8.37167 14.3048 8.00879 14.3049H7.4043C6.59572 14.3049 5.89149 14.0482 5.38867 13.5481C4.88582 13.0479 4.63184 12.3516 4.63184 11.5667V7.09985C4.63184 6.31852 4.88405 5.62548 5.38281 5.12622C5.88144 4.62719 6.5796 4.36838 7.38184 4.36353H7.99316L9.32617 4.36255L10.6572 4.36157H11.2627ZM9.32617 5.36255C8.38449 5.36302 7.44174 5.36252 7.3877 5.36255C6.79901 5.36615 6.3708 5.55316 6.09082 5.83325C5.81079 6.11357 5.63184 6.53554 5.63184 7.09985V11.5667C5.63184 12.1341 5.8115 12.5584 6.09375 12.8391C6.37602 13.1199 6.80917 13.3049 7.4043 13.3049H8.00879L9.33984 13.304C10.2803 13.3036 11.2218 13.304 11.2783 13.304C11.8673 13.3004 12.296 13.1137 12.5762 12.8333C12.8563 12.5528 13.0352 12.1308 13.0352 11.5667V7.09985C13.0352 6.5325 12.8546 6.10915 12.5723 5.82837C12.2899 5.54761 11.8577 5.36165 11.2627 5.36157H10.6572L9.32617 5.36255Z" fill="url(#gc1)"/><defs>${G('gc0', [1.97, 6.26], [10.97, 6.26])}${G('gc1', [4.63, 9.13], [14.03, 9.13])}</defs></svg>`,
    album: `<svg viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.35092 2.45801C3.0225 1.73716 3.9792 1.33325 5.10976 1.33325H10.8911C12.0248 1.33325 12.9824 1.73686 13.6536 2.45825C14.321 3.17562 14.6679 4.16636 14.6664 5.27899V10.7215C14.6664 11.8339 14.319 12.8244 13.6513 13.5417C12.9798 14.263 12.0221 14.6666 10.8877 14.6666H5.10976C3.97682 14.6666 3.01988 14.2629 2.34871 13.5416C1.68132 12.8244 1.33374 11.834 1.33374 10.7215V5.27833C1.33374 4.16533 1.68299 3.17492 2.35092 2.45801ZM3.08427 3.14124C2.61792 3.6418 2.33605 4.37335 2.33605 5.27833V10.7215C2.33605 11.627 2.61691 12.3585 3.08246 12.8588C3.54424 13.355 4.22473 13.6643 5.10976 13.6643H10.8877C11.7747 13.6643 12.4558 13.3549 12.9177 12.8587C13.3834 12.3585 13.6641 11.6271 13.6641 10.7215V5.27833C13.6653 4.37298 13.3851 3.6411 12.9198 3.141C12.4582 2.64492 11.7773 2.33556 10.8911 2.33556H5.10976C4.22769 2.33556 3.54696 2.64462 3.08427 3.14124Z" fill="url(#ga0)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.14938 5.86705C7.14938 6.54862 6.59745 7.10055 5.91588 7.10055C5.23498 7.10055 4.68237 6.54862 4.68237 5.86705C4.68237 5.18548 5.23498 4.63354 5.91588 4.63354C6.59678 4.63421 7.14871 5.18615 7.14938 5.86705Z" stroke="url(#ga1)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.168 9.98714C13.5513 9.35235 12.3652 8.07007 11.0756 8.07007C9.78526 8.07007 9.04155 10.8986 7.8007 10.8986C6.55984 10.8986 5.43258 9.61963 4.43829 10.4395C3.44401 11.2587 2.50317 12.9339 2.50317 12.9339" stroke="url(#ga2)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><defs>${G('ga0', [1.33, 7.73], [14.67, 7.73])}${G('ga1', [4.68, 5.82], [7.15, 5.82])}${G('ga2', [2.5, 10.4], [14.17, 10.4])}</defs></svg>`,
    camera: `<svg viewBox="0 0 16 16" fill="none"><path d="M5.7876 2.29739C6.58017 1.98224 9.41896 1.98226 10.2114 2.29739C10.6437 2.46943 10.9355 2.79501 11.2036 3.28176L11.5054 3.85989L11.5239 3.89016L11.5503 3.92532C11.6877 4.07486 11.9172 4.16555 12.0688 4.16555C13.5035 4.16556 14.6665 5.32894 14.6665 6.76321V10.6265C14.6663 12.4558 13.1824 13.939 11.353 13.939H4.64697C2.81719 13.939 1.33373 12.456 1.3335 10.6265V6.76321C1.3335 5.32905 2.49663 4.16574 3.93115 4.16555C4.08234 4.16555 4.31311 4.07485 4.45068 3.92532L4.46143 3.91165L4.49561 3.85891L4.79639 3.28176C5.0642 2.79516 5.35539 2.46954 5.7876 2.29739ZM9.76221 3.19973C9.07575 3.00589 6.68968 3.01555 6.15771 3.22708C5.98913 3.29425 5.83872 3.46188 5.67236 3.76419L5.41553 4.26028L5.35205 4.37454C5.29936 4.46216 5.24719 4.53651 5.18701 4.60208C4.84937 4.96908 4.34932 5.16555 3.93115 5.16555L3.82178 5.16946C2.99051 5.22585 2.3335 5.91814 2.3335 6.76321V10.6265C2.33373 11.9037 3.36951 12.939 4.64697 12.939H11.353C12.6301 12.939 13.6663 11.9035 13.6665 10.6265V6.76321C13.6665 5.88128 12.9513 5.16556 12.0688 5.16555L11.9526 5.16067C11.5603 5.12836 11.1195 4.93509 10.813 4.6011C10.7537 4.53647 10.7012 4.46324 10.6489 4.37649L10.6216 4.32766L10.5435 4.18313L10.3276 3.76419C10.1612 3.46211 10.0108 3.29435 9.84229 3.22708L9.76221 3.19973Z" fill="url(#gm0)"/><path d="M11.6697 5.72778C12.0379 5.72778 12.3364 6.02626 12.3364 6.39445C12.3364 6.73634 12.079 7.01812 11.7475 7.05663L11.6697 7.06112C11.2955 7.06112 10.9971 6.76264 10.9971 6.39445C10.9971 6.05256 11.2544 5.77078 11.586 5.73227L11.6697 5.72778Z" fill="url(#gm1)"/><path d="M7.99976 6.19385C9.4465 6.19385 10.6188 7.36627 10.6189 8.81299C10.6189 10.2598 9.44656 11.4321 7.99976 11.4321C6.55304 11.432 5.38062 10.2597 5.38062 8.81299C5.38072 7.36633 6.5531 6.19395 7.99976 6.19385ZM7.99976 7.19385C7.10538 7.19395 6.38072 7.91862 6.38062 8.81299C6.38062 9.70745 7.10532 10.432 7.99976 10.4321C8.89428 10.4321 9.6189 9.70751 9.6189 8.81299C9.61879 7.91855 8.89422 7.19385 7.99976 7.19385Z" fill="url(#gm2)"/><defs>${G('gm0', [1.33, 7.76], [14.67, 7.76])}${G('gm1', [11, 6.37], [12.34, 6.37])}${G('gm2', [5.38, 8.71], [10.62, 8.71])}</defs></svg>`,
    arrow: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.22637 13.1821C5.02481 12.9805 5.02481 12.6537 5.22637 12.4522L9.67861 7.99992L5.22637 3.54767C5.02481 3.34611 5.02481 3.01932 5.22637 2.81776C5.42793 2.6162 5.75472 2.6162 5.95628 2.81776L10.7735 7.63496C10.975 7.83652 10.975 8.16332 10.7735 8.36488L5.95628 13.1821C5.75472 13.3836 5.42793 13.3836 5.22637 13.1821Z" fill="#222222"/></svg>`,
    back: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.9999C21 11.5481 20.6337 11.1818 20.1818 11.1818L3.81839 11.1818C3.36653 11.1818 3.00022 11.5481 3.00022 11.9999C3.00022 12.4518 3.36653 12.8181 3.81839 12.8181L20.1818 12.8181C20.6337 12.8181 21 12.4518 21 11.9999Z" fill="#222"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9976 19.1495C11.3165 18.8294 11.3154 18.3113 10.9952 17.9925L4.97751 11.9996L10.9952 6.00775C11.3154 5.68892 11.3165 5.17088 10.9977 4.85068C10.6789 4.53047 10.1608 4.52936 9.84062 4.84819L3.2407 11.4198C3.08651 11.5733 2.99983 11.7819 2.99982 11.9995C2.99981 12.2171 3.08648 12.4257 3.24066 12.5793L9.84058 19.1519C10.1608 19.4708 10.6788 19.4697 10.9976 19.1495Z" fill="#222"/></svg>`,
    scan: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.8947C2 12.5265 2.29848 12.228 2.66667 12.228H21.3333C21.7015 12.228 22 12.5265 22 12.8947C22 13.2629 21.7015 13.5614 21.3333 13.5614H2.66667C2.29848 13.5614 2 13.2629 2 12.8947Z" fill="#222"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.615 4.16666C14.615 3.79847 14.9135 3.5 15.2817 3.5H16.3528C18.5537 3.5 20.3377 5.28368 20.3377 7.48398V8.82886C20.3377 9.19704 20.0392 9.49552 19.671 9.49552C19.3028 9.49552 19.0043 9.19704 19.0043 8.82886V7.48398C19.0043 6.02029 17.8176 4.83333 16.3528 4.83333H15.2817C14.9135 4.83333 14.615 4.53485 14.615 4.16666Z" fill="#222"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.64724 4.83333C6.18243 4.83333 4.99569 6.02029 4.99569 7.48398V8.82886C4.99569 9.19704 4.69721 9.49552 4.32902 9.49552C3.96083 9.49552 3.66235 9.19704 3.66235 8.82886V7.48398C3.66235 5.28368 5.44628 3.5 7.64724 3.5H8.74591C9.1141 3.5 9.41258 3.79847 9.41258 4.16666C9.41258 4.53485 9.1141 4.83333 8.74591 4.83333H7.64724Z" fill="#222"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.671 12.2271C20.0392 12.2271 20.3377 12.5255 20.3377 12.8937V16.515C20.3377 18.7161 18.5538 20.4999 16.3528 20.4999H15.2817C14.9135 20.4999 14.615 20.2014 14.615 19.8332C14.615 19.465 14.9135 19.1666 15.2817 19.1666H16.3528C17.8175 19.1666 19.0043 17.9797 19.0043 16.515V12.8937C19.0043 12.5255 19.3028 12.2271 19.671 12.2271Z" fill="#222"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.32902 12.2271C4.69721 12.2271 4.99569 12.5255 4.99569 12.8937V16.515C4.99569 17.9797 6.18254 19.1666 7.64724 19.1666H8.74591C9.1141 19.1666 9.41258 19.465 9.41258 19.8332C9.41258 20.2014 9.1141 20.4999 8.74591 20.4999H7.64724C5.44616 20.4999 3.66235 18.7161 3.66235 16.515V12.8937C3.66235 12.5255 3.96083 12.2271 4.32902 12.2271Z" fill="#222"/></svg>`,
    status: `<svg width="375" height="44" viewBox="0 0 375 44" fill="none"><rect opacity="0.35" x="336.833" y="17.8333" width="21" height="10.3333" rx="2.16667" stroke="#222"/><path opacity="0.4" d="M359.333 21V25C360.138 24.6612 360.661 23.8731 360.661 23C360.661 22.1269 360.138 21.3388 359.333 21Z" fill="#222"/><rect x="338.333" y="19.3333" width="18" height="7.33333" rx="1.33333" fill="#222"/><path d="M321.448 25.7573C322.729 24.675 324.605 24.675 325.886 25.7573C325.95 25.8155 325.987 25.8981 325.989 25.9848C325.991 26.0714 325.956 26.1546 325.895 26.2153L323.89 28.2377C323.831 28.2971 323.751 28.3305 323.667 28.3305C323.583 28.3305 323.503 28.2971 323.444 28.2377L321.438 26.2153C321.377 26.1546 321.343 26.0712 321.345 25.9848C321.347 25.8981 321.384 25.8154 321.448 25.7573ZM318.772 23.06C321.532 20.4956 325.804 20.4957 328.563 23.06C328.626 23.1201 328.661 23.2029 328.662 23.2895C328.663 23.3758 328.629 23.4587 328.568 23.52L327.409 24.6908C327.29 24.8102 327.097 24.812 326.975 24.6957C326.069 23.876 324.889 23.4222 323.667 23.4223C322.446 23.4228 321.268 23.8767 320.362 24.6957C320.24 24.8121 320.046 24.8104 319.927 24.6908L318.769 23.52C318.707 23.4588 318.673 23.3759 318.674 23.2895C318.675 23.203 318.71 23.1201 318.772 23.06ZM316.097 20.3696C320.328 16.3175 327.004 16.3176 331.236 20.3696C331.298 20.4298 331.333 20.5122 331.333 20.5981C331.333 20.6838 331.3 20.7667 331.239 20.8276L330.079 21.9975C329.96 22.1176 329.765 22.1187 329.644 22.0004C328.031 20.469 325.892 19.6148 323.667 19.6147C321.442 19.6147 319.302 20.4688 317.689 22.0004C317.568 22.1188 317.374 22.1176 317.255 21.9975L316.094 20.8276C316.033 20.7667 316 20.6838 316 20.5981C316.001 20.5122 316.035 20.4297 316.097 20.3696Z" fill="#222"/><path d="M296 24.3335C296.552 24.3335 297 24.7812 297 25.3335V27.3335C297 27.8856 296.552 28.3335 296 28.3335H295C294.448 28.3335 294 27.8856 294 27.3335V25.3335C294 24.7812 294.448 24.3335 295 24.3335H296ZM300.667 22.3335C301.219 22.3337 301.667 22.7813 301.667 23.3335V27.3335C301.667 27.8855 301.219 28.3333 300.667 28.3335H299.667C299.115 28.3335 298.667 27.8856 298.667 27.3335V23.3335C298.667 22.7812 299.115 22.3335 299.667 22.3335H300.667ZM305.333 19.9995C305.885 19.9995 306.333 20.4474 306.333 20.9995V27.3335C306.333 27.8856 305.885 28.3335 305.333 28.3335H304.333C303.781 28.3333 303.333 27.8855 303.333 27.3335V20.9995C303.333 20.4475 303.781 19.9997 304.333 19.9995H305.333ZM310 17.6665C310.552 17.6665 311 18.1142 311 18.6665V27.3335C311 27.8856 310.552 28.3335 310 28.3335H309C308.448 28.3335 308 27.8856 308 27.3335V18.6665C308 18.1142 308.448 17.6665 309 17.6665H310Z" fill="#222"/><text x="48" y="28" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Inter, sans-serif" font-size="15" font-weight="600" fill="#222" letter-spacing="-0.3">9:41</text></svg>`,
    t1: `<svg viewBox="0 0 24 24" fill="none"><path d="M12.2 21C10.7575 21 9.43101 20.6523 8.22041 19.9568C7.0098 19.2614 6.01813 18.3341 5.24541 17.175V18.5455C5.24541 18.7773 5.17135 18.9716 5.02325 19.1284C4.87514 19.2852 4.69162 19.3636 4.47268 19.3636C4.25374 19.3636 4.07022 19.2852 3.92211 19.1284C3.774 18.9716 3.69995 18.7773 3.69995 18.5455V15.2727C3.69995 15.0409 3.774 14.8466 3.92211 14.6898C4.07022 14.533 4.25374 14.4545 4.47268 14.4545H7.56359C7.78253 14.4545 7.96605 14.533 8.11416 14.6898C8.26226 14.8466 8.33631 15.0409 8.33631 15.2727C8.33631 15.5045 8.26226 15.6989 8.11416 15.8557C7.96605 16.0125 7.78253 16.0909 7.56359 16.0909H6.42381C7.042 17.0727 7.85658 17.8636 8.86756 18.4636C9.87855 19.0636 10.9893 19.3636 12.2 19.3636C14.0159 19.3636 15.5774 18.7227 16.8846 17.4409C18.1918 16.1591 18.9356 14.5841 19.1159 12.7159C19.1416 12.4977 19.2318 12.3239 19.3863 12.1943C19.5409 12.0648 19.7212 12 19.9272 12C20.1462 12 20.3329 12.0716 20.4875 12.2148C20.642 12.358 20.7064 12.5318 20.6806 12.7364C20.5905 13.8955 20.3071 14.9761 19.8306 15.9784C19.3541 16.9807 18.7359 17.8534 17.9761 18.5966C17.2162 19.3398 16.3437 19.9261 15.3585 20.3557C14.3732 20.7852 13.3204 21 12.2 21ZM12.2 4.63636C10.384 4.63636 8.82249 5.27727 7.51529 6.55909C6.2081 7.84091 5.46435 9.41591 5.28404 11.2841C5.25828 11.5023 5.16813 11.6761 5.01359 11.8057C4.85904 11.9352 4.67874 12 4.47268 12C4.25374 12 4.067 11.9284 3.91245 11.7852C3.75791 11.642 3.69351 11.4682 3.71927 11.2636C3.80942 10.1045 4.09275 9.02386 4.56927 8.02159C5.04578 7.01932 5.66397 6.14659 6.42381 5.40341C7.18366 4.66023 8.0562 4.07386 9.04143 3.64432C10.0267 3.21477 11.0795 3 12.2 3C13.6424 3 14.9689 3.34773 16.1795 4.04318C17.3901 4.73864 18.3818 5.66591 19.1545 6.825V5.45455C19.1545 5.22273 19.2285 5.02841 19.3767 4.87159C19.5248 4.71477 19.7083 4.63636 19.9272 4.63636C20.1462 4.63636 20.3297 4.71477 20.4778 4.87159C20.6259 5.02841 20.7 5.22273 20.7 5.45455V8.72727C20.7 8.95909 20.6259 9.15341 20.4778 9.31023C20.3297 9.46705 20.1462 9.54545 19.9272 9.54545H16.8363C16.6174 9.54545 16.4339 9.46705 16.2857 9.31023C16.1376 9.15341 16.0636 8.95909 16.0636 8.72727C16.0636 8.49545 16.1376 8.30114 16.2857 8.14432C16.4339 7.9875 16.6174 7.90909 16.8363 7.90909H17.9761C17.3579 6.92727 16.5433 6.13636 15.5323 5.53636C14.5214 4.93636 13.4106 4.63636 12.2 4.63636Z" fill="white"/><path d="M14.4226 7.2373C14.5803 7.2373 14.7329 7.29738 14.8503 7.40527C14.9675 7.51314 15.0413 7.66181 15.0583 7.82227V13.127C15.0606 13.165 15.0645 13.203 15.0652 13.2412C15.0762 13.852 14.885 14.449 14.5232 14.9346C14.1009 15.5039 13.4753 15.8782 12.7839 15.9756C12.6641 15.991 12.5434 15.999 12.4226 15.999C11.8264 15.999 11.2481 15.7917 10.781 15.4121C10.3139 15.0325 9.98512 14.5029 9.84934 13.9082C9.71361 13.3134 9.77848 12.6882 10.0329 12.1357C10.2874 11.5835 10.7164 11.1351 11.2507 10.8643C11.7852 10.5934 12.3943 10.5165 12.9773 10.6445C13.265 10.7078 13.5383 10.8192 13.7868 10.9727V9.41895H12.7478C12.6353 9.41687 12.5278 9.37027 12.4489 9.28809C12.3701 9.20585 12.3259 9.09477 12.3259 8.97949C12.3259 8.86493 12.3709 8.75483 12.4499 8.67383C12.5289 8.59296 12.6361 8.54791 12.7478 8.54785H13.7868V7.82227C13.8039 7.66183 13.8777 7.51314 13.9948 7.40527C14.1122 7.29738 14.2649 7.23731 14.4226 7.2373ZM12.2497 11.9883C12.0827 12.0098 11.9211 12.0658 11.7761 12.1533C11.6313 12.2408 11.5052 12.3579 11.406 12.4971C11.3025 12.6347 11.2272 12.7928 11.1843 12.9609C11.1415 13.1289 11.1325 13.3038 11.157 13.4756C11.1815 13.6476 11.2397 13.8134 11.3279 13.9619C11.416 14.1103 11.532 14.2394 11.6697 14.3408C11.8021 14.4477 11.9548 14.5255 12.1179 14.5693C12.2811 14.6131 12.4522 14.6214 12.6189 14.5947C12.9373 14.5441 13.2253 14.372 13.4255 14.1133C13.6257 13.8544 13.7237 13.5275 13.6989 13.1982C13.6741 12.8691 13.5291 12.5613 13.2927 12.3369C13.0561 12.1124 12.745 11.9883 12.4226 11.9883H12.2497Z" fill="white"/></svg>`,
    t2: `<svg viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.25C3 4.00736 4.00736 3 5.25 3H7.5C7.99705 3 8.4 3.40295 8.4 3.9C8.4 4.39705 7.99705 4.8 7.5 4.8H5.25C5.00147 4.8 4.8 5.00147 4.8 5.25V7.5C4.8 7.99705 4.39705 8.4 3.9 8.4C3.40295 8.4 3 7.99705 3 7.5V5.25ZM21 5.25C21 4.00736 19.9926 3 18.75 3H16.5C16.0029 3 15.6 3.40295 15.6 3.9C15.6 4.39705 16.0029 4.8 16.5 4.8H18.75C18.9985 4.8 19.2 5.00147 19.2 5.25V7.5C19.2 7.99705 19.6029 8.4 20.1 8.4C20.5971 8.4 21 7.99705 21 7.5V5.25ZM5.25 21C4.00736 21 3 19.9926 3 18.75V16.5C3 16.0029 3.40295 15.6 3.9 15.6C4.39705 15.6 4.8 16.0029 4.8 16.5V18.75C4.8 18.9985 5.00147 19.2 5.25 19.2H7.5C7.99705 19.2 8.4 19.6029 8.4 20.1C8.4 20.5971 7.99705 21 7.5 21H5.25ZM21 18.75C21 19.9926 19.9926 21 18.75 21H16.5C16.0029 21 15.6 20.5971 15.6 20.1C15.6 19.6029 16.0029 19.2 16.5 19.2H18.75C18.9985 19.2 19.2 18.9985 19.2 18.75V16.5C19.2 16.0029 19.6029 15.6 20.1 15.6C20.5971 15.6 21 16.0029 21 16.5V18.75ZM3.9 11.1C3.40295 11.1 3 11.5029 3 12C3 12.4971 3.40295 12.9 3.9 12.9H20.1C20.5971 12.9 21 12.4971 21 12C21 11.5029 20.5971 11.1 20.1 11.1H3.9Z" fill="white"/></svg>`,
    t3: `<svg viewBox="0 0 24 24" fill="none"><path d="M18.1 7h.75a.75.75 0 0 0-.75-.75V7ZM6.1 7v-.75a.75.75 0 0 0-.75.75h.75Zm11.25 0v12h1.5V7h-1.5Zm-1.25 13.25h-8v1.5h8v-1.5ZM6.85 19V7h-1.5v12h1.5ZM6.1 7.75h12v-1.5h-12v1.5Zm0-4h12v-1.5h-12v1.5ZM2.85 7A3.25 3.25 0 0 1 6.1 3.75v-1.5A4.75 4.75 0 0 0 1.35 7h1.5Zm3.25 3.25A3.25 3.25 0 0 1 2.85 7h-1.5a4.75 4.75 0 0 0 4.75 4.75v-1.5ZM21.35 7a3.25 3.25 0 0 1-3.25 3.25v1.5A4.75 4.75 0 0 0 22.85 7h-1.5Zm1.5 0a4.75 4.75 0 0 0-4.75-4.75v1.5A3.25 3.25 0 0 1 21.35 7h1.5Zm-5.5 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 18.85 19h-1.5ZM8.1 20.25c-.69 0-1.25-.56-1.25-1.25h-1.5a2.75 2.75 0 0 0 2.75 2.75v-1.5Z" fill="#F4F4F4"/><path d="M13.57 13.12a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-4-1.06a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm1.78 4.53a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm1.78.47-1.29-1.3-1.06 1.07 1.29 1.29 1.06-1.06Zm-3.77-1.3-1.29 1.3 1.06 1.06 1.29-1.29-1.06-1.06Zm2.48 0a1.75 1.75 0 0 0-2.48 0l1.06 1.07c.1-.1.26-.1.36 0l1.06-1.07Zm-.49 5.83v-5h-1.5v5h1.5Z" fill="#F4F4F4"/></svg>`,
    t4: `<svg viewBox="0 0 24 24" fill="none"><path d="M11.9808 20.5C9.97067 20.5 8.19892 19.8865 6.66559 18.6595C5.13226 17.4327 4.14951 15.8628 3.71734 13.95C3.66351 13.7513 3.69592 13.5687 3.81459 13.402C3.93309 13.2353 4.10201 13.1385 4.32134 13.1115C4.52384 13.0847 4.70617 13.1251 4.86834 13.2327C5.03051 13.3404 5.14367 13.4987 5.20784 13.7078C5.58851 15.2526 6.40867 16.5208 7.66834 17.5125C8.92801 18.5042 10.3655 19 11.9808 19C13.9308 19 15.585 18.3208 16.9433 16.9625C18.3017 15.6042 18.9808 13.95 18.9808 12C18.9808 10.05 18.3017 8.39583 16.9433 7.0375C15.585 5.67917 13.9308 5 11.9808 5C10.8885 5 9.86484 5.24267 8.90984 5.728C7.95467 6.21317 7.13217 6.88075 6.44234 7.73075H8.30784C8.52067 7.73075 8.69884 7.80258 8.84234 7.94625C8.98601 8.08975 9.05784 8.26792 9.05784 8.48075C9.05784 8.69358 8.98601 8.87175 8.84234 9.01525C8.69884 9.15892 8.52067 9.23075 8.30784 9.23075H4.88484C4.62717 9.23075 4.41209 9.1445 4.23959 8.972C4.06709 8.79967 3.98084 8.58458 3.98084 8.32675V4.90375C3.98084 4.69092 4.05267 4.51275 4.19634 4.36925C4.33984 4.22558 4.51801 4.15375 4.73084 4.15375C4.94367 4.15375 5.12192 4.22558 5.26559 4.36925C5.40909 4.51275 5.48084 4.69092 5.48084 4.90375V6.523C6.29234 5.56533 7.26417 4.82208 8.39634 4.29325C9.52834 3.76442 10.7232 3.5 11.9808 3.5C13.1603 3.5 14.2655 3.72308 15.2963 4.16925C16.327 4.61542 17.2257 5.22183 17.9923 5.9885C18.759 6.75517 19.3654 7.65392 19.8116 8.68475C20.2578 9.71542 20.4808 10.8205 20.4808 12C20.4808 13.1795 20.2578 14.2846 19.8116 15.3152C19.3654 16.3461 18.759 17.2448 17.9923 18.0115C17.2257 18.7782 16.327 19.3846 15.2963 19.8307C14.2655 20.2769 13.1603 20.5 11.9808 20.5ZM12.7596 11.6962L15.5096 14.4462C15.6481 14.5846 15.7189 14.7586 15.7221 14.9683C15.7254 15.1779 15.6546 15.3552 15.5096 15.5C15.3648 15.6448 15.1892 15.7172 14.9828 15.7172C14.7763 15.7172 14.6007 15.6448 14.4558 15.5L11.5308 12.575C11.4373 12.4813 11.3688 12.3801 11.3251 12.2713C11.2816 12.1623 11.2598 12.0475 11.2598 11.927V7.75C11.2598 7.53717 11.3316 7.359 11.4751 7.2155C11.6188 7.07183 11.7969 7 12.0096 7C12.2224 7 12.4007 7.07183 12.5443 7.2155C12.6878 7.359 12.7596 7.53717 12.7596 7.75V11.6962Z" fill="white"/></svg>`,
    shift: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3.5 3 11.5h4.5V18h7v-6.5H19L11 3.5Z" stroke="#111" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
    shiftOn: `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3.5 3 11.5h4.5V18h7v-6.5H19L11 3.5Z" fill="#111" stroke="#111" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
    bksp: `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" stroke="#111" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M8 4h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-6-7 6-7Z"/><path d="m11 8 6 6M17 8l-6 6"/></svg>`,
    ret: `<svg width="22" height="18" viewBox="0 0 22 18" fill="none" stroke="#111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 3v6a2 2 0 0 1-2 2H4"/><path d="m8 7-4 4 4 4"/></svg>`,
    send: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M21.0816 9.92831L11.0949 4.93497C4.38661 1.57497 1.63327 4.32831 4.99327 11.0366L6.00827 13.0666C6.29994 13.6616 6.29994 14.35 6.00827 14.945L4.99327 16.9633C1.63327 23.6716 4.37494 26.425 11.0949 23.065L21.0816 18.0716C25.5616 15.8316 25.5616 12.1683 21.0816 9.92831ZM17.3133 14.875H11.0133C10.5349 14.875 10.1383 14.4783 10.1383 14C10.1383 13.5216 10.5349 13.125 11.0133 13.125H17.3133C17.7916 13.125 18.1883 13.5216 18.1883 14C18.1883 14.4783 17.7916 14.875 17.3133 14.875Z" fill="url(#gsend)"/><defs><linearGradient id="gsend" x1="14" y1="3.5" x2="14" y2="24.5" gradientUnits="userSpaceOnUse"><stop stop-color="#F1335C"/><stop offset="1" stop-color="#F899AD"/></linearGradient></defs></svg>`,
    reload: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.22066 10.1817C4.0172 10.3378 3.73325 10.3339 3.53412 10.1724L1.87161 8.82359C1.63389 8.63073 1.59753 8.28168 1.79039 8.04397C1.98325 7.80625 2.3323 7.76989 2.57002 7.96275L3.89295 9.03604L5.30442 7.95338C5.5473 7.76708 5.89523 7.81295 6.08154 8.05583C6.26785 8.29872 6.22198 8.64665 5.97909 8.83295L4.22066 10.1817Z" fill="#222"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.8322 9.38115C3.52846 9.34313 3.31306 9.06608 3.35108 8.76234C3.47666 7.75904 3.99058 6.37035 5.04944 5.22447C6.12325 4.06241 7.74639 3.16398 10.0366 3.16398C14.3837 3.16398 16.3551 6.68011 16.715 8.42716C16.7768 8.72697 16.5839 9.0201 16.284 9.08187C15.9842 9.14364 15.6911 8.95067 15.6293 8.65086C15.3316 7.20572 13.6669 4.2725 10.0366 4.2725C8.069 4.2725 6.73686 5.03175 5.86359 5.97678C4.97538 6.93799 4.55044 8.10577 4.45102 8.90002C4.413 9.20376 4.13594 9.41917 3.8322 9.38115Z" fill="#222"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7791 9.85221C15.9826 9.69615 16.2665 9.70002 16.4656 9.86157L18.1281 11.2104C18.3659 11.4032 18.4022 11.7523 18.2094 11.99C18.0165 12.2277 17.6675 12.2641 17.4297 12.0712L16.1068 10.9979L14.6953 12.0806C14.4525 12.2669 14.1045 12.221 13.9182 11.9781C13.7319 11.7352 13.7778 11.3873 14.0207 11.201L15.7791 9.85221Z" fill="#222"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.1678 10.6528C16.4715 10.6908 16.6869 10.9679 16.6489 11.2716C16.4006 13.2558 14.5103 16.8359 9.89034 16.8359C5.53912 16.8359 3.64382 13.3485 3.28495 11.6068C3.22318 11.307 3.41615 11.0138 3.71596 10.9521C4.01577 10.8903 4.3089 11.0833 4.37067 11.3831C4.66952 12.8335 6.26415 15.7274 9.89034 15.7274C13.786 15.7274 15.3473 12.7448 15.549 11.1339C15.587 10.8302 15.8641 10.6148 16.1678 10.6528Z" fill="#222"/></svg>`,
    edit: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#222" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"><path d="M8 14.08h5.48"/><path d="M9.89 2.3a1.15 1.15 0 0 1 1.58-.16l1.32 1.04c.52.32.68.98.37 1.5L6.03 13.8a.77.77 0 0 1-.56.28l-2.3.03-.52-2.22a.7.7 0 0 1 .13-.6L9.89 2.3Z"/><path d="m8.6 4.13 3.16 2.44"/></svg>`,
    close: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6.17"/><path d="M9.6 6.4 6.4 9.6M9.6 9.6 6.4 6.4"/></svg>`,
    search: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.07 3.06a5.81 5.81 0 1 0 0 11.62 5.81 5.81 0 0 0 0-11.62ZM1.87 8.87a7.2 7.2 0 1 1 14.4 0 7.2 7.2 0 0 1-14.4 0Z" fill="#222"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.29 13.49a.7.7 0 0 1 .99 0l3.65 3.65a.7.7 0 1 1-.99.99l-3.65-3.65a.7.7 0 0 1 0-.99Z" fill="#222"/></svg>`,
    closeLine: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.75 17.13 12 11.88l5.25 5.25"/><path d="M17.25 6.88 12 12.13 6.75 6.88"/></svg>`,
    sep: `<svg width="12" height="16" viewBox="0 0 12 16" fill="none"><g opacity=".5"><path d="M3 3.75 6 6.25 9 3.75" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round"/></g><g opacity=".5"><path d="M3 9.75 6 12.25 9 9.75" stroke="#7A7A7A" stroke-width="2" stroke-linecap="round"/></g></svg>`,
  };

  // ================= DỮ LIỆU =================
  const BANKS = {
    vtm: { name: 'Viettel Money', full: 'Ví điện tử Viettel Money', logo: 'assets/vtm.svg', alias: ['viettel', 'viettelpay', 'vtm', 'viettel money'] },
    mb: { name: 'MBBank', full: 'Ngân hàng TMCP Quân đội', logo: 'assets/mb.png', alias: ['mb', 'mbbank', 'quan doi'] },
    vietinbank: { name: 'VietinBank', full: 'Ngân hàng TMCP Công Thương Việt Nam', logo: 'assets/vietinbank.png', alias: ['vietin', 'vietinbank', 'ctg', 'cong thuong'] },
    sacombank: { name: 'Sacombank', full: 'Ngân hàng TMCP Sài Gòn Thương Tín', logo: 'assets/sacombank.png', alias: ['sacom', 'sacombank', 'stb'] },
    bidv: { name: 'BIDV', full: 'Ngân hàng TMCP Đầu tư và Phát triển Việt Nam', logo: 'assets/bidv.png', alias: ['bidv', 'dau tu'] },
    techcombank: { name: 'Techcombank', full: 'Ngân hàng TMCP Kỹ Thương Việt Nam', logo: 'assets/techcombank.png', alias: ['tcb', 'techcom', 'techcombank', 'ky thuong'] },
    vcb: { name: 'Vietcombank', full: 'Ngân hàng TMCP Ngoại Thương Việt Nam', logo: 'assets/vcb.png', alias: ['vcb', 'vietcom', 'vietcombank', 'ngoai thuong'] },
    vpbank: { name: 'VPBank', full: 'Ngân hàng TMCP Việt Nam Thịnh Vượng', logo: 'assets/vpbank.png', alias: ['vpb', 'vpbank', 'vp bank'] },
  };
  const PICKER = ['mb', 'vietinbank', 'sacombank', 'bidv', 'techcombank', 'vcb', 'vpbank'];
  const SOURCES = [
    { id: 'vtp', name: 'ViettelPay', desc: 'Số dư 5.000.000đ', balance: 5000000, logo: 'assets/vtm.svg' },
    { id: 'mbl', name: 'MB Bank ·· 6789', desc: 'Tài khoản liên kết · Số dư 25.000.000đ', balance: 25000000, logo: 'assets/mb.png' },
  ];
  // Lịch sử giao dịch (theo dãy số)
  const HISTORY = {
    '0912345678': [
      { name: 'NGUYEN VAN A', bank: 'vtm', acct: '0912345678', kind: 'phone' },
      { name: 'NGUYEN VAN A', bank: 'vpbank', acct: '0912345678', kind: 'acct' },
    ],
    '0071000312345': [
      { name: 'NGUYEN THI LINH', bank: 'vcb', acct: '0071000312345', kind: 'acct' },
      { name: 'NGUYEN THI LINH', bank: 'bidv', acct: '0071000312345', kind: 'acct' },
    ],
  };
  const BIN = { '970436': 'vcb', '970407': 'techcombank', '970418': 'bidv', '970422': 'mb', '970415': 'vietinbank', '970403': 'sacombank', '970432': 'vpbank' };
  const NOT_EXIST = { acct: '21510000123457', bank: 'bidv' };
  const SLOW_NO = '21510000123456';
  const FAKE_NAMES = ['LE THI HOA', 'TRAN THI MAI', 'PHAM VAN NAM', 'DO THU HA', 'HOANG MINH TUAN', 'VU THI LAN', 'NGO DUC ANH'];
  const SENDER = 'BAC';

  const CONTACTS = [
    { label: 'Mẹ', name: 'NGUYEN THI HUONG', desc: '0912 345 xxx · ViettelPay', bank: 'vtm', acct: '0912345111', kind: 'phone' },
    { label: 'TRAN VAN TUAN', name: 'TRAN VAN TUAN', desc: '0987 654 xxx · Tiền di động', bank: 'vtm', acct: '0987654222', kind: 'phone' },
    { label: 'Hằng cùng phòng', name: 'LE THU HANG', desc: '0905 111 xxx · ViettelPay', bank: 'vtm', acct: '0905111333', kind: 'phone' },
  ];
  const SAVED = [
    { label: 'CHU GIA LONG', name: 'CHU GIA LONG', bank: 'vtm', acct: '0936222444', kind: 'phone' },
    { label: 'VŨ THỊ HỒNG P…', name: 'VU THI HONG PHUONG', bank: 'vcb', acct: '0451000123456', kind: 'acct' },
    { label: 'TRAN LE HAI VY', name: 'TRAN LE HAI VY', bank: 'vtm', acct: '0977888999', kind: 'phone' },
    { label: 'MẦU VĂN ĐỨC', name: 'MAU VAN DUC', bank: 'bidv', acct: '21510000654321', kind: 'acct' },
    { label: 'TRAN THI K…', name: 'TRAN THI KIM', bank: 'mb', acct: '0868123456789', kind: 'acct' },
  ];
  const RECENT = [
    { name: 'NGUYEN THI LINH', bank: 'vcb', acct: '0071000312345', kind: 'acct', desc: 'Vietcombank · 0071 0003 xxxx', last: { amount: 500000, content: 'BAC chuyen tien an trua' } },
    { name: 'TRAN VAN TUAN', bank: 'vtm', acct: '0912345678', kind: 'phone', desc: 'ViettelPay · 0912 345 xxx', last: { amount: 200000, content: 'BAC chuyen tien' } },
  ];
  const TRIES = [
    ['0912 345 678', 'SĐT có trong lịch sử'],
    ['0987 654 321', 'SĐT chưa có giao dịch'],
    ['0071000312345', 'STK có trong lịch sử'],
    ['19036688202401', 'STK chưa có giao dịch'],
    ['9704 3661 2345 6789', 'Số thẻ khớp BIN'],
    ['21510000123457', 'Chọn BIDV → TK không tồn tại'],
    ['12345', 'Không ra kết quả'],
    ['21510000123456', 'Tra cứu quá lâu → gửi lại'],
  ];

  // ================= TIỆN ÍCH =================
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const CANCEL = Symbol('cancel');
  const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().trim();
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fmtMoney = n => Math.round(n).toLocaleString('vi-VN').replace(/,/g, '.') + 'đ';
  const fmtPhone = d => d.length === 10 ? `${d.slice(0, 4)} ${d.slice(4, 7)} ${d.slice(7)}` : d;
  const fmtPhoneDash = d => d.length === 10 ? `${d.slice(0, 4)}-${d.slice(4, 7)}-${d.slice(7)}` : d;
  const maskCard = d => `${d.slice(0, 4)} ${d.slice(4, 6)}** **** ${d.slice(-4)}`;
  const acctDisp = r => r.kind === 'card' ? maskCard(r.acct) : (r.bank === 'vtm' ? fmtPhoneDash(r.acct) : r.acct);
  const recDesc = r => `${BANKS[r.bank].name} · ${acctDisp(r)}`;
  const isPhone = d => /^(0[35789]\d{8}|84[35789]\d{8})$/.test(d);
  const normPhone = d => d.startsWith('84') && d.length === 11 ? '0' + d.slice(2) : d;
  const isCard = d => /^9704\d{12,15}$/.test(d);
  const fakeName = seed => { let h = 0; for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0; return FAKE_NAMES[h % FAKE_NAMES.length]; };
  const fmtTyped = raw => { const d = raw.replace(/[\s.\-]/g, ''); if (/^\d+$/.test(d)) { if (isCard(d)) return d.replace(/(\d{4})(?=\d)/g, '$1 '); if (isPhone(d)) return fmtPhone(normPhone(d)); } return raw.trim(); };

  const DIG = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
  function read3(n, full) {
    const h = Math.floor(n / 100), t = Math.floor(n % 100 / 10), u = n % 10, s = [];
    if (full || h) s.push(DIG[h] + ' trăm');
    if (t > 1) { s.push(DIG[t] + ' mươi'); if (u === 1) s.push('mốt'); else if (u === 4) s.push('tư'); else if (u === 5) s.push('lăm'); else if (u) s.push(DIG[u]); }
    else if (t === 1) { s.push('mười'); if (u === 5) s.push('lăm'); else if (u) s.push(DIG[u]); }
    else if (u) { if (full || h) s.push('lẻ'); s.push(DIG[u]); }
    return s.join(' ');
  }
  function vnWords(n) {
    const units = ['', 'nghìn', 'triệu', 'tỷ'], g = [];
    while (n > 0) { g.push(n % 1000); n = Math.floor(n / 1000); }
    const parts = [];
    for (let i = g.length - 1; i >= 0; i--) { if (!g[i]) continue; parts.push(read3(g[i], i < g.length - 1) + (units[i] ? ' ' + units[i] : '')); }
    const s = parts.join(' ');
    return s.charAt(0).toUpperCase() + s.slice(1) + ' đồng';
  }
  function parseAmount(raw) {
    const s = norm(raw).replace(/d$|dong$|vnd$/, '').trim();
    const m = s.match(/^([\d.,\s]+)\s*(k|nghin|ngan|tr|trieu|m|cu)?$/);
    if (!m) return null;
    const unit = m[2], num = m[1].replace(/\s/g, '');
    let v;
    if (unit) { v = parseFloat(num.replace(',', '.')); if (/^(k|nghin|ngan)$/.test(unit)) v *= 1e3; else v *= 1e6; }
    else v = parseInt(num.replace(/[.,]/g, ''), 10);
    return Number.isFinite(v) && v > 0 ? Math.round(v) : null;
  }

  // ================= DOM =================
  const screen = $('#screen');
  const tScroll = $('#tScroll');
  const tContent = $('#tContent');
  const dock = $('#tDock');
  const chipsEl = $('#chips');
  const chatbox = $('#chatbox');
  const input = $('#chatInput');
  const coach = $('#coach'), spot = $('#spot'), tip1 = $('#tip1'), tip2 = $('#tip2');
  const toastEl = $('#toast');
  const logo = (b, cls = 'bank') => `<img class="${cls}" src="${BANKS[b].logo}" alt="" draggable="false">`;

  let toastT;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove('show'), 2200); }

  // ================= TRẠNG THÁI HỘI THOẠI =================
  const PH = { idle: 'Nhập/dán thông tin chuyển tiền', askBank: 'Nhập tên ngân hàng', askAmount: 'Nhập số tiền', confirm: 'Nhập/dán thông tin chuyển tiền', busy: 'Nhập/dán thông tin chuyển tiền' };
  const st = { gen: 0, phase: 'idle', lookup: null, rec: null, src: SOURCES[0], amount: null, content: null, edit: null, slowUsed: false };
  function setPhase(p) { st.phase = p; if (!st.edit) input.placeholder = PH[p] || PH.idle; }
  const guard = () => { const g = st.gen; return async ms => { await sleep(ms); if (g !== st.gen) throw CANCEL; }; };
  const run = fn => fn().catch(e => { if (e !== CANCEL) console.error(e); });

  // ---------- render helpers ----------
  function scrollBottom(smooth = true) { const go = () => tScroll.scrollTo({ top: tScroll.scrollHeight, behavior: smooth ? 'smooth' : 'auto' }); requestAnimationFrame(go); setTimeout(go, 80); }
  function append(el) { tContent.appendChild(el); const go = () => el.classList.add('in'); requestAnimationFrame(() => requestAnimationFrame(go)); setTimeout(go, 60); scrollBottom(); return el; }
  function el(html) { const t = document.createElement('div'); t.innerHTML = html.trim(); return t.firstElementChild; }
  function addUser(text, { resend } = {}) {
    const n = el(`<div class="user anim">${resend ? `<button class="resend" aria-label="Gửi lại">${ICONS.reload}</button>` : ''}<div class="ububble">${esc(text)}</div></div>`);
    return append(n);
  }
  function addTyping() { return append(el('<div class="bot anim"><div class="glass bubble-box"><div class="typing"><i></i><i></i><i></i></div></div></div>')); }
  function toText(wrap, text) {
    const box = wrap.firstElementChild;
    const w0 = box.offsetWidth, h0 = box.offsetHeight;
    box.innerHTML = `<div class="bubble">${esc(text)}</div>`;
    box.style.width = 'auto'; box.style.height = 'auto';
    const w1 = box.offsetWidth, h1 = box.offsetHeight;
    box.style.width = w0 + 'px'; box.style.height = h0 + 'px'; box.firstElementChild.style.opacity = '0';
    box.offsetWidth;
    box.style.transition = 'width .36s cubic-bezier(.32,.72,0,1), height .36s cubic-bezier(.32,.72,0,1)';
    box.style.width = w1 + 'px'; box.style.height = h1 + 'px';
    box.firstElementChild.style.transition = 'opacity .3s ease .1s'; box.firstElementChild.style.opacity = '1';
    setTimeout(() => { box.style.width = ''; box.style.height = ''; box.style.transition = ''; scrollBottom(); }, 400);
  }
  async function botSay(text, delay = 650) { const w = guard(); const t = addTyping(); await w(delay); toText(t, text); await w(380); return t; }
  function hideBlocks() {
    for (const b of $$('.block:not(.leaving)', tContent)) {
      b.style.height = b.offsetHeight + 'px'; b.offsetHeight; b.classList.add('leaving'); b.style.height = '0px';
      setTimeout(() => b.remove(), 340);
    }
  }
  function addBlock(node) { hideBlocks(); node.classList.add('block', 'anim'); append(node); $$('.fade-row', node).forEach((r, i) => setTimeout(() => r.classList.add('in'), 140 + i * 50)); return node; }

  // ---------- block builders ----------
  const chev = ICONS.arrow;
  function recRow(r, extra = '') { return `<div class="row fade-row" ${extra}>${logo(r.bank)}<div class="row-text"><div class="row-name">${esc(r.name)}</div><div class="row-desc">${esc(r.listDesc || recDesc(r))}</div></div>${chev}</div>`; }
  function listBlock(results, withChoose) {
    const n = el(`<div class="bot"><div class="glass list">${results.map((r, i) => (i ? '<div class="divider fade-row"></div>' : '') + recRow({ ...r, listDesc: r.bank === 'vtm' ? `${fmtPhoneDash(r.acct)} · Viettel Money` : `${r.acct} · ${BANKS[r.bank].name}` }, `data-i="${i}"`)).join('')}
      ${withChoose ? `${results.length ? '<div class="divider fade-row"></div>' : ''}<div class="choose-row fade-row" data-choose>Chọn ngân hàng ${chev}</div>` : ''}</div></div>`);
    $$('.row[data-i]', n).forEach(row => row.addEventListener('click', () => { const r = results[+row.dataset.i]; pickRecipient(r, `${r.name} · ${BANKS[r.bank].name}`); }));
    const ch = $('[data-choose]', n); if (ch) ch.addEventListener('click', openBankSheet);
    return n;
  }
  function infoBlock() {
    const r = st.rec, s = st.src;
    const n = el(`<div class="bot"><div class="glass list">
      <div class="list-head fade-row"><h3>Thông tin chuyển tiền</h3></div>
      <div class="row fade-row" data-src><img class="bank" src="${s.logo}" alt=""><div class="row-text"><div class="row-name">${esc(s.name)}</div><div class="row-desc">${esc(s.desc)}</div></div>${chev}</div>
      <div class="sepline fade-row">${ICONS.sep}<i></i></div>
      <div class="row fade-row" data-rec>${logo(r.bank)}<div class="row-text"><div class="row-name">${esc(r.name)}</div><div class="row-desc">${esc(recDesc(r))}</div></div>${chev}</div>
    </div></div>`);
    $('[data-src]', n).addEventListener('click', openSrcSheet);
    $('[data-rec]', n).addEventListener('click', () => toast('Muốn đổi người nhận, bạn nhập lại SĐT / số tài khoản / số thẻ ở ô chat.'));
    return n;
  }
  function confirmBlock() {
    const r = st.rec, s = st.src;
    const n = el(`<div class="bot"><div class="glass list">
      <div class="cf-title fade-row">Bạn vui lòng xác nhận thông tin chuyển tiền.</div>
      <div class="cf-group fade-row"><div class="cf-label">Số tiền chuyển</div><div class="cf-amount">${fmtMoney(st.amount)}</div><div class="cf-label">${esc(vnWords(st.amount))} · Miễn phí giao dịch</div></div>
      <div class="divider fade-row"></div>
      <div class="row static-row fade-row"><img class="bank" src="${s.logo}" alt=""><div class="row-text"><div class="row-name">${esc(s.name)}</div><div class="row-desc">${esc(s.desc)}</div></div></div>
      <div class="sepline fade-row">${ICONS.sep}<i></i></div>
      <div class="row static-row fade-row">${logo(r.bank)}<div class="row-text"><div class="row-name">${esc(r.name)}</div><div class="row-desc">${esc(recDesc(r))}</div></div></div>
      <div class="divider fade-row"></div>
      <div class="cf-group fade-row"><div class="cf-label">Nội dung</div><div class="cf-value">${esc(st.content)}</div></div>
      <button class="cf-btn fade-row" data-go>Tiếp tục</button>
    </div></div>`);
    $('[data-go]', n).addEventListener('click', openConfirm);
    return n;
  }

  // ---------- chips ----------
  function setChips(mode) {
    chipsEl.innerHTML = ''; chipsEl.dataset.mode = mode;
    const defs = mode === 'edit'
      ? [['Sửa số tiền', null, () => startEdit('amount')], ['Sửa nội dung', null, () => startEdit('content')], ['Sửa nguồn tiền', null, openSrcSheet]]
      : [['Dán', 'copy', pasteClipboard], ['Tải ảnh', 'album', () => toast('Tải ảnh: luồng bóc tách ảnh chưa có trong bản demo này.')], ['Chụp ảnh', 'camera', () => toast('Chụp ảnh: luồng bóc tách ảnh chưa có trong bản demo này.')]];
    defs.forEach(([label, icon, fn], i) => {
      const b = el(`<button class="chip${icon ? '' : ' edit-chip'}">${icon ? `<span>${ICONS[icon]}</span>` : ''}${label}</button>`);
      b.addEventListener('click', fn); chipsEl.appendChild(b);
      setTimeout(() => b.classList.add('in'), 40 + i * 60);
    });
    updateInset();
  }
  async function pasteClipboard() {
    try { const t = await navigator.clipboard.readText(); if (t) { input.value = t; syncHasText(); input.focus(); return; } } catch (e) { /* ignore */ }
    toast('Không đọc được bộ nhớ tạm. Bạn gõ trực tiếp vào ô chat nhé.');
  }

  // ================= LUỒNG GÕ DÃY SỐ =================
  let composing = false, pendingSend = false, lastSent = { text: '', at: 0 };
  function send() {
    if (composing) { pendingSend = true; input.blur(); return; }
    const text = input.value.trim();
    if (!text || coachStep) return;
    lastSent = { text, at: Date.now() };
    clearInput();
    run(() => handle(text));
  }
  // Xoá ô nhập chắc chắn, kể cả khi bộ gõ tiếng Việt (Telex/VNI) còn giữ chữ đang gõ
  function clearInput() {
    input.value = ''; syncHasText();
    if (document.activeElement === input) { input.blur(); input.focus({ preventScroll: true }); }
  }
  async function handle(text) {
    if (st.edit) return handleEdit(text);
    const digits = text.replace(/[\s.\-]/g, '');
    const numeric = /^\d+$/.test(digits);
    const g0 = st.gen;
    while (st.phase === 'busy') { await sleep(120); if (g0 !== st.gen) return; }
    if (st.edit) return handleEdit(text);
    if (st.phase === 'askAmount') return handleAmount(text);
    if (st.phase === 'askBank' && !numeric) {
      const b = matchBank(text);
      addUser(text);
      if (b) return chooseBank(b, true);
      return botSay(`Không tìm thấy ngân hàng “${text}”. Bạn chọn trong danh sách ngân hàng giúp mình nhé.`);
    }
    if (numeric) return lookup(digits, text);
    addUser(text);
    await botSay('Bản demo này hỗ trợ luồng gõ dãy số. Bạn thử nhập số điện thoại, số tài khoản hoặc số thẻ nhé.');
  }
  function matchBank(text) {
    const q = norm(text).replace(/^ngan hang\s+/, '');
    return Object.keys(BANKS).find(k => k !== 'vtm' && (norm(BANKS[k].name) === q || BANKS[k].alias.some(a => q === a || q.includes(a))));
  }

  async function lookup(digits, raw, reuse) {
    const w = guard();
    if (chipsEl.dataset.mode === 'edit') setChips('input');
    const userEl = reuse || addUser(fmtTyped(raw));
    setPhase('busy');
    const t = addTyping();
    if (digits === SLOW_NO && !st.slowUsed) {
      st.slowUsed = true;
      await w(2600);
      toText(t, 'Việc tra cứu đang lâu hơn bình thường. Bạn nhập lại số tài khoản để thử lại nhé.');
      const btn = el(`<button class="resend" aria-label="Gửi lại">${ICONS.reload}</button>`);
      userEl.insertBefore(btn, userEl.firstChild);
      btn.addEventListener('click', () => { btn.remove(); run(() => lookup(digits, raw)); });
      setPhase('idle');
      return;
    }
    await w(850);
    if (digits.length < 6) {
      toText(t, `Không tìm thấy thông tin với dãy số ${digits}. Bạn kiểm tra lại và nhập số điện thoại, số tài khoản hoặc số thẻ nhé.`);
      hideBlocks(); setPhase('idle'); return;
    }
    if (isCard(digits)) {
      t.remove();
      return showInfo({ name: fakeName(digits), bank: BIN[digits.slice(0, 6)] || 'vcb', acct: digits, kind: 'card' });
    }
    const key = isPhone(digits) ? normPhone(digits) : digits;
    st.lookup = { digits: key, kind: isPhone(digits) ? 'phone' : 'acct' };
    const hist = HISTORY[key];
    if (hist) {
      toText(t, 'Bạn muốn chuyển tiền cho ai?'); await w(300);
      addBlock(listBlock(hist, true));
    } else {
      toText(t, 'Bạn muốn chuyển tiền đến ngân hàng nào?'); await w(300);
      addBlock(listBlock([], true));
    }
    setPhase('askBank');
  }

  async function chooseBank(bank, typed) {
    const w = guard();
    closeSheets();
    if (!typed) addUser(BANKS[bank].name);
    if (!st.lookup) return;
    setPhase('busy');
    const t = addTyping();
    await w(800);
    const d = st.lookup.digits;
    if (d === NOT_EXIST.acct && bank === NOT_EXIST.bank) {
      toText(t, `Số tài khoản ${d} tại ${BANKS[bank].name} không tồn tại hoặc đã đóng. Bạn kiểm tra và nhập lại số tài khoản nhé.`);
      hideBlocks(); setPhase('idle'); st.lookup = null; return;
    }
    t.remove();
    showInfo({ name: fakeName(d + bank), bank, acct: d, kind: 'acct' });
  }

  async function pickRecipient(r, bubble) {
    if (st.phase === 'busy' || coachStep) return;
    run(async () => { addUser(bubble); await showInfo(r); });
  }
  async function showInfo(rec) {
    const w = guard();
    st.rec = rec; st.amount = null; st.content = `${SENDER} chuyen tien`;
    setPhase('busy');
    addBlock(infoBlock());
    await w(250);
    await botSay('Bạn muốn chuyển bao nhiêu tiền?', 600);
    setPhase('askAmount');
    setChips('input');
  }

  function amountError(v) {
    if (!v) return 'Số tiền chưa hợp lệ. Bạn nhập lại, ví dụ 500000 hoặc 500k nhé.';
    if (v < 2000) return 'Số tiền tối thiểu mỗi giao dịch là 2.000đ. Bạn nhập lại nhé.';
    if (v > 100000000) return 'Số tiền tối đa mỗi giao dịch là 100.000.000đ. Bạn nhập lại nhé.';
    if (v > st.src.balance) return `Số dư ${st.src.name} không đủ (${fmtMoney(st.src.balance)}). Bạn nhập số tiền nhỏ hơn hoặc đổi nguồn tiền nhé.`;
    return null;
  }
  async function handleAmount(text) {
    const v = parseAmount(text);
    addUser(v ? fmtMoney(v) : text);
    const err = amountError(v);
    if (err) return botSay(err);
    st.amount = v;
    await showConfirmBlock();
  }
  async function showConfirmBlock() {
    const w = guard();
    setPhase('busy');
    const t = addTyping(); await w(650); t.remove();
    addBlock(confirmBlock());
    setPhase('confirm');
    setChips('edit');
  }

  // ---------- sửa thông tin ----------
  function startEdit(field) {
    if (st.phase !== 'confirm') return;
    st.edit = field;
    dock.classList.add('editing');
    $('#replyLabel').textContent = field === 'amount' ? 'Chỉnh sửa số tiền' : 'Chỉnh sửa nội dung';
    input.value = field === 'amount' ? fmtMoney(st.amount).replace('đ', '') : st.content;
    input.placeholder = field === 'amount' ? 'Nhập số tiền mới' : 'Nhập nội dung mới';
    syncHasText(); updateInset();
    input.focus();
    setTimeout(() => { try { input.select(); } catch (e) { /* noop */ } }, 0);
  }
  function cancelEdit() {
    st.edit = null; dock.classList.remove('editing'); input.value = ''; syncHasText(); setPhase(st.phase); updateInset();
  }
  async function handleEdit(text) {
    if (st.edit === 'amount') {
      const v = parseAmount(text); addUser(v ? fmtMoney(v) : text);
      const err = amountError(v);
      if (err) return botSay(err);
      st.amount = v;
    } else {
      addUser(text); st.content = text;
    }
    cancelEdit(); closeKb();
    await showConfirmBlock();
  }

  // ---------- bottom sheets ----------
  function renderBanks(q = '') {
    const list = $('#bankList');
    const nq = norm(q);
    const keys = PICKER.filter(k => !nq || norm(BANKS[k].name).includes(nq) || norm(BANKS[k].full).includes(nq) || BANKS[k].alias.some(a => a.includes(nq)));
    list.innerHTML = keys.length ? keys.map(k => `<button class="bs-row" data-bank="${k}"><span class="bs-logo"><img src="${BANKS[k].logo}" alt=""></span><span class="bs-text"><span class="bs-name">${BANKS[k].name}</span><span class="bs-full">${BANKS[k].full}</span></span>${ICONS.arrow}</button>`).join('')
      : '<div class="bs-empty">Không tìm thấy ngân hàng phù hợp</div>';
    $$('.bs-row', list).forEach(b => b.addEventListener('click', () => run(() => chooseBank(b.dataset.bank))));
  }
  function openSheet(id) { closeKb(); screen.classList.add('sheet-open'); const s = $(id); s.classList.add('open'); s.setAttribute('aria-hidden', 'false'); }
  function closeSheets() { screen.classList.remove('sheet-open'); $$('.bank-sheet, .src-sheet').forEach(s => { s.classList.remove('open'); s.setAttribute('aria-hidden', 'true'); }); }
  function openBankSheet() { if (st.phase !== 'askBank' || coachStep) return; $('#bankSearch').value = ''; renderBanks(); openSheet('#bankSheet'); }
  function openSrcSheet() {
    if (!['askAmount', 'confirm'].includes(st.phase)) return;
    const list = $('#srcList');
    list.innerHTML = SOURCES.map(s => `<button class="bs-row" data-src="${s.id}"><span class="bs-logo"><img src="${s.logo}" alt=""></span><span class="bs-text"><span class="bs-name">${s.name}</span><span class="bs-full">${s.desc}</span></span>${s.id === st.src.id ? '<span style="color:#EE0033;font-weight:700">✓</span>' : ICONS.arrow}</button>`).join('');
    $$('.bs-row', list).forEach(b => b.addEventListener('click', () => run(() => chooseSource(b.dataset.src))));
    openSheet('#srcSheet');
  }
  async function chooseSource(id) {
    closeSheets();
    const s = SOURCES.find(x => x.id === id);
    if (s.id === st.src.id) return;
    if (st.edit) cancelEdit();
    addUser(`Nguồn tiền: ${s.name}`);
    if (st.amount && st.amount > s.balance) return botSay(`Số dư ${s.name} không đủ để chuyển ${fmtMoney(st.amount)}. Bạn chọn nguồn khác hoặc sửa số tiền nhé.`);
    st.src = s;
    if (st.phase === 'confirm') return showConfirmBlock();
    setPhase('busy'); addBlock(infoBlock());
    await botSay('Bạn muốn chuyển bao nhiêu tiền?', 500); setPhase('askAmount');
  }

  // ---------- xác nhận (Gate 9) ----------
  function openConfirm() {
    if (st.phase !== 'confirm') return;
    closeKb(); if (st.edit) cancelEdit();
    const r = st.rec, s = st.src;
    const label = r.kind === 'card' ? 'Số thẻ nhận' : (r.bank === 'vtm' ? 'Số điện thoại nhận' : 'Số tài khoản nhận');
    $('#confirmBody').innerHTML = `
      <div class="cl-head"><span class="g">Xác nhận chuyển tiền</span><br>${fmtMoney(st.amount)}<br><span class="g">đến</span> ${esc(r.name)}</div>
      <div class="cl-sec"><h4>Từ tài khoản</h4><div class="cl-src"><span><img src="${s.logo}" alt="">${esc(s.name)}</span><span>${fmtMoney(s.balance)}</span></div></div>
      <div class="cl-sec"><h4>Chi tiết giao dịch</h4><div class="cl-rows">
        <div class="cl-row">Tài khoản nhận<b class="cl-acc"><img src="${BANKS[r.bank].logo}" alt="">${BANKS[r.bank].name}</b></div>
        <div class="cl-row">${label}<b>${esc(acctDisp(r))}</b></div>
        <div class="cl-row">Nội dung giao dịch<b>${esc(st.content)}</b></div>
      </div></div>`;
    $('#confirmTotal').innerHTML = fmtMoney(st.amount).replace('đ', '<small>đ</small>');
    const L = $('#confirmLayer'); L.classList.add('open'); L.setAttribute('aria-hidden', 'false');
  }
  function closeConfirm() { const L = $('#confirmLayer'); L.classList.remove('open'); L.setAttribute('aria-hidden', 'true'); }

  // ================= MÀN MỞ ĐẦU (3 CASE) =================
  let timers = [];
  const later = (fn, ms) => { const t = setTimeout(fn, ms); timers.push(t); return t; };
  const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };
  const nextFrame = fn => { let d = false; const go = () => { if (!d) { d = true; fn(); } }; requestAnimationFrame(() => requestAnimationFrame(go)); setTimeout(go, 60); };
  let currentCase = 'A', navOpen = false, coachStep = 0, skipCoach = false;

  function openingBlocks(caseId) {
    const linkAll = `<span class="link" data-all>Xem tất cả ${ICONS.arrow}</span>`;
    if (caseId === 'C') {
      const saved = el(`<div class="bot"><div class="glass list">
          <div class="list-head fade-row"><h3>Danh sách đã lưu</h3>${linkAll}</div>
          <div class="carousel">${SAVED.map((s, i) => `<div class="contact fade-row" data-i="${i}">${logo(s.bank, 'bank lg')}<span>${esc(s.label)}</span></div>`).join('')}</div></div></div>`);
      $$('.contact', saved).forEach(c => c.addEventListener('click', () => { const s = SAVED[+c.dataset.i]; pickRecipient(s, s.name); }));
      const recent = el(`<div class="bot"><div class="glass list">
          <div class="list-head fade-row"><h3>Gần đây</h3></div>
          ${RECENT.map((r, i) => (i ? '<div class="divider fade-row"></div>' : '') + `<div class="row fade-row" data-i="${i}">${logo(r.bank)}<div class="row-text"><div class="row-name">${esc(r.name)}</div><div class="row-desc">${esc(r.desc)}</div></div><span class="row-act">Chuyển lại</span></div>`).join('')}</div></div>`);
      $$('.row', recent).forEach(row => row.addEventListener('click', () => {
        if (st.phase === 'busy' || coachStep) return;
        const r = RECENT[+row.dataset.i];
        run(async () => { addUser(`Chuyển lại cho ${r.name}`); st.rec = r; st.amount = r.last.amount; st.content = r.last.content; await showConfirmBlock(); });
      }));
      return [saved, recent];
    }
    const sub = caseId === 'A' ? '<div class="list-sub fade-row">Những người này đang dùng Viettel Money</div>' : '';
    const card = el(`<div class="bot"><div class="glass list">
        <div class="list-head fade-row"><h3>Danh bạ của bạn</h3>${linkAll}</div>${sub}
        ${CONTACTS.map((c, i) => (i ? '<div class="divider fade-row"></div>' : '') + `<div class="row fade-row" data-i="${i}">${logo(c.bank)}<div class="row-text"><div class="row-name">${esc(c.label)}</div><div class="row-desc">${esc(c.desc)}</div></div>${ICONS.arrow}</div>`).join('')}
      </div></div>`);
    $$('.row', card).forEach(row => row.addEventListener('click', () => { const c = CONTACTS[+row.dataset.i]; pickRecipient(c, c.label); }));
    return [card];
  }

  function resetTransfer() {
    st.gen++; clearTimers();
    Object.assign(st, { phase: 'idle', lookup: null, rec: null, src: SOURCES[0], amount: null, content: null, edit: null, slowUsed: false });
    dock.classList.remove('editing');
    closeKb(true); closeSheets(); closeConfirm(); hideCoach(true);
    tContent.innerHTML = '';
    chipsEl.innerHTML = '';
    chatbox.classList.remove('in');
    input.value = ''; syncHasText(); setPhase('idle');
  }

  function runEntrance() {
    resetTransfer();
    const start = navOpen ? 380 : 0;
    later(() => setChips('input'), start + 80);
    later(() => chatbox.classList.add('in'), start + 260);
    later(() => {
      const wrap = addTyping();
      later(() => {
        toText(wrap, 'Bạn muốn chuyển tiền cho ai?');
        const blocks = openingBlocks(currentCase);
        blocks.forEach((b, i) => later(() => {
          b.classList.add('block', 'anim'); append(b);
          $$('.fade-row', b).forEach((r, ri) => later(() => r.classList.add('in'), 140 + ri * 55));
        }, 260 + i * 220));
        if (currentCase === 'A' && !skipCoach) later(showCoach, 260 + blocks.length * 220 + 900);
        skipCoach = false;
      }, 750);
    }, start + 120);
  }

  function openTransfer() {
    if (navOpen) return;
    navOpen = true;
    screen.classList.add('nav-open', 'hint-off');
    $('#transfer').setAttribute('aria-hidden', 'false');
    runEntrance();
  }
  function closeTransfer() {
    if (!navOpen) return;
    st.gen++; clearTimers(); closeKb(true); closeSheets(); closeConfirm(); hideCoach();
    navOpen = false;
    screen.classList.remove('nav-open');
    $('#transfer').setAttribute('aria-hidden', 'true');
    setTimeout(() => { if (!navOpen) resetTransfer(); }, 560);
  }

  // ---------- coach ----------
  function showCoach() { coachStep = 1; spot.classList.remove('step2'); coach.classList.add('on'); tip1.classList.add('show'); tip2.classList.remove('show'); }
  function coachNext() { coachStep = 2; tip1.classList.remove('show'); spot.classList.add('step2'); later(() => tip2.classList.add('show'), 380); }
  function hideCoach(instant) {
    coachStep = 0; tip1.classList.remove('show'); tip2.classList.remove('show'); coach.classList.remove('on');
    if (instant) spot.classList.remove('step2'); else setTimeout(() => { if (!coachStep) spot.classList.remove('step2'); }, 450);
  }

  // ================= BÀN PHÍM =================
  const DOCK_SHIFT = 278;
  let shiftOn = false, kbMode = 'abc';
  const kbOpen = () => screen.classList.contains('kb-open');
  function updateInset() {
    const base = kbOpen() ? 44 + DOCK_SHIFT : 44;
    tScroll.style.setProperty('--scroll-bottom', (base + dock.offsetHeight + 16) + 'px');
    screen.style.setProperty('--scroll-bottom', (base + dock.offsetHeight + 16) + 'px');
  }
  function openKb() {
    if (coachStep || !navOpen) { input.blur(); return; }
    if (kbOpen()) return;
    screen.classList.add('kb-open'); $('#kb').setAttribute('aria-hidden', 'false');
    dock.style.transform = `translateY(${-DOCK_SHIFT}px)`;
    updateInset(); setTimeout(() => scrollBottom(), 60); setTimeout(() => scrollBottom(), 400);
  }
  function closeKb(silent) {
    screen.classList.remove('kb-open'); $('#kb').setAttribute('aria-hidden', 'true');
    dock.style.transform = ''; updateInset();
    if (!silent || document.activeElement === input) input.blur();
  }
  function buildKeyboard() {
    const elx = $('#kbRows');
    const mk = (cls, label, key) => `<button class="key ${cls}" data-key="${esc(key)}" tabindex="-1">${label}</button>`;
    const row = keys => [...keys].map(k => mk('', shiftOn ? k.toUpperCase() : k, k)).join('');
    if (kbMode === 'abc') {
      elx.innerHTML = `<div class="kb-row">${row('qwertyuiop')}</div><div class="kb-row">${row('asdfghjkl')}</div>` +
        `<div class="kb-row">${mk('fn', shiftOn ? ICONS.shiftOn : ICONS.shift, 'shift')}<span style="width:8px"></span>${row('zxcvbnm')}<span style="width:8px"></span>${mk('fn', ICONS.bksp, 'back')}</div>` +
        `<div class="kb-row">${mk('fn n123', '123', 'n123')}${mk('space', 'dấu cách', ' ')}${mk('fn ret', ICONS.ret, 'ret')}</div>`;
    } else {
      elx.innerHTML = `<div class="kb-row">${row('1234567890')}</div><div class="kb-row">${row('-/:;()đ&@"')}</div>` +
        `<div class="kb-row">${mk('fn', '#+=', 'noop')}<span style="width:8px"></span>${row('.,?!\'')}<span style="width:8px"></span>${mk('fn', ICONS.bksp, 'back')}</div>` +
        `<div class="kb-row">${mk('fn n123', 'ABC', 'n123')}${mk('space', 'dấu cách', ' ')}${mk('fn ret', ICONS.ret, 'ret')}</div>`;
      $$('.kb-row:nth-child(2) .key, .kb-row:nth-child(3) .key:not(.fn)', elx).forEach(k => { k.style.flexBasis = '31.5px'; });
    }
  }
  function insertText(t) {
    const s = input.selectionStart ?? input.value.length, e = input.selectionEnd ?? input.value.length;
    input.value = input.value.slice(0, s) + t + input.value.slice(e);
    input.setSelectionRange(s + t.length, s + t.length); syncHasText();
  }
  function onKey(key) {
    if (key === 'noop') return;
    if (key === 'shift') { shiftOn = !shiftOn; buildKeyboard(); return; }
    if (key === 'n123') { kbMode = kbMode === 'abc' ? '123' : 'abc'; buildKeyboard(); return; }
    if (key === 'back') {
      const s = input.selectionStart, e = input.selectionEnd;
      if (s !== e) { input.value = input.value.slice(0, s) + input.value.slice(e); input.setSelectionRange(s, s); }
      else if (s > 0) { input.value = input.value.slice(0, s - 1) + input.value.slice(s); input.setSelectionRange(s - 1, s - 1); }
      syncHasText(); return;
    }
    if (key === 'ret') { if (input.value.trim()) send(); else closeKb(); return; }
    insertText(shiftOn ? key.toUpperCase() : key);
    if (shiftOn) { shiftOn = false; buildKeyboard(); }
  }
  function syncHasText() { chatbox.classList.toggle('has-text', !!input.value.trim()); }

  // ================= THỬ NHANH =================
  function renderTries() {
    const html = TRIES.map(([n, d]) => `<button class="try" data-n="${n}"><code>${n}</code><span>${d}</span></button>`).join('');
    ['#triesList', '#triesListM'].forEach(id => { const x = $(id); if (x) x.innerHTML = html; });
    $$('.try').forEach(b => b.addEventListener('click', () => tryNumber(b.dataset.n)));
  }
  async function tryNumber(n) {
    $('#mSheet').classList.remove('open');
    if (!navOpen) { skipCoach = true; openTransfer(); await sleep(2100); }
    if (coachStep) hideCoach();
    if (st.edit) cancelEdit();
    closeSheets(); closeConfirm();
    if (st.phase === 'busy') { await sleep(1200); }
    input.focus();
    input.value = ''; syncHasText();
    for (const ch of n) { insertText(ch); await sleep(28); }
    await sleep(220);
    send();
  }

  // ================= FIT =================
  function fit() {
    const wrap = $('#deviceWrap'), dev = $('#device');
    const mobile = window.innerWidth <= 760;
    const W = mobile ? 375 : 399, H = mobile ? 812 : 836;
    const s = mobile ? Math.min(window.innerWidth / W, window.innerHeight / H) : Math.min(1, (window.innerHeight - 48) / H, (window.innerWidth - 48) / W);
    dev.style.transformOrigin = '0 0'; dev.style.transform = `scale(${s})`;
    wrap.style.width = W * s + 'px'; wrap.style.height = H * s + 'px';
  }

  function setCase(c, rerun = true) {
    currentCase = c;
    $$('.case').forEach(b => { const on = b.dataset.case === c; b.classList.toggle('is-on', on); b.setAttribute('aria-checked', on); });
    $('#mCaseLabel').textContent = c;
    history.replaceState(null, '', '#' + c);
    if (navOpen && rerun) runEntrance();
  }

  // ================= INIT =================
  function init() {
    $$('[data-icon]').forEach(x => { x.innerHTML = ICONS[x.dataset.icon] || ''; });
    buildKeyboard(); renderTries();

    $('#tabTransfer').addEventListener('click', openTransfer);
    $('#btnBack').addEventListener('click', closeTransfer);
    $('#btnScan').addEventListener('click', () => { if (!coachStep) toast('Quét mã QR chưa có trong bản demo này.'); });
    $('#tipNext').addEventListener('click', coachNext);
    $('#tipDone').addEventListener('click', () => hideCoach());
    $('#btnRestart').addEventListener('click', () => { closeTransfer(); $('#homeScroll').scrollTo({ top: 0, behavior: 'smooth' }); screen.classList.remove('hint-off'); });
    $$('.case').forEach(b => b.addEventListener('click', () => { setCase(b.dataset.case); $('#mSheet').classList.remove('open'); }));
    $('#mCaseBtn').addEventListener('click', () => $('#mSheet').classList.add('open'));
    $('#mSheet').addEventListener('click', e => { if (e.target.id === 'mSheet') e.currentTarget.classList.remove('open'); });

    // composer
    input.addEventListener('focus', openKb);
    input.addEventListener('input', () => {
      // Bộ gõ tiếng Việt đôi khi gõ lại phần chữ vừa gửi ngay sau khi ô đã được xoá → bỏ phần thừa đó
      if (lastSent.text && Date.now() - lastSent.at < 400 && input.value.trim() && lastSent.text.endsWith(input.value.trim())) { input.value = ''; }
      syncHasText();
    });
    input.addEventListener('compositionstart', () => { composing = true; });
    input.addEventListener('compositionend', () => {
      composing = false;
      if (pendingSend) { pendingSend = false; setTimeout(() => { if (input.value.trim()) send(); }, 0); }
    });
    chatbox.addEventListener('pointerdown', e => { if (e.target.closest('.send-btn')) return; if (!coachStep) setTimeout(() => input.focus(), 0); });
    $('#sendBtn').addEventListener('pointerdown', e => e.preventDefault());
    $('#sendBtn').addEventListener('click', send);
    $('#replyClose').addEventListener('click', () => { cancelEdit(); closeKb(); });
    tScroll.addEventListener('pointerdown', e => { if (kbOpen() && !e.target.closest('button, .row, .choose-row, .contact')) closeKb(); });
    $('#kb').addEventListener('pointerdown', e => {
      e.preventDefault();
      const k = e.target.closest('.key'); if (!k) return;
      k.classList.add('pressed'); setTimeout(() => k.classList.remove('pressed'), 110);
      onKey(k.dataset.key);
    });
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (e.isComposing || composing || e.keyCode === 229) { pendingSend = true; return; }
        if (input.value.trim()) send(); else closeKb();
        return;
      }
      if (e.key === 'Escape') { e.preventDefault(); if (st.edit) cancelEdit(); closeKb(); return; }
      const key = e.key === 'Backspace' ? 'back' : (e.key.length === 1 ? e.key.toLowerCase() : null);
      const btn = key && $(`.key[data-key="${CSS.escape(key)}"]`);
      if (btn) { btn.classList.add('pressed'); setTimeout(() => btn.classList.remove('pressed'), 110); }
    });

    // sheets
    $('#sheetDim').addEventListener('click', closeSheets);
    $('#bankClose').addEventListener('click', closeSheets);
    $('#srcClose').addEventListener('click', closeSheets);
    $('#bankSearch').addEventListener('input', e => renderBanks(e.target.value));
    $('#confirmClose').addEventListener('click', closeConfirm);
    $('#confirmAuth').addEventListener('click', () => toast('Bước xác thực giao dịch (Gate 7) chưa có trong bản demo này.'));
    tContent.addEventListener('click', e => { if (e.target.closest('[data-all]')) toast('Danh sách đầy đủ chưa có trong bản demo này.'); });

    const fromHash = (location.hash || '').replace('#', '').toUpperCase();
    setCase(['A', 'B', 'C'].includes(fromHash) ? fromHash : 'A', false);
    fit(); window.addEventListener('resize', fit);
    updateInset();
  }
  init();
})();

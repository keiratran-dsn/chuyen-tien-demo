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
  };

  // ---------- Dữ liệu 3 case ----------
  const CONTACTS = [
    { name: 'Mẹ', desc: '0912 345 xxx · ViettelPay', bank: 'vtm' },
    { name: 'TRAN VAN TUAN', desc: '0987 654 xxx · Tiền di động', bank: 'vtm' },
    { name: 'Hằng cùng phòng', desc: '0905 111 xxx · ViettelPay', bank: 'vtm' },
  ];
  const SAVED = [
    { name: 'CHU GIA LONG', bank: 'vtm' },
    { name: 'VŨ THỊ HỒNG P…', bank: 'vcb' },
    { name: 'TRAN LE HAI VY', bank: 'vtm' },
    { name: 'MẦU VĂN ĐỨC', bank: 'bidv' },
    { name: 'TRAN THI K…', bank: 'mb' },
  ];
  const RECENT = [
    { name: 'NGUYEN THI LINH', desc: 'Vietcombank · 0071 0003 xxxx', bank: 'vcb' },
    { name: 'TRAN VAN TUAN', desc: 'ViettelPay · 0912 345 xxx', bank: 'vtm' },
  ];

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const screen = $('#screen');
  const tContent = $('#tContent');
  const dock = $('#tDock');
  const chips = $$('.chip', dock);
  const chatbox = $('#chatbox');
  const input = $('#chatInput');
  const coach = $('#coach');
  const spot = $('#spot');
  const tip1 = $('#tip1');
  const tip2 = $('#tip2');

  const bankImg = (b, lg) => `<img class="bank${lg ? ' lg' : ''}" src="assets/${b}.${b === 'vtm' ? 'svg' : 'png'}" alt="" draggable="false">`;
  const linkAll = `<span class="link">Xem tất cả ${ICONS.arrow}</span>`;
  const rowHTML = (c, right) => `<div class="row fade-row">${bankImg(c.bank)}<div class="row-text"><div class="row-name">${c.name}</div><div class="row-desc">${c.desc}</div></div>${right}</div>`;
  const joinRows = (rows) => rows.join('<div class="divider fade-row"></div>');

  function cardsFor(caseId) {
    if (caseId === 'C') {
      const saved = `<div class="bot anim"><div class="glass list">
          <div class="list-head fade-row"><h3>Danh sách đã lưu</h3>${linkAll}</div>
          <div class="carousel">${SAVED.map(s => `<div class="contact fade-row">${bankImg(s.bank, true)}<span>${s.name}</span></div>`).join('')}</div>
        </div></div>`;
      const recent = `<div class="bot anim"><div class="glass list">
          <div class="list-head fade-row"><h3>Gần đây</h3></div>
          ${joinRows(RECENT.map(c => rowHTML(c, '<span class="row-act">Chuyển lại</span>')))}
        </div></div>`;
      return [saved, recent];
    }
    const sub = caseId === 'A' ? '<div class="list-sub fade-row">Những người này đang dùng Viettel Money</div>' : '';
    return [`<div class="bot anim"><div class="glass list">
        <div class="list-head fade-row"><h3>Danh bạ của bạn</h3>${linkAll}</div>${sub}
        ${joinRows(CONTACTS.map(c => rowHTML(c, ICONS.arrow)))}
      </div></div>`];
  }

  // ---------- Hẹn giờ có thể huỷ ----------
  let timers = [];
  const later = (fn, ms) => { const t = setTimeout(fn, ms); timers.push(t); return t; };
  const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };
  const nextFrame = (fn) => requestAnimationFrame(() => requestAnimationFrame(fn));

  // ---------- State ----------
  let currentCase = 'A';
  let navOpen = false;
  let coachStep = 0;

  function setCase(c, rerun = true) {
    currentCase = c;
    $$('.case').forEach(b => { const on = b.dataset.case === c; b.classList.toggle('is-on', on); b.setAttribute('aria-checked', on); });
    $('#mCaseLabel').textContent = c;
    history.replaceState(null, '', '#' + c);
    if (navOpen && rerun) runEntrance();
  }

  // ---------- Hiệu ứng vào màn ----------
  function resetTransfer() {
    clearTimers();
    closeKb(true);
    hideCoach(true);
    tContent.innerHTML = '';
    tContent.style.transform = '';
    chips.forEach(c => c.classList.remove('in'));
    chatbox.classList.remove('in');
    input.value = '';
  }

  function runEntrance() {
    resetTransfer();
    const start = navOpen ? 380 : 0;

    // dock
    chips.forEach((c, i) => later(() => c.classList.add('in'), start + 120 + i * 60));
    later(() => chatbox.classList.add('in'), start + 260);

    // bot gõ...
    later(() => {
      const wrap = document.createElement('div');
      wrap.className = 'bot anim';
      wrap.innerHTML = '<div class="glass bubble-box"><div class="typing"><i></i><i></i><i></i></div></div>';
      tContent.appendChild(wrap);
      nextFrame(() => wrap.classList.add('in'));

      later(() => {
        const box = wrap.firstElementChild;
        const w0 = box.offsetWidth, h0 = box.offsetHeight;
        box.innerHTML = '<div class="bubble">Bạn muốn chuyển tiền cho ai?</div>';
        box.style.width = 'auto'; box.style.height = 'auto';
        const w1 = box.offsetWidth, h1 = box.offsetHeight;
        box.style.width = w0 + 'px'; box.style.height = h0 + 'px';
        box.firstElementChild.style.opacity = '0';
        box.offsetWidth; // reflow
        box.style.transition = 'width .36s cubic-bezier(.32,.72,0,1), height .36s cubic-bezier(.32,.72,0,1)';
        box.style.width = w1 + 'px'; box.style.height = h1 + 'px';
        box.firstElementChild.style.transition = 'opacity .3s ease .1s';
        box.firstElementChild.style.opacity = '1';
        later(() => { box.style.width = ''; box.style.height = ''; box.style.transition = ''; }, 420);

        // các thẻ danh sách
        const cards = cardsFor(currentCase);
        let t = 260;
        cards.forEach((html, ci) => {
          later(() => {
            const tmp = document.createElement('div');
            tmp.innerHTML = html.trim();
            const card = tmp.firstElementChild;
            tContent.appendChild(card);
            nextFrame(() => card.classList.add('in'));
            $$('.fade-row', card).forEach((r, ri) => later(() => r.classList.add('in'), 140 + ri * 55));
          }, t + ci * 220);
        });
        const doneAt = t + cards.length * 220 + 700;
        if (currentCase === 'A') later(showCoach, doneAt + 200);
      }, 750);
    }, start + 120);
  }

  // ---------- Điều hướng ----------
  function openTransfer() {
    if (navOpen) return;
    navOpen = true;
    screen.classList.add('nav-open', 'hint-off');
    $('#transfer').setAttribute('aria-hidden', 'false');
    runEntrance();
  }
  function closeTransfer() {
    if (!navOpen) return;
    clearTimers();
    closeKb(true);
    hideCoach();
    navOpen = false;
    screen.classList.remove('nav-open');
    $('#transfer').setAttribute('aria-hidden', 'true');
    setTimeout(() => { if (!navOpen) resetTransfer(); }, 560);
  }

  // ---------- Coachmark (case A) ----------
  function showCoach() {
    coachStep = 1;
    spot.classList.remove('step2');
    coach.classList.add('on');
    tip1.classList.add('show');
    tip2.classList.remove('show');
  }
  function coachNext() {
    coachStep = 2;
    tip1.classList.remove('show');
    spot.classList.add('step2');
    later(() => tip2.classList.add('show'), 380);
  }
  function hideCoach(instant) {
    coachStep = 0;
    tip1.classList.remove('show');
    tip2.classList.remove('show');
    coach.classList.remove('on');
    if (instant) spot.classList.remove('step2');
    else setTimeout(() => { if (!coachStep) spot.classList.remove('step2'); }, 450);
  }

  // ---------- Bàn phím ----------
  const DOCK_SHIFT = 278;          // ô chat từ y=712 lên y=434 (theo Figma B2)
  const CHIPS_TOP_OPEN = 382;      // cụm chip khi bàn phím mở
  let shiftOn = false;

  function openKb() {
    if (coachStep || !navOpen) { input.blur(); return; }
    if (screen.classList.contains('kb-open')) return;
    screen.classList.add('kb-open');
    $('#kb').setAttribute('aria-hidden', 'false');
    dock.style.transform = `translateY(${-DOCK_SHIFT}px)`;
    const bottom = 116 + tContent.offsetHeight;
    const limit = CHIPS_TOP_OPEN - 16;
    const shift = Math.max(0, bottom - limit);
    tContent.style.transform = shift ? `translateY(${-shift}px)` : '';
  }
  function closeKb(silent) {
    screen.classList.remove('kb-open');
    $('#kb').setAttribute('aria-hidden', 'true');
    dock.style.transform = '';
    tContent.style.transform = '';
    if (!silent || document.activeElement === input) input.blur();
  }

  function buildKeyboard() {
    const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    const el = $('#kbRows');
    const mk = (cls, label, key) => `<button class="key ${cls}" data-key="${key}" tabindex="-1">${label}</button>`;
    el.innerHTML =
      `<div class="kb-row">${[...rows[0]].map(k => mk('', k, k)).join('')}</div>` +
      `<div class="kb-row">${[...rows[1]].map(k => mk('', k, k)).join('')}</div>` +
      `<div class="kb-row">${mk('fn', ICONS.shift, 'shift')}<span style="width:8px"></span>${[...rows[2]].map(k => mk('', k, k)).join('')}<span style="width:8px"></span>${mk('fn', ICONS.bksp, 'back')}</div>` +
      `<div class="kb-row">${mk('fn n123', '123', 'n123')}${mk('space', 'dấu cách', ' ')}${mk('fn ret', ICONS.ret, 'ret')}</div>`;
  }
  function renderShift() {
    const k = $('.key[data-key="shift"]');
    k.innerHTML = shiftOn ? ICONS.shiftOn : ICONS.shift;
    $$('.key').forEach(b => { const d = b.dataset.key; if (d.length === 1 && d !== ' ') b.textContent = shiftOn ? d.toUpperCase() : d; });
  }
  function insertText(t) {
    const s = input.selectionStart ?? input.value.length, e = input.selectionEnd ?? input.value.length;
    input.value = input.value.slice(0, s) + t + input.value.slice(e);
    input.setSelectionRange(s + t.length, s + t.length);
  }
  function onKey(key) {
    if (key === 'shift') { shiftOn = !shiftOn; renderShift(); return; }
    if (key === 'back') {
      const s = input.selectionStart, e = input.selectionEnd;
      if (s !== e) { input.value = input.value.slice(0, s) + input.value.slice(e); input.setSelectionRange(s, s); }
      else if (s > 0) { input.value = input.value.slice(0, s - 1) + input.value.slice(s); input.setSelectionRange(s - 1, s - 1); }
      return;
    }
    if (key === 'ret') { closeKb(); return; }
    if (key === 'n123') return;
    insertText(shiftOn ? key.toUpperCase() : key);
    if (shiftOn) { shiftOn = false; renderShift(); }
  }

  // ---------- Fit iPhone vào màn hình ----------
  function fit() {
    const wrap = $('#deviceWrap');
    const dev = $('#device');
    const mobile = window.innerWidth <= 760;
    const W = mobile ? 375 : 399, H = mobile ? 812 : 836;
    const s = mobile
      ? Math.min(window.innerWidth / W, window.innerHeight / H)
      : Math.min(1, (window.innerHeight - 48) / H, (window.innerWidth - 48) / W);
    dev.style.transformOrigin = '0 0';
    dev.style.transform = `scale(${s})`;
    wrap.style.width = W * s + 'px';
    wrap.style.height = H * s + 'px';
  }

  // ---------- Khởi tạo ----------
  function init() {
    $$('[data-icon]').forEach(el => { el.innerHTML = ICONS[el.dataset.icon] || ''; });
    buildKeyboard();

    $('#tabTransfer').addEventListener('click', openTransfer);
    $('#btnBack').addEventListener('click', closeTransfer);
    $('#tipNext').addEventListener('click', coachNext);
    $('#tipDone').addEventListener('click', () => hideCoach());
    $('#btnRestart').addEventListener('click', () => {
      closeTransfer();
      $('#homeScroll').scrollTo({ top: 0, behavior: 'smooth' });
      screen.classList.remove('hint-off');
    });
    $$('.case').forEach(b => b.addEventListener('click', () => {
      setCase(b.dataset.case);
      $('#mSheet').classList.remove('open');
    }));
    $('#mCaseBtn').addEventListener('click', () => $('#mSheet').classList.add('open'));
    $('#mSheet').addEventListener('click', (e) => { if (e.target.id === 'mSheet') e.currentTarget.classList.remove('open'); });

    // bàn phím
    input.addEventListener('focus', openKb);
    chatbox.addEventListener('pointerdown', () => { if (!coachStep) setTimeout(() => input.focus(), 0); });
    $('#tScroll').addEventListener('pointerdown', () => { if (screen.classList.contains('kb-open')) closeKb(); });
    $('#kb').addEventListener('pointerdown', (e) => {
      e.preventDefault(); // giữ focus ở ô nhập
      const k = e.target.closest('.key');
      if (!k) return;
      k.classList.add('pressed');
      setTimeout(() => k.classList.remove('pressed'), 110);
      onKey(k.dataset.key);
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === 'Escape') { e.preventDefault(); closeKb(); return; }
      const map = { ' ': ' ', Backspace: 'back' };
      const key = map[e.key] || (e.key.length === 1 ? e.key.toLowerCase() : null);
      const btn = key && $(`.key[data-key="${CSS.escape(key)}"]`);
      if (btn) { btn.classList.add('pressed'); setTimeout(() => btn.classList.remove('pressed'), 110); }
    });

    const fromHash = (location.hash || '').replace('#', '').toUpperCase();
    setCase(['A', 'B', 'C'].includes(fromHash) ? fromHash : 'A', false);
    fit();
    window.addEventListener('resize', fit);
  }
  init();
})();

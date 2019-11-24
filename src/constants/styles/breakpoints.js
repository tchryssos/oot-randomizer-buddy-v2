export const MD_MIN_VALUE = 768
export const LG_MIN_VALUE = 992
export const XL_MIN_VALUE = 1200

const mediaString = '@media'
export const SM_MAX_STRING = `${mediaString} (max-width: ${MD_MIN_VALUE - 1}px)`
export const MD_MIN_STRING = `${mediaString} (min-width: ${MD_MIN_VALUE}px)`
export const LG_MIN_STRING = `${mediaString} (min-width: ${LG_MIN_VALUE}px)`
export const XL_MIN_STRING = `${mediaString} (min-width: ${XL_MIN_VALUE}px)`

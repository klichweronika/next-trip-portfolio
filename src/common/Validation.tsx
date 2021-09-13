type ValidationConstantsType = {
  MaximumInputSize: number;
  MaximumTextAreaSize: number;
  EmailRegex: RegExp;
};

export const ValidationConstants: ValidationConstantsType = {
  MaximumInputSize: 200,
  EmailRegex:
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  MaximumTextAreaSize: 5000,
};

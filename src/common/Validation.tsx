type ValidationConstantsType = {
  MaximumInputSize: number;
  MaximumTextAreaSize: number;
  EmailRegex: RegExp;
};

export const ValidationConstants: ValidationConstantsType = {
  MaximumInputSize: 200,
  // eslint-disable-next-line no-useless-escape
  EmailRegex:
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  MaximumTextAreaSize: 5000,
};

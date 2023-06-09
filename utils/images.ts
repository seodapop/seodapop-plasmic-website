import urlBuilder from "@sanity/image-url";
import sanity from "../sanity";

export const imageSrc = (url: string, isBlur: boolean = false) => {
  if (isBlur) {
    return `${url}?blur=1500`;
  }
  return url;
};

export const sanityImageSrc = (source: any) =>
  urlBuilder({
    projectId: <string>sanity.config().projectId,
    dataset: <string>sanity.config().dataset,
  }).image(source);

export const getUrlFromRef = (ref: any): string => {
  if (!ref) return "";
  return sanityImageSrc(ref?.asset?._ref ? ref.asset._ref : ref).url();
};

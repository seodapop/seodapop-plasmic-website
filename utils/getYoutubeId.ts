const getYoutubeId = (url: string): string => {
  if (!url) return "";
  if (url.includes("watch")) {
    return url.split("?")[1].split("=")[1];
  }
  return url.split("/").pop() || "";
};

export default getYoutubeId;

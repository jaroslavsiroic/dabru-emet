import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import CMS from "netlify-cms-app";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import cloudinary from "netlify-cms-media-library-cloudinary";
import { pl } from "netlify-cms-locales";
import uploadcare from "netlify-cms-media-library-uploadcare";

CMS.registerLocale("pl", pl);

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);

CMS.registerEditorComponent({
  id: "youtube",
  label: "YouTube",
  fields: [
    {
      name: "url",
      label: "Youtube video URL",
      widget: "string",
    },
  ],
  pattern: /^`youtube:\s(.*)`$/,
  fromBlock: function (match) {
    return {
      url: match[1],
    };
  },
  toBlock: function (obj) {
    return "`youtube: " + obj.url + "`";
  },
  toPreview: function (obj) {
    return obj.url;
  },
});

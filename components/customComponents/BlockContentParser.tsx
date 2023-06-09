import BlockContent from "@sanity/block-content-to-react";
import sanity from "../../sanity";
import Image from "next/image";
import { createElement } from "react";
import YouTube from "react-youtube";
import getYoutubeId from "../../utils/getYoutubeId";
import { imageSrc, sanityImageSrc } from "../../utils/images";

//TODO: Do a proper type for this
const headingclasses: any = {
  1: "text-6xl",
  2: "text-4xl",
  3: "text-2xl",
  4: "text-xl",
};

const BlockRenderer = (props: any) => {
  const { style = "normal" } = props.node;

  if (style === "blockquote") {
    return <blockquote>- {props.children}</blockquote>;
  }

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    return createElement(
      style,
      { className: `${headingclasses[level]} text-gray-700 my-6` },
      props.children
    );
  }

  if (
    style === "normal" &&
    props.children?.[0]?.text !== "" &&
    props.children?.[0].length > 0
  ) {
    // return <span className="text-gray-500 my-6">{props.children}</span>
    return (
      <span className="my-6 ">
        {BlockContent.defaultSerializers.types.block(props)}
      </span>
    );
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const BlockImage = (props: any) => {
  return (
    <div className=" my-10  w-full">
      <Image
        className="object-cover mx-auto"
        src={sanityImageSrc(props.node.asset).url()}
        loader={({ src }) => imageSrc(src)}
        placeholder="blur"
        blurDataURL={sanityImageSrc(props.node.asset).blur(1500).url()}
        alt={props.node.alt}
        width={600}
        height={400}
      />
    </div>
  );
};

const YoutubeLinkPreview = ({ node }: any) => {
  const { url } = node;
  const id = getYoutubeId(url);
  return (
    <div className="my-10">
      {" "}
      <YouTube className="w-full" videoId={id} />{" "}
    </div>
  );
};

const List = ({ children }: any) => {
  return <ul className="list-item: list-inside list-disc">{children}</ul>;
};

const ListItem = ({ children }: any) => {
  return <li className="my-2 text-gray-500">{children}</li>;
};

const LinkContent = ({ mark, children }: any) => {
  const { link } = mark;
  return link?.blank ? (
    <a
      href={link?.href}
      className="!text-blue-light cursor-pointer"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
    <a href={link?.href} className="!text-blue-light cursor-pointer">
      {children}
    </a>
  );
};

type Props = {
  content: string;
};

const BlockContentParser = ({ content }: Props) => {
  return (
    <BlockContent
      blocks={content}
      serializers={{
        marks: {
          link: LinkContent,
        },
        types: {
          block: BlockRenderer,
          image: BlockImage,
          youtube: YoutubeLinkPreview,
        },
        list: List,
        listItem: ListItem,
      }}
      {...sanity.config()}
    />
  );
};

export default BlockContentParser;

// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../../components/plasmic/seodapop_main_website/PlasmicGlobalContextsProvider";
import { PlasmicPagesslug } from "../../components/plasmic/seodapop_main_website/PlasmicPagesslug";
import { useRouter } from "next/router";
import sanity from "../../sanity";
import Head from "next/head";

interface PagesslugProps {
  individualPageDetail: {
    title: string;
    body: any;
    mainImage: string;
    metaDescription: string;
  }
}

function Pagesslug(props: PagesslugProps) {
  // Use PlasmicPagesslug to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicPagesslug are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicPagesslug is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <Head>
          <title>{props.individualPageDetail.title}</title>
          <meta name="description" content={props.individualPageDetail.metaDescription} />
        </Head>
        <PlasmicPagesslug />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  );
}

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const individualPageDetailQuery = `*[_type == "page" && slug.current == "${slug}"][0] {
    _id,
    _createdAt,
    title,    
    body,
    metaDescription,
    'mainImage':mainImage.asset->url
	 }
	 `;

  const individualPageDetail = await sanity.fetch(
    individualPageDetailQuery
  );

  return {
    props: { individualPageDetail },
    revalidate: 3600,
  };
};

export async function getStaticPaths() {
  const pageListQuery = `*[_type == "page"] {
    'slug': slug.current,
    'thumbnail': thumbnail.asset->url
	 }
	 `;

  const pageList = (await sanity.fetch(pageListQuery)) || [];
  const paths = pageList.map((item: any) => ({
    params: { slug: item.slug },
  }));
  return {
    paths,
    fallback: "blocking",

  };
}

export default Pagesslug;

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eSHiknYGb4WLC3QGLYLFnQ
// Component: sTPn1uNXQV

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  useDependencyAwareQuery
} from "@plasmicapp/react-web/lib/data-sources";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: UvDP15VkVO5hmb/component
import { SanityFetcher } from "@plasmicpkgs/plasmic-sanity-io"; // plasmic-import: 9KPt6XktlFK/codeComponent
import { PlasmicHead } from "@plasmicapp/react-web"; // plasmic-import: P_dmI5SNPE/codeComponent
import { RichText } from "../../PortableText"; // plasmic-import: GosNOoYXIt/codeComponent
import HomeFooterTop from "../../HomeFooterTop"; // plasmic-import: Sh8nt7GR3decD/component
import FooterMain from "../../FooterMain"; // plasmic-import: I_5el5M-Bk81Xi/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: Qr2f3ugv3a/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_seodapop_main_website.module.css"; // plasmic-import: eSHiknYGb4WLC3QGLYLFnQ/projectcss
import sty from "./PlasmicPages.module.css"; // plasmic-import: sTPn1uNXQV/css

export type PlasmicPages__VariantMembers = {};
export type PlasmicPages__VariantsArgs = {};
type VariantPropType = keyof PlasmicPages__VariantsArgs;
export const PlasmicPages__VariantProps = new Array<VariantPropType>();

export type PlasmicPages__ArgsType = {};
type ArgPropType = keyof PlasmicPages__ArgsType;
export const PlasmicPages__ArgProps = new Array<ArgPropType>();

export type PlasmicPages__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  sanityFetcher?: p.Flex<typeof SanityFetcher>;
  head?: p.Flex<typeof PlasmicHead>;
  h1?: p.Flex<"h1">;
  richText?: p.Flex<typeof RichText>;
  homeFooterTop?: p.Flex<typeof HomeFooterTop>;
  footerMain?: p.Flex<typeof FooterMain>;
};

export interface DefaultPagesProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPages__RenderFunc(props: {
  variants: PlasmicPages__VariantsArgs;
  args: PlasmicPages__ArgsType;
  overrides: PlasmicPages__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <div
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              plasmic_antd_5_hostless_css.plasmic_tokens,
              sty.root
            )}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <div className={classNames(projectcss.all, sty.freeBox__tSr9A)}>
              <SanityFetcher
                data-plasmic-name={"sanityFetcher"}
                data-plasmic-override={overrides.sanityFetcher}
                className={classNames("__wab_instance", sty.sanityFetcher)}
                filterParameter={"==" as const}
                filterValue={(() => {
                  try {
                    return $ctx.params.slug;
                  } catch (e) {
                    if (e instanceof TypeError) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                groq={(() => {
                  try {
                    return `*[_type == 'page' && slug.current == '${$ctx.params.slug}'] {_id,_createdAt,title,body,publishedAt,'slug': slug.current}`;
                  } catch (e) {
                    if (e instanceof TypeError) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                limit={"1" as const}
                noAutoRepeat={false}
                noLayout={false}
              >
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__jXwe)}
                    >
                      <PlasmicHead
                        data-plasmic-name={"head"}
                        data-plasmic-override={overrides.head}
                        canonical={(() => {
                          try {
                            return `https://seodapop.com/$ctx.sanityItem.slug`;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                        className={classNames("__wab_instance", sty.head)}
                        title={(() => {
                          try {
                            return $ctx.sanityItems[0].title;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                      />

                      <h1
                        data-plasmic-name={"h1"}
                        data-plasmic-override={overrides.h1}
                        className={classNames(
                          projectcss.all,
                          projectcss.h1,
                          projectcss.__wab_text,
                          sty.h1
                        )}
                      >
                        {(() => {
                          try {
                            return $ctx.sanityItems[0].title;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return "You won't believe what happens next.";
                            }
                            throw e;
                          }
                        })()}
                      </h1>
                      <RichText
                        data-plasmic-name={"richText"}
                        data-plasmic-override={overrides.richText}
                        className={classNames("__wab_instance", sty.richText)}
                        values={(() => {
                          try {
                            return $ctx.sanityItem.body;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                      />
                    </div>
                  )}
                </ph.DataCtxReader>
              </SanityFetcher>
            </div>
            <HomeFooterTop
              data-plasmic-name={"homeFooterTop"}
              data-plasmic-override={overrides.homeFooterTop}
              className={classNames("__wab_instance", sty.homeFooterTop)}
            />

            <FooterMain
              data-plasmic-name={"footerMain"}
              data-plasmic-override={overrides.footerMain}
              className={classNames("__wab_instance", sty.footerMain)}
            />
          </div>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "sanityFetcher",
    "head",
    "h1",
    "richText",
    "homeFooterTop",
    "footerMain"
  ],
  header: ["header"],
  sanityFetcher: ["sanityFetcher", "head", "h1", "richText"],
  head: ["head"],
  h1: ["h1"],
  richText: ["richText"],
  homeFooterTop: ["homeFooterTop"],
  footerMain: ["footerMain"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  sanityFetcher: typeof SanityFetcher;
  head: typeof PlasmicHead;
  h1: "h1";
  richText: typeof RichText;
  homeFooterTop: typeof HomeFooterTop;
  footerMain: typeof FooterMain;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPages__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPages__VariantsArgs;
    args?: PlasmicPages__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPages__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPages__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPages__ArgProps,
          internalVariantPropNames: PlasmicPages__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPages__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPages";
  } else {
    func.displayName = `PlasmicPages.${nodeName}`;
  }
  return func;
}

export const PlasmicPages = Object.assign(
  // Top-level PlasmicPages renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    sanityFetcher: makeNodeComponent("sanityFetcher"),
    head: makeNodeComponent("head"),
    h1: makeNodeComponent("h1"),
    richText: makeNodeComponent("richText"),
    homeFooterTop: makeNodeComponent("homeFooterTop"),
    footerMain: makeNodeComponent("footerMain"),

    // Metadata about props expected for PlasmicPages
    internalVariantProps: PlasmicPages__VariantProps,
    internalArgProps: PlasmicPages__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPages;
/* prettier-ignore-end */
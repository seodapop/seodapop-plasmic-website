// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eSHiknYGb4WLC3QGLYLFnQ
// Component: g6PgRV9F1F

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
import { WordpressFetcher } from "@plasmicpkgs/plasmic-wordpress"; // plasmic-import: pjFShxrixSi/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_seodapop_main_website.module.css"; // plasmic-import: eSHiknYGb4WLC3QGLYLFnQ/projectcss
import sty from "./PlasmicBlog.module.css"; // plasmic-import: g6PgRV9F1F/css

export type PlasmicBlog__VariantMembers = {};
export type PlasmicBlog__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlog__VariantsArgs;
export const PlasmicBlog__VariantProps = new Array<VariantPropType>();

export type PlasmicBlog__ArgsType = {};
type ArgPropType = keyof PlasmicBlog__ArgsType;
export const PlasmicBlog__ArgProps = new Array<ArgPropType>();

export type PlasmicBlog__OverridesType = {
  root?: p.Flex<"div">;
  getWordpressData?: p.Flex<typeof WordpressFetcher>;
  freeBox?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  text?: p.Flex<"div">;
};

export interface DefaultBlogProps {}

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

function PlasmicBlog__RenderFunc(props: {
  variants: PlasmicBlog__VariantsArgs;
  args: PlasmicBlog__ArgsType;
  overrides: PlasmicBlog__OverridesType;
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
          {([2, 3, 4] ?? []).map((currentItem, currentIndex) => (
            <WordpressFetcher
              data-plasmic-name={"getWordpressData"}
              data-plasmic-override={overrides.getWordpressData}
              className={classNames("__wab_instance", sty.getWordpressData)}
              key={currentIndex}
              limit={5 as const}
              noAutoRepeat={false}
              noLayout={false}
              queryType={"posts" as const}
            >
              <ph.DataCtxReader>
                {$ctx =>
                  ([2, 3, 4] ?? []).map((currentItem, currentIndex) => (
                    <div
                      data-plasmic-name={"freeBox"}
                      data-plasmic-override={overrides.freeBox}
                      className={classNames(projectcss.all, sty.freeBox)}
                      key={currentIndex}
                    >
                      <p.PlasmicLink
                        data-plasmic-name={"link"}
                        data-plasmic-override={overrides.link}
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          sty.link
                        )}
                        component={Link}
                        href={(() => {
                          try {
                            return `/blog/${$ctx.currentWordpressPost.slug}`;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                        onClick={async event => {
                          const $steps = {};
                          $steps["goToBlogslug"] = true
                            ? (() => {
                                const actionArgs = {
                                  destination: __wrapUserFunction(
                                    {
                                      type: "InteractionArgLoc",
                                      actionName: "navigation",
                                      interactionUuid: "1nbiR8WD2",
                                      componentUuid: "g6PgRV9F1F",
                                      argName: "destination"
                                    },
                                    () =>
                                      `/blog/${(() => {
                                        try {
                                          return $ctx.currentWordpressPost.slug;
                                        } catch (e) {
                                          if (e instanceof TypeError) {
                                            return ``;
                                          }
                                          throw e;
                                        }
                                      })()}`
                                  )
                                };
                                return __wrapUserFunction(
                                  {
                                    type: "InteractionLoc",
                                    actionName: "navigation",
                                    interactionUuid: "1nbiR8WD2",
                                    componentUuid: "g6PgRV9F1F"
                                  },
                                  () =>
                                    (({ destination }) => {
                                      __nextRouter?.push(destination);
                                    })?.apply(null, [actionArgs]),
                                  actionArgs
                                );
                              })()
                            : undefined;
                          if (
                            typeof $steps["goToBlogslug"] === "object" &&
                            typeof $steps["goToBlogslug"].then === "function"
                          ) {
                            $steps["goToBlogslug"] = await __wrapUserPromise(
                              {
                                type: "InteractionLoc",
                                actionName: "navigation",
                                interactionUuid: "1nbiR8WD2",
                                componentUuid: "g6PgRV9F1F"
                              },
                              $steps["goToBlogslug"]
                            );
                          }
                        }}
                        platform={"nextjs"}
                      >
                        {(() => {
                          try {
                            return $ctx.currentWordpressPost.title.rendered;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return "Some link text";
                            }
                            throw e;
                          }
                        })()}
                      </p.PlasmicLink>
                      <div
                        data-plasmic-name={"text"}
                        data-plasmic-override={overrides.text}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text
                        )}
                      >
                        {(() => {
                          try {
                            return $ctx.currentWordpressPost.excerpt.rendered;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return "Enter some text";
                            }
                            throw e;
                          }
                        })()}
                      </div>
                    </div>
                  ))
                }
              </ph.DataCtxReader>
            </WordpressFetcher>
          ))}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "getWordpressData", "freeBox", "link", "text"],
  getWordpressData: ["getWordpressData", "freeBox", "link", "text"],
  freeBox: ["freeBox", "link", "text"],
  link: ["link"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  getWordpressData: typeof WordpressFetcher;
  freeBox: "div";
  link: "a";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlog__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlog__VariantsArgs;
    args?: PlasmicBlog__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlog__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBlog__ArgsType,
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
          internalArgPropNames: PlasmicBlog__ArgProps,
          internalVariantPropNames: PlasmicBlog__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBlog__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlog";
  } else {
    func.displayName = `PlasmicBlog.${nodeName}`;
  }
  return func;
}

export const PlasmicBlog = Object.assign(
  // Top-level PlasmicBlog renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    getWordpressData: makeNodeComponent("getWordpressData"),
    freeBox: makeNodeComponent("freeBox"),
    link: makeNodeComponent("link"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicBlog
    internalVariantProps: PlasmicBlog__VariantProps,
    internalArgProps: PlasmicBlog__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBlog;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eSHiknYGb4WLC3QGLYLFnQ
// Component: H_9_PzWWma

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  usePlasmicDataOp
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
import { WordpressFetcher } from "@plasmicpkgs/plasmic-wordpress"; // plasmic-import: pjFShxrixSi/codeComponent
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: Qr2f3ugv3a/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_seodapop_main_website.module.css"; // plasmic-import: eSHiknYGb4WLC3QGLYLFnQ/projectcss
import sty from "./PlasmicBlogslug.module.css"; // plasmic-import: H_9_PzWWma/css

export type PlasmicBlogslug__VariantMembers = {};
export type PlasmicBlogslug__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlogslug__VariantsArgs;
export const PlasmicBlogslug__VariantProps = new Array<VariantPropType>();

export type PlasmicBlogslug__ArgsType = {};
type ArgPropType = keyof PlasmicBlogslug__ArgsType;
export const PlasmicBlogslug__ArgProps = new Array<ArgPropType>();

export type PlasmicBlogslug__OverridesType = {
  root?: p.Flex<"div">;
  wordpressFetcher?: p.Flex<typeof WordpressFetcher>;
  freeBox?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  text?: p.Flex<"div">;
};

export interface DefaultBlogslugProps {}

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

function PlasmicBlogslug__RenderFunc(props: {
  variants: PlasmicBlogslug__VariantsArgs;
  args: PlasmicBlogslug__ArgsType;
  overrides: PlasmicBlogslug__OverridesType;
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
          <WordpressFetcher
            data-plasmic-name={"wordpressFetcher"}
            data-plasmic-override={overrides.wordpressFetcher}
            className={classNames("__wab_instance", sty.wordpressFetcher)}
            filterValue={(() => {
              try {
                return $ctx.params.slug;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return undefined;
                }
                throw e;
              }
            })()}
            limit={1 as const}
            noAutoRepeat={false}
            noLayout={false}
            queryOperator={"slug" as const}
            queryType={"posts" as const}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <div
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  className={classNames(projectcss.all, sty.freeBox)}
                >
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
                    <React.Fragment>
                      {(() => {
                        try {
                          return $ctx.currentWordpressPost.title.rendered;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "You won't believe what happens next.";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
                  </h1>
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    <div
                      className={projectcss.__wab_expr_html_text}
                      dangerouslySetInnerHTML={{
                        __html: (() => {
                          try {
                            return $ctx.currentWordpressPost.content.rendered;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "Enter some text";
                            }
                            throw e;
                          }
                        })()
                      }}
                    />
                  </div>
                </div>
              )}
            </ph.DataCtxReader>
          </WordpressFetcher>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "wordpressFetcher", "freeBox", "h1", "text"],
  wordpressFetcher: ["wordpressFetcher", "freeBox", "h1", "text"],
  freeBox: ["freeBox", "h1", "text"],
  h1: ["h1"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  wordpressFetcher: typeof WordpressFetcher;
  freeBox: "div";
  h1: "h1";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlogslug__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlogslug__VariantsArgs;
    args?: PlasmicBlogslug__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlogslug__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBlogslug__ArgsType,
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
          internalArgPropNames: PlasmicBlogslug__ArgProps,
          internalVariantPropNames: PlasmicBlogslug__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicBlogslug__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogslug";
  } else {
    func.displayName = `PlasmicBlogslug.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogslug = Object.assign(
  // Top-level PlasmicBlogslug renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    wordpressFetcher: makeNodeComponent("wordpressFetcher"),
    freeBox: makeNodeComponent("freeBox"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicBlogslug
    internalVariantProps: PlasmicBlogslug__VariantProps,
    internalArgProps: PlasmicBlogslug__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBlogslug;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eSHiknYGb4WLC3QGLYLFnQ
// Component: hHvPWKVFpN

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
import Header from "../../Header"; // plasmic-import: UvDP15VkVO5hmb/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_seodapop_main_website.module.css"; // plasmic-import: eSHiknYGb4WLC3QGLYLFnQ/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: hHvPWKVFpN/css

createPlasmicElementProxy;

export type PlasmicNewPage__VariantMembers = {};
export type PlasmicNewPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage__VariantsArgs;
export const PlasmicNewPage__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage__ArgsType;
export const PlasmicNewPage__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  h2?: p.Flex<"h2">;
  img?: p.Flex<typeof p.PlasmicImg>;
  h3?: p.Flex<"h3">;
  h1?: p.Flex<"h1">;
};

export interface DefaultNewPageProps {}

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

function PlasmicNewPage__RenderFunc(props: {
  variants: PlasmicNewPage__VariantsArgs;
  args: PlasmicNewPage__ArgsType;
  overrides: PlasmicNewPage__OverridesType;
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <section className={classNames(projectcss.all, sty.section__wvrde)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__zhgSs)}>
                {true ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__iMt2P)}
                  >
                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__eF8R
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__l9Ai2
                          )}
                        >
                          <React.Fragment>
                            <React.Fragment>{""}</React.Fragment>
                            {
                              <h2
                                data-plasmic-name={"h2"}
                                data-plasmic-override={overrides.h2}
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h2,
                                  projectcss.__wab_text,
                                  sty.h2
                                )}
                              >
                                <React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{ color: "#020065" }}
                                  >
                                    {"Unlock Your "}
                                  </span>
                                  <React.Fragment>{""}</React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{ color: "#0500FF" }}
                                  >
                                    {"Online Success"}
                                  </span>
                                  <React.Fragment>{""}</React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{ color: "#020065" }}
                                  >
                                    {" "}
                                  </span>
                                  <React.Fragment>{"\n"}</React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{ color: "#020065" }}
                                  >
                                    {"with "}
                                  </span>
                                  <React.Fragment>{""}</React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{ color: "#057C00" }}
                                  >
                                    {"SEO"}
                                  </span>
                                  <React.Fragment>{""}</React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{ color: "#020065" }}
                                  >
                                    {"'s Key to "}
                                  </span>
                                  <React.Fragment>{""}</React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{ color: "#EC4900" }}
                                  >
                                    {"Visibility"}
                                  </span>
                                  <React.Fragment>{""}</React.Fragment>
                                  <span
                                    className={
                                      "plasmic_default__all plasmic_default__span"
                                    }
                                    style={{ color: "#020065" }}
                                  >
                                    {"!"}
                                  </span>
                                </React.Fragment>
                              </h2>
                            }
                            <React.Fragment>{""}</React.Fragment>
                          </React.Fragment>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ) : null}
            <div className={classNames(projectcss.all, sty.columns__gUiEl)}>
              <div className={classNames(projectcss.all, sty.column__vs5FB)}>
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"272px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"403px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/seodapop_main_website/images/image6.jpg",
                    fullWidth: 4928,
                    fullHeight: 3264,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__gKowD)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__zq4L3
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <h3
                        data-plasmic-name={"h3"}
                        data-plasmic-override={overrides.h3}
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3
                        )}
                      >
                        {"But, Do you really need SEO?"}
                      </h3>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dEdEd
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 500 }}
                    >
                      {
                        "Hey there! So, let's talk about why SEO is super important for a web page. You know, it's all about making sure your page gets noticed in this crazy online world. SEO works its magic by improving your page's visibility and showing it off in search engine results. By tweaking things like content, keywords, and website structure, SEO helps search engines understand what your page is all about."
                      }
                    </span>
                  </React.Fragment>
                </div>
              </div>
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__fyRq
              )}
            >
              {
                "And guess what? When search engines get it, they'll reward you with higher rankings! That means more people will find your page when they search for something related to what you offer. Pretty cool, right? Plus, with good SEO, you'll build strong connections with other reputable websites, boost your user experience, and make sure your page loads lightning fast. So, don't miss out on all the SEO fun \u2013 it's your ticket to online success!"
              }
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__lhwZe)}>
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
                <React.Fragment>
                  {"These are some of the benefits of \n"}
                </React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#0064FF" }}
                >
                  {"GOOD SEO"}
                </span>
              </React.Fragment>
            </h1>
            <div className={classNames(projectcss.all, sty.columns___5UkB7)}>
              <div className={classNames(projectcss.all, sty.column___50A6J)}>
                <div className={classNames(projectcss.all, sty.freeBox__pHlJk)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kdcsa
                    )}
                  >
                    {"Enter some text"}
                  </div>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.column___0P4S2)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox___3JqDe)}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column___6BAt)} />

              <div className={classNames(projectcss.all, sty.column__vf6W0)} />
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "h2", "img", "h3", "h1"],
  header: ["header"],
  h2: ["h2"],
  img: ["img"],
  h3: ["h3"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  h2: "h2";
  img: typeof p.PlasmicImg;
  h3: "h3";
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage__VariantsArgs;
    args?: PlasmicNewPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPage__ArgsType,
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
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    h2: makeNodeComponent("h2"),
    img: makeNodeComponent("img"),
    h3: makeNodeComponent("h3"),
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */

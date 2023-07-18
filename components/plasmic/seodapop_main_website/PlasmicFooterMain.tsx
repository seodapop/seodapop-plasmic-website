// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eSHiknYGb4WLC3QGLYLFnQ
// Component: I_5el5M-Bk81Xi

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_seodapop_main_website.module.css"; // plasmic-import: eSHiknYGb4WLC3QGLYLFnQ/projectcss
import sty from "./PlasmicFooterMain.module.css"; // plasmic-import: I_5el5M-Bk81Xi/css

createPlasmicElementProxy;

export type PlasmicFooterMain__VariantMembers = {};
export type PlasmicFooterMain__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterMain__VariantsArgs;
export const PlasmicFooterMain__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterMain__ArgsType = {};
type ArgPropType = keyof PlasmicFooterMain__ArgsType;
export const PlasmicFooterMain__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterMain__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  rowWrapper?: p.Flex<"div">;
  colmn1?: p.Flex<"div">;
  colmn22?: p.Flex<"div">;
  colmn3?: p.Flex<"div">;
};

export interface DefaultFooterMainProps {
  className?: string;
}

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

function PlasmicFooterMain__RenderFunc(props: {
  variants: PlasmicFooterMain__VariantsArgs;
  args: PlasmicFooterMain__ArgsType;
  overrides: PlasmicFooterMain__OverridesType;
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
    true ? (
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
        {true ? (
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"rowWrapper"}
              data-plasmic-override={overrides.rowWrapper}
              hasGap={true}
              className={classNames(projectcss.all, sty.rowWrapper)}
            >
              <div
                data-plasmic-name={"colmn1"}
                data-plasmic-override={overrides.colmn1}
                className={classNames(projectcss.all, sty.colmn1)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3___3BZZm
                  )}
                >
                  {"Helping businesses one pixel at a time."}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__u2And
                  )}
                >
                  {"\u00a9 SeodaPop. All rights reserved. "}
                </div>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__pkCe
                  )}
                  component={Link}
                  onClick={async event => {
                    const $steps = {};
                    $steps["goToPages"] = true
                      ? (() => {
                          const actionArgs = {
                            destination: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "navigation",
                                interactionUuid: "7S1WecHve",
                                componentUuid: "I_5el5M-Bk81Xi",
                                argName: "destination"
                              },
                              () => `/pages/${"privacy-policy"}`
                            )
                          };
                          return __wrapUserFunction(
                            {
                              type: "InteractionLoc",
                              actionName: "navigation",
                              interactionUuid: "7S1WecHve",
                              componentUuid: "I_5el5M-Bk81Xi"
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
                      typeof $steps["goToPages"] === "object" &&
                      typeof $steps["goToPages"].then === "function"
                    ) {
                      $steps["goToPages"] = await __wrapUserPromise(
                        {
                          type: "InteractionLoc",
                          actionName: "navigation",
                          interactionUuid: "7S1WecHve",
                          componentUuid: "I_5el5M-Bk81Xi"
                        },
                        $steps["goToPages"]
                      );
                    }
                  }}
                  platform={"nextjs"}
                >
                  {"Privacy Policy"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__dr1P6
                  )}
                  component={Link}
                  onClick={async event => {
                    const $steps = {};
                    $steps["goToPages"] = true
                      ? (() => {
                          const actionArgs = {
                            destination: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "navigation",
                                interactionUuid: "1exjwU-K6",
                                componentUuid: "I_5el5M-Bk81Xi",
                                argName: "destination"
                              },
                              () => `/pages/${"terms-of-service"}`
                            )
                          };
                          return __wrapUserFunction(
                            {
                              type: "InteractionLoc",
                              actionName: "navigation",
                              interactionUuid: "1exjwU-K6",
                              componentUuid: "I_5el5M-Bk81Xi"
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
                      typeof $steps["goToPages"] === "object" &&
                      typeof $steps["goToPages"].then === "function"
                    ) {
                      $steps["goToPages"] = await __wrapUserPromise(
                        {
                          type: "InteractionLoc",
                          actionName: "navigation",
                          interactionUuid: "1exjwU-K6",
                          componentUuid: "I_5el5M-Bk81Xi"
                        },
                        $steps["goToPages"]
                      );
                    }
                  }}
                  platform={"nextjs"}
                >
                  {"Terms of Service"}
                </p.PlasmicLink>
              </div>
              <div
                data-plasmic-name={"colmn22"}
                data-plasmic-override={overrides.colmn22}
                className={classNames(projectcss.all, sty.colmn22)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__sf25Z
                  )}
                >
                  {"Menu"}
                </h3>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__wZAeV
                  )}
                  component={Link}
                  href={`/services`}
                  platform={"nextjs"}
                >
                  {"Services"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___1VxGh
                  )}
                  component={Link}
                  href={`/about-us`}
                  platform={"nextjs"}
                >
                  {"About us"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__eade8
                  )}
                  component={Link}
                  href={`/client`}
                  platform={"nextjs"}
                >
                  {"Testimonials"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__ytdk6
                  )}
                  component={Link}
                  href={"#" as const}
                  platform={"nextjs"}
                >
                  {"Blog"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__dWct9
                  )}
                  component={Link}
                  href={`/contact`}
                  platform={"nextjs"}
                >
                  {"Contact us\n"}
                </p.PlasmicLink>
              </div>
              <div
                data-plasmic-name={"colmn3"}
                data-plasmic-override={overrides.colmn3}
                className={classNames(projectcss.all, sty.colmn3)}
              >
                <h3
                  className={classNames(
                    projectcss.all,
                    projectcss.h3,
                    projectcss.__wab_text,
                    sty.h3__oi3X
                  )}
                >
                  {"Get in Touch"}
                </h3>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ucee7
                  )}
                >
                  {" "}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6GxuF
                  )}
                >
                  {"450 S Melrose Ave ste 107\n Vista, CA 92081"}
                </div>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__oZYy
                  )}
                  component={Link}
                  href={"#" as const}
                  platform={"nextjs"}
                >
                  {"info@seodapop.com"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__abSnD
                  )}
                  component={Link}
                  href={"#" as const}
                  platform={"nextjs"}
                >
                  {"800-277-9389"}
                </p.PlasmicLink>
              </div>
            </p.Stack>
          </div>
        ) : null}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__uBmw
          )}
        >
          {""}
        </div>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "rowWrapper", "colmn1", "colmn22", "colmn3"],
  freeBox: ["freeBox", "rowWrapper", "colmn1", "colmn22", "colmn3"],
  rowWrapper: ["rowWrapper", "colmn1", "colmn22", "colmn3"],
  colmn1: ["colmn1"],
  colmn22: ["colmn22"],
  colmn3: ["colmn3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  rowWrapper: "div";
  colmn1: "div";
  colmn22: "div";
  colmn3: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterMain__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterMain__VariantsArgs;
    args?: PlasmicFooterMain__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterMain__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooterMain__ArgsType,
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
          internalArgPropNames: PlasmicFooterMain__ArgProps,
          internalVariantPropNames: PlasmicFooterMain__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooterMain__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterMain";
  } else {
    func.displayName = `PlasmicFooterMain.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterMain = Object.assign(
  // Top-level PlasmicFooterMain renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    rowWrapper: makeNodeComponent("rowWrapper"),
    colmn1: makeNodeComponent("colmn1"),
    colmn22: makeNodeComponent("colmn22"),
    colmn3: makeNodeComponent("colmn3"),

    // Metadata about props expected for PlasmicFooterMain
    internalVariantProps: PlasmicFooterMain__VariantProps,
    internalArgProps: PlasmicFooterMain__ArgProps
  }
);

export default PlasmicFooterMain;
/* prettier-ignore-end */

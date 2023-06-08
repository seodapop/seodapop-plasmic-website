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
import Header from "../../Header"; // plasmic-import: UvDP15VkVO5hmb/component
import HomeFooterTop from "../../HomeFooterTop"; // plasmic-import: Sh8nt7GR3decD/component
import FooterMain from "../../FooterMain"; // plasmic-import: I_5el5M-Bk81Xi/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: Qr2f3ugv3a/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_seodapop_main_website.module.css"; // plasmic-import: eSHiknYGb4WLC3QGLYLFnQ/projectcss
import sty from "./PlasmicPagesslug.module.css"; // plasmic-import: sTPn1uNXQV/css

export type PlasmicPagesslug__VariantMembers = {};
export type PlasmicPagesslug__VariantsArgs = {};
type VariantPropType = keyof PlasmicPagesslug__VariantsArgs;
export const PlasmicPagesslug__VariantProps = new Array<VariantPropType>();

export type PlasmicPagesslug__ArgsType = {
  pageData?: "Dynamic options";
};
type ArgPropType = keyof PlasmicPagesslug__ArgsType;
export const PlasmicPagesslug__ArgProps = new Array<ArgPropType>("pageData");

export type PlasmicPagesslug__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  freeBox?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  homeFooterTop?: p.Flex<typeof HomeFooterTop>;
  footerMain?: p.Flex<typeof FooterMain>;
};

export interface DefaultPagesslugProps {}

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

function PlasmicPagesslug__RenderFunc(props: {
  variants: PlasmicPagesslug__VariantsArgs;
  args: PlasmicPagesslug__ArgsType;
  overrides: PlasmicPagesslug__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          pageData: "Dynamic options" as const
        },
        props.args
      ),
    [props.args]
  );
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
                      return undefined;
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
  root: ["root", "header", "freeBox", "h1", "homeFooterTop", "footerMain"],
  header: ["header"],
  freeBox: ["freeBox", "h1"],
  h1: ["h1"],
  homeFooterTop: ["homeFooterTop"],
  footerMain: ["footerMain"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  freeBox: "div";
  h1: "h1";
  homeFooterTop: typeof HomeFooterTop;
  footerMain: typeof FooterMain;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPagesslug__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPagesslug__VariantsArgs;
    args?: PlasmicPagesslug__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPagesslug__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPagesslug__ArgsType,
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
          internalArgPropNames: PlasmicPagesslug__ArgProps,
          internalVariantPropNames: PlasmicPagesslug__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPagesslug__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPagesslug";
  } else {
    func.displayName = `PlasmicPagesslug.${nodeName}`;
  }
  return func;
}

export const PlasmicPagesslug = Object.assign(
  // Top-level PlasmicPagesslug renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    freeBox: makeNodeComponent("freeBox"),
    h1: makeNodeComponent("h1"),
    homeFooterTop: makeNodeComponent("homeFooterTop"),
    footerMain: makeNodeComponent("footerMain"),

    // Metadata about props expected for PlasmicPagesslug
    internalVariantProps: PlasmicPagesslug__VariantProps,
    internalArgProps: PlasmicPagesslug__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPagesslug;
/* prettier-ignore-end */

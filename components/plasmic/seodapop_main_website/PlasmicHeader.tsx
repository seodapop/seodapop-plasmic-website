// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eSHiknYGb4WLC3QGLYLFnQ
// Component: UvDP15VkVO5hmb

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

import { useScreenVariants as useScreenVariantspgBiFjijh7ROsO } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: PgBiFjijh7ROsO/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_seodapop_main_website.module.css"; // plasmic-import: eSHiknYGb4WLC3QGLYLFnQ/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: UvDP15VkVO5hmb/css

import Icon29Icon from "./icons/PlasmicIcon__Icon29"; // plasmic-import: 6Qw7--xFaSy2Vf/icon

createPlasmicElementProxy;

export type PlasmicHeader__VariantMembers = {};
export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  aboutUs?: p.Flex<"a"> & Partial<LinkProps>;
  contact?: p.Flex<"div">;
};

export interface DefaultHeaderProps {
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

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspgBiFjijh7ROsO()
  });

  return (
    true ? (
      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
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
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__hZk8Y)}
        >
          {true ? (
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__eNaWg
              )}
              component={Link}
              href={`/`}
              platform={"nextjs"}
            >
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"78px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"78px" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                src={{
                  src: "/plasmic/seodapop_main_website/images/seodapopLogoSmallpng.png",
                  fullWidth: 182,
                  fullHeight: 70,
                  aspectRatio: undefined
                }}
              />
            </p.PlasmicLink>
          ) : null}
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__reSlh)}
          >
            <p.Stack
              as={p.PlasmicLink}
              data-plasmic-name={"aboutUs"}
              data-plasmic-override={overrides.aboutUs}
              hasGap={true}
              className={classNames(projectcss.all, projectcss.a, sty.aboutUs)}
              component={Link}
              href={`/about-us`}
              platform={"nextjs"}
            >
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg___2Es7U)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uqirv
                )}
              >
                {"About Us"}
              </div>
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg___7LUhM)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__n7Bz
              )}
              component={Link}
              href={`/services`}
              platform={"nextjs"}
            >
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg___8BeFl)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__s8SJi
                )}
              >
                {"Services"}
              </div>
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg__h2BjX)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__ox2M
              )}
              component={Link}
              href={`/client`}
              platform={"nextjs"}
            >
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg__uhmk5)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pzmz8
                )}
              >
                {"Clients"}
              </div>
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg__kDtzC)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__r2DA
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg___2Kdu4)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sNYiQ
                )}
              >
                {"Blog"}
              </div>
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg__rbFxL)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__iOfi
              )}
              component={Link}
              href={`/contact`}
              platform={"nextjs"}
            >
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg___4NUiR)}
                  role={"img"}
                />
              ) : null}
              <div
                data-plasmic-name={"contact"}
                data-plasmic-override={overrides.contact}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.contact
                )}
              >
                {"Contact Us"}
              </div>
              {false ? (
                <Icon29Icon
                  className={classNames(projectcss.all, sty.svg__r2MSb)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
          </p.Stack>
        </p.Stack>
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "aboutUs", "contact"],
  img: ["img"],
  aboutUs: ["aboutUs"],
  contact: ["contact"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  aboutUs: "a";
  contact: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader__ArgsType,
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
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    aboutUs: makeNodeComponent("aboutUs"),
    contact: makeNodeComponent("contact"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */

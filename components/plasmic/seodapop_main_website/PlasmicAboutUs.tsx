// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eSHiknYGb4WLC3QGLYLFnQ
// Component: abE5NBu71KAaq

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
import PersonCard from "../../PersonCard"; // plasmic-import: qxI8sK4vboidUg/component
import ServiceValue from "../../ServiceValue"; // plasmic-import: I4HV7g7lAOUuTK/component
import HomeFooterTop from "../../HomeFooterTop"; // plasmic-import: Sh8nt7GR3decD/component
import FooterMain from "../../FooterMain"; // plasmic-import: I_5el5M-Bk81Xi/component

import { useScreenVariants as useScreenVariantspgBiFjijh7ROsO } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: PgBiFjijh7ROsO/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_seodapop_main_website.module.css"; // plasmic-import: eSHiknYGb4WLC3QGLYLFnQ/projectcss
import sty from "./PlasmicAboutUs.module.css"; // plasmic-import: abE5NBu71KAaq/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: iDiNuYAvxR-JUO/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: M9-850zOT1Vnhe/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: ZKG3Ga_S7-iqvH/icon

export type PlasmicAboutUs__VariantMembers = {};
export type PlasmicAboutUs__VariantsArgs = {};
type VariantPropType = keyof PlasmicAboutUs__VariantsArgs;
export const PlasmicAboutUs__VariantProps = new Array<VariantPropType>();

export type PlasmicAboutUs__ArgsType = {};
type ArgPropType = keyof PlasmicAboutUs__ArgsType;
export const PlasmicAboutUs__ArgProps = new Array<ArgPropType>();

export type PlasmicAboutUs__OverridesType = {
  root?: p.Flex<"div">;
  aboutUsBanner?: p.Flex<"div">;
  foreground2?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  ourTeamSection?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  container?: p.Flex<"div">;
  row1?: p.Flex<"div">;
  serviceRow?: p.Flex<"div">;
  homeFooterTop?: p.Flex<typeof HomeFooterTop>;
  footerMain?: p.Flex<typeof FooterMain>;
};

export interface DefaultAboutUsProps {}

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

function PlasmicAboutUs__RenderFunc(props: {
  variants: PlasmicAboutUs__VariantsArgs;
  args: PlasmicAboutUs__ArgsType;
  overrides: PlasmicAboutUs__OverridesType;
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicAboutUs.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicAboutUs.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicAboutUs.pageMetadata.title}
        />
      </Head>

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
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__o1Ek1)}
            >
              <Header
                className={classNames("__wab_instance", sty.header__lhPxY)}
              />
            </p.Stack>
          ) : null}
          <div
            data-plasmic-name={"aboutUsBanner"}
            data-plasmic-override={overrides.aboutUsBanner}
            className={classNames(projectcss.all, sty.aboutUsBanner)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__kar5)}
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
                  {hasVariant(globalVariants, "screen", "sm")
                    ? "About US"
                    : "About Us"}
                </h1>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__hw5Nq
                  )}
                >
                  {hasVariant(globalVariants, "screen", "sm")
                    ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    : "\nOur passion is in working with business owners to ensure they have the best search engine exposure for their business. We focus on the right user experience to convert their website visitors into sales leads."}
                </div>
              </p.Stack>
            </p.Stack>
          </div>
          {true ? (
            <div
              data-plasmic-name={"ourTeamSection"}
              data-plasmic-override={overrides.ourTeamSection}
              className={classNames(projectcss.all, sty.ourTeamSection)}
            >
              <div
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__zfZg)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__lD1V0
                    )}
                  >
                    {"Our team"}
                  </h2>
                  <div
                    data-plasmic-name={"container"}
                    data-plasmic-override={overrides.container}
                    className={classNames(projectcss.all, sty.container)}
                  >
                    <p.Stack
                      as={"div"}
                      data-plasmic-name={"row1"}
                      data-plasmic-override={overrides.row1}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.row1)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__hGoh2
                        )}
                      >
                        <PersonCard
                          className={classNames(
                            "__wab_instance",
                            sty.personCard___5FwKw
                          )}
                          image={
                            "https://old.seodapop.com/wp-content/uploads/2014/06/IMG_1822-e1502097727507.jpg" as const
                          }
                          slot={
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__mKjy5
                              )}
                            >
                              {"Founder,CEO"}
                            </div>
                          }
                          slot2={
                            <React.Fragment>
                              {true ? (
                                <p.PlasmicLink
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.a,
                                    sty.link__tY1Kc
                                  )}
                                  component={Link}
                                  href={`/`}
                                  onClick={async event => {
                                    const $steps = {};
                                    $steps["updateStateVariable"] = true
                                      ? (() => {
                                          const actionArgs = {};
                                          return __wrapUserFunction(
                                            {
                                              type: "InteractionLoc",
                                              actionName: "updateVariable",
                                              interactionUuid: "Wv3UpyYFX",
                                              componentUuid: "abE5NBu71KAaq"
                                            },
                                            () =>
                                              (({
                                                variable,
                                                value,
                                                startIndex,
                                                deleteCount
                                              }) => {
                                                const {
                                                  objRoot,
                                                  variablePath
                                                } = variable;
                                                undefined;
                                              })?.apply(null, [actionArgs]),
                                            actionArgs
                                          );
                                        })()
                                      : undefined;
                                    if (
                                      typeof $steps["updateStateVariable"] ===
                                        "object" &&
                                      typeof $steps["updateStateVariable"]
                                        .then === "function"
                                    ) {
                                      $steps["updateStateVariable"] =
                                        await __wrapUserPromise(
                                          {
                                            type: "InteractionLoc",
                                            actionName: "updateVariable",
                                            interactionUuid: "Wv3UpyYFX",
                                            componentUuid: "abE5NBu71KAaq"
                                          },
                                          $steps["updateStateVariable"]
                                        );
                                    }
                                  }}
                                  platform={"nextjs"}
                                >
                                  <IconIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg___5Ka9U
                                    )}
                                    href={"https://www.linkedin.com/" as const}
                                    link={"https://www.linkedin.com/" as const}
                                    role={"img"}
                                  />
                                </p.PlasmicLink>
                              ) : null}
                              <p.PlasmicLink
                                className={classNames(
                                  projectcss.all,
                                  projectcss.a,
                                  sty.link___1Yr2W
                                )}
                                component={Link}
                                href={`/`}
                                platform={"nextjs"}
                              >
                                <Icon2Icon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__i1NQ
                                  )}
                                  role={"img"}
                                />
                              </p.PlasmicLink>
                              <p.PlasmicLink
                                className={classNames(
                                  projectcss.all,
                                  projectcss.a,
                                  sty.link__f2Zeq
                                )}
                                component={Link}
                                href={`/`}
                                platform={"nextjs"}
                              >
                                <Icon3Icon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__gnyU
                                  )}
                                  role={"img"}
                                />
                              </p.PlasmicLink>
                            </React.Fragment>
                          }
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3___8RKh
                            )}
                          >
                            {"Hamid Tavakoli"}
                          </h3>
                        </PersonCard>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__smTbM
                        )}
                      >
                        <PersonCard
                          className={classNames(
                            "__wab_instance",
                            sty.personCard__rpcK3
                          )}
                          image={
                            "https://old.seodapop.com/wp-content/uploads/2014/06/IMG_1838-e1504506724781.jpg" as const
                          }
                          slot={"CO Founder, Vice president"}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__l8ER
                            )}
                          >
                            {"Alexandra Santana"}
                          </h3>
                        </PersonCard>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__qEaWg
                        )}
                      >
                        <PersonCard
                          className={classNames(
                            "__wab_instance",
                            sty.personCard__hcFmp
                          )}
                          image={{
                            src: "/plasmic/seodapop_main_website/images/img74B2C262B9F81Jpeg.jpg",
                            fullWidth: 1170,
                            fullHeight: 1162,
                            aspectRatio: undefined
                          }}
                          slot={"CSR"}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__g9Lm5
                            )}
                          >
                            {"Paula Pedrini"}
                          </h3>
                        </PersonCard>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__mpci7
                        )}
                      >
                        <PersonCard
                          className={classNames(
                            "__wab_instance",
                            sty.personCard__ly0Da
                          )}
                          image={{
                            src: "/plasmic/seodapop_main_website/images/_1656010876757Jpeg.jpg",
                            fullWidth: 368,
                            fullHeight: 368,
                            aspectRatio: undefined
                          }}
                          slot={"Software Engineer"}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__uy3V8
                            )}
                          >
                            {"Danny Tsui"}
                          </h3>
                        </PersonCard>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__sr3Ts
                        )}
                      >
                        <PersonCard
                          className={classNames(
                            "__wab_instance",
                            sty.personCard__aEim7
                          )}
                          image={{
                            src: "/plasmic/seodapop_main_website/images/_1680081041398Jpeg.jpg",
                            fullWidth: 800,
                            fullHeight: 800,
                            aspectRatio: undefined
                          }}
                          slot={"Software Engineer"}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3___3AgDx
                            )}
                          >
                            {"Tawhid Abdullah "}
                          </h3>
                        </PersonCard>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__aWbKt
                        )}
                      >
                        <PersonCard
                          className={classNames(
                            "__wab_instance",
                            sty.personCard__g1Osh
                          )}
                          image={{
                            src: "/plasmic/seodapop_main_website/images/downloadjpeg.jpg",
                            fullWidth: 225,
                            fullHeight: 225,
                            aspectRatio: undefined
                          }}
                          slot={"Software Engineer"}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3___3X7NE
                            )}
                          >
                            {"Hiren Shukla"}
                          </h3>
                        </PersonCard>
                      </div>
                    </p.Stack>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox__qVusq)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cbHhC)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__myY92)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__cDlj8)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2___8FWyq
                    )}
                  >
                    {"Our values"}
                  </h2>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sqhOq
                    )}
                  >
                    {
                      "Our main goal is to put quality over quantity. Every application that we make is unique and deserves unique attention as well."
                    }
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__ymT7W)}
                >
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"serviceRow"}
                    data-plasmic-override={overrides.serviceRow}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.serviceRow)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__oKiB)}
                    >
                      {true ? (
                        <ServiceValue
                          className={classNames(
                            "__wab_instance",
                            sty.serviceValue__wuOmS
                          )}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__na7PA
                            )}
                          >
                            {"Value"}
                          </h3>
                        </ServiceValue>
                      ) : null}
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__kvty5)}
                    >
                      {true ? (
                        <ServiceValue
                          className={classNames(
                            "__wab_instance",
                            sty.serviceValue__uEc21
                          )}
                          slot={
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                          }
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__yhU04
                            )}
                          >
                            {"Service"}
                          </h3>
                        </ServiceValue>
                      ) : null}
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__x38Ud)}
                    >
                      {true ? (
                        <ServiceValue
                          className={classNames(
                            "__wab_instance",
                            sty.serviceValue__iOeE
                          )}
                          slot={
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                          }
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__qjvn3
                            )}
                          >
                            {"Value"}
                          </h3>
                        </ServiceValue>
                      ) : null}
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__ryvyS)}
                    >
                      {true ? (
                        <ServiceValue
                          className={classNames(
                            "__wab_instance",
                            sty.serviceValue___3BN7B
                          )}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__fmsDi
                            )}
                          >
                            {"Value"}
                          </h3>
                        </ServiceValue>
                      ) : null}
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__vroAl)}
                    >
                      {true ? (
                        <ServiceValue
                          className={classNames(
                            "__wab_instance",
                            sty.serviceValue__htt0L
                          )}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__lmOj
                            )}
                          >
                            {"Value"}
                          </h3>
                        </ServiceValue>
                      ) : null}
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__axEty)}
                    >
                      {true ? (
                        <ServiceValue
                          className={classNames(
                            "__wab_instance",
                            sty.serviceValue__aVtly
                          )}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3___0KecH
                            )}
                          >
                            {"Value"}
                          </h3>
                        </ServiceValue>
                      ) : null}
                    </div>
                  </p.Stack>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__y8MMz)}>
            <HomeFooterTop
              data-plasmic-name={"homeFooterTop"}
              data-plasmic-override={overrides.homeFooterTop}
              className={classNames("__wab_instance", sty.homeFooterTop)}
            />
          </div>
          <FooterMain
            data-plasmic-name={"footerMain"}
            data-plasmic-override={overrides.footerMain}
            className={classNames("__wab_instance", sty.footerMain)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "aboutUsBanner",
    "foreground2",
    "h1",
    "ourTeamSection",
    "columns",
    "container",
    "row1",
    "serviceRow",
    "homeFooterTop",
    "footerMain"
  ],
  aboutUsBanner: ["aboutUsBanner", "foreground2", "h1"],
  foreground2: ["foreground2", "h1"],
  h1: ["h1"],
  ourTeamSection: ["ourTeamSection", "columns", "container", "row1"],
  columns: ["columns", "container", "row1"],
  container: ["container", "row1"],
  row1: ["row1"],
  serviceRow: ["serviceRow"],
  homeFooterTop: ["homeFooterTop"],
  footerMain: ["footerMain"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  aboutUsBanner: "div";
  foreground2: "div";
  h1: "h1";
  ourTeamSection: "div";
  columns: "div";
  container: "div";
  row1: "div";
  serviceRow: "div";
  homeFooterTop: typeof HomeFooterTop;
  footerMain: typeof FooterMain;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAboutUs__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAboutUs__VariantsArgs;
    args?: PlasmicAboutUs__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAboutUs__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAboutUs__ArgsType,
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
          internalArgPropNames: PlasmicAboutUs__ArgProps,
          internalVariantPropNames: PlasmicAboutUs__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAboutUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAboutUs";
  } else {
    func.displayName = `PlasmicAboutUs.${nodeName}`;
  }
  return func;
}

export const PlasmicAboutUs = Object.assign(
  // Top-level PlasmicAboutUs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    aboutUsBanner: makeNodeComponent("aboutUsBanner"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    ourTeamSection: makeNodeComponent("ourTeamSection"),
    columns: makeNodeComponent("columns"),
    container: makeNodeComponent("container"),
    row1: makeNodeComponent("row1"),
    serviceRow: makeNodeComponent("serviceRow"),
    homeFooterTop: makeNodeComponent("homeFooterTop"),
    footerMain: makeNodeComponent("footerMain"),

    // Metadata about props expected for PlasmicAboutUs
    internalVariantProps: PlasmicAboutUs__VariantProps,
    internalArgProps: PlasmicAboutUs__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "About Us",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAboutUs;
/* prettier-ignore-end */

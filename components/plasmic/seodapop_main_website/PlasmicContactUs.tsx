// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eSHiknYGb4WLC3QGLYLFnQ
// Component: eO_Tuq4B0ZmZFE

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
import TextInput from "../../TextInput"; // plasmic-import: SaP3xqfQev-ptP/component
import Button from "../../Button"; // plasmic-import: mOwRf0tmmKT0O/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: Qr2f3ugv3a/codeComponent
import HomeFooterTop from "../../HomeFooterTop"; // plasmic-import: Sh8nt7GR3decD/component
import FooterMain from "../../FooterMain"; // plasmic-import: I_5el5M-Bk81Xi/component

import { useScreenVariants as useScreenVariantspgBiFjijh7ROsO } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: PgBiFjijh7ROsO/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_seodapop_main_website.module.css"; // plasmic-import: eSHiknYGb4WLC3QGLYLFnQ/projectcss
import sty from "./PlasmicContactUs.module.css"; // plasmic-import: eO_Tuq4B0ZmZFE/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: t-AVM4cittjWAE/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: -xNTt_1SqG6hDH/icon

export type PlasmicContactUs__VariantMembers = {};
export type PlasmicContactUs__VariantsArgs = {};
type VariantPropType = keyof PlasmicContactUs__VariantsArgs;
export const PlasmicContactUs__VariantProps = new Array<VariantPropType>();

export type PlasmicContactUs__ArgsType = {};
type ArgPropType = keyof PlasmicContactUs__ArgsType;
export const PlasmicContactUs__ArgProps = new Array<ArgPropType>();

export type PlasmicContactUs__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  banner?: p.Flex<"div">;
  foreground2?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  clientsSection5?: p.Flex<"div">;
  formWrapper?: p.Flex<"div">;
  name?: p.Flex<typeof TextInput>;
  svg?: p.Flex<"svg">;
  name2?: p.Flex<typeof TextInput>;
  name4?: p.Flex<typeof TextInput>;
  textarea?: p.Flex<"textarea">;
  button?: p.Flex<typeof Button>;
  dataFetcher?: p.Flex<typeof Fetcher>;
  footerTopSection?: p.Flex<"div">;
  homeFooterTop?: p.Flex<typeof HomeFooterTop>;
  footerMain?: p.Flex<typeof FooterMain>;
};

export interface DefaultContactUsProps {}

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

function PlasmicContactUs__RenderFunc(props: {
  variants: PlasmicContactUs__VariantsArgs;
  args: PlasmicContactUs__ArgsType;
  overrides: PlasmicContactUs__OverridesType;
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

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "name.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },
      {
        path: "name2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },
      {
        path: "name3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },
      {
        path: "name3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },
      {
        path: "name4.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspgBiFjijh7ROsO()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicContactUs.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicContactUs.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicContactUs.pageMetadata.title}
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"banner"}
            data-plasmic-override={overrides.banner}
            className={classNames(projectcss.all, sty.banner)}
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
                className={classNames(projectcss.all, sty.freeBox__c6C4L)}
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
                    ? "Contact us"
                    : "Contact us"}
                </h1>
              </p.Stack>
            </p.Stack>
          </div>
          {true ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"clientsSection5"}
              data-plasmic-override={overrides.clientsSection5}
              hasGap={true}
              className={classNames(projectcss.all, sty.clientsSection5)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__aCk00)}
              >
                <div
                  className={classNames(projectcss.all, sty.columns___7ArkB)}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__gpMvd)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__zvshR
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "sm")
                        ? "Proactively architect worldwide sources, then globally implement enabled  users, then collaboratively innovate unique expertise, then continually  strategize excellent markets."
                        : "We would be delighted to assist you in any way possible. Please don't hesitate to reach out to us via phone or email, and we'll promptly respond to discuss how we can be of service. We look forward to hearing from you!"}
                    </div>
                  </div>
                  <div className={classNames(projectcss.all, sty.column__mK7S)}>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.columns__zOtG)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__h7SRr
                        )}
                      >
                        <div
                          data-plasmic-name={"formWrapper"}
                          data-plasmic-override={overrides.formWrapper}
                          className={classNames(
                            projectcss.all,
                            sty.formWrapper
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.columns__cub3O
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column___1IsIx
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__wpijf
                                )}
                              >
                                {"First name"}
                              </div>
                              {true ? (
                                <TextInput
                                  data-plasmic-name={"name"}
                                  data-plasmic-override={overrides.name}
                                  className={classNames(
                                    "__wab_instance",
                                    sty.name
                                  )}
                                  endIcon={
                                    true ? (
                                      <ChecksvgIcon
                                        data-plasmic-name={"svg"}
                                        data-plasmic-override={overrides.svg}
                                        className={classNames(
                                          projectcss.all,
                                          sty.svg
                                        )}
                                        role={"img"}
                                      />
                                    ) : null
                                  }
                                  onChange={(...eventArgs) => {
                                    p.generateStateOnChangeProp($state, [
                                      "name",
                                      "value"
                                    ])(
                                      (e => e.target?.value).apply(
                                        null,
                                        eventArgs
                                      )
                                    );
                                  }}
                                  placeholder={"" as const}
                                  value={
                                    p.generateStateValueProp($state, [
                                      "name",
                                      "value"
                                    ]) ?? ""
                                  }
                                />
                              ) : null}
                            </div>
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__bBhr5
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__y70Dj
                                )}
                              >
                                {"Last name"}
                              </div>
                              <TextInput
                                data-plasmic-name={"name2"}
                                data-plasmic-override={overrides.name2}
                                className={classNames(
                                  "__wab_instance",
                                  sty.name2
                                )}
                                onChange={(...eventArgs) => {
                                  p.generateStateOnChangeProp($state, [
                                    "name2",
                                    "value"
                                  ])(
                                    (e => e.target?.value).apply(
                                      null,
                                      eventArgs
                                    )
                                  );
                                }}
                                placeholder={"" as const}
                                value={
                                  p.generateStateValueProp($state, [
                                    "name2",
                                    "value"
                                  ]) ?? ""
                                }
                              />
                            </div>
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.columns__rNKh
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__fGmZn
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__laG5H
                                )}
                              >
                                {"Email address"}
                              </div>
                              <TextInput
                                className={classNames(
                                  "__wab_instance",
                                  sty.textInput__uExu
                                )}
                                onChange={(...eventArgs) => {
                                  p.generateStateOnChangeProp($state, [
                                    "name3",
                                    "value"
                                  ])(
                                    (e => e.target?.value).apply(
                                      null,
                                      eventArgs
                                    )
                                  );
                                }}
                                placeholder={"" as const}
                                value={
                                  p.generateStateValueProp($state, [
                                    "name3",
                                    "value"
                                  ]) ?? ""
                                }
                              />
                            </div>
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__jbLlX
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__uImjT
                                )}
                              >
                                {"Phone number"}
                              </div>
                              <TextInput
                                className={classNames(
                                  "__wab_instance",
                                  sty.textInput__pVtVj
                                )}
                                onChange={(...eventArgs) => {
                                  p.generateStateOnChangeProp($state, [
                                    "name3",
                                    "value"
                                  ])(
                                    (e => e.target?.value).apply(
                                      null,
                                      eventArgs
                                    )
                                  );
                                }}
                                placeholder={"" as const}
                                value={
                                  p.generateStateValueProp($state, [
                                    "name3",
                                    "value"
                                  ]) ?? ""
                                }
                              />
                            </div>
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.columns__e8LZ5
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__yu2X
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__ff9Mw
                                )}
                              >
                                {"Company"}
                              </div>
                              <TextInput
                                data-plasmic-name={"name4"}
                                data-plasmic-override={overrides.name4}
                                className={classNames(
                                  "__wab_instance",
                                  sty.name4
                                )}
                                onChange={(...eventArgs) => {
                                  p.generateStateOnChangeProp($state, [
                                    "name4",
                                    "value"
                                  ])(
                                    (e => e.target?.value).apply(
                                      null,
                                      eventArgs
                                    )
                                  );
                                }}
                                placeholder={"" as const}
                                value={
                                  p.generateStateValueProp($state, [
                                    "name4",
                                    "value"
                                  ]) ?? ""
                                }
                              />
                            </div>
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.columns__dh7Gj
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__cxPr9
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__w5CjH
                                )}
                              >
                                {"Message"}
                              </div>
                              <textarea
                                data-plasmic-name={"textarea"}
                                data-plasmic-override={overrides.textarea}
                                className={classNames(
                                  projectcss.all,
                                  projectcss.textarea,
                                  sty.textarea
                                )}
                                value={"" as const}
                              />

                              {true ? (
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox___3RN
                                  )}
                                >
                                  <Button
                                    data-plasmic-name={"button"}
                                    data-plasmic-override={overrides.button}
                                    className={classNames(
                                      "__wab_instance",
                                      sty.button
                                    )}
                                    submitsForm={true}
                                  >
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text__kfY8L
                                      )}
                                    >
                                      {"Submit"}
                                    </div>
                                  </Button>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__ubxE0
                        )}
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2__xmmJb
                          )}
                        >
                          {"Address"}
                        </h2>
                        {true ? (
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__dXRaX
                            )}
                          >
                            <Fetcher
                              data-plasmic-name={"dataFetcher"}
                              data-plasmic-override={overrides.dataFetcher}
                              className={classNames(
                                "__wab_instance",
                                sty.dataFetcher
                              )}
                              dataOp={{
                                sourceId: "c9K6QXuqsPMk9CDgad3y6g",
                                opId: "a98bd9bf-31a8-4f97-8c0e-a4cc6743cd1f",
                                userArgs: {},
                                cacheKey: "plasmic.$.HbdkyFqu3.$.",
                                invalidatedKeys: null,
                                roleId: null
                              }}
                              name={"GooglePlace" as const}
                              queries={$queries}
                            >
                              {($queries: any) => (
                                <React.Fragment>
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__gaXe3
                                    )}
                                  >
                                    <div
                                      className={
                                        projectcss.__wab_expr_html_text
                                      }
                                      dangerouslySetInnerHTML={{
                                        __html: (() => {
                                          try {
                                            return $queries.GooglePlace.data
                                              .response.result.adr_address;
                                          } catch (e) {
                                            if (
                                              e instanceof TypeError ||
                                              e?.plasmicType ===
                                                "PlasmicUndefinedDataError"
                                            ) {
                                              return "1234 Lorem Ipsum .\nLorem Ipsum , GA 30308\n1234567890";
                                            }
                                            throw e;
                                          }
                                        })()
                                      }}
                                    />
                                  </div>
                                  <h2
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.h2,
                                      projectcss.__wab_text,
                                      sty.h2__sCj8V
                                    )}
                                  >
                                    {"Hours Of operation"}
                                  </h2>
                                  {(
                                    (() => {
                                      try {
                                        return [0, 1, 2, 3, 4, 5, 6];
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return [];
                                        }
                                        throw e;
                                      }
                                    })() ?? []
                                  ).map((currentItem, currentIndex) => (
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text__a8Vnf
                                      )}
                                      key={currentIndex}
                                    >
                                      {(() => {
                                        try {
                                          return $queries.GooglePlace.data
                                            .response.result
                                            .current_opening_hours.weekday_text[
                                            currentIndex
                                          ];
                                        } catch (e) {
                                          if (
                                            e instanceof TypeError ||
                                            e?.plasmicType ===
                                              "PlasmicUndefinedDataError"
                                          ) {
                                            return "1234 Lorem Ipsum .\nLorem Ipsum , GA 30308\n1234567890";
                                          }
                                          throw e;
                                        }
                                      })()}
                                    </div>
                                  ))}
                                </React.Fragment>
                              )}
                            </Fetcher>
                          </p.Stack>
                        ) : null}
                      </div>
                    </p.Stack>
                  </div>
                </div>
              </p.Stack>
            </p.Stack>
          ) : null}
          <div
            data-plasmic-name={"footerTopSection"}
            data-plasmic-override={overrides.footerTopSection}
            className={classNames(projectcss.all, sty.footerTopSection)}
          >
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

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___7ZuaH
            )}
          >
            {(() => {
              try {
                return `Powered by seodaPop copyright © ${new Date().getFullYear()}`;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "Enter some text";
                }
                throw e;
              }
            })()}
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "banner",
    "foreground2",
    "h1",
    "clientsSection5",
    "formWrapper",
    "name",
    "svg",
    "name2",
    "name4",
    "textarea",
    "button",
    "dataFetcher",
    "footerTopSection",
    "homeFooterTop",
    "footerMain"
  ],
  header: ["header"],
  banner: ["banner", "foreground2", "h1"],
  foreground2: ["foreground2", "h1"],
  h1: ["h1"],
  clientsSection5: [
    "clientsSection5",
    "formWrapper",
    "name",
    "svg",
    "name2",
    "name4",
    "textarea",
    "button",
    "dataFetcher"
  ],
  formWrapper: [
    "formWrapper",
    "name",
    "svg",
    "name2",
    "name4",
    "textarea",
    "button"
  ],
  name: ["name", "svg"],
  svg: ["svg"],
  name2: ["name2"],
  name4: ["name4"],
  textarea: ["textarea"],
  button: ["button"],
  dataFetcher: ["dataFetcher"],
  footerTopSection: ["footerTopSection", "homeFooterTop"],
  homeFooterTop: ["homeFooterTop"],
  footerMain: ["footerMain"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  banner: "div";
  foreground2: "div";
  h1: "h1";
  clientsSection5: "div";
  formWrapper: "div";
  name: typeof TextInput;
  svg: "svg";
  name2: typeof TextInput;
  name4: typeof TextInput;
  textarea: "textarea";
  button: typeof Button;
  dataFetcher: typeof Fetcher;
  footerTopSection: "div";
  homeFooterTop: typeof HomeFooterTop;
  footerMain: typeof FooterMain;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContactUs__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContactUs__VariantsArgs;
    args?: PlasmicContactUs__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContactUs__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContactUs__ArgsType,
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
          internalArgPropNames: PlasmicContactUs__ArgProps,
          internalVariantPropNames: PlasmicContactUs__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactUs";
  } else {
    func.displayName = `PlasmicContactUs.${nodeName}`;
  }
  return func;
}

export const PlasmicContactUs = Object.assign(
  // Top-level PlasmicContactUs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    banner: makeNodeComponent("banner"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    clientsSection5: makeNodeComponent("clientsSection5"),
    formWrapper: makeNodeComponent("formWrapper"),
    _name: makeNodeComponent("name"),
    svg: makeNodeComponent("svg"),
    name2: makeNodeComponent("name2"),
    name4: makeNodeComponent("name4"),
    textarea: makeNodeComponent("textarea"),
    button: makeNodeComponent("button"),
    dataFetcher: makeNodeComponent("dataFetcher"),
    footerTopSection: makeNodeComponent("footerTopSection"),
    homeFooterTop: makeNodeComponent("homeFooterTop"),
    footerMain: makeNodeComponent("footerMain"),

    // Metadata about props expected for PlasmicContactUs
    internalVariantProps: PlasmicContactUs__VariantProps,
    internalArgProps: PlasmicContactUs__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Contact",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContactUs;
/* prettier-ignore-end */

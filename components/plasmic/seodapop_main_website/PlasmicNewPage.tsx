// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eSHiknYGb4WLC3QGLYLFnQ
// Component: XjHhZd1_gck

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
import HomeFooterTop from "../../HomeFooterTop"; // plasmic-import: Sh8nt7GR3decD/component
import FooterMain from "../../FooterMain"; // plasmic-import: I_5el5M-Bk81Xi/component

import { useScreenVariants as useScreenVariantspgBiFjijh7ROsO } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: PgBiFjijh7ROsO/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_seodapop_main_website.module.css"; // plasmic-import: eSHiknYGb4WLC3QGLYLFnQ/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: XjHhZd1_gck/css

import Icon29Icon from "./icons/PlasmicIcon__Icon29"; // plasmic-import: 6Qw7--xFaSy2Vf/icon

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
  foreground2?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  homeFooterTop?: p.Flex<typeof HomeFooterTop>;
  footerMain?: p.Flex<typeof FooterMain>;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspgBiFjijh7ROsO()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicNewPage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicNewPage.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicNewPage.pageMetadata.title}
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
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__hfnEr)}>
              <div className={classNames(projectcss.all, sty.freeBox__sNp7)}>
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
                    className={classNames(projectcss.all, sty.freeBox__hf1GY)}
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
                        ? "We are the Business and Consulting Expert"
                        : "We help solve problems."}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__fofEp
                      )}
                    >
                      {
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                      }
                    </div>
                  </p.Stack>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__pheoa)}
                  >
                    <p.Stack
                      as={"button"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        projectcss.button,
                        sty.button__imgrm
                      )}
                    >
                      {false ? (
                        <Icon29Icon
                          className={classNames(projectcss.all, sty.svg__wlX5C)}
                          role={"img"}
                        />
                      ) : null}
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__huFt
                        )}
                      >
                        {"Get IN Touch"}
                      </div>
                      {false ? (
                        <Icon29Icon
                          className={classNames(projectcss.all, sty.svg__r2Nd)}
                          role={"img"}
                        />
                      ) : null}
                    </p.Stack>
                  </p.Stack>
                </p.Stack>
              </div>
            </div>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox__w48Ht)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__eiqLu)}
            >
              <div className={classNames(projectcss.all, sty.column__umXba)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__fmrXb)}
                  displayHeight={
                    hasVariant(globalVariants, "screen", "sm")
                      ? ("237px" as const)
                      : ("100%" as const)
                  }
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  loading={"lazy" as const}
                  src={
                    "https://seodapop.com/wp-content/uploads/2018/05/bigstock-Portrait-Of-Busy-Young-It-Pers-214910200.jpg" as const
                  }
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__zr2E4)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__fuQtv)}
                  displayHeight={
                    hasVariant(globalVariants, "screen", "sm")
                      ? ("292px" as const)
                      : ("100%" as const)
                  }
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  loading={"lazy" as const}
                  src={
                    "https://seodapop.com/wp-content/uploads/2018/12/darkenned-med.png" as const
                  }
                />
              </div>
              <div className={classNames(projectcss.all, sty.column___0XmD0)}>
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__nZT)}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__rRu1E
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "sm")
                        ? "About us"
                        : "Count on us for any web project"}
                    </h2>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___79ByA
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "md")
                        ? "With over 30 years of combined experience in the field we will help you achieve your goals and surpass your expectations. Our expertise includes: Web Development, Web Service Integration, Comprehensive Digital Solutions, Managed Servers, Marketing Services, Creative Design, and much more. Come and meet the masterminds behind it all.\n"
                        : "With over 30 years of combined experience in the field we will help you achieve your goals and surpass your expectations. Our expertise includes: Web Development, Web Service Integration, Comprehensive Digital Solutions, Managed Servers, Marketing Services, Creative Design, and much more. Come and meet the masterminds behind it all.\n"}
                    </div>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__tg6TZ)}
                    >
                      <p.Stack
                        as={"button"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          projectcss.button,
                          sty.button__iYhTt
                        )}
                      >
                        {false ? (
                          <Icon29Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__qpuW3
                            )}
                            role={"img"}
                          />
                        ) : null}
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___9Kz91
                          )}
                        >
                          {"Read More"}
                        </div>
                        {false ? (
                          <Icon29Icon
                            className={classNames(
                              projectcss.all,
                              sty.svg__hwyjy
                            )}
                            role={"img"}
                          />
                        ) : null}
                      </p.Stack>
                    </p.Stack>
                  </p.Stack>
                ) : null}
              </div>
            </p.Stack>
          </div>
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__bkXj6)}>
              <div className={classNames(projectcss.all, sty.freeBox__wJpjw)}>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.columns__hoIsw)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.column__u20W)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__n5HaS)}
                    >
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__yPugl
                        )}
                      >
                        {"Strategize"}
                      </h2>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__tyhmI
                        )}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fSrOn
                        )}
                      >
                        {
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }
                      </div>
                    </p.Stack>
                  </p.Stack>
                  <div
                    className={classNames(projectcss.all, sty.column___7CTp)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___8GP21
                      )}
                    >
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__gTBm3
                        )}
                      >
                        {"Innovate"}
                      </h2>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__uxjQh
                        )}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__tgQm4
                        )}
                      >
                        {
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }
                      </div>
                    </p.Stack>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__drdDt)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___8M1Kr
                      )}
                    >
                      <h2
                        className={classNames(
                          projectcss.all,
                          projectcss.h2,
                          projectcss.__wab_text,
                          sty.h2__aVfCa
                        )}
                      >
                        {"Grow"}
                      </h2>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__pxW9W
                        )}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__n0VF4
                        )}
                      >
                        {
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        }
                      </div>
                    </p.Stack>
                  </div>
                </p.Stack>
              </div>
            </div>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox__bVlcr)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__wKaK3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__kl7Cj)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__lUzkk)}
                  displayHeight={"140px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"140px" as const}
                  src={{
                    src: "/plasmic/seodapop_main_website/images/imagesjpg.jpg",
                    fullWidth: 225,
                    fullHeight: 225,
                    aspectRatio: undefined
                  }}
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__liVCm)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gArUg
                    )}
                  >
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    }
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___0E6SN)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__dSfAs)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ez99J)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__liLjy
                        )}
                      >
                        {"Lorem Ipsum"}
                      </div>
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__uow9M
                      )}
                    >
                      {"Director of Sales"}
                    </div>
                  </p.Stack>
                </p.Stack>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__efn96)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__cwATt)}
                  displayHeight={"140px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"140px" as const}
                  src={
                    "https://seodapop.com/wp-content/uploads/2017/01/Screenshot-from-2017-08-09-13-50-22.png" as const
                  }
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__s8Z8E)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__waqOp
                    )}
                  >
                    {
                      "Seodapop is one of the sharpest young guys I know and is computer programing skills are second to none I can't believe how professional and talented he is. He built me a Web site at a very very competitive price and he was able to do things I didn't think we're possible. This kid is a real computer whiz and that even doesn't describe it enough I will continue to use him for all my business ventures I have referred him numerous times to other business owners which is something I don't do lightly he really can step up to the plate thanks Seodapop for everything you've done and look forward to working with you in the future keep up that great work Ethic"
                    }
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__g19Ig)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__eyGl)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__pho00)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__vJxmB
                        )}
                      >
                        {"Mark G."}
                      </div>
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__roFpc
                      )}
                    >
                      {"Director of Marketing"}
                    </div>
                  </p.Stack>
                </p.Stack>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___3GQjW)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___8U3Bp)}
                  displayHeight={"140px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"none" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"140px" as const}
                  src={
                    "https://seodapop.com/wp-content/uploads/2017/01/Aubree.png" as const
                  }
                />

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__mxQdU)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__orLrp
                    )}
                  >
                    {
                      "Our Company has now used Seodapop for two different Websites as we have expanded and changed names. We have been extremely happy with their work. They have proven to be flexible, detail oriented and consistent in every request . I would recommend working with Seodapop to anyone looking to create or revamp their website."
                    }
                  </div>
                </p.Stack>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__mTaW5)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___901Ok)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__fIkjv)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__kobj
                        )}
                      >
                        {"Aubree h."}
                      </div>
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nrTr1
                      )}
                    >
                      {"Office Manager,Progressive Contractor Inc."}
                    </div>
                  </p.Stack>
                </p.Stack>
              </p.Stack>
            </p.Stack>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__gIpRa)}>
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__mkzmz)} />
            ) : null}
          </div>
          <HomeFooterTop
            data-plasmic-name={"homeFooterTop"}
            data-plasmic-override={overrides.homeFooterTop}
            className={classNames("__wab_instance", sty.homeFooterTop)}
          />

          {true ? (
            <FooterMain
              data-plasmic-name={"footerMain"}
              data-plasmic-override={overrides.footerMain}
              className={classNames("__wab_instance", sty.footerMain)}
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "foreground2", "h1", "homeFooterTop", "footerMain"],
  header: ["header"],
  foreground2: ["foreground2", "h1"],
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
  foreground2: "div";
  h1: "h1";
  homeFooterTop: typeof HomeFooterTop;
  footerMain: typeof FooterMain;
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
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    homeFooterTop: makeNodeComponent("homeFooterTop"),
    footerMain: makeNodeComponent("footerMain"),

    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Web application development",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */

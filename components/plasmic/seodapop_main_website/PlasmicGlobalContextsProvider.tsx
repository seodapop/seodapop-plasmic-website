// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eSHiknYGb4WLC3QGLYLFnQ

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { WordpressProvider } from "@plasmicpkgs/plasmic-wordpress"; // plasmic-import: ABVULPU3AuC/codeComponent
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider"; // plasmic-import: DmrLLHGTjGTE/codeComponent
import { SanityCredentialsProvider } from "@plasmicpkgs/plasmic-sanity-io"; // plasmic-import: XenoJpDQeDb/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  wordpressProviderProps?: Partial<
    Omit<React.ComponentProps<typeof WordpressProvider>, "children">
  >;
  antdConfigProviderProps?: Partial<
    Omit<React.ComponentProps<typeof AntdConfigProvider>, "children">
  >;
  sanityCredentialsProviderProps?: Partial<
    Omit<React.ComponentProps<typeof SanityCredentialsProvider>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const {
    children,
    wordpressProviderProps,
    antdConfigProviderProps,
    sanityCredentialsProviderProps
  } = props;

  return (
    <WordpressProvider
      {...wordpressProviderProps}
      wordpressUrl={
        wordpressProviderProps && "wordpressUrl" in wordpressProviderProps
          ? wordpressProviderProps.wordpressUrl!
          : ("https://old.seodapop.com" as const)
      }
    >
      <AntdConfigProvider
        {...antdConfigProviderProps}
        borderRadius={
          antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
            ? antdConfigProviderProps.borderRadius!
            : (6 as const)
        }
        colorBgBase={
          antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
            ? antdConfigProviderProps.colorBgBase!
            : ("#ffffff" as const)
        }
        colorError={
          antdConfigProviderProps && "colorError" in antdConfigProviderProps
            ? antdConfigProviderProps.colorError!
            : ("#ff4d4f" as const)
        }
        colorInfo={
          antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
            ? antdConfigProviderProps.colorInfo!
            : ("#1677ff" as const)
        }
        colorPrimary={
          antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
            ? antdConfigProviderProps.colorPrimary!
            : ("#1677ff" as const)
        }
        colorSuccess={
          antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
            ? antdConfigProviderProps.colorSuccess!
            : ("#52c41a" as const)
        }
        colorWarning={
          antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
            ? antdConfigProviderProps.colorWarning!
            : ("#faad14" as const)
        }
        controlHeight={
          antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
            ? antdConfigProviderProps.controlHeight!
            : (32 as const)
        }
        lineWidth={
          antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
            ? antdConfigProviderProps.lineWidth!
            : (1 as const)
        }
        sizeStep={
          antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeStep!
            : (4 as const)
        }
        sizeUnit={
          antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
            ? antdConfigProviderProps.sizeUnit!
            : (4 as const)
        }
        themeStyles={
          antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
            ? antdConfigProviderProps.themeStyles!
            : true
            ? {
                fontFamily: "Inria Sans",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "1.7",
                color: "#535353",
                letterSpacing: "normal"
              }
            : undefined
        }
        wireframe={
          antdConfigProviderProps && "wireframe" in antdConfigProviderProps
            ? antdConfigProviderProps.wireframe!
            : false
        }
      >
        <SanityCredentialsProvider
          {...sanityCredentialsProviderProps}
          apiVersion={
            sanityCredentialsProviderProps &&
            "apiVersion" in sanityCredentialsProviderProps
              ? sanityCredentialsProviderProps.apiVersion!
              : ("2023-05-10" as const)
          }
          dataset={
            sanityCredentialsProviderProps &&
            "dataset" in sanityCredentialsProviderProps
              ? sanityCredentialsProviderProps.dataset!
              : ("production" as const)
          }
          projectId={
            sanityCredentialsProviderProps &&
            "projectId" in sanityCredentialsProviderProps
              ? sanityCredentialsProviderProps.projectId!
              : ("lj78j8wf" as const)
          }
          token={
            sanityCredentialsProviderProps &&
            "token" in sanityCredentialsProviderProps
              ? sanityCredentialsProviderProps.token!
              : undefined
          }
          useCdn={
            sanityCredentialsProviderProps &&
            "useCdn" in sanityCredentialsProviderProps
              ? sanityCredentialsProviderProps.useCdn!
              : undefined
          }
        >
          {children}
        </SanityCredentialsProvider>
      </AntdConfigProvider>
    </WordpressProvider>
  );
}
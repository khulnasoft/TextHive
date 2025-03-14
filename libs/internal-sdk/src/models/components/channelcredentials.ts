/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ChannelCredentials = {
  /**
   * Webhook URL used by chat app integrations. The webhook should be obtained from the chat app provider.
   */
  webhookUrl?: string | undefined;
  /**
   * Channel specification for Mattermost chat notifications.
   */
  channel?: string | undefined;
  /**
   * Contains an array of the subscriber device tokens for a given provider. Used on Push integrations.
   */
  deviceTokens?: Array<string> | undefined;
  /**
   * Alert UID for Grafana on-call webhook payload.
   */
  alertUid?: string | undefined;
  /**
   * Title to be used with Grafana on-call webhook.
   */
  title?: string | undefined;
  /**
   * Image URL property for Grafana on-call webhook.
   */
  imageUrl?: string | undefined;
  /**
   * State property for Grafana on-call webhook.
   */
  state?: string | undefined;
  /**
   * Link to upstream details property for Grafana on-call webhook.
   */
  externalUrl?: string | undefined;
};

/** @internal */
export const ChannelCredentials$inboundSchema: z.ZodType<
  ChannelCredentials,
  z.ZodTypeDef,
  unknown
> = z.object({
  webhookUrl: z.string().optional(),
  channel: z.string().optional(),
  deviceTokens: z.array(z.string()).optional(),
  alertUid: z.string().optional(),
  title: z.string().optional(),
  imageUrl: z.string().optional(),
  state: z.string().optional(),
  externalUrl: z.string().optional(),
});

/** @internal */
export type ChannelCredentials$Outbound = {
  webhookUrl?: string | undefined;
  channel?: string | undefined;
  deviceTokens?: Array<string> | undefined;
  alertUid?: string | undefined;
  title?: string | undefined;
  imageUrl?: string | undefined;
  state?: string | undefined;
  externalUrl?: string | undefined;
};

/** @internal */
export const ChannelCredentials$outboundSchema: z.ZodType<
  ChannelCredentials$Outbound,
  z.ZodTypeDef,
  ChannelCredentials
> = z.object({
  webhookUrl: z.string().optional(),
  channel: z.string().optional(),
  deviceTokens: z.array(z.string()).optional(),
  alertUid: z.string().optional(),
  title: z.string().optional(),
  imageUrl: z.string().optional(),
  state: z.string().optional(),
  externalUrl: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChannelCredentials$ {
  /** @deprecated use `ChannelCredentials$inboundSchema` instead. */
  export const inboundSchema = ChannelCredentials$inboundSchema;
  /** @deprecated use `ChannelCredentials$outboundSchema` instead. */
  export const outboundSchema = ChannelCredentials$outboundSchema;
  /** @deprecated use `ChannelCredentials$Outbound` instead. */
  export type Outbound = ChannelCredentials$Outbound;
}

export function channelCredentialsToJSON(
  channelCredentials: ChannelCredentials,
): string {
  return JSON.stringify(
    ChannelCredentials$outboundSchema.parse(channelCredentials),
  );
}

export function channelCredentialsFromJSON(
  jsonString: string,
): SafeParseResult<ChannelCredentials, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ChannelCredentials$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ChannelCredentials' from JSON`,
  );
}

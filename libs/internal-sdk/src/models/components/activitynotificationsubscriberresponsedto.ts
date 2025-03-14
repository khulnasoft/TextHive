/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ActivityNotificationSubscriberResponseDto = {
  /**
   * First name of the subscriber
   */
  firstName?: string | undefined;
  /**
   * External unique identifier of the subscriber
   */
  subscriberId: string;
  /**
   * Internal to Novu unique identifier of the subscriber
   */
  id: string;
  /**
   * Last name of the subscriber
   */
  lastName?: string | undefined;
  /**
   * Email address of the subscriber
   */
  email?: string | undefined;
  /**
   * Phone number of the subscriber
   */
  phone?: string | undefined;
};

/** @internal */
export const ActivityNotificationSubscriberResponseDto$inboundSchema: z.ZodType<
  ActivityNotificationSubscriberResponseDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  firstName: z.string().optional(),
  subscriberId: z.string(),
  _id: z.string(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
  });
});

/** @internal */
export type ActivityNotificationSubscriberResponseDto$Outbound = {
  firstName?: string | undefined;
  subscriberId: string;
  _id: string;
  lastName?: string | undefined;
  email?: string | undefined;
  phone?: string | undefined;
};

/** @internal */
export const ActivityNotificationSubscriberResponseDto$outboundSchema:
  z.ZodType<
    ActivityNotificationSubscriberResponseDto$Outbound,
    z.ZodTypeDef,
    ActivityNotificationSubscriberResponseDto
  > = z.object({
    firstName: z.string().optional(),
    subscriberId: z.string(),
    id: z.string(),
    lastName: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      id: "_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ActivityNotificationSubscriberResponseDto$ {
  /** @deprecated use `ActivityNotificationSubscriberResponseDto$inboundSchema` instead. */
  export const inboundSchema =
    ActivityNotificationSubscriberResponseDto$inboundSchema;
  /** @deprecated use `ActivityNotificationSubscriberResponseDto$outboundSchema` instead. */
  export const outboundSchema =
    ActivityNotificationSubscriberResponseDto$outboundSchema;
  /** @deprecated use `ActivityNotificationSubscriberResponseDto$Outbound` instead. */
  export type Outbound = ActivityNotificationSubscriberResponseDto$Outbound;
}

export function activityNotificationSubscriberResponseDtoToJSON(
  activityNotificationSubscriberResponseDto:
    ActivityNotificationSubscriberResponseDto,
): string {
  return JSON.stringify(
    ActivityNotificationSubscriberResponseDto$outboundSchema.parse(
      activityNotificationSubscriberResponseDto,
    ),
  );
}

export function activityNotificationSubscriberResponseDtoFromJSON(
  jsonString: string,
): SafeParseResult<
  ActivityNotificationSubscriberResponseDto,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ActivityNotificationSubscriberResponseDto$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ActivityNotificationSubscriberResponseDto' from JSON`,
  );
}

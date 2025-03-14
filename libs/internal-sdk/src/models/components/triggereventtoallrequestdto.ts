/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SubscriberPayloadDto,
  SubscriberPayloadDto$inboundSchema,
  SubscriberPayloadDto$Outbound,
  SubscriberPayloadDto$outboundSchema,
} from "./subscriberpayloaddto.js";
import {
  TenantPayloadDto,
  TenantPayloadDto$inboundSchema,
  TenantPayloadDto$Outbound,
  TenantPayloadDto$outboundSchema,
} from "./tenantpayloaddto.js";

/**
 * This could be used to override provider specific configurations
 */
export type TriggerEventToAllRequestDtoOverrides = {};

/**
 * It is used to display the Avatar of the provided actor's subscriber id or actor object.
 *
 * @remarks
 *     If a new actor object is provided, we will create a new subscriber in our system
 */
export type Actor = SubscriberPayloadDto | string;

/**
 * It is used to specify a tenant context during trigger event.
 *
 * @remarks
 *     If a new tenant object is provided, we will create a new tenant.
 */
export type Tenant = TenantPayloadDto | string;

export type TriggerEventToAllRequestDto = {
  /**
   * The trigger identifier associated for the template you wish to send. This identifier can be found on the template page.
   */
  name: string;
  /**
   * The payload object is used to pass additional information that
   *
   * @remarks
   *     could be used to render the template, or perform routing rules based on it.
   *       For In-App channel, payload data are also available in <Inbox />
   */
  payload: { [k: string]: any };
  /**
   * This could be used to override provider specific configurations
   */
  overrides?: TriggerEventToAllRequestDtoOverrides | undefined;
  /**
   * A unique identifier for this transaction, we will generated a UUID if not provided.
   */
  transactionId?: string | undefined;
  /**
   * It is used to display the Avatar of the provided actor's subscriber id or actor object.
   *
   * @remarks
   *     If a new actor object is provided, we will create a new subscriber in our system
   */
  actor?: SubscriberPayloadDto | string | undefined;
  /**
   * It is used to specify a tenant context during trigger event.
   *
   * @remarks
   *     If a new tenant object is provided, we will create a new tenant.
   */
  tenant?: TenantPayloadDto | string | undefined;
};

/** @internal */
export const TriggerEventToAllRequestDtoOverrides$inboundSchema: z.ZodType<
  TriggerEventToAllRequestDtoOverrides,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type TriggerEventToAllRequestDtoOverrides$Outbound = {};

/** @internal */
export const TriggerEventToAllRequestDtoOverrides$outboundSchema: z.ZodType<
  TriggerEventToAllRequestDtoOverrides$Outbound,
  z.ZodTypeDef,
  TriggerEventToAllRequestDtoOverrides
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggerEventToAllRequestDtoOverrides$ {
  /** @deprecated use `TriggerEventToAllRequestDtoOverrides$inboundSchema` instead. */
  export const inboundSchema =
    TriggerEventToAllRequestDtoOverrides$inboundSchema;
  /** @deprecated use `TriggerEventToAllRequestDtoOverrides$outboundSchema` instead. */
  export const outboundSchema =
    TriggerEventToAllRequestDtoOverrides$outboundSchema;
  /** @deprecated use `TriggerEventToAllRequestDtoOverrides$Outbound` instead. */
  export type Outbound = TriggerEventToAllRequestDtoOverrides$Outbound;
}

export function triggerEventToAllRequestDtoOverridesToJSON(
  triggerEventToAllRequestDtoOverrides: TriggerEventToAllRequestDtoOverrides,
): string {
  return JSON.stringify(
    TriggerEventToAllRequestDtoOverrides$outboundSchema.parse(
      triggerEventToAllRequestDtoOverrides,
    ),
  );
}

export function triggerEventToAllRequestDtoOverridesFromJSON(
  jsonString: string,
): SafeParseResult<TriggerEventToAllRequestDtoOverrides, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      TriggerEventToAllRequestDtoOverrides$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TriggerEventToAllRequestDtoOverrides' from JSON`,
  );
}

/** @internal */
export const Actor$inboundSchema: z.ZodType<Actor, z.ZodTypeDef, unknown> = z
  .union([SubscriberPayloadDto$inboundSchema, z.string()]);

/** @internal */
export type Actor$Outbound = SubscriberPayloadDto$Outbound | string;

/** @internal */
export const Actor$outboundSchema: z.ZodType<
  Actor$Outbound,
  z.ZodTypeDef,
  Actor
> = z.union([SubscriberPayloadDto$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Actor$ {
  /** @deprecated use `Actor$inboundSchema` instead. */
  export const inboundSchema = Actor$inboundSchema;
  /** @deprecated use `Actor$outboundSchema` instead. */
  export const outboundSchema = Actor$outboundSchema;
  /** @deprecated use `Actor$Outbound` instead. */
  export type Outbound = Actor$Outbound;
}

export function actorToJSON(actor: Actor): string {
  return JSON.stringify(Actor$outboundSchema.parse(actor));
}

export function actorFromJSON(
  jsonString: string,
): SafeParseResult<Actor, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Actor$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Actor' from JSON`,
  );
}

/** @internal */
export const Tenant$inboundSchema: z.ZodType<Tenant, z.ZodTypeDef, unknown> = z
  .union([TenantPayloadDto$inboundSchema, z.string()]);

/** @internal */
export type Tenant$Outbound = TenantPayloadDto$Outbound | string;

/** @internal */
export const Tenant$outboundSchema: z.ZodType<
  Tenant$Outbound,
  z.ZodTypeDef,
  Tenant
> = z.union([TenantPayloadDto$outboundSchema, z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Tenant$ {
  /** @deprecated use `Tenant$inboundSchema` instead. */
  export const inboundSchema = Tenant$inboundSchema;
  /** @deprecated use `Tenant$outboundSchema` instead. */
  export const outboundSchema = Tenant$outboundSchema;
  /** @deprecated use `Tenant$Outbound` instead. */
  export type Outbound = Tenant$Outbound;
}

export function tenantToJSON(tenant: Tenant): string {
  return JSON.stringify(Tenant$outboundSchema.parse(tenant));
}

export function tenantFromJSON(
  jsonString: string,
): SafeParseResult<Tenant, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Tenant$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Tenant' from JSON`,
  );
}

/** @internal */
export const TriggerEventToAllRequestDto$inboundSchema: z.ZodType<
  TriggerEventToAllRequestDto,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  payload: z.record(z.any()),
  overrides: z.lazy(() => TriggerEventToAllRequestDtoOverrides$inboundSchema)
    .optional(),
  transactionId: z.string().optional(),
  actor: z.union([SubscriberPayloadDto$inboundSchema, z.string()]).optional(),
  tenant: z.union([TenantPayloadDto$inboundSchema, z.string()]).optional(),
});

/** @internal */
export type TriggerEventToAllRequestDto$Outbound = {
  name: string;
  payload: { [k: string]: any };
  overrides?: TriggerEventToAllRequestDtoOverrides$Outbound | undefined;
  transactionId?: string | undefined;
  actor?: SubscriberPayloadDto$Outbound | string | undefined;
  tenant?: TenantPayloadDto$Outbound | string | undefined;
};

/** @internal */
export const TriggerEventToAllRequestDto$outboundSchema: z.ZodType<
  TriggerEventToAllRequestDto$Outbound,
  z.ZodTypeDef,
  TriggerEventToAllRequestDto
> = z.object({
  name: z.string(),
  payload: z.record(z.any()),
  overrides: z.lazy(() => TriggerEventToAllRequestDtoOverrides$outboundSchema)
    .optional(),
  transactionId: z.string().optional(),
  actor: z.union([SubscriberPayloadDto$outboundSchema, z.string()]).optional(),
  tenant: z.union([TenantPayloadDto$outboundSchema, z.string()]).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TriggerEventToAllRequestDto$ {
  /** @deprecated use `TriggerEventToAllRequestDto$inboundSchema` instead. */
  export const inboundSchema = TriggerEventToAllRequestDto$inboundSchema;
  /** @deprecated use `TriggerEventToAllRequestDto$outboundSchema` instead. */
  export const outboundSchema = TriggerEventToAllRequestDto$outboundSchema;
  /** @deprecated use `TriggerEventToAllRequestDto$Outbound` instead. */
  export type Outbound = TriggerEventToAllRequestDto$Outbound;
}

export function triggerEventToAllRequestDtoToJSON(
  triggerEventToAllRequestDto: TriggerEventToAllRequestDto,
): string {
  return JSON.stringify(
    TriggerEventToAllRequestDto$outboundSchema.parse(
      triggerEventToAllRequestDto,
    ),
  );
}

export function triggerEventToAllRequestDtoFromJSON(
  jsonString: string,
): SafeParseResult<TriggerEventToAllRequestDto, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TriggerEventToAllRequestDto$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TriggerEventToAllRequestDto' from JSON`,
  );
}

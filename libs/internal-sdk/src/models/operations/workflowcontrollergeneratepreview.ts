/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WorkflowControllerGeneratePreviewRequest = {
  workflowId: string;
  stepId: string;
  /**
   * A header for idempotency purposes
   */
  idempotencyKey?: string | undefined;
};

export type WorkflowControllerGeneratePreviewResponse = {
  headers: { [k: string]: Array<string> };
  result: components.GeneratePreviewResponseDto;
};

/** @internal */
export const WorkflowControllerGeneratePreviewRequest$inboundSchema: z.ZodType<
  WorkflowControllerGeneratePreviewRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  workflowId: z.string(),
  stepId: z.string(),
  "idempotency-key": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "idempotency-key": "idempotencyKey",
  });
});

/** @internal */
export type WorkflowControllerGeneratePreviewRequest$Outbound = {
  workflowId: string;
  stepId: string;
  "idempotency-key"?: string | undefined;
};

/** @internal */
export const WorkflowControllerGeneratePreviewRequest$outboundSchema: z.ZodType<
  WorkflowControllerGeneratePreviewRequest$Outbound,
  z.ZodTypeDef,
  WorkflowControllerGeneratePreviewRequest
> = z.object({
  workflowId: z.string(),
  stepId: z.string(),
  idempotencyKey: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    idempotencyKey: "idempotency-key",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowControllerGeneratePreviewRequest$ {
  /** @deprecated use `WorkflowControllerGeneratePreviewRequest$inboundSchema` instead. */
  export const inboundSchema =
    WorkflowControllerGeneratePreviewRequest$inboundSchema;
  /** @deprecated use `WorkflowControllerGeneratePreviewRequest$outboundSchema` instead. */
  export const outboundSchema =
    WorkflowControllerGeneratePreviewRequest$outboundSchema;
  /** @deprecated use `WorkflowControllerGeneratePreviewRequest$Outbound` instead. */
  export type Outbound = WorkflowControllerGeneratePreviewRequest$Outbound;
}

export function workflowControllerGeneratePreviewRequestToJSON(
  workflowControllerGeneratePreviewRequest:
    WorkflowControllerGeneratePreviewRequest,
): string {
  return JSON.stringify(
    WorkflowControllerGeneratePreviewRequest$outboundSchema.parse(
      workflowControllerGeneratePreviewRequest,
    ),
  );
}

export function workflowControllerGeneratePreviewRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  WorkflowControllerGeneratePreviewRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      WorkflowControllerGeneratePreviewRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'WorkflowControllerGeneratePreviewRequest' from JSON`,
  );
}

/** @internal */
export const WorkflowControllerGeneratePreviewResponse$inboundSchema: z.ZodType<
  WorkflowControllerGeneratePreviewResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Headers: z.record(z.array(z.string())),
  Result: components.GeneratePreviewResponseDto$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Headers": "headers",
    "Result": "result",
  });
});

/** @internal */
export type WorkflowControllerGeneratePreviewResponse$Outbound = {
  Headers: { [k: string]: Array<string> };
  Result: components.GeneratePreviewResponseDto$Outbound;
};

/** @internal */
export const WorkflowControllerGeneratePreviewResponse$outboundSchema:
  z.ZodType<
    WorkflowControllerGeneratePreviewResponse$Outbound,
    z.ZodTypeDef,
    WorkflowControllerGeneratePreviewResponse
  > = z.object({
    headers: z.record(z.array(z.string())),
    result: components.GeneratePreviewResponseDto$outboundSchema,
  }).transform((v) => {
    return remap$(v, {
      headers: "Headers",
      result: "Result",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkflowControllerGeneratePreviewResponse$ {
  /** @deprecated use `WorkflowControllerGeneratePreviewResponse$inboundSchema` instead. */
  export const inboundSchema =
    WorkflowControllerGeneratePreviewResponse$inboundSchema;
  /** @deprecated use `WorkflowControllerGeneratePreviewResponse$outboundSchema` instead. */
  export const outboundSchema =
    WorkflowControllerGeneratePreviewResponse$outboundSchema;
  /** @deprecated use `WorkflowControllerGeneratePreviewResponse$Outbound` instead. */
  export type Outbound = WorkflowControllerGeneratePreviewResponse$Outbound;
}

export function workflowControllerGeneratePreviewResponseToJSON(
  workflowControllerGeneratePreviewResponse:
    WorkflowControllerGeneratePreviewResponse,
): string {
  return JSON.stringify(
    WorkflowControllerGeneratePreviewResponse$outboundSchema.parse(
      workflowControllerGeneratePreviewResponse,
    ),
  );
}

export function workflowControllerGeneratePreviewResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  WorkflowControllerGeneratePreviewResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      WorkflowControllerGeneratePreviewResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'WorkflowControllerGeneratePreviewResponse' from JSON`,
  );
}

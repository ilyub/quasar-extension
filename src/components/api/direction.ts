import { prop } from "./misc";
import { defineFn } from "@skylib/functions";
import { computed } from "vue";
import type { SetupProps } from "./core";
import type { ComputedRef } from "vue";

export const useDirection = defineFn(
  /**
   * Use direction plugin.
   *
   * @param props - Props.
   * @returns Direction plugin.
   */
  (props: SetupProps<useDirection.Props>): useDirection.Plugin => {
    const direction = computed(() => props.direction ?? "down");

    return {
      dirAnchor: computed(() => {
        switch (direction.value) {
          case "down":
            return "bottom middle";

          case "down-left":
            return "bottom right";

          case "down-right":
            return "bottom left";

          case "left":
            return "center left";

          case "left-down":
            return "top left";

          case "left-up":
            return "bottom left";

          case "right":
            return "center right";

          case "right-down":
            return "top right";

          case "right-up":
            return "bottom right";

          case "up":
            return "top middle";

          case "up-left":
            return "top right";

          case "up-right":
            return "top left";
        }
      }),
      dirOffset: computed(() => {
        switch (direction.value) {
          case "down":
          case "down-left":
          case "down-right":
            return [0, 5];

          case "left":
          case "left-down":
          case "left-up":
            return [5, 0];

          case "right":
          case "right-down":
          case "right-up":
            return [5, 0];

          case "up":
          case "up-left":
          case "up-right":
            return [0, 5];
        }
      }),
      dirSelf: computed(() => {
        switch (direction.value) {
          case "down":
            return "top middle";

          case "down-left":
            return "top right";

          case "down-right":
            return "top left";

          case "left":
            return "center right";

          case "left-down":
            return "top right";

          case "left-up":
            return "bottom right";

          case "right":
            return "center left";

          case "right-down":
            return "top left";

          case "right-up":
            return "bottom left";

          case "up":
            return "bottom middle";

          case "up-left":
            return "bottom right";

          case "up-right":
            return "bottom left";
        }
      }),
      dirTransitionHide: computed(() => {
        switch (direction.value) {
          case "down":
          case "down-left":
          case "down-right":
            return "jump-up";

          case "left":
          case "left-down":
          case "left-up":
            return "jump-right";

          case "right":
          case "right-down":
          case "right-up":
            return "jump-left";

          case "up":
          case "up-left":
          case "up-right":
            return "jump-down";
        }
      }),
      dirTransitionShow: computed(() => {
        switch (direction.value) {
          case "down":
          case "down-left":
          case "down-right":
            return "jump-down";

          case "left":
          case "left-down":
          case "left-up":
            return "jump-left";

          case "right":
          case "right-down":
          case "right-up":
            return "jump-right";

          case "up":
          case "up-left":
          case "up-right":
            return "jump-up";
        }
      })
    };
  },
  {
    props: {
      direction: prop<useDirection.Props["direction"]>()
    } as const
  }
);

export namespace useDirection {
  export type Coupling =
    | "bottom left"
    | "bottom middle"
    | "bottom right"
    | "center left"
    | "center right"
    | "top left"
    | "top middle"
    | "top right";

  export type Direction =
    | "down-left"
    | "down-right"
    | "down"
    | "left-down"
    | "left-up"
    | "left"
    | "right-down"
    | "right-up"
    | "right"
    | "up-left"
    | "up-right"
    | "up";

  export interface OwnProps {
    readonly direction?: Direction | undefined;
  }

  export interface Plugin {
    readonly dirAnchor: ComputedRef<Coupling>;
    readonly dirOffset: ComputedRef<readonly [number, number]>;
    readonly dirSelf: ComputedRef<Coupling>;
    readonly dirTransitionHide: ComputedRef<Transition>;
    readonly dirTransitionShow: ComputedRef<Transition>;
  }

  export interface Props extends OwnProps {}

  export type Transition = "jump-down" | "jump-left" | "jump-right" | "jump-up";
}

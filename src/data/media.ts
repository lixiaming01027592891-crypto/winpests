import type { ImageMetadata } from "astro";
import hero from "../assets/photos/hero.jpg";
import rodent from "../assets/photos/rodent.jpg";
import restaurant from "../assets/photos/restaurant.jpg";
import team from "../assets/photos/team.jpg";
import equipment from "../assets/photos/equipment.jpg";
import termite from "../assets/photos/termite.jpg";
import school from "../assets/photos/school.jpg";
import inject from "../assets/photos/inject.jpg";
import termiteMacro from "../assets/photos/termite-macro.jpg";
import office from "../assets/photos/office.jpg";

export const photos = {
  hero,
  rodent,
  restaurant,
  team,
  equipment,
  termite,
  school,
  inject,
  termiteMacro,
  office,
} as const satisfies Record<string, ImageMetadata>;

export type PhotoKey = keyof typeof photos;

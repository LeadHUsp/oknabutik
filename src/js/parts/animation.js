import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin);
export function animation() {
  console.log('gsap include');
}
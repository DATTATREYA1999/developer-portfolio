import html from "../assets/svg/skills/html.svg";
import docker from "../assets/svg/skills/docker.svg";
import css from "../assets/svg/skills/css.svg";

import javascript from "../assets/svg/skills/javascript.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";

import react from "../assets/svg/skills/react.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import c from "../assets/svg/skills/c.svg";
import cplusplus from "../assets/svg/skills/cplusplus.svg";
import java from "../assets/svg/skills/java.svg";
import python from "../assets/svg/skills/python.svg";
import git from "../assets/svg/skills/git.svg";
import graphql from "../assets/svg/skills/graphql.svg";
import numpy from "../assets/svg/skills/numpy.svg";
import opencv from "../assets/svg/skills/opencv.svg";

import azure from "../assets/svg/skills/azure.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    // case 'gcp':
    //     return gcp;
    case "html":
      return html;
    // case 'photoshop':
    //     return photoshop;
    case "docker":
      return docker;
    // case 'illustrator':
    //     return illustrator;
    // case 'adobe xd':
    //     return adobeXd;
    // case 'after effects':
    //     return afterEffects;
    case "css":
      return css;
    // case 'angular':
    //     return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    // case 'nuxt js':
    //     return nuxtJS;
    case "react":
      return react;
    // case 'svelte':
    //     return svelte;
    case "typescript":
      return typescript;
    // case 'vue':
    //     return vue;
    // case 'bootstrap':
    //     return bootstrap;
    // case 'bulma':
    //     return bulma;
    // case 'capacitorjs':
    //     return capacitorjs;
    // case 'coffeescript':
    //     return coffeescript;
    // case 'memsql':
    //     return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    // case 'tailwind':
    //     return tailwind;
    // case 'vitejs':
    //     return vitejs;
    // case 'vuetifyjs':
    //     return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    // case 'c#':
    //     return csharp;
    // case 'dart':
    //     return dart;
    // case 'go':
    //     return go;
    case "java":
      return java;
    // case 'kotlin':
    //     return kotlin;
    // case 'julia':
    //     return julia;
    // case 'matlab':
    //     return matlab;
    // case 'php':
    //     return php;
    case "python":
      return python;
    // case 'ruby':
    //     return ruby;
    // case 'swift':
    //     return swift;
    // case 'adobe audition':
    //     return adobeaudition;
    // case 'aws':
    //     return aws;
    // case 'deno':
    //     return deno;
    // case 'django':
    //     return django;
    // case 'firebase':
    //     return firebase;
    // case 'gimp':
    //     return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    // case 'lightroom':
    //     return lightroom;
    // case 'materialui':
    //     return materialui;
    // case 'nginx':
    //     return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    // case 'premiere pro':
    //     return premierepro;
    // case 'pytorch':
    //     return pytorch;
    // case 'selenium':
    //     return selenium;
    // case 'strapi':
    //     return strapi;
    // case 'tensorflow':
    //     return tensorflow;
    // case 'webix':
    //     return webix;
    // case 'wordpress':
    //     return wordpress;
    case "azure":
      return azure;
    // case 'blender':
    //     return blender;
    // case 'fastify':
    //     return fastify;
    // case 'figma':
    //     return figma;
    // case 'flutter':
    //     return flutter;
    // case 'haxe':
    //     return haxe;
    // case 'ionic':
    //     return ionic;
    // case 'markdown':
    //     return markdown;
    // case 'microsoft office':
    //     return microsoftoffice;
    // case 'picsart':
    //     return picsart;
    // case 'sketch':
    //     return sketch;
    // // case 'unity':
    //     return unity;
    // case 'wolframalpha':
    //     return wolframalpha;
    // case 'canva':
    //     return canva;
    default:
      break;
  }
};

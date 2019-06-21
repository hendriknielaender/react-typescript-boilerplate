// We need to tell TypeScript that when we write "import styles from './styles.scss'
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

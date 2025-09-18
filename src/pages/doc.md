**Reactune** is an **npm package** designed for web applications built with React. It provides a lightweight, customizable, and easy-to-integrate **video player**. Developed in TypeScript and with zero external dependencies, it offers an efficient way to play videos from a URL with basic controls like mute, forward/backward skipping, zoom, and more. It’s ideal for modern projects that require clean, functional, and maintainable UI components.

<span class='flex gap-[5px]'>Visit <a
    href="https://www.npmjs.com/package/reactune"
    target="\_blank"
    class="flex  text-secondary w-fit">reactune on npm
</a>
</span>

## 1. Installation

Use npm to install the package:

```bash
npm install reactune
```

## 2. Basic Usage

Import the **ReactuneVideo** component and pass a video source:

```tsx
import { ReactuneVideo } from "reactune";

export default function App() {
  return <ReactuneVideo src="http://your_host.com/src/video_demo.mp4" />;
}
```

## 3. Available Props

| Prop     | Type    | Required | Default Value | Description                                 |
| -------- | ------- | -------- | ------------- | ------------------------------------------- |
| src      | string  | Yes      | N/A           | URL of the video to be played.              |
| muted    | boolean | No       | false         | Whether the video starts muted.             |
| controls | boolean | No       | true          | Shows or hides the video player's controls. |

## 4. Configuration Example

```tsx
import { ReactuneVideo } from "reactune";

export default function App() {
  return (
    <ReactuneVideo
      src="http://your_host.com/src/video_demo.mp4"
      controls={false}
      muted={true}
    />
  );
}
```

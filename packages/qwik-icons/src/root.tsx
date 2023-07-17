import * as lucideIcons from "./components/icons/lucide";
import * as heroIcons from "./components/icons/heroicons";
import * as logosIcons from "./components/icons/logos";
import * as monoIcons from "./components/icons/monoicons";
import * as tablerIcons from "./components/icons/tabler";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <h1>Lucide</h1>
        <RenderIcons icons={lucideIcons} />

        <h1>HeroIcons</h1>
        <RenderIcons icons={heroIcons} />

        <h1>Logos</h1>
        <RenderIcons icons={logosIcons} />

        <h1>MonoIcons</h1>
        <RenderIcons icons={monoIcons} />

        <h1>TablerIcons</h1>
        <RenderIcons icons={tablerIcons} />
      </body>
    </>
  );
};

const RenderIcons = ({ icons }: { icons: Record<string, any> }) => {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Object.keys(icons).map((key, i) => {
        const Icon = icons[key];
        return (
          <div key={i} style={{ maxWidth: "50px" }}>
            <Icon size={32} style={{ width: "100%", height: "100%" }} />
          </div>
        );
      })}
    </div>
  );
};

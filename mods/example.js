// Enable: import "./mods/example.js" once before boot.
// Duplicate defineMod calls for same id throw, so import once.
import { defineMod } from "../src/mods.js";
defineMod({
  id: 15,
  name: "glow",
  paint(ctx, S) {
    ctx.fillStyle = "#e8810c";
    ctx.fillRect(0, 0, S, S);
    for (let i = 0; i < 24; i++) {
      const x = (i * 7) % S;
      const y = (i * 11) % S;
      ctx.fillStyle = i % 2 ? "#fff6c8" : "#ffd23e";
      ctx.fillRect(x, y, 2, 2);
    }
  }
});

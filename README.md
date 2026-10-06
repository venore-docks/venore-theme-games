# @venore/theme-games

Tema esportivo do Venore Docks (contrato de tema **8.0.0**), feito pro plugin
[`@venore/plugin-games`](https://github.com/venore-docks/venore-plugin-games) e usável em qualquer site.

- **Celular primeiro.** Gaveta de navegação por padrão; navegação inferior tipo app (`bottom-bar`)
  disponível em `/admin/themes/customize`.
- **Identidade.** Tinta azul-marinho, primária azul viva, acento laranja; títulos pesados
  (Space Grotesk) e texto em Inter; números tabulares em tabelas e placares.
- **Cor da escola.** Paletas por rotação de matiz (`color-palettes.ts`) no personalizador de tema.
- **Só o que difere do kit.** Regiões, templates e estados vêm do kit do core (acessibilidade e
  SSR já validados); o pacote declara manifesto, tokens (`theme.css`) e paletas.

## Instalação numa instância

```jsonc
// package.json do branch da instância
"@venore/theme-games": "github:venore-docks/theme-games#v0.1.0"
```

Depois `npm install` e ative o tema em `/admin/themes`.

## Gate

`.github/workflows/ci.yml` instala o tema no `venore-docks` (`main`) e roda
`npm run theme:check -- --theme games --no-browser` (registro, contrato de tokens, contraste por
região, orçamento e harness SSR).

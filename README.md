# Monorepo Angular com NX

<br>
<br>

## Abrir IDE On-line

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/workspaces)

<br>
<br>

## Comandos

Novo App no diretório atual ( Rotas: yes, Style: SCSS, SSR: no )

```sh
ng new monorepo-angular-nx --directory=./ --routing --style=scss --ssr=false
```

Components

```sh
ng g c pages/home
ng g c pages/users
ng g c pages/users/shared/components/user-details
ng g s pages/users/shared/services/user
ng g c shared/components/header
ng g s shared/services/get-param-url
```

Angular Material

```sh
ng add @angular/material
```

Adicionando o Nx ( Cacheable: build, test. Remote caching: no )

```sh
npx nx@latest init
```

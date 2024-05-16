# Monorepo Angular com NX

<br>
<br>

## Abrir IDE On-line

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/workspaces)

<br>
<br>

## Comandos

Novo App no diretório atual

```sh
ng new monorepo-angular-nx --directory=./
```

Components

```sh
ng g c home
ng g c users
ng g s users/shared/services/user
ng g c shared/services/get-param-url
```

Adicionando o Nx (cacheable: build, test. remote caching: no)

```sh
npx nx@latest init
```

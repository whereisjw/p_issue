# 프로젝트 매니저

## usePathname

- 현재의 pathname을 갖게된다. react의 usematch랑 비슷한 훅인듯?

```
  const currentPath = usePathname();
```

## 프리즈마 세팅

- mysql 깔려있어야함
- npm i prisma
- npx prisma init
- prisma파일에서 mysql로 변경 .. .env파일에서 mysql로변경/아디/비번/포트번호/워크벤치명

### 모델생성

```
model Issue {
  id          Int      @id @default(autoincrement())
  title       String   @db.VarChar(255)
  description String   @db.Text
  status      Status   @default(OPEN)
  createAt    DateTime @default(now())
  updateAt    DateTime @updatedAt
}
enum Status {
  OPEN
  IN_PROGRESS
  CLOSED
}
```

- npx prisma format
- npx prisma migrate dev
  Create issue model
- req를 통해 넘어온 데이터 검증 npm i zod

- prisma/client.ts 복붙

```
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
```

# Radix

Radix-UI

- npm install @radix-ui/themes
- https://www.radix-ui.com/
  Radix-UI Button Component
- https://www.radix-ui.com/themes/docs/components/button

```
import '@radix-ui/themes/styles.css';
```

- 전역 layout.tsx에붙이기

# 마크다운에디터추가

- npm install --save react-simplemde-editor easymde
- npm i react-markdown
- npm i -D @tailwindcss/typography (플러그인에써야함)

```
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
      <SimpleMdeReact />;
```

- next js사용시 lazyloading으로 에러해결

```
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
```

# tailwind 스피너 추가

https://tw-elements.com/docs/standard/components/spinners/

# 로딩스켈레톤 추가하기

- npm i delay
- 로딩테스트를위해 추가
- npm i react-loading-skeleton
  https://www.npmjs.com/package/react-loading-skeleton

# npm i @radix-ui/react-icons

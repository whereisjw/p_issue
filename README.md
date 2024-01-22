# 코딩커뮤니티

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



# nextauth

- npm i next-auth
- 파일및 폴더 추가 (공식문서시키는대로)
- 구글,깃헙,페북등 소셜로그인이용가능
-  https://console.cloud.google.com/apis/credentials
- 프리즈마와 사용할거면 adapter 꼭 다운받아야함
- adapter 받으면 db도 추가해야함 추가하고 마이그레이트 
- 기본적으로 jwt방식임 이렇게하면 바로 작동잘되고 쿠키에 토큰확인할수있음
- 로그인 로그아웃 url 공식문서에서 확인할것
~~~

import NextAuth from "next-auth"
import prisma from '../../../prisma/client'
import { PrismaAdapter } from "@auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)
~~~
- 프로바이더는 바로추가하지말고 client 컴포넌트 만들어서 뿌리기
~~~
'use client'
import { SessionProvider } from 'next-auth/react'
import React, { PropsWithChildren } from 'react'

const Provider = ({children}:PropsWithChildren) => {
  return (
  <SessionProvider>  {children} </SessionProvider>
  )
}

export default Provider
~~~


# middleware 적용
- root 폴더에  middleware 적용
~~~
export { default } from "next-auth/middleware"

export const config = { matcher: ["/issues/new","/issues/[id]/edit"] }
~~~

# 필터링 적용하기
~~~
'use client'
import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
 
import React from 'react'

const statuses:{label:string,value?:Status}[]= [
    {label:'All'},
    {label:'open',value:'OPEN'},
    {label:'IN_PROGRESS',value:'IN_PROGRESS'},
    {label:'CLOSED',value:'CLOSED'},

]
interface IProps{
  values : string
}
const StatusFilter = ({values}:IProps) => {
 

  const router = useRouter()
  return (
<Select.Root
 defaultValue={values}  
onValueChange={(value)=>{
const query = value ? `?value=${value}` : ""
router.push(`/issues` + query)
}}>
  <Select.Trigger placeholder='필터기능'/>
  <Select.Content>
     {statuses.map((v,i)=><Select.Item key={i} value={v.value || "All"}>{v.label}</Select.Item>)}
    <Select.Separator />
 
  </Select.Content>
</Select.Root>
  )
}

export default StatusFilter
~~~



# Chart 구현

npm i recharts
~~~
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Chart = ({open,inProgress,closed}:props) => {
let data = 
[    {label:'OPEN',value:open},
    {label:'IN_PROGRESS',value:inProgress},
    {label:'CLOSED',value:closed}]



  return (
    <ResponsiveContainer width={'100%'} height={300}>
        <BarChart data={data} >
            <XAxis dataKey="label"></XAxis>
            <YAxis></YAxis>
            <Bar dataKey="value"></Bar>
        </BarChart>
    </ResponsiveContainer>
  )
}
~~~



# 메타데이터 추가
export const metadata: Metadata = {
  title:'CODING-STORY - HOME',
  description:'코딩커뮤니티 홈입니다'
}
- 동적 메타데이터 추가
~~~
export async function generateMetadata({ params }: Iprops){
  const issue = await prisma.issue.findUnique({
    where: { id: Number(params.id) },
  });

  return {
    title: issue?.title,
description : '상세 페이지' + issue?.id
    }
}
~~~


# git filter repo 깃필터리포
- https://github.com/newren/git-filter-repo/tree/main


# sentry io
- 배포전 테스트라우터와 페이지파일 삭제하는거 잊지말기



# vercel 배포

~~~
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
  relationMode = "prisma"
}
~~~
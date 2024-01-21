import Latest from "./components/Latest";
import Summary from "./components/Summary";
import prisma from '../prisma/client'
import Chart from "./components/Chart";
import { Box, Card, Flex, Grid } from "@radix-ui/themes";
 
 

export default async function Home({searchParams}:{searchParams:{page:string}}) {

const FRONTEND = await prisma.issue.count({where:{develop:'FRONTEND'}})
const BACKEND = await prisma.issue.count({where:{develop:'BACKEND'}})
const ETC = await prisma.issue.count({where:{develop:'ETC'}})


  return <> 
<Card  className="p-4 border-b mb-4">
  <Flex direction={'column'}> 
  <span className="font-bold text-lg md:text-xl">소개</span>
  <span className="text-xs">웹 개발에 관한 이야기를 나누는 커뮤니티 사이트입니다. next14/prisma/tailwind/radix ui</span>
 </Flex>

</Card>


<Card>
  <Grid columns={{initial:'1', md:'2'}}><Flex align={'center'} direction={'column'} gap={'4'}>
    <Summary frontend={FRONTEND }backend={BACKEND}etc={ETC}/>
  <Chart frontend={FRONTEND }backend={BACKEND}etc={ETC}/></Flex><Latest/></Grid>
  </Card>
  </>;
}

import Latest from "./components/Latest";
import Summary from "./components/Summary";
import prisma from '../prisma/client'
import Chart from "./components/Chart";
import { Box, Flex, Grid } from "@radix-ui/themes";
 
 

export default async function Home({searchParams}:{searchParams:{page:string}}) {

const open = await prisma.issue.count({where:{status:'OPEN'}})
const IN_PROGRESS = await prisma.issue.count({where:{status:'IN_PROGRESS'}})
const CLOSED = await prisma.issue.count({where:{status:'CLOSED'}})


  return <> 
<Box  className="p-4 border-b mb-4">
  <Flex direction={'column'}> 
  <span className="font-bold text-xl">소개</span>
  <span className="text-xs">웹 개발에 관한 이야기를 나누는 커뮤니티 사이트입니다.</span>
 </Flex>

</Box>

  <Grid columns={{initial:'1', md:'2'}}><Flex direction={'column'} gap={'4'}><Summary open={open }inProgress={IN_PROGRESS}closed={CLOSED}/>
  <Chart open={open }inProgress={IN_PROGRESS}closed={CLOSED}/></Flex><Latest/></Grid>
  </>;
}

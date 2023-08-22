import React, { useState } from 'react'

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaLinux,
  FaPhp,
} from 'react-icons/fa';

import {
  SiMysql,
  SiMicrosoftazure,
  SiDocker,
  SiKubernetes
} from 'react-icons/si';

import {
  BiLogoAws,
  BiLogoPython,
  BiLogoJava,
} from 'react-icons/bi';

import {
  TbBrandGolang
} from 'react-icons/tb';

export const aboutData = [
  {
    title: 'Skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
        ],
      },
      {
        title: 'Programming',
        icons: [
          <BiLogoPython />,
          "C",
        ],
      },
      {
        title: 'BackEnd',
        icons: [
          <FaLinux />,
          <SiMysql />,
          <SiDocker />,
          <SiKubernetes />
        ],
      },
      {
        title: 'Cloud',
        icons: [
          <BiLogoAws />,
        ],
      },
    ],
  },
  {
    title: 'Awards',
    info: [
      {
        title: '부산기능경기대회 - 은상',
        stage: '2023 [클라우드컴퓨팅 직종]',
      },
    ],
  },
  {
    title: 'Activities',
    info: [
      {
        title: '해킹 동아리 주장',
        stage: '남천중학교 [2018-2021]',
      },
      {
        title: 'IT 네트워크과 재학',
        stage: '대양고등학교 [2021-2024]',
      },
      {
        title: '클라우드컴퓨팅 기능부 부 주장',
        stage: '대양고등학교 [2022-2024]',
      },
      {
        title: '부산기능경기대회 참가',
        stage: '은상 [2023년 4월 5일 - 4월 8일]',
      },
    ],
  },
  {
    title: 'School',
    info: [
      {
        title: 'Nam Cheon Middle School',
        stage: '2019-2021',
      },
      {
        title: 'Daeyang High School',
        stage: '2021-2024',
      },
    ],
  },
];

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className='h2'>
            <span className='text-accent'>클라우드 엔지니어</span>가 되고 싶은 <span className='text-accent'>이석빈</span>입니다.
          </motion.h2>
          <motion.p variants={fadeIn('right', 0.4)} initial="hidden" animate="show" exit="hidden" className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
          컴퓨터와 프로그래밍에 깊은 관심을 가진 고등학생입니다.
           클라우드 기술, 특히 AWS와 같은 클라우드 플랫폼에 대한 흥미와 열정으로 다양한 프로젝트를 진행해 왔습니다.
            클라우드 아키텍처와 보안 부분에서의 깊은 이해를 바탕으로 끊임없이 실력을 키워가고 있습니다.
             또한, 데이터 분석 기초를 활용하여 다양한 데이터를 분석하고 이를 프로젝트에 적용하는 경험도 쌓아왔습니다.
              계속해서 새로운 지식과 기술을 배우며 클라우드 기술 분야에서 더욱 성장하고 싶습니다.
            </motion.p>
          <motion.div variants={fadeIn('right', 0.6)} initial="hidden" animate="show" exit="hidden" className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={3} duration={5}  /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
              </div>

              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={7} duration={5}  /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished Projects</div>
              </div>

              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={100} end={150} duration={5}  /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Average Hours of Study in a Week</div>
              </div>

              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={1} duration={5}  />
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Awards</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden" className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex)=> {
              return (
                <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration=300'} cursor-pointer capitaklize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex)=> {
              return (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                  <div className='font-ligght mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {item.icons?.map((icon, itemIndex)=> {
                      return <div className='text-2xl text-white'>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

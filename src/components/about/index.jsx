import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className=" font-bold text-accent text-xl md:text-3xl sm:text-3xl text-left w-full capitalize">
            About Me
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I am <span className="font-bold text-accent">Paras Billore</span>, a
            dedicated and passionate software developer from Bhopal, Madhya
            Pradesh. I hold a{" "}
            <span className="font-bold">
              B.Tech in Computer Science and Engineering
            </span>{" "}
            from the{" "}
            <span className="font-bold">
              Oriental Institute of Science and Technology
            </span>
            .
            <br />
            <br />
            Throughout my career, I have gained hands-on experience through
            internships at AlignTogether Solutions Pvt Ltd and Sreshta
            Informatics Pvt Ltd, where I developed my skills in various
            programming languages and frameworks such as <span className="font-bold" >C, Java, Spring-Boot,
            Angular, HTML, CSS, JavaScript, PHP, and MySQL.</span> <br />
            <br />
            Beyond my technical expertise, I am actively engaged in
            co-curricular activities, social work with the NGO Pahel, and I hold
            an NCC Certificate. My commitment to continuous learning is
            reflected in my certifications from Coursera and NPTEL.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-bold text-accent w-full text-left text-1xl sm:text-3xl">
            B-Tech <br />
            <sub className="font-semibold text-white text-base">Oriental Institue of Science & Technology, Bhopal  [M.P].</sub><br />
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-bold text-accent w-full text-left text-1xl sm:text-3xl">
            Internship <br />
            <sub className="font-semibold text-white text-base">AlignTogether Pvt. Ltd.</sub><br />
            
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-bold text-accent w-full text-left text-1xl sm:text-3xl">
            Skills <br />
            <sub className="font-semibold text-white text-base">Java core [J2SE].</sub><br />
            <sub className="font-semibold text-white text-base">Spring-Boot | Backend.</sub><br />
            <sub className="font-semibold text-white text-base">Angular | Frontend. </sub><br />
            <sub className="font-semibold text-white text-base">MySQL | Database. </sub><br />
            <sub className="font-semibold text-white text-base">HTML, CSS, JS.</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-bold text-accent w-full text-left text-1xl sm:text-3xl">
            Certificates <br />
            <sub className="font-semibold text-white text-base">Coursera | Introduction to Java.</sub><br />
            <sub className="font-semibold text-white text-base">NPTEL | Programming in C.</sub><br />
            <sub className="font-semibold text-white text-base">Udemy | HTML, CSS, JS </sub><br />
          </p>
        </ItemLayout>


        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-bold text-accent w-full text-left text-1xl sm:text-3xl">
            Non-Collegiates <br />
            <sub className="font-semibold text-white text-base">SAC | Student Activity Council</sub><br />
            <sub className="font-semibold text-white text-base">Pahel | NGO</sub><br />
            <sub className="font-semibold text-white text-base">NCC | National Cadet Corps</sub><br />
          </p>
        </ItemLayout>


        

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs/?username=anuraghazra&layout=pie&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Paras Billore"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=parasbillore&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Paras Billore"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full "}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=java,angular,spring,aws,bootstrap,docker,git,github,html,css,js,linux,mongodb,mysql,nodejs,npm,postgres,react,sass,tailwind,vscode,idea`}
            alt="Paras Billore"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=parasbillore&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Paras Billore"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/parasbillore/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=parasbillore&repo=devfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Paras Billore"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;

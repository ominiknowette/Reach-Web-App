/* eslint-disable @next/next/no-img-element */
const a = {
  logo: "https://www.figma.com/api/mcp/asset/66581031-e561-4f0e-86d7-568edf30772c",
  ctaBg: "https://www.figma.com/api/mcp/asset/a48e2843-f5e3-4b80-a354-590f9118f9dc",
  company1: "https://www.figma.com/api/mcp/asset/6db2e04e-12ea-4bf2-92a5-23d831e257ce",
  company2: "https://www.figma.com/api/mcp/asset/6070da8b-1fd8-48c9-8ec1-22a119b9bc60",
  company3: "https://www.figma.com/api/mcp/asset/dde14ee6-a799-40f4-9f8e-ca88e3a55ff7",
  company4: "https://www.figma.com/api/mcp/asset/dbea1057-5e91-4ca4-8f68-0437cf5e45f1",
  avatar1: "https://www.figma.com/api/mcp/asset/5dbb9cb8-797f-4a3b-b6a6-5bd46ec5a6e2",
  avatar2: "https://www.figma.com/api/mcp/asset/f319f8a3-35df-4a44-a593-e30ec6ed4e42",
  avatar3: "https://www.figma.com/api/mcp/asset/d78161f8-1679-4100-ba03-c246ced078c5",
  e5: "https://www.figma.com/api/mcp/asset/756651c5-d971-437a-9265-10107344031c",
  e6: "https://www.figma.com/api/mcp/asset/ed9509b3-eba1-4311-bac7-42ff8022a858",
  e7: "https://www.figma.com/api/mcp/asset/e00232da-9452-4cb9-b5fc-5dbc4489850a",
  e8: "https://www.figma.com/api/mcp/asset/7dc2d439-c645-4f65-bb31-c3845429c048",
  e9: "https://www.figma.com/api/mcp/asset/24c3b7d9-e6b4-4223-a190-f9ef2253b276",
  e10: "https://www.figma.com/api/mcp/asset/aa604c4a-b61b-4cfe-8a85-633d3e49aa71",
  e11: "https://www.figma.com/api/mcp/asset/17c57552-5b71-46b4-9ce9-7e02fa9b475a",
  iconX: "https://www.figma.com/api/mcp/asset/d845a5f1-be3b-4466-a10d-d0f98c61d6ac",
  iconTikTok: "https://www.figma.com/api/mcp/asset/49dcd954-3dbd-4fba-8f9b-892836c2a14b",
  iconLinkedIn: "https://www.figma.com/api/mcp/asset/4717c4db-843d-41fd-96fc-7f8d6a55d730",
  centerPartnerLogo: "https://www.figma.com/api/mcp/asset/89f1da9a-94c1-4d4a-986e-bfb6728bee7f",
};
type FooterLink = { label: string; withArrow?: boolean };
type FooterSection = { title: string; items: FooterLink[] };

const footerSections: FooterSection[] = [
  {
    title: "Services",
    items: [{ label: "About Us" }, { label: "Case Studies" }, { label: "Careers" }, { label: "Contact" }],
  },
  {
    title: "Company",
    items: [{ label: "About Us" }, { label: "Case Studies" }, { label: "Careers" }, { label: "Contact" }],
  },
  {
    title: "Contact Us",
    items: [
      { label: "LinkedIn", withArrow: true },
      { label: "Instagram", withArrow: true },
      { label: "X", withArrow: true },
      { label: "Tiktok", withArrow: true },
    ],
  },
  {
    title: "Subsidiaries",
    items: [
      { label: "Tech by Hooom", withArrow: true },
      { label: "Orbit by Hooom", withArrow: true },
    ],
  },
];

export default function Home() {
  return (
    <main className="bg-white text-[#1e1e1e]">
      <div className="mx-auto max-w-[1440px]">
        <section className="relative h-auto overflow-hidden bg-white lg:h-[630px]">
          <header className="relative z-20 mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between bg-white px-5 sm:px-8 lg:h-[102px] lg:px-[100px]">
            <img src={a.logo} alt="Hooom" className="h-[34px] w-[150px] object-contain lg:h-[60px] lg:w-[267px]" />
            <nav className="hidden items-end gap-[31px] font-garamond text-[15px] font-semibold lg:flex">
              <a href="#" className="text-[16px] text-[#1e1e1e]">Home</a>
              <a href="#" className="text-[#6f6f6f]">Company</a>
              <a href="#" className="text-[#6f6f6f]">About</a>
              <a href="#" className="text-[#6f6f6f]">Contact Us</a>
            </nav>
            <button className="rounded-[99px] bg-[#62c0c3] px-4 py-3 font-garamond text-[15px] font-semibold text-white sm:px-6 sm:text-[17px] sm:leading-none">
              Book a Consultation
            </button>
          </header>
          <div className="relative mx-auto flex min-h-[430px] w-full max-w-[1440px] items-center justify-center overflow-hidden bg-[#f8fbff] px-5 py-10 sm:px-8 lg:h-[528px] lg:px-[100px] lg:py-[24px]">
            <img src={a.e7} alt="" aria-hidden className="pointer-events-none absolute -right-[40px] top-[30px] hidden h-[315px] w-[315px] lg:block" />
            <img src={a.e8} alt="" aria-hidden className="pointer-events-none absolute -left-[68px] top-[260px] hidden h-[315px] w-[315px] lg:block" />

            <div className="relative z-10 flex w-full max-w-[728px] flex-col items-center gap-6 text-center">
              <h1 className="font-garamond text-[64px] font-semibold leading-[1.2] tracking-[0.48px] sm:text-[82px] lg:text-[96px]">Hooom</h1>
              <h2 className="font-garamond text-[28px] font-semibold leading-[1.2] tracking-[0.16px] sm:text-[32px]">
                Building and Scaling Technology Compaines
              </h2>
              <p className="max-w-[514px] font-garamond text-[18px] leading-[1.5] tracking-[0.1px] text-[#6f6f6f] sm:text-[20px]">
                Hooom is a Venture Builder that creates, launches, and Supports Innovative Technology Companies across multiple Industries.
              </p>
              <button className="mt-1 h-[63px] w-[195px] rounded-[99px] bg-[#62c0c3] font-garamond text-[17px] font-semibold text-white">
                Book a Consultation
              </button>
            </div>
          </div>
        </section>

        <section className="px-5 py-8 sm:px-8 lg:px-[100px] lg:py-[24px]">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-center gap-8 lg:gap-[70px]">
            <div className="h-[22.516px] w-[144px] text-center font-garamond text-[27px] font-semibold leading-none tracking-[0.1px] text-[#9f9f9f]">
              ROGUE
            </div>
            <div className="h-[27.82px] w-[148.375px]">
              <img src={a.centerPartnerLogo} alt="Partner logo" className="h-full w-full object-contain" />
            </div>
            <div className="h-[22.516px] w-[144px] text-center font-garamond text-[27px] font-semibold leading-none tracking-[0.1px] text-[#9f9f9f]">
              ROGUE
            </div>
            <div className="h-[27.82px] w-[148.375px]">
              <img src={a.centerPartnerLogo} alt="Partner logo" className="h-full w-full object-contain" />
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 lg:px-[100px] lg:py-[70px]">
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-start">
            <article className="relative h-[357px] w-full max-w-[380px] overflow-hidden bg-white lg:w-[380px] lg:max-w-none">
              <img src={a.e5} alt="" aria-hidden className="absolute left-[118px] top-[-92px] h-[300px] w-[286px] opacity-95" />
              <h3 className="absolute left-[54px] top-[69px] font-garamond text-[32px] font-semibold leading-[1.5] text-[#1e1e1e]">Opportunity</h3>
              <p className="absolute left-[54px] top-[250px] w-[282px] font-garamond text-[20px] leading-[1.5] tracking-[0.1px] text-[#1e1e1e]">
                We Identify high-potential market and real problems.
              </p>
            </article>
            <article className="relative h-[357px] w-full max-w-[380px] overflow-hidden bg-white lg:w-[380px] lg:max-w-none">
              <img src={a.e6} alt="" aria-hidden className="absolute -left-[24px] -top-[3px] h-[112px] w-[112px]" />
              <img src={a.e9} alt="" aria-hidden className="absolute left-[73px] -top-[122.5px] h-[307px] w-[307px]" />
              <img src={a.e10} alt="" aria-hidden className="absolute left-[290px] top-[9.5px] h-[106px] w-[106px]" />
              <h3 className="absolute left-[54px] top-[69px] font-garamond text-[32px] font-semibold leading-[1.5] text-[#1e1e1e]">Build</h3>
              <p className="absolute left-[54px] top-[250px] w-[282px] font-garamond text-[20px] leading-[1.5] tracking-[0.1px] text-[#1e1e1e]">
                We design and develop scalable digital products.
              </p>
            </article>
            <article className="relative h-[357px] w-full max-w-[380px] overflow-hidden bg-white lg:w-[380px] lg:max-w-none">
              <img src={a.e11} alt="" aria-hidden className="absolute left-[21.5px] -top-[203px] h-[348px] w-[348px]" />
              <img src={a.e5} alt="" aria-hidden className="absolute -left-[7px] -top-[62px] h-[206.531px] w-[196.813px]" />
              <h3 className="absolute left-[54px] top-[69px] font-garamond text-[32px] font-semibold leading-[1.5] text-[#1e1e1e]">Scale</h3>
              <p className="absolute left-[54px] top-[250px] w-[282px] font-garamond text-[20px] leading-[1.5] tracking-[0.1px] text-[#1e1e1e]">
                We support companies with technology, strategy, and resources.
              </p>
            </article>
          </div>
        </section>

        <section className="px-5 pb-14 sm:px-8 lg:px-[100px]">
          <div className="flex flex-col justify-between gap-4 lg:h-[146px] lg:flex-row">
            <h3 className="font-garamond text-[40px] font-semibold leading-[1.2] tracking-[0.24px] lg:text-[48px]">Our Company</h3>
            <p className="max-w-[447px] font-garamond text-[20px] leading-[1.5] tracking-[0.1px] text-[#6f6f6f]">
              Hooom is a Venture Builder that creates, launches, and Supports Innovative Technology Companies across multiple Industries.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[a.company1, a.company2, a.company3, a.company4].map((src, i) => (
              <img key={src} src={src} alt={`Company preview ${i + 1}`} className="h-[320px] w-full rounded-[8px] object-cover lg:h-[441px]" />
            ))}
          </div>
        </section>

        <section className="px-5 pb-14 sm:px-8 lg:px-[100px]">
          <div className="mx-auto flex w-full max-w-[1240px] flex-col items-start gap-8 bg-white lg:h-[652px] lg:gap-[60px]">
            <div className="flex w-full flex-col justify-between gap-4 lg:h-[100px] lg:flex-row">
              <h3 className="font-garamond text-[40px] font-semibold leading-[1.2] tracking-[0.24px] lg:text-[48px]">What Our Clients Say</h3>
              <p className="max-w-[448px] font-garamond text-[20px] leading-[1.5] text-[#6f6f6f]">
                &quot;Hoom Technology delivered a solution that completely transformed how we operate. Their attention to detail and execution was exceptional.&quot;
              </p>
            </div>
            <div className="relative w-full overflow-hidden bg-black px-6 py-10 lg:h-[473px] lg:px-[38px] lg:py-[73px]">
              <div className="absolute right-0 top-0 hidden lg:block">
                <div className="ml-[68px] mt-[-2px] h-[50px] w-[50px] bg-white" />
                <div className="ml-[34px] mt-[-2px] h-[34px] w-[34px] bg-white" />
                <div className="-mt-[68px] h-[34px] w-[34px] bg-white" />
              </div>
              <div className="absolute left-0 top-[388px] hidden h-[85.46px] w-[120px] lg:block [transform:matrix(-1,0,0,1,0,0)]">
                <div className="absolute left-0 top-[34.54px] h-[50.93px] w-[50.93px] bg-white" />
                <div className="absolute left-[50.93px] top-0 h-[34.54px] w-[34.54px] bg-white" />
                <div className="absolute left-[85.46px] top-[34.54px] h-[34.54px] w-[34.54px] bg-white" />
              </div>
              <div className="grid gap-8 lg:grid-cols-3 lg:gap-[45px]">
                {[a.avatar1, a.avatar2, a.avatar3].map((avatar) => (
                  <article key={avatar} className="space-y-8 lg:space-y-[36px]">
                    <p className="font-garamond text-[17px] leading-[1.3] tracking-[0.085px] text-[#cecfd4]">
                      &quot;Hoom Technology delivered a solution that completely transformed how we operate. Their attention to detail and execution was exceptional.&quot;
                    </p>
                    <div className="flex items-center gap-[15px]">
                      <img src={avatar} alt="Client avatar" className="h-[50px] w-[50px] rounded-full border border-[#e1e1e1] object-cover" />
                      <div className="text-white">
                        <p className="font-garamond text-[14px] font-semibold">Badman Robb</p>
                        <p className="font-garamond text-[11px]">AI Native Designer</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-14 sm:px-8 lg:px-[100px]">
          <div className="relative h-[388px] overflow-hidden">
            <img src={a.ctaBg} alt="People collaborating" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <h3 className="max-w-[612px] font-garamond text-[38px] font-semibold leading-[1.2] tracking-[0.28px] text-white sm:text-[48px] lg:text-[56px]">
                Let&apos;s Build Something Great Together
              </h3>
              <p className="mt-4 max-w-[550px] font-garamond text-[18px] text-[#f8fbff] sm:text-[20px]">
                Tell us about your project and let&apos;s bring your ideas to life.
              </p>
              <button className="mt-6 h-[63px] w-[195px] rounded-[99px] bg-white font-garamond text-[17px] font-semibold text-[#1e1e1e]">
                Get Started
              </button>
            </div>
          </div>
        </section>

        <footer className="px-5 pb-8 pt-8 sm:px-8 lg:px-[100px] lg:pb-12 lg:pt-10">
          <div className="border-t border-[#d7d7d7] pt-8">
            <div className="grid gap-10 lg:grid-cols-[297px_repeat(4,minmax(0,1fr))] lg:gap-[80px]">
              <p className="font-sans text-[15px] leading-[1.5]">Tell us about your project and let&apos;s bring your ideas to life.</p>
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h4 className="font-sans text-[18px] font-semibold">{section.title}</h4>
                  <ul className="mt-6 space-y-4 font-sans text-[16px]">
                    {section.items.map((item) => (
                      <li key={item.label} className="flex items-center gap-1.5">
                        <span>{item.label}</span>
                        {item.withArrow ? <span className="text-[12px] leading-none text-[#1e1e1e]">↗</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-[10px]">
                <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#cecfd4] p-[10px]">
                  <img src={a.iconX} alt="X" className="h-6 w-6 object-contain" />
                </span>
                <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#cecfd4] p-[10px]">
                  <img src={a.iconTikTok} alt="TikTok" className="h-6 w-[22px] object-contain" />
                </span>
                <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#cecfd4] p-[10px]">
                  <img src={a.iconLinkedIn} alt="LinkedIn" className="h-6 w-6 object-contain" />
                </span>
              </div>
              <div className="flex items-center gap-3 font-sans text-[15px]">
                <span>Privacy Policy</span>
                <span className="text-[#b9b9b9]">|</span>
                <span>Terms of use</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

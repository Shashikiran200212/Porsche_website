import Image from 'next/image';

const navigation = {
  connect: [
    { name: 'Book Meeting', href: '' },
    { name: 'Twitter', href: 'https://twitter.com/justansub' },
    { name: 'Github', href: 'https://www.youtube.com/@SpeedyBrand-SEO' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/speedy-brand-inc/' },
  ],
  company: [
    { name: 'Blogs', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Affiliate Partner', href: '/' },
    { name: 'AI For Enterprise', href: '/' },
  ],
};

const TwoColumnFooter = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-[#252525]  text-gray-300">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-8">
          <Image
            priority
            unoptimized
            width={16}  // Smaller width
            height={16} // Smaller height
            src="iconm.png"
            alt="logo"
            className="w-[40px] h-auto"  // Maintain aspect ratio
            />


            <p className="text-md max-w-xs leading-6 font-light text-justify">
            * All new vehicles offered by Porsche are type-approved according to WLTP. Official NEDC values derived from WLTP values are no longer available for new vehicles as of 1 January 2023 and can therefore not be provided.
            </p>
            <div className="text-sm">
              <div>Made with 💜 Shashi Kiran.</div>
            </div>
          </div>
          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row lg:space-x-16">
            {/* Connect Links */}
            <div className="space-y-4 mb-5">
              <h3 className="text-2xl font-bold leading-6">Connect</h3>
              <div className="space-y-2 flex flex-col">
                {navigation.connect.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm leading-6 hover:text-gray-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold leading-6">Company</h3>
              <div className="space-y-2 flex flex-col">
                {navigation.company.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm leading-6 hover:text-gray-400"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-4 text-center">
            <p className='text-3xl' style={{fontFamily:"PorscheRegular"}}>Porsche</p>
          <p className="text-xs leading-5">&copy; 2024 Porsche. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default TwoColumnFooter;

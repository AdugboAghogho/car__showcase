import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
        <div className="flex max-md:flex0col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col justify-start items-start gap-6">
                <Image 
                  src='/logo.svg'
                  alt='logo'
                  width={118}
                  height={18}
                  className='object-contain'
                />

                <p className="text-base text-gray-700">
                    Carhub 2023 <br />
                    All rights Reserved &copy;
                </p>
            </div>

            <div className="footer__links">
                {footerLinks.map((link) => (
                    <div key={link.title} className="footer__link">
                        <h3 className="font-bold">
                            {link.title}
                        </h3>
                        {link.links.map((item) =>(
                            <Link
                                key={item.title}
                                href={item.url}
                                className='text-gray-500 hover:primary-blue'
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer

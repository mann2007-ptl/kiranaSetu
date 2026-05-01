import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront'

function Footer() {
  return (
    <footer className="relative bg-gray-950 dark:bg-gray-900 text-white py-12 px-6 border-t border-gray-800 dark:border-gray-700">

      {/* Top gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <div className="max-w-[1100px] mx-auto">

        {/* Top section */}
        <div className="flex items-start justify-between flex-wrap gap-8">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <StorefrontIcon className="!text-indigo-400 !text-[26px]" />
              <span className="font-bold text-lg">
                Kirana<span className="text-indigo-400">Setu</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              AI-powered inventory management built with love for Indian kirana store owners.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-sm">
            <div>
              <h4 className="font-semibold text-gray-300 mb-3">Product</h4>
              <ul className="space-y-2 text-gray-500">
                <li className="hover:text-white transition-colors cursor-pointer">Features</li>
                <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-3">Company</h4>
              <ul className="space-y-2 text-gray-500">
                <li className="hover:text-white transition-colors cursor-pointer">About</li>
                <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-8 pt-6 text-sm text-gray-500 flex justify-between flex-wrap gap-4">
          <p>&copy; {new Date().getFullYear()} KiranaSetu. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
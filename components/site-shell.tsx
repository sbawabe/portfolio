"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, XIcon } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar"
import { navLinks } from "@/lib/nav-links"

export function SiteShell({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <SidebarProvider defaultOpen={false} className="flex min-h-svh flex-col">
      <header
        className="fixed inset-x-0 top-0 z-20 flex w-full items-center justify-between gap-3 border-b border-border bg-background/85 px-4 pb-3 pt-[calc(var(--safe-area-top)+0.5rem)] backdrop-blur"
        style={{ height: "var(--header-height)" }}
      >
        <Link
          href="/"
          aria-label="Navigate to the homepage"
          className="flex items-center gap-3 rounded-md px-2 py-1 text-sm font-semibold text-foreground"
        >
          <Image
            src="/favicon.svg"
            alt="Sarah Bawabe favicon"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0"
          />
        </Link>
        <HamburgerButton />
      </header>
      <div className="flex w-full flex-1 min-h-0 pt-[var(--header-height)]">
        <SidebarInset className="bg-background min-h-0">
          <div className={isHome ? "flex flex-1 flex-col" : "flex flex-1 flex-col gap-6 p-4 py-10 sm:p-6 lg:px-6 lg:py-12"}>
            {children}
          </div>
        </SidebarInset>
        <Sidebar
          side="right"
          collapsible="offcanvas"
          style={{
            top: "var(--header-height)",
            height: "calc(100vh - var(--header-height))",
          }}
        >
          <SidebarContent className="pt-10">
            <SidebarGroup>
              <SidebarMenu>
                {navLinks.map((link) => (
                  <SidebarMenuItem key={link.href}>
                    <NavLinkButton href={link.href} isActive={pathname === link.href}>
                      {link.label}
                    </NavLinkButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </SidebarProvider>
  )
}

type NavLinkButtonProps = {
  href: string
  isActive: boolean
  children: React.ReactNode
}

function NavLinkButton({ href, isActive, children }: NavLinkButtonProps) {
  const { isMobile, setOpenMobile } = useSidebar()

  function handleClick() {
    if (isMobile) {
      setOpenMobile(false)
    }
  }

  return (
    <SidebarMenuButton asChild isActive={isActive} className="text-md font-light">
      <Link href={href} onClick={handleClick}>
        {children}
      </Link>
    </SidebarMenuButton>
  )
}

function HamburgerButton() {
  const { toggleSidebar, open, openMobile, isMobile } = useSidebar()
  const isExpanded = isMobile ? openMobile : open
  const Icon = isExpanded ? XIcon : MenuIcon
  const label = isExpanded ? "Close navigation" : "Open navigation"

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      aria-label={label}
      aria-pressed={isExpanded}
      onClick={toggleSidebar}
      className="shrink-0 cursor-pointer"
    >
      <Icon className="size-5" />
    </Button>
  )
}

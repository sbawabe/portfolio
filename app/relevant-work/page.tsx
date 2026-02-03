import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RelevantWorkPage() {
  return (
    <section className="flex flex-col gap-12 lg:gap-4">
      <h1 className="text-3xl font-semibold tracking-tight">Relevant Work</h1>

      <div className="work-section">
        <div className="work-content">
          <h3>Redesigning the Fern Onboarding Flow</h3>
          <p>
            I collaborated with our designer and led the engineering rebuild of our first-time user experience and onboarding
            flow at Fern. We wanted to focus on animations and details that would help Fern feel polished, professional, and
            enterprise-ready.
          </p>

          <Button variant="outline" asChild>
            <Link href="https://dashboard.buildwithfern.com/get-started" target="_blank">
              Get started <ArrowRightIcon className="size-4" />
            </Link>
          </Button>

        </div>

        <div className="work-image">
          <Image src="/relevant-work/docs_details_abbr.gif" alt="Fern Onboarding Flow" width={1500} height={1500} className="rounded-md" />
        </div>
      </div>

      <div className="work-section reverse">
        <div className="work-image">
          <Image src="/relevant-work/visual-editor.webp" alt="Fern Editor" width={1500} height={1500} className="rounded-md" />
        </div>

        <div className="work-content">
          <h3>Building the Fern Editor</h3>
          <p>
            I co-led the development of the Fern Editor, a new web-based editing experience for docs users to create and manage
            their documentation content. The editor helps all users (technical and non-technical alike) contribute to Fern docs
            sites, making our documentation more accessible, inclusive, and easy-to-edit.
          </p>
          <Button variant="outline" asChild>
            <Link href="https://dashboard.buildwithfern.com" target="_blank">
              Try it yourself <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground italic -mt-3">Create an account above first to try it out!</p>
        </div>
      </div>

      <div className="work-section">
        <div className="work-content">
          <h3>Building the Product Switcher</h3>
          <p>
            My first project at Fern was to create a product switcher for Docs customers to use. I was told to take inspiration from
            other switchers in the industry, and build something that would feel intuitive and polished to Fern's brand. Our first
            customer to implement the switcher in production was Webflow.
          </p>

          <Button variant="outline" asChild>
            <Link href="https://developers.webflow.com/data/docs/getting-started-apps" target="_blank">
              View Webflow's switcher <ArrowRightIcon className="size-4" />
            </Link>
          </Button>

        </div>

        <div className="work-image">
          <video src="/relevant-work/product-switcher.mp4" autoPlay loop muted width={1500} height={1500} className="rounded-md">
            <source src="/relevant-work/product-switcher.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section >
  )
}

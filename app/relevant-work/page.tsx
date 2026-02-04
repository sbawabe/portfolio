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
          <h3>Building the Fern Editor</h3>
          <p>
            I co-led the development of the Fern Editor, a new web-based editing experience for docs users to create and manage
            their documentation content. The editor helps all users (technical and non-technical alike) contribute to Fern docs
            sites, making our documentation more accessible, inclusive, and easy-to-edit.
          </p>
          <Button variant="outline" asChild>
            <Link href="https://buildwithfern.com/learn/docs/writing-content/fern-editor" target="_blank">
              Read more <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground italic -mt-3">Note: you can go through the onboarding flow below to try this out yourself!</p>
        </div>
        <div className="work-image">
          <Image src="/relevant-work/visual-editor.webp" alt="Fern Editor" width={1500} height={1500} className="rounded-md" />
        </div>
      </div>

      <div className="work-section reverse">
        <div className="work-image">
          <Image src="/relevant-work/docs_details_abbr.gif" alt="Fern Onboarding Flow" width={1500} height={1500} className="rounded-md" />
        </div>
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
          <video src="/relevant-work/product-switcher.mp4" autoPlay loop muted width={1500} height={1500} className="rounded-md" playsInline>
            <source src="/relevant-work/product-switcher.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="work-section reverse">
        <div className="work-image">
          <Image src="/relevant-work/live_activities_drafting.jpg" alt="Drafting live activity" width={1500} height={1500} className="rounded-md" />
        </div>

        <div className="work-content">
          <h3>Designing and building live activities at Siro</h3>
          <p>
            I led the development of live activities at Siro, a company that provided a recording platform for in-person salespeople
            to record their sales calls and share them with their team. In order to get feedback from their coaches, it's critical that
            they record their calls successfully and in full. I built a live activity system to interact with our React Native app so that
            users could get real-time recording status updates and notifications to ensure recording success.
          </p>
          <Button variant="outline" asChild>
            <Link href="https://apps.apple.com/us/app/siro-sales-game-film/id1546176487" target="_blank">
              View the Siro app <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground italic -mt-3">4.8 star rating on the App Store!</p>

          <div className="flex gap-4 w-full items-end">
            <div className="work-image w-2/3 md:w-3/4 h-fit">
              <Image src="/relevant-work/live_activities_w.jpg" alt="Live activity watch" width={1500} height={1500} className="rounded-md" />
            </div>
            <div className="work-image w-1/3 md:w-1/4">
              <Image src="/relevant-work/live_activities_p.jpg" alt="Live activity phone" width={1500} height={1500} className="rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <div className="work-section">
        <div className="work-content">
          <h3>Whitelabeling Field Pro at Siro</h3>
          <p>
            I led the development the SalesPro interface whitelabeling at Siro, which allowed the Siro app to be branded and customized entirely
            for the ServiceTitan team. This involved creating a new variable-based theming system and UI component library for the Siro app, which
            we could dynamically apply to the app based on the app's tenant. This allowed perfect synchronization between the Siro app and the
            ServiceTitan app, but completely custom interfaces.
          </p>
          <Button variant="outline" asChild>
            <Link href="https://apps.apple.com/us/app/servicetitan-field-pro/id6670176800" target="_blank">
              View the Field Pro app <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="work-image">
          <div className="flex gap-4">
            <div className="w-1/2">
              <Image src="/relevant-work/fieldpro.webp" alt="Field Pro" width={1500} height={1000} className="rounded-md" />
            </div>
            <div className="w-1/2">
              <Image src="/relevant-work/siro.webp" alt="Field Pro" width={1500} height={1000} className="rounded-md" />
            </div>
          </div>
        </div>
      </div>

      <div className="work-section reverse">
        <div className="work-image">
          <Image src="/relevant-work/scorecards_new.png" alt="Scorecards" width={1500} height={1000} className="rounded-md" />
        </div>
        <div className="work-content">
          <h3>Building Scorecards</h3>
          <p>
            I led the development of scorecards at Siro, working closely with our product team to design and build a new way for salespeople
            to better understand their performance at-a-glance. This product helped coaches understand data-driven insights and improve their coaching,
            and is still used by coaches today at Siro.
          </p>
          <Button variant="outline" asChild>
            <Link href="https://www.siro.ai/blog/scorecards" target="_blank">
              Read the blog post <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

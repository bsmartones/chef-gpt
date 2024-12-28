import { Suspense } from "react"

import { GenerateRecipe } from "@/components/generate-recipe"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { RecentRecipes } from "@/components/recent-recipes"
import { RecipesCounter } from "@/components/recipes-counter"

export default async function IndexPage() {
  return (
    <div className="container grid">
      <PageHeader>
        <RecipesCounter />
        <PageHeaderHeading>
          Say goodbye to manual SEO Strategy crafting with
          <span className="bg-gradient-to-r from-violet-500 to-teal-300 bg-clip-text text-transparent">
            {" pSEO AI Agent"}
          </span>
        </PageHeaderHeading>
        <PageHeaderDescription>
          Programmatic SEO. On Autopilot. Strategy, Data, Templates, Workflows. Ready to Scale.
        </PageHeaderDescription>
      </PageHeader>
      <GenerateRecipe />
      <Suspense>
        <RecentRecipes />
      </Suspense>
    </div>
  )
}

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useGlobalJsonForm } from "gatsby-tinacms-json"

const AboutForm = {
  label: "About",
  fields: [
    {
      label: "Title",
      name: "rawJson.title",
      component: "text",
      parse(value) {
        return value || ""
      },
    },
    {
      label: "Description",
      name: "rawJson.description",
      component: "text",
      parse(value) {
        return value || ""
      },
    },
  ],
}

const About = () => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site: dataJson(fileRelativePath: { eq: "/src/data/about.json" }) {
        title
        description

        rawJson
        fileRelativePath
      }
    }
  `)

  const [about] = useGlobalJsonForm(data.site, AboutForm)

  return (
    <div className="bg-blue-500 p-4 text-white w-100">
      <h1 className="text-4xl">{about.title}</h1>
      <div className="">{about.description}</div>
    </div>
  )
}

export default About

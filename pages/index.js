import Head from 'next/head'
import Link from 'next/Link'
import { getSortedPostsData, getJobs } from '../lib/posts'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const Home = ({ allPostsData, jobs }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum recusandae totam suscipit culpa cupiditate consequuntur, earum, aspernatur perferendis in ullam doloribus, quam possimus quod veritatis! Sapiente corrupti a commodi facilis test.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Jobs</h2>
        <ul className={utilStyles.list}>
          {jobs.map(
            ({
              id,
              date,
              title,
              description,
              companyNumEmployees,
              employmentType,
              companyLogoUrl,
              companyName,
              position,
              source,
              url,
              tags,
              remote,
              location
            }) => (
            <li className={utilStyles.listItem} key={id}>
              <div>
                {title}
                <br />
                {id}
                <br />
                {date}
                <br />
                {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
                <br />
                {companyNumEmployees}
                <br />
                {employmentType}
                <br />
                {companyLogoUrl}
                <br />
                {companyName}
                <br />
                {position}
                <br />
                {source}
                <br />
                {url}
                <br />
                {tags}
                <br />
                {remote}
                <br />
                {location}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPostsData = await getSortedPostsData()
  const jobs = await getJobs()
  return {
    props: {
      allPostsData,
      jobs
    }
  }
}

export default Home
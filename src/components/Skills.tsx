import { IconButton, Tooltip } from '@mui/material'
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiNextdotjs,
  SiNestjs,
} from 'react-icons/si'

export default function Skills() {
  return (
    <section className="flex flex-col items-center justify-center pt-20">
      <p className="font-bold sm:text-2xl text-xl">Tech skills</p>
      <div className="flex flex-wrap items-center justify-center gap-5 mt-5 mb-10 text-5xl font-bold">
        <Tooltip title="TypeScript">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiTypescript />
          </IconButton>
        </Tooltip>
        <Tooltip title="JavaScript">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiJavascript />
          </IconButton>
        </Tooltip>
        <Tooltip title="React">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiReact />
          </IconButton>
        </Tooltip>
        <Tooltip title="Next.js">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiNextdotjs />
          </IconButton>
        </Tooltip>
        <Tooltip title="Nest.js">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiNestjs />
          </IconButton>
        </Tooltip>
        <Tooltip title="Redux">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiRedux />
          </IconButton>
        </Tooltip>
        <Tooltip title="Node.js">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiNodedotjs />
          </IconButton>
        </Tooltip>
        <Tooltip title="SQLite3">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiSqlite />
          </IconButton>
        </Tooltip>
        <Tooltip title="REST APIs">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiReacthookform />
          </IconButton>
        </Tooltip>
        <Tooltip title="HTML">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiHtml5 />
          </IconButton>
        </Tooltip>
        <Tooltip title="CSS">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiCss3 />
          </IconButton>
        </Tooltip>
        <Tooltip title="Tailwind">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiTailwindcss />
          </IconButton>
        </Tooltip>
        <Tooltip title="Vite">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiVite />
          </IconButton>
        </Tooltip>
        <Tooltip title="React Query">
          <IconButton style={{ fontSize: '3rem' }}>
            <SiReactquery />
          </IconButton>
        </Tooltip>
      </div>
    </section>
  )
}

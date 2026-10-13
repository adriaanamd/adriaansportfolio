import { useState } from "react"

import { stack, type StackItem } from "../data/stack/stack"

function StackIcon({ item }: { item: StackItem }) {
  const [hasError, setHasError] = useState(false)

  return (
    <span
      className="stack-icon"
      style={{
        backgroundColor: item.iconBackground ?? "rgba(229, 234, 220, 0.72)",
      }}
    >
      {hasError ? (
        <span className="stack-icon-fallback" aria-hidden="true">
          {item.name.slice(0, 2)}
        </span>
      ) : (
        <img
          src={item.icon}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={() => setHasError(true)}
        />
      )}
    </span>
  )
}

export default function Stack() {
  const toolCount = stack.reduce(
    (total, group) => total + group.items.length,
    0,
  )

  return (
    <section className="section stack-section" id="stack">
      <div className="stack-intro">
        <div>
          <p className="eyebrow">Current stack</p>
          <h2>
            What I <em>work with</em>
          </h2>
        </div>
        <p className="stack-summary">
          <strong>{toolCount}</strong> tools across{" "}
          <strong>{stack.length}</strong> working disciplines.
        </p>
      </div>

      <div className="stack-grid">
        {stack.map((group, index) => (
          <article className="stack-card glass" key={group.group}>
            <div className="stack-card-heading">
              <span className="stack-index">0{index + 1}</span>
              <h3>{group.group}</h3>
            </div>
            <div className="stack-list">
              {group.items.map((item) => (
                <div className="stack-item" key={item.name}>
                  <StackIcon item={item} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

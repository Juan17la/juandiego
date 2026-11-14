export const lift = 'shadow-[inset_0_1px_0_rgb(255_255_255/0.45),0_30px_60px_-30px_rgb(0_0_0/0.6)]'
export const sheet = `on-card scroll-mt-6 rounded-[28px] bg-card text-ink p-6 sm:p-10 ${lift}`
/** Page anchor for a project: its repo name, identical in every language. */
export const projectAnchor = (repo: string) => (repo.split('/').pop() ?? repo).toLowerCase()

'use babel'

import { CompositeDisposable } from 'atom';

export default {
  activate () {
    this.subscriptions = new CompositeDisposable()
    this.subscriptions.add(
      atom.commands.add(
        'atom-workspace',
        'theme-toggle:toggle',
        () => {
          // TODO: stuff
          const dark = atom.config.get('core.themes')[0].includes('dark')
          const themes = dark ? 'theme-toggle.lightThemes' : 'theme-toggle.darkThemes'
          atom.config.set('core.themes', atom.config.get(themes))
        }
      )
    )
  },
  deactivate () {
    this.subscriptions.dispose()
  }
}

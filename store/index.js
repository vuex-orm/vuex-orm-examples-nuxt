import VuexORM from '@vuex-orm/core'
import database from '../orm/database'

export const plugins = [ VuexORM.install(database) ]

export const state = () => ({
})

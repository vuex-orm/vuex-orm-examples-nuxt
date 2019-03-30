import VuexORM from '@vuex-orm/core'
import database from '../database/database'

export const plugins = [ VuexORM.install(database) ]

export const state = () => ({
})

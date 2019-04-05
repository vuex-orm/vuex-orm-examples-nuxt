import VuexORM from '@vuex-orm/core'
import database from '@/database'

export const plugins = [
  VuexORM.install(database)
]

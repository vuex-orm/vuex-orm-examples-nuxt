// Emulating todo records which should be returned from API backend
// in the real world.
export default async function data() {
  return [
    {
      title: 'Create awesome application!',
      done: false,
      assignee: { name: 'John Doe' }
    },
    {
      title: 'Read the documentation',
      done: false,
      assignee: { name: 'John Doe' }
    },
    {
      title: 'Star Vuex ORM repository',
      done: false,
      assignee: { name: 'Johnny Doe' }
    }
  ]
}

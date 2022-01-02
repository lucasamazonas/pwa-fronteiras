import FIcone from '@jamescoyle/vue-icon'
import {mdiPlus, mdiDelete, mdiPencil, mdiAutoUpload} from '@mdi/js'

const MixinGlobal = {
    components: {FIcone},
    data: () => ({
        mdi: {
            plus: mdiPlus,
            delete: mdiDelete,
            pencil: mdiPencil,
            mdiAutoUpload: mdiAutoUpload
        }
    }),
}

export default MixinGlobal

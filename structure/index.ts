import type { StructureResolver } from 'sanity/structure'
import { DatabaseIcon, ImageIcon, ProjectsIcon } from '@sanity/icons'

export const structure: StructureResolver = (S) =>
    S.list()
        .id('root')
        .title('Content')
        .items([
            S.documentTypeListItem('banners').title('Banners').icon(ImageIcon),
            S.documentTypeListItem('projects').title('Projects').icon(ProjectsIcon),
            S.divider(),
            S.documentTypeListItem('soundBanks').title('Sound Banks').icon(DatabaseIcon),
        ]);

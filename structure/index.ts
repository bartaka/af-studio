import type { StructureResolver } from 'sanity/structure'
import { DatabaseIcon, ImageIcon, ProjectsIcon } from '@sanity/icons';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export const structure: StructureResolver = (S, context) =>
    S.list()
        .id('root')
        .title('Content')
        .items([
            S.documentTypeListItem('banners').title('Banners').icon(ImageIcon),
            orderableDocumentListDeskItem({
                type: 'projects',
                title: 'Projects',
                icon: ProjectsIcon,
                // Required if using multiple lists of the same 'type'
                id: 'projects',
                S,
                context
            }),
            S.divider(),
            S.documentTypeListItem('soundBanks').title('Sound Banks').icon(DatabaseIcon),
        ]);

/* eslint-disable no-undef */
import constants from '../../constants';

const heading = {
  name: 'Heading',
  tag: 'He',
  category: constants.fieldCategories.AUTHORING_HELPER.name,
  tagColor: constants.fieldCategories.AUTHORING_HELPER.color,
  description: 'Headline',
  id: 'heading',
  fields: [
    FIELD_DEFINITION_ID,
    {
      id: 'text',
      label: 'Headline text',
      description: '',
      type: 'String',
      required: true,
    },
    {
      id: 'level',
      label: 'Level of the Headline (1-6)',
      description: '',
      type: 'Long',
      typeOptions: [
        {
          value: '1',
          caption: '1',
        },
        {
          value: '2',
          caption: '2',
        },
        {
          value: '3',
          caption: '3',
        },
        {
          value: '4',
          caption: '4',
        },
        {
          value: '5',
          caption: '5',
        },
        {
          value: '6',
          caption: '6',
        },
      ],
      defaultValue: '4',
      required: true,
    },
  ],
  src: `<h{level} id="{id}">
        {text}
    </h{level}>`,
  xml: `<{id}
    jcr:primaryType="nt:unstructured"
    sling:resourceType="granite/ui/components/coral/foundation/heading"
    level="{level}"
    text="{text}"/>`,
};

export default heading;

module.exports = ({ env }) => ({
	"content-versioning": {
		enabled:  true,
	},
  'duplicate-button': true,
	ckeditor: true,
	seo: {
    enabled: true,
  },
	slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
	publisher: {
		enabled: true,
	},
});
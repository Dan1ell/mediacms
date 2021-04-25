from django.contrib import admin

from .models import (
    Media,
    Encoding,
    EncodeProfile,
    Category,
    Comment,
    Tag,
    Language,
    Subtitle,
)


class CommentAdmin(admin.ModelAdmin):
    search_fields = ["text"]
    list_display = ["text", "add_date", "user", "media"]
    ordering = ("-add_date",)
    readonly_fields = ("user", "media", "parent")


class MediaAdmin(admin.ModelAdmin):
    search_fields = ["title"]
    list_display = [
        "title",
        "user",
        "recorded_date",
        "add_date",
        'edit_date',
        "media_type",
        "size",
        "duration",
        "state",
        "is_reviewed",
        "encoding_status",
        "featured",
        "views",
        "get_comments_count",
    ]
    list_filter = ["state", "is_reviewed", "encoding_status", "featured", "category"]
    ordering = ("-add_date", )
    readonly_fields = ("user", "tags", "category", "channel", 'recorded_date', 
    'add_date', 'edit_date', 'recorded_location_gpscoordinates', 'duration', 'media_type',
    'size', 'video_height', 'exiftool_media_info', 'media_info', )

    fieldsets = (
        (None, {
            'fields': ('title', 'description', 'user', 'tags', 'category', 
            'recorded_date', 'add_date', 'edit_date', 'recorded_location_gpscoordinates', )
        }),
        ('Meta', {
            'fields': ('media_type','duration', 'size', 'video_height', 'exiftool_media_info', 'media_info', )
        }),
        ('Quality', {
            'fields': ('views', 'likes', 'dislikes', 'reported_times', )
        }),
        ('Process', {
            'fields': ('state', 'is_reviewed', 'listable', 'enable_comments', 'featured', 'user_featured', 'rating_category', )
        }),
        ('File', {
            'fields': ('encoding_status', 'uid', 'friendly_token', 'md5sum', 
            'media_file', 'hls_file', 'preview_file_path', 'poster', 'uploaded_poster', 
            'thumbnail', 'uploaded_thumbnail', 'thumbnail_time', 'sprites', 'search', )
        }),
        ('Other', {
            'fields': ('license', 'password', )            
        }),
    )

    def get_comments_count(self, obj):
        return obj.comments.count()

    get_comments_count.short_description = "Comments count"


class CategoryAdmin(admin.ModelAdmin):
    search_fields = ["title"]
    list_display = ["title", "user", "add_date", "is_global", "media_count"]
    list_filter = ["is_global"]
    ordering = ("-add_date",)
    readonly_fields = ("user", "media_count")


class TagAdmin(admin.ModelAdmin):
    search_fields = ["title", "plural"]
    list_display = ["title", "plural", "get_parents", "user", "media_count"]
    readonly_fields = ("user", "media_count")
    


class EncodeProfileAdmin(admin.ModelAdmin):
    list_display = ("name", "extension", "resolution", "codec", "description", "active")
    list_filter = ["extension", "resolution", "codec", "active"]
    search_fields = ["name", "extension", "resolution", "codec", "description"]
    list_per_page = 100
    fields = ("name", "extension", "resolution", "codec", "description", "active")


class LanguageAdmin(admin.ModelAdmin):
    pass


class SubtitleAdmin(admin.ModelAdmin):
    pass


class EncodingAdmin(admin.ModelAdmin):
    pass


admin.site.register(EncodeProfile, EncodeProfileAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Media, MediaAdmin)
admin.site.register(Encoding, EncodingAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Subtitle, SubtitleAdmin)
admin.site.register(Language, LanguageAdmin)

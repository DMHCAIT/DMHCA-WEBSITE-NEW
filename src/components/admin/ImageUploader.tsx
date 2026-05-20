'use client';

import { useState } from 'react';

type ImageUploaderProps = {
  currentUrl?: string;
  onUrlChange: (url: string) => void;
  label?: string;
  acceptVideo?: boolean;
};

export default function ImageUploader({ 
  currentUrl, 
  onUrlChange, 
  label = 'Image',
  acceptVideo = false 
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showMediaBrowser, setShowMediaBrowser] = useState(false);
  const [media, setMedia] = useState<any[]>([]);

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('altText', file.name);

      const res = await fetch('/api/admin/media', {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();
      if (res.ok) {
        onUrlChange(json.media.public_url);
      } else {
        setError(json.error || 'Upload failed');
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUploading(false);
    }
  }

  async function loadMediaLibrary() {
    try {
      const type = acceptVideo ? '' : '?type=image';
      const res = await fetch(`/api/admin/media${type}`);
      const json = await res.json();
      if (res.ok) {
        setMedia(json.media || []);
        setShowMediaBrowser(true);
      }
    } catch (err) {
      console.error('Failed to load media:', err);
    }
  }

  function selectFromLibrary(url: string) {
    onUrlChange(url);
    setShowMediaBrowser(false);
  }

  const acceptTypes = acceptVideo ? 'image/*,video/*' : 'image/*';

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-slate-700">{label}</label>
      
      {/* Current Image Preview */}
      {currentUrl && (
        <div className="relative inline-block">
          {currentUrl.match(/\.(mp4|webm|ogg)$/i) ? (
            <video src={currentUrl} controls className="max-w-xs rounded-lg border border-slate-200" />
          ) : (
            <img src={currentUrl} alt="Current" className="max-w-xs rounded-lg border border-slate-200" />
          )}
          <button
            type="button"
            onClick={() => onUrlChange('')}
            className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* URL Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={currentUrl || ''}
          onChange={(e) => onUrlChange(e.target.value)}
          placeholder="Enter URL or upload file"
          className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
        />
      </div>

      {/* Upload Options */}
      <div className="flex flex-wrap gap-2">
        <label className="px-4 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800 cursor-pointer text-sm font-medium disabled:opacity-50">
          {uploading ? 'Uploading...' : '📤 Upload New'}
          <input
            type="file"
            accept={acceptTypes}
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>
        
        <button
          type="button"
          onClick={loadMediaLibrary}
          className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 text-sm font-medium"
        >
          📁 Choose from Library
        </button>
      </div>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-2">
          {error}
        </div>
      )}

      {/* Media Library Browser Modal */}
      {showMediaBrowser && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowMediaBrowser(false)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Choose from Media Library</h3>
                <button
                  onClick={() => setShowMediaBrowser(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {media.length === 0 ? (
                <div className="text-center py-8 text-slate-500">
                  No media files found. Upload some files first.
                </div>
              ) : (
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {media.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectFromLibrary(item.public_url)}
                      className="aspect-square bg-slate-100 rounded-lg overflow-hidden hover:ring-2 hover:ring-sky-500 transition"
                    >
                      {item.file_type === 'image' ? (
                        <img
                          src={item.public_url}
                          alt={item.original_name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video src={item.public_url} className="w-full h-full object-cover" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

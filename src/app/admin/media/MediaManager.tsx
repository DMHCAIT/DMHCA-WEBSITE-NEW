'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Media = {
  id: string;
  filename: string;
  original_name: string;
  file_type: 'image' | 'video' | 'document';
  mime_type: string;
  file_size: number;
  public_url: string;
  alt_text: string | null;
  created_at: string;
};

export default function MediaManager() {
  const router = useRouter();
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'image' | 'video' | 'document'>('all');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [altText, setAltText] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);

  useEffect(() => {
    loadMedia();
  }, [filter]);

  async function loadMedia() {
    setLoading(true);
    setError(null);
    try {
      const url = filter === 'all' ? '/api/admin/media' : `/api/admin/media?type=${filter}`;
      const res = await fetch(url);
      const json = await res.json();
      if (res.ok) {
        setMedia(json.media || []);
      } else {
        setError(json.error || 'Failed to load media');
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedFile) return;

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('altText', altText);
      formData.append('uploadedBy', 'admin');

      const res = await fetch('/api/admin/media', {
        method: 'POST',
        body: formData,
      });

      const json = await res.json();
      if (res.ok) {
        setSelectedFile(null);
        setAltText('');
        loadMedia();
        router.refresh();
      } else {
        setError(json.error || 'Upload failed');
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUploading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this media file? This cannot be undone.')) return;

    try {
      const res = await fetch(`/api/admin/media/${id}`, { method: 'DELETE' });
      if (res.ok) {
        loadMedia();
        setSelectedMedia(null);
        router.refresh();
      } else {
        const json = await res.json();
        setError(json.error || 'Delete failed');
      }
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function copyUrl(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      alert('URL copied to clipboard!');
    } catch (err) {
      console.error('Copy failed:', err);
    }
  }

  function formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  }

  return (
    <div>
      {/* Upload Section */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 mb-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Upload New Media</h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Select File (Image or Video)
            </label>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-medium
                file:bg-sky-50 file:text-sky-700
                hover:file:bg-sky-100"
            />
            {selectedFile && (
              <p className="mt-2 text-sm text-slate-600">
                Selected: {selectedFile.name} ({formatFileSize(selectedFile.size)})
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Alt Text / Description (Optional)
            </label>
            <input
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Describe the image for accessibility"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={!selectedFile || uploading}
            className="px-4 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-4">
        {(['all', 'image', 'video', 'document'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              filter === f
                ? 'bg-sky-700 text-white'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Media Grid */}
      {loading ? (
        <div className="text-center py-12 text-slate-500">Loading media...</div>
      ) : media.length === 0 ? (
        <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-slate-200">
          No media files found. Upload your first file above.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {media.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition cursor-pointer group"
            >
              <div className="aspect-square bg-slate-100 flex items-center justify-center overflow-hidden">
                {item.file_type === 'image' ? (
                  <img
                    src={item.public_url}
                    alt={item.alt_text || item.original_name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                ) : item.file_type === 'video' ? (
                  <video src={item.public_url} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-slate-400">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="text-xs font-medium text-slate-900 truncate">{item.original_name}</p>
                <p className="text-xs text-slate-500 mt-1">{formatFileSize(item.file_size)}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Media Details</h3>
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {selectedMedia.file_type === 'image' && (
                <img
                  src={selectedMedia.public_url}
                  alt={selectedMedia.alt_text || selectedMedia.original_name}
                  className="w-full rounded-lg mb-4"
                />
              )}
              {selectedMedia.file_type === 'video' && (
                <video src={selectedMedia.public_url} controls className="w-full rounded-lg mb-4" />
              )}

              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-slate-700">Filename:</span>
                  <span className="ml-2 text-slate-600">{selectedMedia.original_name}</span>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Type:</span>
                  <span className="ml-2 text-slate-600">{selectedMedia.mime_type}</span>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Size:</span>
                  <span className="ml-2 text-slate-600">{formatFileSize(selectedMedia.file_size)}</span>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Uploaded:</span>
                  <span className="ml-2 text-slate-600">
                    {new Date(selectedMedia.created_at).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-slate-700">URL:</span>
                  <div className="mt-1 flex items-center gap-2">
                    <input
                      type="text"
                      value={selectedMedia.public_url}
                      readOnly
                      className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs"
                    />
                    <button
                      onClick={() => copyUrl(selectedMedia.public_url)}
                      className="px-3 py-2 bg-sky-700 text-white rounded hover:bg-sky-800 text-xs font-medium"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => copyUrl(selectedMedia.public_url)}
                  className="flex-1 px-4 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800 font-medium"
                >
                  Copy URL
                </button>
                <button
                  onClick={() => handleDelete(selectedMedia.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

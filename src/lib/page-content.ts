/**
 * Fetch page content from database
 * @param pageId - The page ID (e.g., 'home-hero', 'about-dmhca')
 * @returns Page data or null if not found
 */
export async function getPageContent(pageId: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL || ''}/api/pages/${pageId}`, {
      next: { revalidate: 60 } // Cache for 60 seconds
    });
    
    if (!res.ok) return null;
    
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error(`Error fetching page ${pageId}:`, error);
    return null;
  }
}

/**
 * Parse page content JSON safely
 * @param page - Page data from database
 * @returns Parsed content or null
 */
export function parsePageContent(page: any) {
  if (!page || !page.content) return null;
  
  try {
    if (typeof page.content === 'string') {
      return JSON.parse(page.content);
    }
    return page.content;
  } catch (error) {
    console.error('Error parsing page content:', error);
    return null;
  }
}

/**
 * Get page content and parse it
 * @param pageId - The page ID
 * @returns Parsed content or null
 */
export async function getPageData(pageId: string) {
  const page = await getPageContent(pageId);
  return parsePageContent(page);
}

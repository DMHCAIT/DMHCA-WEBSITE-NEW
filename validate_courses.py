#!/usr/bin/env python3
"""
Course Data Validation Script
Validates that all courses in data.ts have:
- Valid images that exist in the public folder
- Unique IDs
- Correct category counts
"""

import re
import os
from collections import Counter

def validate_courses():
    """Main validation function"""
    
    # Read data.ts
    with open('src/lib/data.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract all courses with their details
    courses = []
    lines = content.split('\n')
    current_course = {}

    for i, line in enumerate(lines):
        if 'id:' in line:
            id_match = re.search(r'id:\s*"([^"]+)"', line)
            if id_match:
                current_course['id'] = id_match.group(1)
                current_course['line'] = i + 1
                
        if 'title:' in line and ('Certificate' in line or 'Fellowship' in line or 'PG Diploma' in line):
            title_match = re.search(r'title:\s*"([^"]+)"', line)
            if title_match:
                current_course['title'] = title_match.group(1)
                
        if 'category:' in line and current_course.get('title'):
            cat_match = re.search(r'category:\s*"([^"]+)"', line)
            if cat_match:
                current_course['category'] = cat_match.group(1)
                
        if 'image:' in line and current_course.get('title'):
            img_match = re.search(r'image:\s*"([^"]+)"', line)
            if img_match:
                current_course['image'] = img_match.group(1)
                courses.append(current_course.copy())
                current_course = {}

    print("="*60)
    print("COURSE DATA VALIDATION REPORT")
    print("="*60)
    print()

    # Validate course count
    expected_total = 74
    actual_total = len(courses)
    if actual_total == expected_total:
        print(f"✓ Total courses: {actual_total}/{expected_total}")
    else:
        print(f"✗ Total courses: {actual_total}/{expected_total} - MISMATCH!")
    
    # Validate category counts
    category_counts = Counter(c['category'] for c in courses)
    expected_counts = {
        'Certificate': 12,
        'Fellowship': 51,
        'PG Diploma': 11
    }
    
    print()
    print("Category Distribution:")
    all_categories_ok = True
    for category, expected in expected_counts.items():
        actual = category_counts.get(category, 0)
        status = "✓" if actual == expected else "✗"
        print(f"  {status} {category}: {actual}/{expected}")
        if actual != expected:
            all_categories_ok = False
    
    # Validate images
    print()
    print("Image Validation:")
    missing_images = []
    for course in courses:
        img_path = course['image'].lstrip('/')
        full_path = f"public/{img_path}"
        if not os.path.exists(full_path):
            missing_images.append((course['title'], img_path, course['line']))
    
    if missing_images:
        print(f"  ✗ Missing {len(missing_images)} images:")
        for title, path, line in missing_images:
            print(f"    Line {line}: {title}")
            print(f"      Expected: {path}")
    else:
        print(f"  ✓ All {len(courses)} course images exist!")
    
    # Validate unique IDs
    print()
    print("ID Validation:")
    ids = [c['id'] for c in courses]
    duplicates = [id for id in set(ids) if ids.count(id) > 1]
    
    if duplicates:
        print(f"  ✗ Found {len(duplicates)} duplicate IDs:")
        for dup in duplicates:
            dup_courses = [c for c in courses if c['id'] == dup]
            print(f"    '{dup}' used by:")
            for c in dup_courses:
                print(f"      - {c['title']} (line {c['line']})")
    else:
        print(f"  ✓ All {len(ids)} course IDs are unique!")
    
    # Final summary
    print()
    print("="*60)
    all_ok = (
        actual_total == expected_total and
        all_categories_ok and
        len(missing_images) == 0 and
        len(duplicates) == 0
    )
    
    if all_ok:
        print("✓✓✓ ALL VALIDATIONS PASSED ✓✓✓")
        print(f"All {actual_total} courses are properly configured!")
    else:
        print("✗✗✗ VALIDATION FAILED ✗✗✗")
        print("Please fix the issues above.")
    print("="*60)
    
    return all_ok

if __name__ == "__main__":
    success = validate_courses()
    exit(0 if success else 1)

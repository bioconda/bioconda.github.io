:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotationforge'
.. highlight: bash

bioconductor-annotationforge
============================

.. conda:recipe:: bioconductor-annotationforge
   :replaces_section_title:
   :noindex:

   Tools for building SQLite\-based annotation data packages

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/AnnotationForge.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-annotationforge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationforge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationforge/meta.yaml>`_
   :links: biotools: :biotools:`annotationforge`, doi: :doi:`10.1038/nmeth.3252`

   Provides code for generating Annotation packages and their databases.  Packages produced are intended to be used with AnnotationDbi.


.. conda:package:: bioconductor-annotationforge

   |downloads_bioconductor-annotationforge| |docker_bioconductor-annotationforge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.1-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.2-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.1-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.2-0``,  ``1.20.0-0``,  ``1.18.2-0``,  ``1.14.2-0``,  ``1.14.0-0``,  ``1.12.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: 
   :depends r-rcurl: 
   :depends r-rsqlite: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annotationforge

   and update with::

      conda update bioconductor-annotationforge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-annotationforge:<tag>

   (see `bioconductor-annotationforge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-annotationforge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationforge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annotationforge
   :alt:   (downloads)
.. |docker_bioconductor-annotationforge| image:: https://quay.io/repository/biocontainers/bioconductor-annotationforge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationforge
.. _`bioconductor-annotationforge/tags`: https://quay.io/repository/biocontainers/bioconductor-annotationforge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-annotationforge";
        var versions = ["1.34.0","1.32.0","1.32.0","1.30.1","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationforge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationforge/README.html
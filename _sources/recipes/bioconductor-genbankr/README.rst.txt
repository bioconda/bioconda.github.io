:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genbankr'
.. highlight: bash

bioconductor-genbankr
=====================

.. conda:recipe:: bioconductor-genbankr
   :replaces_section_title:
   :noindex:

   Parsing GenBank files into semantically useful objects

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/genbankr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genbankr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genbankr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genbankr/meta.yaml>`_
   :links: biotools: :biotools:`genbankr`, doi: :doi:`10.1038/nmeth.3252`

   Reads Genbank files.


.. conda:package:: bioconductor-genbankr

   |downloads_bioconductor-genbankr| |docker_bioconductor-genbankr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-variantannotation: ``>=1.44.0,<1.45.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genbankr

   and update with::

      conda update bioconductor-genbankr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genbankr:<tag>

   (see `bioconductor-genbankr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genbankr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genbankr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genbankr
   :alt:   (downloads)
.. |docker_bioconductor-genbankr| image:: https://quay.io/repository/biocontainers/bioconductor-genbankr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genbankr
.. _`bioconductor-genbankr/tags`: https://quay.io/repository/biocontainers/bioconductor-genbankr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genbankr";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genbankr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genbankr/README.html
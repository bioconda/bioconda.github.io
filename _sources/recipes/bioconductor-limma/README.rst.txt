:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-limma'
.. highlight: bash

bioconductor-limma
==================

.. conda:recipe:: bioconductor-limma
   :replaces_section_title:
   :noindex:

   Linear Models for Microarray Data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/limma.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-limma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-limma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-limma/meta.yaml>`_
   :links: biotools: :biotools:`limma`, usegalaxy-eu: :usegalaxy-eu:`limma_voom`

   Data analysis\, linear models and differential expression for microarray data.


.. conda:package:: bioconductor-limma

   |downloads_bioconductor-limma| |docker_bioconductor-limma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.46.0-1</code>,  <code>3.46.0-0</code>,  <code>3.44.1-0</code>,  <code>3.42.0-0</code>,  <code>3.40.2-0</code>,  <code>3.40.0-0</code>,  <code>3.38.3-0</code>,  <code>3.36.5-0</code>,  <code>3.34.9-0</code>,  </span></summary>
      

      ``3.46.0-1``,  ``3.46.0-0``,  ``3.44.1-0``,  ``3.42.0-0``,  ``3.40.2-0``,  ``3.40.0-0``,  ``3.38.3-0``,  ``3.36.5-0``,  ``3.34.9-0``,  ``3.34.6-0``,  ``3.34.1-0``,  ``3.34.0-0``,  ``3.32.10-0``,  ``3.30.13-1``,  ``3.30.13-0``,  ``3.29.0-0``,  ``3.28.21-0``,  ``3.28.10-1``,  ``3.28.10-0``,  ``3.28.6-0``,  ``3.28.2-1``,  ``3.28.2-0``,  ``3.27.4-1``,  ``3.26.9-0``,  ``3.26.7-1``,  ``3.26.3-0``,  ``3.26.1-0``,  ``3.26.0-0``,  ``3.24.15-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-limma

   and update with::

      conda update bioconductor-limma

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-limma:<tag>

   (see `bioconductor-limma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-limma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-limma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-limma
   :alt:   (downloads)
.. |docker_bioconductor-limma| image:: https://quay.io/repository/biocontainers/bioconductor-limma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-limma
.. _`bioconductor-limma/tags`: https://quay.io/repository/biocontainers/bioconductor-limma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-limma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-limma/README.html
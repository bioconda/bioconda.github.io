:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cghmcr'
.. highlight: bash

bioconductor-cghmcr
===================

.. conda:recipe:: bioconductor-cghmcr
   :replaces_section_title:
   :noindex:

   Find chromosome regions showing common gains\/losses

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/cghMCR.html
   :license: LGPL
   :recipe: /`bioconductor-cghmcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghmcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghmcr/meta.yaml>`_
   :links: biotools: :biotools:`cghmcr`, doi: :doi:`10.1093/bioinformatics/btv298`

   This package provides functions to identify genomic regions of interests based on segmented copy number data from multiple samples.


.. conda:package:: bioconductor-cghmcr

   |downloads_bioconductor-cghmcr| |docker_bioconductor-cghmcr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-cntools: ``>=1.48.0,<1.49.0``
   :depends bioconductor-dnacopy: ``>=1.66.0,<1.67.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cghmcr

   and update with::

      conda update bioconductor-cghmcr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cghmcr:<tag>

   (see `bioconductor-cghmcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cghmcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cghmcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cghmcr
   :alt:   (downloads)
.. |docker_bioconductor-cghmcr| image:: https://quay.io/repository/biocontainers/bioconductor-cghmcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cghmcr
.. _`bioconductor-cghmcr/tags`: https://quay.io/repository/biocontainers/bioconductor-cghmcr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cghmcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cghmcr/README.html
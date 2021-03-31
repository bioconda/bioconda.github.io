:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mzr'
.. highlight: bash

bioconductor-mzr
================

.. conda:recipe:: bioconductor-mzr
   :replaces_section_title:
   :noindex:

   parser for netCDF\, mzXML\, mzData and mzML and mzIdentML files \(mass spectrometry data\)

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/mzR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mzr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mzr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mzr/meta.yaml>`_
   :links: biotools: :biotools:`mzr`

   mzR provides a unified API to the common file formats and parsers available for mass spectrometry data. It comes with a wrapper for the ISB random access parser for mass spectrometry mzXML\, mzData and mzML files. The package contains the original code written by the ISB\, and a subset of the proteowizard library for mzML and mzIdentML. The netCDF reading code has previously been used in XCMS.


.. conda:package:: bioconductor-mzr

   |downloads_bioconductor-mzr| |docker_bioconductor-mzr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.24.1-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-1</code>,  <code>2.16.2-1</code>,  <code>2.16.2-0</code>,  <code>2.16.0-0</code>,  <code>2.12.0-1</code>,  </span></summary>
      

      ``2.24.1-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-1``,  ``2.16.2-1``,  ``2.16.2-0``,  ``2.16.0-0``,  ``2.12.0-1``,  ``2.10.0-0``,  ``2.6.3-1``,  ``2.6.3-0``,  ``2.4.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-protgenerics: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rhdf5lib: ``>=1.12.0,<1.13.0``
   :depends bioconductor-zlibbioc: ``>=1.36.0,<1.37.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ncdf4: 
   :depends r-rcpp: ``>=0.10.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mzr

   and update with::

      conda update bioconductor-mzr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mzr:<tag>

   (see `bioconductor-mzr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mzr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mzr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mzr
   :alt:   (downloads)
.. |docker_bioconductor-mzr| image:: https://quay.io/repository/biocontainers/bioconductor-mzr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mzr
.. _`bioconductor-mzr/tags`: https://quay.io/repository/biocontainers/bioconductor-mzr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mzr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mzr/README.html
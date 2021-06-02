:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spectra'
.. highlight: bash

bioconductor-spectra
====================

.. conda:recipe:: bioconductor-spectra
   :replaces_section_title:
   :noindex:

   Spectra Infrastructure for Mass Spectrometry Data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/Spectra.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spectra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectra/meta.yaml>`_

   The Spectra package defines an efficient infrastructure for storing and handling mass spectrometry spectra and functionality to subset\, process\, visualize and compare spectra data. It provides different implementations \(backends\) to store mass spectrometry data. These comprise backends tuned for fast data access and processing and backends for very large data sets ensuring a small memory footprint.


.. conda:package:: bioconductor-spectra

   |downloads_bioconductor-spectra| |docker_bioconductor-spectra|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.5-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-mscoreutils: ``>=1.4.0,<1.5.0``
   :depends bioconductor-protgenerics: ``>=1.24.0,<1.25.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-fs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spectra

   and update with::

      conda update bioconductor-spectra

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spectra:<tag>

   (see `bioconductor-spectra/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spectra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spectra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spectra
   :alt:   (downloads)
.. |docker_bioconductor-spectra| image:: https://quay.io/repository/biocontainers/bioconductor-spectra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spectra
.. _`bioconductor-spectra/tags`: https://quay.io/repository/biocontainers/bioconductor-spectra?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spectra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spectra/README.html
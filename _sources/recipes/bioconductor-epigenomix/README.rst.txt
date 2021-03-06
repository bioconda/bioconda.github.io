:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epigenomix'
.. highlight: bash

bioconductor-epigenomix
=======================

.. conda:recipe:: bioconductor-epigenomix
   :replaces_section_title:
   :noindex:

   Epigenetic and gene transcription data normalization and integration with mixture models

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/epigenomix.html
   :license: LGPL-3
   :recipe: /`bioconductor-epigenomix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epigenomix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epigenomix/meta.yaml>`_
   :links: biotools: :biotools:`epigenomix`

   A package for the integrative analysis of RNA\-seq or microarray based gene transcription and histone modification data obtained by ChIP\-seq. The package provides methods for data preprocessing and matching as well as methods for fitting bayesian mixture models in order to detect genes with differences in both data types.


.. conda:package:: bioconductor-epigenomix

   |downloads_bioconductor-epigenomix| |docker_bioconductor-epigenomix|

   :versions:
      
      

      ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends bioconductor-beadarray: ``>=2.42.0,<2.43.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-mcmcpack: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epigenomix

   and update with::

      conda update bioconductor-epigenomix

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epigenomix:<tag>

   (see `bioconductor-epigenomix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epigenomix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epigenomix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epigenomix
   :alt:   (downloads)
.. |docker_bioconductor-epigenomix| image:: https://quay.io/repository/biocontainers/bioconductor-epigenomix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epigenomix
.. _`bioconductor-epigenomix/tags`: https://quay.io/repository/biocontainers/bioconductor-epigenomix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epigenomix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epigenomix/README.html
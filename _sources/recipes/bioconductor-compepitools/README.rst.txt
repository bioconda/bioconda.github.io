:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-compepitools'
.. highlight: bash

bioconductor-compepitools
=========================

.. conda:recipe:: bioconductor-compepitools
   :replaces_section_title:

   Tools for computational epigenomics developed for the analysis\, integration and simultaneous visualization of various \(epi\)genomics data types across multiple genomic regions in multiple samples.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/compEpiTools.html
   :license: GPL
   :recipe: /`bioconductor-compepitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compepitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compepitools/meta.yaml>`_
   :links: biotools: :biotools:`compepitools`

   


.. conda:package:: bioconductor-compepitools

   |downloads_bioconductor-compepitools| |docker_bioconductor-compepitools|

   :versions: 1.18.0-1, 1.16.0-0, 1.14.1-0, 1.12.0-0, 1.10.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-go.db: >=3.8.0,<3.9.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-methylpipe: >=1.18.0,<1.19.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-topgo: >=2.36.0,<2.37.0
   :depends bioconductor-xvector: >=0.24.0,<0.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-gplots: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-compepitools

   and update with::

      conda update bioconductor-compepitools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-compepitools:<tag>

   (see `bioconductor-compepitools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-compepitools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compepitools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-compepitools
   :alt:   (downloads)
.. |docker_bioconductor-compepitools| image:: https://quay.io/repository/biocontainers/bioconductor-compepitools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compepitools
.. _`bioconductor-compepitools/tags`: https://quay.io/repository/biocontainers/bioconductor-compepitools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compepitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compepitools/README.html
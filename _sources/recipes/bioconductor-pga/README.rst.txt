:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pga'
.. highlight: bash

bioconductor-pga
================

.. conda:recipe:: bioconductor-pga
   :replaces_section_title:

   This package provides functions for construction of customized protein databases based on RNA\-Seq data with\/without genome guided\, database searching\, post\-processing and report generation. This kind of customized protein database includes both the reference database \(such as Refseq or ENSEMBL\) and the novel peptide sequences form RNA\-Seq data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/PGA.html
   :license: GPL-2
   :recipe: /`bioconductor-pga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pga/meta.yaml>`_

   


.. conda:package:: bioconductor-pga

   |downloads_bioconductor-pga| |docker_bioconductor-pga|

   :versions: 1.14.0-0, 1.12.1-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biomart: >=2.40.0,<2.41.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-customprodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-rtandem: >=1.24.0,<1.25.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-variantannotation: >=1.30.0,<1.31.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-nozzle.r1: 
   :depends r-pheatmap: 
   :depends r-rcurl: 
   :depends r-rsqlite: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pga

   and update with::

      conda update bioconductor-pga

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pga:<tag>

   (see `bioconductor-pga/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pga| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pga.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pga
   :alt:   (downloads)
.. |docker_bioconductor-pga| image:: https://quay.io/repository/biocontainers/bioconductor-pga/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pga
.. _`bioconductor-pga/tags`: https://quay.io/repository/biocontainers/bioconductor-pga?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pga/README.html
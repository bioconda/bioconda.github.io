:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-guideseq'
.. highlight: bash

bioconductor-guideseq
=====================

.. conda:recipe:: bioconductor-guideseq
   :replaces_section_title:

   The package implements GUIDE\-seq analysis workflow including functions for obtaining unique insertion sites \(proxy of cleavage sites\)\, estimating the locations of the insertion sites\, aka\, peaks\, merging estimated insertion sites from plus and minus strand\, and performing off target search of the extended regions around insertion sites.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GUIDEseq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-guideseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guideseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guideseq/meta.yaml>`_
   :links: biotools: :biotools:`guideseq`, doi: :doi:`10.1186/s12864-017-3746-y`

   


.. conda:package:: bioconductor-guideseq

   |downloads_bioconductor-guideseq| |docker_bioconductor-guideseq|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-chippeakanno: >=3.16.0,<3.17.0
   :depends bioconductor-crisprseek: >=1.22.0,<1.23.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: 
   :depends r-hash: 
   :depends r-matrixstats: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-guideseq

   and update with::

      conda update bioconductor-guideseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-guideseq:<tag>

   (see `bioconductor-guideseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-guideseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-guideseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-guideseq| image:: https://quay.io/repository/biocontainers/bioconductor-guideseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-guideseq
.. _`bioconductor-guideseq/tags`: https://quay.io/repository/biocontainers/bioconductor-guideseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-guideseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-guideseq/README.html
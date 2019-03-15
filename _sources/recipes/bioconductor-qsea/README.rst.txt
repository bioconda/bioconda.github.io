:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qsea'
.. highlight: bash

bioconductor-qsea
=================

.. conda:recipe:: bioconductor-qsea
   :replaces_section_title:

   qsea \(quantitative sequencing enrichment analysis\) was developed as the successor of the MEDIPS package for analyzing data derived from methylated DNA immunoprecipitation \(MeDIP\) experiments followed by sequencing \(MeDIP\-seq\). However\, qsea provides several functionalities for the analysis of other kinds of quantitative sequencing data \(e.g. ChIP\-seq\, MBD\-seq\, CMS\-seq and others\) including calculation of differential enrichment between groups of samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/qsea.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-qsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsea/meta.yaml>`_
   :links: biotools: :biotools:`qsea`

   


.. conda:package:: bioconductor-qsea

   |downloads_bioconductor-qsea| |docker_bioconductor-qsea|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-hmmcopy: >=1.24.0,<1.25.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-gtools: 
   
   :depends r-zoo: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qsea

   and update with::

      conda update bioconductor-qsea

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qsea:<tag>

   (see `bioconductor-qsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qsea.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-qsea| image:: https://quay.io/repository/biocontainers/bioconductor-qsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qsea
.. _`bioconductor-qsea/tags`: https://quay.io/repository/biocontainers/bioconductor-qsea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qsea/README.html
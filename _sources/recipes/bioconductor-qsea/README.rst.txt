:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qsea'
.. highlight: bash

bioconductor-qsea
=================

.. conda:recipe:: bioconductor-qsea
   :replaces_section_title:
   :noindex:

   IP\-seq data analysis and vizualization

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/qsea.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-qsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsea/meta.yaml>`_
   :links: biotools: :biotools:`qsea`

   qsea \(quantitative sequencing enrichment analysis\) was developed as the successor of the MEDIPS package for analyzing data derived from methylated DNA immunoprecipitation \(MeDIP\) experiments followed by sequencing \(MeDIP\-seq\). However\, qsea provides several functionalities for the analysis of other kinds of quantitative sequencing data \(e.g. ChIP\-seq\, MBD\-seq\, CMS\-seq and others\) including calculation of differential enrichment between groups of samples.


.. conda:package:: bioconductor-qsea

   |downloads_bioconductor-qsea| |docker_bioconductor-qsea|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-bsgenome: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-hmmcopy: ``>=1.32.0,<1.33.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-gtools: 
   :depends r-kernsmooth: 
   :depends r-mass: 
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
   :target: https://anaconda.org/bioconda/bioconductor-qsea
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
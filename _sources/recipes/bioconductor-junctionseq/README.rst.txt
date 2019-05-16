:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-junctionseq'
.. highlight: bash

bioconductor-junctionseq
========================

.. conda:recipe:: bioconductor-junctionseq
   :replaces_section_title:

   A Utility for Detection and Visualization of Differential Exon or Splice\-Junction Usage in RNA\-Seq data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/JunctionSeq.html
   :license: file LICENSE
   :recipe: /`bioconductor-junctionseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-junctionseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-junctionseq/meta.yaml>`_
   :links: biotools: :biotools:`junctionseq`

   


.. conda:package:: bioconductor-junctionseq

   |downloads_bioconductor-junctionseq| |docker_bioconductor-junctionseq|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-deseq2: >=1.22.0,<1.23.0
   :depends bioconductor-genefilter: >=1.64.0,<1.65.0
   :depends bioconductor-geneplotter: >=1.60.0,<1.61.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-hmisc: 
   :depends r-locfit: 
   :depends r-plotrix: 
   :depends r-rcpp: >=0.11.0
   :depends r-rcpparmadillo: >=0.3.4.4
   :depends r-statmod: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-junctionseq

   and update with::

      conda update bioconductor-junctionseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-junctionseq:<tag>

   (see `bioconductor-junctionseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-junctionseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-junctionseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-junctionseq
   :alt:   (downloads)
.. |docker_bioconductor-junctionseq| image:: https://quay.io/repository/biocontainers/bioconductor-junctionseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-junctionseq
.. _`bioconductor-junctionseq/tags`: https://quay.io/repository/biocontainers/bioconductor-junctionseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-junctionseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-junctionseq/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvranger'
.. highlight: bash

bioconductor-cnvranger
======================

.. conda:recipe:: bioconductor-cnvranger
   :replaces_section_title:

   The CNVRanger package implements a comprehensive tool suite for CNV analysis. This includes functionality for summarizing individual CNV calls across a population\, assessing overlap with functional genomic regions\, and association analysis with gene expression and quantitative phenotypes.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/CNVRanger.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cnvranger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvranger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvranger/meta.yaml>`_

   


.. conda:package:: bioconductor-cnvranger

   |downloads_bioconductor-cnvranger| |docker_bioconductor-cnvranger|

   :versions: 1.0.0-1
   
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-edger: >=3.26.0,<3.27.0
   :depends bioconductor-gdsarray: >=1.4.0,<1.5.0
   :depends bioconductor-gdsfmt: >=1.20.0,<1.21.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-raggedexperiment: >=1.8.0,<1.9.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-snprelate: >=1.18.0,<1.19.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-lattice: 
   :depends r-plyr: 
   :depends r-qqman: 
   :depends r-rappdirs: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnvranger

   and update with::

      conda update bioconductor-cnvranger

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnvranger:<tag>

   (see `bioconductor-cnvranger/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnvranger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvranger.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnvranger
   :alt:   (downloads)
.. |docker_bioconductor-cnvranger| image:: https://quay.io/repository/biocontainers/bioconductor-cnvranger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvranger
.. _`bioconductor-cnvranger/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvranger?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvranger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvranger/README.html
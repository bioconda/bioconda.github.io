:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basic4cseq'
.. highlight: bash

bioconductor-basic4cseq
=======================

.. conda:recipe:: bioconductor-basic4cseq
   :replaces_section_title:

   Basic4Cseq is an R\/Bioconductor package for basic filtering\, analysis and subsequent visualization of 4C\-seq data. Virtual fragment libraries can be created for any BSGenome package\, and filter functions for both reads and fragments and basic quality controls are included. Fragment data in the vicinity of the experiment\'s viewpoint can be visualized as a coverage plot based on a running median approach and a multi\-scale contact profile.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Basic4Cseq.html
   :license: LGPL-3
   :recipe: /`bioconductor-basic4cseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basic4cseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basic4cseq/meta.yaml>`_
   :links: biotools: :biotools:`basic4cseq`, doi: :doi:`10.1093/bioinformatics/btu497`

   


.. conda:package:: bioconductor-basic4cseq

   |downloads_bioconductor-basic4cseq| |docker_bioconductor-basic4cseq|

   :versions: 1.18.0-0, 1.16.0-0, 1.14.0-0, 1.12.0-0, 1.6.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-bsgenome.ecoli.ncbi.20080805: >=1.3.0,<1.4.0
   
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-catools: 
   
   :depends r-rcircos: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-basic4cseq

   and update with::

      conda update bioconductor-basic4cseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-basic4cseq:<tag>

   (see `bioconductor-basic4cseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-basic4cseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basic4cseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-basic4cseq| image:: https://quay.io/repository/biocontainers/bioconductor-basic4cseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basic4cseq
.. _`bioconductor-basic4cseq/tags`: https://quay.io/repository/biocontainers/bioconductor-basic4cseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basic4cseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basic4cseq/README.html
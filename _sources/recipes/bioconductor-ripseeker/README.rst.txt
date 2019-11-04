:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ripseeker'
.. highlight: bash

bioconductor-ripseeker
======================

.. conda:recipe:: bioconductor-ripseeker
   :replaces_section_title:

   Infer and discriminate RIP peaks from RIP\-seq alignments using two\-state HMM with negative binomial emission probability. While RIPSeeker is specifically tailored for RIP\-seq data analysis\, it also provides a suite of bioinformatics tools integrated within this self\-contained software package comprehensively addressing issues ranging from post\-alignments processing to visualization and annotation.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/RIPSeeker.html
   :license: GPL-2
   :recipe: /`bioconductor-ripseeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ripseeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ripseeker/meta.yaml>`_
   :links: biotools: :biotools:`ripseeker`

   


.. conda:package:: bioconductor-ripseeker

   |downloads_bioconductor-ripseeker| |docker_bioconductor-ripseeker|

   :versions: 1.26.0-0, 1.24.0-1, 1.22.0-0, 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-genomicalignments: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ripseeker

   and update with::

      conda update bioconductor-ripseeker

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ripseeker:<tag>

   (see `bioconductor-ripseeker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ripseeker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ripseeker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ripseeker
   :alt:   (downloads)
.. |docker_bioconductor-ripseeker| image:: https://quay.io/repository/biocontainers/bioconductor-ripseeker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ripseeker
.. _`bioconductor-ripseeker/tags`: https://quay.io/repository/biocontainers/bioconductor-ripseeker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ripseeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ripseeker/README.html
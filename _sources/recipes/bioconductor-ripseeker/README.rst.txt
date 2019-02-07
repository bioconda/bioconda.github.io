.. title:: Package Recipe 'bioconductor-ripseeker'
.. highlight: bash


bioconductor-ripseeker
======================

.. conda:recipe:: bioconductor-ripseeker
   :replaces_section_title:

   Infer and discriminate RIP peaks from RIP\-seq alignments using two\-state HMM with negative binomial emission probability. While RIPSeeker is specifically tailored for RIP\-seq data analysis\, it also provides a suite of bioinformatics tools integrated within this self\-contained software package comprehensively addressing issues ranging from post\-alignments processing to visualization and annotation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RIPSeeker.html
   :license: GPL-2
   :recipe: /`bioconductor-ripseeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ripseeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ripseeker/meta.yaml>`_
   :links: biotools: :biotools:`ripseeker`

   


.. conda:package:: bioconductor-ripseeker

   |downloads_bioconductor-ripseeker| |docker_bioconductor-ripseeker|

   :versions: 1.22.0, 1.20.0, 1.18.0, 1.16.0

   :depends: :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-ripseeker|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ripseeker

   and update with::

      conda update bioconductor-ripseeker

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ripseeker


.. |required_by_bioconductor-ripseeker| conda:required_by:: bioconductor-ripseeker
.. |downloads_bioconductor-ripseeker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ripseeker.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ripseeker| image:: https://quay.io/repository/biocontainers/bioconductor-ripseeker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ripseeker







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ripseeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ripseeker/README.html


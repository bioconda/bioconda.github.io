.. title:: Package Recipe 'bioconductor-funtoonorm'
.. highlight: bash


bioconductor-funtoonorm
=======================

.. conda:recipe:: bioconductor-funtoonorm
   :replaces_section_title:

   Provides a function to normalize Illumina Infinium Human Methylation 450 BeadChip \(Illumina 450K\)\, correcting for tissue and\/or cell type.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/funtooNorm.html
   :license: GPL-3
   :recipe: /`bioconductor-funtoonorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-funtoonorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-funtoonorm/meta.yaml>`_

   


.. conda:package:: bioconductor-funtoonorm

   |downloads_bioconductor-funtoonorm| |docker_bioconductor-funtoonorm|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19` >=0.6.0,<0.7.0 :conda:package:`bioconductor-illuminahumanmethylation450kmanifest` >=0.4.0,<0.5.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-matrixstats`  :conda:package:`r-pls`  

   :required~by: |required_by_bioconductor-funtoonorm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-funtoonorm

   and update with::

      conda update bioconductor-funtoonorm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-funtoonorm


.. |required_by_bioconductor-funtoonorm| conda:required_by:: bioconductor-funtoonorm
.. |downloads_bioconductor-funtoonorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-funtoonorm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-funtoonorm| image:: https://quay.io/repository/biocontainers/bioconductor-funtoonorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-funtoonorm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-funtoonorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-funtoonorm/README.html


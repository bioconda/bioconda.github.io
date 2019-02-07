.. title:: Package Recipe 'bioconductor-motifrg'
.. highlight: bash


bioconductor-motifrg
====================

.. conda:recipe:: bioconductor-motifrg
   :replaces_section_title:

   Tools for discriminative motif discovery using regression methods

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/motifRG.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-motifrg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifrg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifrg/meta.yaml>`_
   :links: biotools: :biotools:`motifrg`, doi: :doi:`10.1093/bioinformatics/btt615`

   


.. conda:package:: bioconductor-motifrg

   |downloads_bioconductor-motifrg| |docker_bioconductor-motifrg|

   :versions: 1.26.0, 1.24.0, 1.22.0, 1.20.0, 1.18.0, 1.14.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-bsgenome.hsapiens.ucsc.hg19` >=1.4.0,<1.5.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-seqlogo` >=1.48.0,<1.49.0 :conda:package:`bioconductor-xvector` >=0.22.0,<0.23.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-motifrg|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-motifrg

   and update with::

      conda update bioconductor-motifrg

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-motifrg


.. |required_by_bioconductor-motifrg| conda:required_by:: bioconductor-motifrg
.. |downloads_bioconductor-motifrg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifrg.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-motifrg| image:: https://quay.io/repository/biocontainers/bioconductor-motifrg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifrg







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifrg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifrg/README.html


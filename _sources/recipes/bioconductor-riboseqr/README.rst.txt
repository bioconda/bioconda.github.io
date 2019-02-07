.. title:: Package Recipe 'bioconductor-riboseqr'
.. highlight: bash


bioconductor-riboseqr
=====================

.. conda:recipe:: bioconductor-riboseqr
   :replaces_section_title:

   Plotting functions\, frameshift detection and parsing of sequencing data from ribosome profiling experiments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/riboSeqR.html
   :license: GPL-3
   :recipe: /`bioconductor-riboseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-riboseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-riboseqr/meta.yaml>`_
   :links: biotools: :biotools:`riboseqr`, doi: :doi:`10.1080/15476286.2016.1141862`

   


.. conda:package:: bioconductor-riboseqr

   |downloads_bioconductor-riboseqr| |docker_bioconductor-riboseqr|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-bayseq` >=2.16.0,<2.17.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-seqlogo` >=1.48.0,<1.49.0 :conda:package:`r-abind`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-riboseqr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-riboseqr

   and update with::

      conda update bioconductor-riboseqr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-riboseqr


.. |required_by_bioconductor-riboseqr| conda:required_by:: bioconductor-riboseqr
.. |downloads_bioconductor-riboseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-riboseqr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-riboseqr| image:: https://quay.io/repository/biocontainers/bioconductor-riboseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-riboseqr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-riboseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-riboseqr/README.html


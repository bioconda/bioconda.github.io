.. title:: Package Recipe 'bioconductor-sangerseqr'
.. highlight: bash


bioconductor-sangerseqr
=======================

.. conda:recipe:: bioconductor-sangerseqr
   :replaces_section_title:

   This package contains several tools for analyzing Sanger Sequencing data files in R\, including reading .scf and .ab1 files\, making basecalls and plotting chromatograms.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/sangerseqR.html
   :license: GPL-2
   :recipe: /`bioconductor-sangerseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sangerseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sangerseqr/meta.yaml>`_
   :links: biotools: :biotools:`sangerseqr`

   


.. conda:package:: bioconductor-sangerseqr

   |downloads_bioconductor-sangerseqr| |docker_bioconductor-sangerseqr|

   :versions: 1.18.0, 1.16.0, 1.14.0, 1.12.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-shiny`  

   :required~by: |required_by_bioconductor-sangerseqr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sangerseqr

   and update with::

      conda update bioconductor-sangerseqr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sangerseqr


.. |required_by_bioconductor-sangerseqr| conda:required_by:: bioconductor-sangerseqr
.. |downloads_bioconductor-sangerseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sangerseqr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sangerseqr| image:: https://quay.io/repository/biocontainers/bioconductor-sangerseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sangerseqr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sangerseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sangerseqr/README.html


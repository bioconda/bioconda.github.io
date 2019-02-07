.. title:: Package Recipe 'bioconductor-generegionscan'
.. highlight: bash


bioconductor-generegionscan
===========================

.. conda:recipe:: bioconductor-generegionscan
   :replaces_section_title:

   A package with focus on analysis of discrete regions of the genome. This package is useful for investigation of one or a few genes using Affymetrix data\, since it will extract probe level data using the Affymetrix Power Tools application and wrap these data into a ProbeLevelSet. A ProbeLevelSet directly extends the expressionSet\, but includes additional information about the sequence of each probe and the probe set it is derived from. The package includes a number of functions used for plotting these probe level data as a function of location along sequences of mRNA\-strands. This can be used for analysis of variable splicing\, and is especially well suited for use with exon\-array data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GeneRegionScan.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-generegionscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-generegionscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-generegionscan/meta.yaml>`_
   :links: biotools: :biotools:`generegionscan`

   


.. conda:package:: bioconductor-generegionscan

   |downloads_bioconductor-generegionscan| |docker_bioconductor-generegionscan|

   :versions: 1.38.0, 1.36.0, 1.34.0

   :depends: :conda:package:`bioconductor-affxparser` >=1.54.0,<1.55.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-generegionscan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-generegionscan

   and update with::

      conda update bioconductor-generegionscan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-generegionscan


.. |required_by_bioconductor-generegionscan| conda:required_by:: bioconductor-generegionscan
.. |downloads_bioconductor-generegionscan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-generegionscan.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-generegionscan| image:: https://quay.io/repository/biocontainers/bioconductor-generegionscan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-generegionscan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-generegionscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-generegionscan/README.html


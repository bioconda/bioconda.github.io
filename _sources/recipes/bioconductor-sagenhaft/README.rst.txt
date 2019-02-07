.. title:: Package Recipe 'bioconductor-sagenhaft'
.. highlight: bash


bioconductor-sagenhaft
======================

.. conda:recipe:: bioconductor-sagenhaft
   :replaces_section_title:

   This package implements several functions useful for analysis of gene expression data by sequencing tags as done in SAGE \(Serial Analysis of Gene Expressen\) data\, i.e. extraction of a SAGE library from sequence files\, sequence error correction\, library comparison. Sequencing error correction is implementing using an Expectation Maximization Algorithm based on a Mixture Model of tag counts.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/sagenhaft.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sagenhaft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sagenhaft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sagenhaft/meta.yaml>`_
   :links: biotools: :biotools:`sagenhaft`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-sagenhaft

   |downloads_bioconductor-sagenhaft| |docker_bioconductor-sagenhaft|

   :versions: 1.52.0, 1.50.0, 1.48.0, 1.46.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-sparsem` >=0.73 

   :required~by: |required_by_bioconductor-sagenhaft|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sagenhaft

   and update with::

      conda update bioconductor-sagenhaft

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sagenhaft


.. |required_by_bioconductor-sagenhaft| conda:required_by:: bioconductor-sagenhaft
.. |downloads_bioconductor-sagenhaft| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sagenhaft.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sagenhaft| image:: https://quay.io/repository/biocontainers/bioconductor-sagenhaft/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sagenhaft







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sagenhaft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sagenhaft/README.html


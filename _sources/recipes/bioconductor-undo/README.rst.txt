.. title:: Package Recipe 'bioconductor-undo'
.. highlight: bash


bioconductor-undo
=================

.. conda:recipe:: bioconductor-undo
   :replaces_section_title:

   UNDO is an R package for unsupervised deconvolution of tumor and stromal mixed expression data. It detects marker genes and deconvolutes the mixing expression data without any prior knowledge.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/UNDO.html
   :license: GPL-2
   :recipe: /`bioconductor-undo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-undo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-undo/meta.yaml>`_
   :links: biotools: :biotools:`undo`, doi: :doi:`10.1093/bioinformatics/btu607`

   


.. conda:package:: bioconductor-undo

   |downloads_bioconductor-undo| |docker_bioconductor-undo|

   :versions: 1.24.0, 1.22.0, 1.20.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-boot`  :conda:package:`r-mass`  :conda:package:`r-nnls`  

   :required~by: |required_by_bioconductor-undo|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-undo

   and update with::

      conda update bioconductor-undo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-undo


.. |required_by_bioconductor-undo| conda:required_by:: bioconductor-undo
.. |downloads_bioconductor-undo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-undo.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-undo| image:: https://quay.io/repository/biocontainers/bioconductor-undo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-undo







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-undo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-undo/README.html


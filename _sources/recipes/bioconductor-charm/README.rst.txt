.. title:: Package Recipe 'bioconductor-charm'
.. highlight: bash


bioconductor-charm
==================

.. conda:recipe:: bioconductor-charm
   :replaces_section_title:

   This package implements analysis tools for DNA methylation data generated using Nimblegen microarrays and the McrBC protocol. It finds differentially methylated regions between samples\, calculates percentage methylation estimates and includes array quality assessment tools.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/charm.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-charm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-charm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-charm/meta.yaml>`_

   


.. conda:package:: bioconductor-charm

   |downloads_bioconductor-charm| |docker_bioconductor-charm|

   :versions: 2.28.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-oligo` >=1.46.0,<1.47.0 :conda:package:`bioconductor-oligoclasses` >=1.44.0,<1.45.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`bioconductor-siggenes` >=1.56.0,<1.57.0 :conda:package:`bioconductor-sva` >=3.30.0,<3.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ff`  :conda:package:`r-fields`  :conda:package:`r-gtools`  :conda:package:`r-nor1mix`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-sqn`  

   :required~by: |required_by_bioconductor-charm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-charm

   and update with::

      conda update bioconductor-charm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-charm


.. |required_by_bioconductor-charm| conda:required_by:: bioconductor-charm
.. |downloads_bioconductor-charm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-charm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-charm| image:: https://quay.io/repository/biocontainers/bioconductor-charm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-charm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-charm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-charm/README.html


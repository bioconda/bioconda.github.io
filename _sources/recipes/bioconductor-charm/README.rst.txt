:orphan:  .. only available via index, not via toctree

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

   :versions: 2.28.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-genefilter: >=1.64.0,<1.65.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-oligo: >=1.46.0,<1.47.0
   :depends bioconductor-oligoclasses: >=1.44.0,<1.45.0
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   :depends bioconductor-siggenes: >=1.56.0,<1.57.0
   :depends bioconductor-sva: >=3.30.0,<3.31.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-ff: 
   :depends r-fields: 
   :depends r-gtools: 
   :depends r-nor1mix: 
   :depends r-rcolorbrewer: 
   :depends r-sqn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-charm

   and update with::

      conda update bioconductor-charm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-charm:<tag>

   (see `bioconductor-charm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-charm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-charm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-charm| image:: https://quay.io/repository/biocontainers/bioconductor-charm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-charm
.. _`bioconductor-charm/tags`: https://quay.io/repository/biocontainers/bioconductor-charm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-charm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-charm/README.html
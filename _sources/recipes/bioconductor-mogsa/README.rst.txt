:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mogsa'
.. highlight: bash

bioconductor-mogsa
==================

.. conda:recipe:: bioconductor-mogsa
   :replaces_section_title:

   This package provide a method for doing gene set analysis based on multiple omics data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/mogsa.html
   :license: GPL-2
   :recipe: /`bioconductor-mogsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogsa/meta.yaml>`_

   


.. conda:package:: bioconductor-mogsa

   |downloads_bioconductor-mogsa| |docker_bioconductor-mogsa|

   :versions: 1.16.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-genefilter: >=1.64.0,<1.65.0
   :depends bioconductor-graphite: >=1.28.0,<1.29.0
   :depends bioconductor-gseabase: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-cluster: 
   :depends r-corpcor: 
   :depends r-gplots: 
   :depends r-svd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mogsa

   and update with::

      conda update bioconductor-mogsa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mogsa:<tag>

   (see `bioconductor-mogsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mogsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mogsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mogsa
   :alt:   (downloads)
.. |docker_bioconductor-mogsa| image:: https://quay.io/repository/biocontainers/bioconductor-mogsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mogsa
.. _`bioconductor-mogsa/tags`: https://quay.io/repository/biocontainers/bioconductor-mogsa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mogsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mogsa/README.html
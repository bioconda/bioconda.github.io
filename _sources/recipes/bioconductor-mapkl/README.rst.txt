:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mapkl'
.. highlight: bash

bioconductor-mapkl
==================

.. conda:recipe:: bioconductor-mapkl
   :replaces_section_title:

   A Hybrid Feature Selection method for gene expression data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/mAPKL.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mapkl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapkl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapkl/meta.yaml>`_

   We propose a hybrid FS method \(mAP\-KL\)\, which combines multiple hypothesis testing and affinity propagation \(AP\)\-clustering algorithm along with the Krzanowski \& Lai cluster quality index\, to select a small yet informative subset of genes.


.. conda:package:: bioconductor-mapkl

   |downloads_bioconductor-mapkl| |docker_bioconductor-mapkl|

   :versions: 1.16.0-0, 1.14.1-0, 1.12.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-multtest: >=2.42.0,<2.43.0
   :depends bioconductor-reactome.db: >=1.70.0,<1.71.0
   :depends r-apcluster: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-clustersim: 
   :depends r-e1071: 
   :depends r-igraph: 
   :depends r-parmigene: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mapkl

   and update with::

      conda update bioconductor-mapkl

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mapkl:<tag>

   (see `bioconductor-mapkl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mapkl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mapkl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mapkl
   :alt:   (downloads)
.. |docker_bioconductor-mapkl| image:: https://quay.io/repository/biocontainers/bioconductor-mapkl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mapkl
.. _`bioconductor-mapkl/tags`: https://quay.io/repository/biocontainers/bioconductor-mapkl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mapkl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mapkl/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lea'
.. highlight: bash

bioconductor-lea
================

.. conda:recipe:: bioconductor-lea
   :replaces_section_title:

   LEA is an R package dedicated to landscape genomics and ecological association tests. LEA can run analyses of population structure and genomewide tests for local adaptation. The package includes statistical methods for estimating ancestry coefficients from large genotypic matrices and for evaluating the number of ancestral populations \(snmf\, pca\). It performs statistical tests using latent factor mixed models for identifying genetic polymorphisms that exhibit association with environmental gradients or phenotypic traits \(lfmm\). LEA is mainly based on optimized C programs that can scale with the dimension of large data sets.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/LEA.html
   :license: GPL-3
   :recipe: /`bioconductor-lea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lea/meta.yaml>`_

   


.. conda:package:: bioconductor-lea

   |downloads_bioconductor-lea| |docker_bioconductor-lea|

   :versions: 2.4.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lea

   and update with::

      conda update bioconductor-lea

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lea:<tag>

   (see `bioconductor-lea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lea.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lea| image:: https://quay.io/repository/biocontainers/bioconductor-lea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lea
.. _`bioconductor-lea/tags`: https://quay.io/repository/biocontainers/bioconductor-lea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lea/README.html
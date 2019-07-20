:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-acde'
.. highlight: bash

bioconductor-acde
=================

.. conda:recipe:: bioconductor-acde
   :replaces_section_title:

   This package provides a multivariate inferential analysis method for detecting differentially expressed genes in gene expression data. It uses artificial components\, close to the data\'s principal components but with an exact interpretation in terms of differential genetic expression\, to identify differentially expressed genes while controlling the false discovery rate \(FDR\). The methods on this package are described in the vignette or in the article \'Multivariate Method for Inferential Identification of Differentially Expressed Genes in Gene Expression Experiments\' by J. P. Acosta\, L. Lopez\-Kleine and S. Restrepo \(2015\, pending publication\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/acde.html
   :license: GPL-3
   :recipe: /`bioconductor-acde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-acde/meta.yaml>`_
   :links: biotools: :biotools:`acde`, doi: :doi:`10.1007/978-0-387-49317-6_9`

   


.. conda:package:: bioconductor-acde

   |downloads_bioconductor-acde| |docker_bioconductor-acde|

   :versions: 1.14.0-1, 1.14.0-0, 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-boot: >=1.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-acde

   and update with::

      conda update bioconductor-acde

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-acde:<tag>

   (see `bioconductor-acde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-acde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-acde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-acde
   :alt:   (downloads)
.. |docker_bioconductor-acde| image:: https://quay.io/repository/biocontainers/bioconductor-acde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-acde
.. _`bioconductor-acde/tags`: https://quay.io/repository/biocontainers/bioconductor-acde?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-acde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-acde/README.html
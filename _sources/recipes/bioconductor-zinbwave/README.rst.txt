:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zinbwave'
.. highlight: bash

bioconductor-zinbwave
=====================

.. conda:recipe:: bioconductor-zinbwave
   :replaces_section_title:

   Implements a general and flexible zero\-inflated negative binomial model that can be used to provide a low\-dimensional representations of single\-cell RNA\-seq data. The model accounts for zero inflation \(dropouts\)\, over\-dispersion\, and the count nature of the data. The model also accounts for the difference in library sizes and optionally for batch effects and\/or other covariates\, avoiding the need for pre\-normalize the data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/zinbwave.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-zinbwave <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zinbwave>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zinbwave/meta.yaml>`_
   :links: biotools: :biotools:`zinbwave`, doi: :doi:`10.1038/s41467-017-02554-5`

   


.. conda:package:: bioconductor-zinbwave

   |downloads_bioconductor-zinbwave| |docker_bioconductor-zinbwave|

   :versions: 1.4.0-0, 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   :depends bioconductor-genefilter: >=1.64.0,<1.65.0
   :depends bioconductor-singlecellexperiment: >=1.4.0,<1.5.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-copula: 
   :depends r-glmnet: 
   :depends r-matrix: 
   :depends r-softimpute: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-zinbwave

   and update with::

      conda update bioconductor-zinbwave

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-zinbwave:<tag>

   (see `bioconductor-zinbwave/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-zinbwave| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zinbwave.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-zinbwave
   :alt:   (downloads)
.. |docker_bioconductor-zinbwave| image:: https://quay.io/repository/biocontainers/bioconductor-zinbwave/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zinbwave
.. _`bioconductor-zinbwave/tags`: https://quay.io/repository/biocontainers/bioconductor-zinbwave?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zinbwave/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zinbwave/README.html
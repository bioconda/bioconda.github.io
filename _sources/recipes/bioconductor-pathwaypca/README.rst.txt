:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathwaypca'
.. highlight: bash

bioconductor-pathwaypca
=======================

.. conda:recipe:: bioconductor-pathwaypca
   :replaces_section_title:

   Apply the Supervised PCA and Adaptive\, Elastic\-Net\, Sparse PCA methods to extract principal components from each pathway. Use these pathway\- specific principal components as the design matrix relating the response to each pathway. Return the model fit statistic p\-values\, and adjust these values for False Discovery Rate. Return a data frame of the pathways sorted by their adjusted p\-values. This package has corresponding vignettes hosted in the \'\'User Guides\'\' page of \<https\:\/\/gabrielodom.github.io\/pathwayPCA\/index.html\>\, and the website for the development information is hosted at \<https\:\/\/github.com\/gabrielodom\/pathwayPCA\>.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/pathwayPCA.html
   :license: GPL-3
   :recipe: /`bioconductor-pathwaypca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathwaypca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathwaypca/meta.yaml>`_

   


.. conda:package:: bioconductor-pathwaypca

   |downloads_bioconductor-pathwaypca| |docker_bioconductor-pathwaypca|

   :versions: 1.0.0-1
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-lars: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pathwaypca

   and update with::

      conda update bioconductor-pathwaypca

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathwaypca:<tag>

   (see `bioconductor-pathwaypca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathwaypca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathwaypca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathwaypca
   :alt:   (downloads)
.. |docker_bioconductor-pathwaypca| image:: https://quay.io/repository/biocontainers/bioconductor-pathwaypca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathwaypca
.. _`bioconductor-pathwaypca/tags`: https://quay.io/repository/biocontainers/bioconductor-pathwaypca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathwaypca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathwaypca/README.html
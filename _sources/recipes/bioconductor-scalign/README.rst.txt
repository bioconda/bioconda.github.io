:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scalign'
.. highlight: bash

bioconductor-scalign
====================

.. conda:recipe:: bioconductor-scalign
   :replaces_section_title:

   An alignment and integration method for single cell genomics

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/scAlign.html
   :license: GPL-3
   :recipe: /`bioconductor-scalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scalign/meta.yaml>`_

   An unsupervised deep learning method for data alignment\, integration and estimation of per\-cell differences in \-omic data \(e.g. gene expression\) across datasets \(conditions\, tissues\, species\). See Johansen and Quon \(2019\) \<doi\:10.1101\/504944\> for more details.


.. conda:package:: bioconductor-scalign

   |downloads_bioconductor-scalign| |docker_bioconductor-scalign|

   :versions: 1.3.0-0, 1.0.0-1
   
   :depends bioconductor-singlecellexperiment: >=1.10.0,<1.11.0
   :depends python: <3.7
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-fnn: 
   :depends r-ggplot2: 
   :depends r-irlba: 
   :depends r-pma: 
   :depends r-purrr: 
   :depends r-rtsne: 
   :depends r-seurat: >=2.3.4
   :depends r-tensorflow: 
   :depends tensorflow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scalign

   and update with::

      conda update bioconductor-scalign

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scalign:<tag>

   (see `bioconductor-scalign/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scalign| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scalign.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scalign
   :alt:   (downloads)
.. |docker_bioconductor-scalign| image:: https://quay.io/repository/biocontainers/bioconductor-scalign/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scalign
.. _`bioconductor-scalign/tags`: https://quay.io/repository/biocontainers/bioconductor-scalign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scalign/README.html
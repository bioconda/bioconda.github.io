:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicrexposome'
.. highlight: bash

bioconductor-omicrexposome
==========================

.. conda:recipe:: bioconductor-omicrexposome
   :replaces_section_title:

   omicRexposome systematizes the association evaluation between exposures and omic data\, taking advantage of MultiDataSet for coordinated data management\, rexposome for exposome data definition and limma for association testing. Also to perform data integration mixing exposome and omic data using multi co\-inherent analysis \(omicade4\) and multi\-canonical correlation analysis \(PMA\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/omicRexposome.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-omicrexposome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicrexposome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicrexposome/meta.yaml>`_

   


.. conda:package:: bioconductor-omicrexposome

   |downloads_bioconductor-omicrexposome| |docker_bioconductor-omicrexposome|

   :versions: 1.6.0-1, 1.4.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-multidataset: >=1.12.0,<1.13.0
   :depends bioconductor-omicade4: >=1.24.0,<1.25.0
   :depends bioconductor-rexposome: >=1.6.0,<1.7.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends bioconductor-sva: >=3.32.0,<3.33.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-isva: 
   :depends r-pma: 
   :depends r-smartsva: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omicrexposome

   and update with::

      conda update bioconductor-omicrexposome

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omicrexposome:<tag>

   (see `bioconductor-omicrexposome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omicrexposome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicrexposome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicrexposome
   :alt:   (downloads)
.. |docker_bioconductor-omicrexposome| image:: https://quay.io/repository/biocontainers/bioconductor-omicrexposome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicrexposome
.. _`bioconductor-omicrexposome/tags`: https://quay.io/repository/biocontainers/bioconductor-omicrexposome?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicrexposome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicrexposome/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicrexposome'
.. highlight: bash

bioconductor-omicrexposome
==========================

.. conda:recipe:: bioconductor-omicrexposome
   :replaces_section_title:
   :noindex:

   Exposome and omic data associatin and integration analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/omicRexposome.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-omicrexposome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicrexposome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicrexposome/meta.yaml>`_

   omicRexposome systematizes the association evaluation between exposures and omic data\, taking advantage of MultiDataSet for coordinated data management\, rexposome for exposome data definition and limma for association testing. Also to perform data integration mixing exposome and omic data using multi co\-inherent analysis \(omicade4\) and multi\-canonical correlation analysis \(PMA\).


.. conda:package:: bioconductor-omicrexposome

   |downloads_bioconductor-omicrexposome| |docker_bioconductor-omicrexposome|

   :versions:
      
      

      ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-limma: ``>=3.44.0,<3.45.0``
   :depends bioconductor-multidataset: ``>=1.16.0,<1.17.0``
   :depends bioconductor-omicade4: ``>=1.27.0,<1.28.0``
   :depends bioconductor-rexposome: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends bioconductor-sva: ``>=3.36.0,<3.37.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
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
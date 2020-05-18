:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maaslin2'
.. highlight: bash

bioconductor-maaslin2
=====================

.. conda:recipe:: bioconductor-maaslin2
   :replaces_section_title:

   Maaslin2

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/Maaslin2.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-maaslin2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maaslin2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maaslin2/meta.yaml>`_

   MaAsLin2 is comprehensive R package for efficiently determining multivariable association between clinical metadata and microbial meta\'omic features. MaAsLin2 relies on general linear models to accommodate most modern epidemiological study designs\, including cross\-sectional and longitudinal\, and offers a variety of data exploration\, normalization\, and transformation methods. MaAsLin2 is the next generation of MaAsLin.


.. conda:package:: bioconductor-maaslin2

   |downloads_bioconductor-maaslin2| |docker_bioconductor-maaslin2|

   :versions: 1.0.0-0
   
   :depends bioconductor-edger: >=3.28.0,<3.29.0
   :depends bioconductor-lpsymphony: >=1.14.0,<1.15.0
   :depends bioconductor-metagenomeseq: >=1.28.0,<1.29.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-biglm: 
   :depends r-car: 
   :depends r-chemometrics: 
   :depends r-cplm: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hash: 
   :depends r-lmertest: 
   :depends r-logging: 
   :depends r-mass: 
   :depends r-mumin: 
   :depends r-optparse: 
   :depends r-pbapply: 
   :depends r-pcapp: 
   :depends r-pheatmap: 
   :depends r-pscl: 
   :depends r-robustbase: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-maaslin2

   and update with::

      conda update bioconductor-maaslin2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maaslin2:<tag>

   (see `bioconductor-maaslin2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maaslin2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maaslin2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maaslin2
   :alt:   (downloads)
.. |docker_bioconductor-maaslin2| image:: https://quay.io/repository/biocontainers/bioconductor-maaslin2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maaslin2
.. _`bioconductor-maaslin2/tags`: https://quay.io/repository/biocontainers/bioconductor-maaslin2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maaslin2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maaslin2/README.html
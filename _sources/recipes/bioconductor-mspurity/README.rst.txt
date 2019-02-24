:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mspurity'
.. highlight: bash

bioconductor-mspurity
=====================

.. conda:recipe:: bioconductor-mspurity
   :replaces_section_title:

   Assess the contribution of the targeted precursor in fragmentation acquired or anticipated isolation windows using a metric called \"precursor purity\". Also provides simple processing steps \(averaging\, filtering\, blank subtraction\, etc\) for DI\-MS data. Works for both LC\-MS\(\/MS\) and DI\-MS\(\/MS\) data. Spectral matching of fragmentation spectra can also be run against a SQLite database of library spectra.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/msPurity.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mspurity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mspurity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mspurity/meta.yaml>`_
   :links: biotools: :biotools:`mspurity`, doi: :doi:`10.1021/acs.analchem.6b04358`

   


.. conda:package:: bioconductor-mspurity

   |downloads_bioconductor-mspurity| |docker_bioconductor-mspurity|

   :versions: 1.8.0-0, 1.5.4-1, 1.5.4-0, 1.4.0-1, 1.4.0-0, 1.3.9-0
   
   :depends bioconductor-mzr: >=2.16.0,<2.17.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dbi: 
   
   :depends r-dosnow: 
   
   :depends r-fastcluster: 
   
   :depends r-foreach: 
   
   :depends r-ggplot2: 
   
   :depends r-plyr: 
   
   :depends r-rcpp: 
   
   :depends r-reshape2: 
   
   :depends r-rsqlite: 
   
   :depends r-stringr: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mspurity

   and update with::

      conda update bioconductor-mspurity

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mspurity:<tag>

   (see `bioconductor-mspurity/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mspurity| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mspurity.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mspurity| image:: https://quay.io/repository/biocontainers/bioconductor-mspurity/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mspurity
.. _`bioconductor-mspurity/tags`: https://quay.io/repository/biocontainers/bioconductor-mspurity?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mspurity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mspurity/README.html
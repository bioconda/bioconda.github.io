:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-baynorm'
.. highlight: bash

bioconductor-baynorm
====================

.. conda:recipe:: bioconductor-baynorm
   :replaces_section_title:

   bayNorm is used for normalizing single\-cell RNA\-seq data.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/bayNorm.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-baynorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-baynorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-baynorm/meta.yaml>`_

   


.. conda:package:: bioconductor-baynorm

   |downloads_bioconductor-baynorm| |docker_bioconductor-baynorm|

   :versions: 1.2.0-1, 1.0.6-0
   
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-singlecellexperiment: >=1.6.0,<1.7.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bb: 
   :depends r-dosnow: 
   :depends r-fitdistrplus: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-locfit: 
   :depends r-mass: 
   :depends r-rcpp: >=0.12.12
   :depends r-rcpparmadillo: 
   :depends r-rcppprogress: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-baynorm

   and update with::

      conda update bioconductor-baynorm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-baynorm:<tag>

   (see `bioconductor-baynorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-baynorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-baynorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-baynorm
   :alt:   (downloads)
.. |docker_bioconductor-baynorm| image:: https://quay.io/repository/biocontainers/bioconductor-baynorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-baynorm
.. _`bioconductor-baynorm/tags`: https://quay.io/repository/biocontainers/bioconductor-baynorm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-baynorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-baynorm/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-baynorm'
.. highlight: bash

bioconductor-baynorm
====================

.. conda:recipe:: bioconductor-baynorm
   :replaces_section_title:

   bayNorm is used for normalizing single\-cell RNA\-seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/bayNorm.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-baynorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-baynorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-baynorm/meta.yaml>`_

   


.. conda:package:: bioconductor-baynorm

   |downloads_bioconductor-baynorm| |docker_bioconductor-baynorm|

   :versions: 1.0.6-0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   
   :depends bioconductor-singlecellexperiment: >=1.4.0,<1.5.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
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

      docker pull quay.io/repository/biocontainers/bioconductor-baynorm:<tag>

   (see `bioconductor-baynorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-baynorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-baynorm.svg?style=flat
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
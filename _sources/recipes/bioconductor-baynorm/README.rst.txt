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

   :versions: 1.0.6

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bb`  :conda:package:`r-dosnow`  :conda:package:`r-fitdistrplus`  :conda:package:`r-foreach`  :conda:package:`r-iterators`  :conda:package:`r-locfit`  :conda:package:`r-mass`  :conda:package:`r-rcpp` >=0.12.12 :conda:package:`r-rcpparmadillo`  :conda:package:`r-rcppprogress`  

   :required~by: |required_by_bioconductor-baynorm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-baynorm

   and update with::

      conda update bioconductor-baynorm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-baynorm


.. |required_by_bioconductor-baynorm| conda:required_by:: bioconductor-baynorm
.. |downloads_bioconductor-baynorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-baynorm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-baynorm| image:: https://quay.io/repository/biocontainers/bioconductor-baynorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-baynorm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-baynorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-baynorm/README.html


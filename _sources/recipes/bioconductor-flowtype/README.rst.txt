:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowtype'
.. highlight: bash

bioconductor-flowtype
=====================

.. conda:recipe:: bioconductor-flowtype
   :replaces_section_title:

   Phenotyping Flow Cytometry Assays using multidimentional expansion of single dimentional partitions.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/flowType.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowtype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtype/meta.yaml>`_

   


.. conda:package:: bioconductor-flowtype

   |downloads_bioconductor-flowtype| |docker_bioconductor-flowtype|

   :versions: 2.24.0-0, 2.22.0-1, 2.20.1-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-flowclust: >=3.24.0,<3.25.0
   :depends bioconductor-flowcore: >=1.52.0,<1.53.0
   :depends bioconductor-flowmeans: >=1.46.0,<1.47.0
   :depends bioconductor-flowmerge: >=2.34.0,<2.35.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bh: >=1.51.0-3
   :depends r-rcpp: >=0.10.4
   :depends r-rrcov: 
   :depends r-sfsmisc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowtype

   and update with::

      conda update bioconductor-flowtype

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowtype:<tag>

   (see `bioconductor-flowtype/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowtype| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowtype.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowtype
   :alt:   (downloads)
.. |docker_bioconductor-flowtype| image:: https://quay.io/repository/biocontainers/bioconductor-flowtype/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowtype
.. _`bioconductor-flowtype/tags`: https://quay.io/repository/biocontainers/bioconductor-flowtype?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowtype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowtype/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-qtl2'
.. highlight: bash

r-qtl2
======

.. conda:recipe:: r-qtl2
   :replaces_section_title:

   R\/qtl2 provides a set of tools to perform quantitative trait locus \(QTL\) analysis in experimental crosses. It is a reimplementation of the R\/qtl package to better handle high\-dimensional data and complex cross designs. This package is designed to make it easy to install and load multiple R\/qtl2 packages in a single step. Broman et al. \(2018\) \<doi\:10.1534\/genetics.118.301595\>.

   :homepage: https://kbroman.org/qtl2, https://github.com/rqtl/qtl2
   :license: GPL3 / GPL-3
   :recipe: /`r-qtl2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qtl2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-qtl2/meta.yaml>`_

   


.. conda:package:: r-qtl2

   |downloads_r-qtl2| |docker_r-qtl2|

   :versions: 0.22-0, 0.20-1, 0.20-0
   
   :depends libgcc-ng: >=7.5.0
   :depends libstdcxx-ng: >=7.5.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-data.table: >=1.10.4_3
   :depends r-jsonlite: >=0.9.17
   :depends r-rcpp: >=0.12.12
   :depends r-rcppeigen: 
   :depends r-rsqlite: 
   :depends r-yaml: >=2.1.13
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-qtl2

   and update with::

      conda update r-qtl2

   or use the docker container::

      docker pull quay.io/biocontainers/r-qtl2:<tag>

   (see `r-qtl2/tags`_ for valid values for ``<tag>``)


.. |downloads_r-qtl2| image:: https://img.shields.io/conda/dn/bioconda/r-qtl2.svg?style=flat
   :target: https://anaconda.org/bioconda/r-qtl2
   :alt:   (downloads)
.. |docker_r-qtl2| image:: https://quay.io/repository/biocontainers/r-qtl2/status
   :target: https://quay.io/repository/biocontainers/r-qtl2
.. _`r-qtl2/tags`: https://quay.io/repository/biocontainers/r-qtl2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-qtl2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-qtl2/README.html
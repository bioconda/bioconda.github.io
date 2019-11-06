:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-srnadiff'
.. highlight: bash

bioconductor-srnadiff
=====================

.. conda:recipe:: bioconductor-srnadiff
   :replaces_section_title:

   Differential expression of small RNA\-seq when reference annotation is not given.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/srnadiff.html
   :license: GPL-3
   :recipe: /`bioconductor-srnadiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-srnadiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-srnadiff/meta.yaml>`_

   


.. conda:package:: bioconductor-srnadiff

   |downloads_bioconductor-srnadiff| |docker_bioconductor-srnadiff|

   :versions: 1.6.0-0, 1.4.0-1, 1.2.0-0
   
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-biocstyle: >=2.14.0,<2.15.0
   :depends bioconductor-deseq2: >=1.26.0,<1.27.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicalignments: >=1.22.0,<1.23.0
   :depends bioconductor-genomicfeatures: >=1.38.0,<1.39.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-gviz: >=1.30.0,<1.31.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-biocmanager: 
   :depends r-devtools: 
   :depends r-rcpp: >=0.12.8
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-srnadiff

   and update with::

      conda update bioconductor-srnadiff

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-srnadiff:<tag>

   (see `bioconductor-srnadiff/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-srnadiff| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-srnadiff.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-srnadiff
   :alt:   (downloads)
.. |docker_bioconductor-srnadiff| image:: https://quay.io/repository/biocontainers/bioconductor-srnadiff/status
   :target: https://quay.io/repository/biocontainers/bioconductor-srnadiff
.. _`bioconductor-srnadiff/tags`: https://quay.io/repository/biocontainers/bioconductor-srnadiff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-srnadiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-srnadiff/README.html
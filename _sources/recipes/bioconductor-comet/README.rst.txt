:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-comet'
.. highlight: bash

bioconductor-comet
==================

.. conda:recipe:: bioconductor-comet
   :replaces_section_title:

   coMET\: visualisation of regional epigenome\-wide association scan \(EWAS\) results and DNA co\-methylation patterns

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/coMET.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-comet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-comet/meta.yaml>`_

   Visualisation of EWAS results in a genomic region. In addition to phenotype\-association P\-values\, coMET also generates plots of co\-methylation patterns and provides a series of annotation tracks. It can be used to other omic\-wide association scans as long as the data can be translated to genomic level and for any species.


.. conda:package:: bioconductor-comet

   |downloads_bioconductor-comet| |docker_bioconductor-comet|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-1, 1.14.0-0
   
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-gviz: >=1.32.0,<1.33.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-colortools: 
   :depends r-corrplot: 
   :depends r-gridextra: 
   :depends r-hash: 
   :depends r-psych: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-comet

   and update with::

      conda update bioconductor-comet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-comet:<tag>

   (see `bioconductor-comet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-comet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-comet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-comet
   :alt:   (downloads)
.. |docker_bioconductor-comet| image:: https://quay.io/repository/biocontainers/bioconductor-comet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-comet
.. _`bioconductor-comet/tags`: https://quay.io/repository/biocontainers/bioconductor-comet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-comet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-comet/README.html
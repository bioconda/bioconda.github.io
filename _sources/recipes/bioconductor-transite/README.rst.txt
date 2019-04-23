:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-transite'
.. highlight: bash

bioconductor-transite
=====================

.. conda:recipe:: bioconductor-transite
   :replaces_section_title:

   transite is a computational method that allows comprehensive analysis of the regulatory role of RNA\-binding proteins in various cellular processes by leveraging preexisting gene expression data and current knowledge of binding preferences of RNA\-binding proteins.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/transite.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-transite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transite/meta.yaml>`_

   


.. conda:package:: bioconductor-transite

   |downloads_bioconductor-transite| |docker_bioconductor-transite|

   :versions: 1.0.1-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dplyr: >=0.7.6
   :depends r-ggplot2: >=3.0.0
   :depends r-ggseqlogo: >=0.1
   :depends r-gridextra: >=2.3
   :depends r-rcpp: >=0.12.18
   :depends r-scales: >=1.0.0
   :depends r-tfmpvalue: >=0.0.8
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-transite

   and update with::

      conda update bioconductor-transite

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-transite:<tag>

   (see `bioconductor-transite/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-transite| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transite.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-transite| image:: https://quay.io/repository/biocontainers/bioconductor-transite/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transite
.. _`bioconductor-transite/tags`: https://quay.io/repository/biocontainers/bioconductor-transite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transite/README.html
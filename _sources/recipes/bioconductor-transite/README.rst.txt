:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-transite'
.. highlight: bash

bioconductor-transite
=====================

.. conda:recipe:: bioconductor-transite
   :replaces_section_title:
   :noindex:

   RNA\-binding protein motif analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/transite.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-transite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transite/meta.yaml>`_

   transite is a computational method that allows comprehensive analysis of the regulatory role of RNA\-binding proteins in various cellular processes by leveraging preexisting gene expression data and current knowledge of binding preferences of RNA\-binding proteins.


.. conda:package:: bioconductor-transite

   |downloads_bioconductor-transite| |docker_bioconductor-transite|

   :versions:
      
      

      ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: ``>=0.7.6``
   :depends r-ggplot2: ``>=3.0.0``
   :depends r-ggseqlogo: ``>=0.1``
   :depends r-gridextra: ``>=2.3``
   :depends r-rcpp: ``>=1.0.4.8``
   :depends r-scales: ``>=1.0.0``
   :depends r-tfmpvalue: ``>=0.0.8``
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
   :target: https://anaconda.org/bioconda/bioconductor-transite
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
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geecc'
.. highlight: bash

bioconductor-geecc
==================

.. conda:recipe:: bioconductor-geecc
   :replaces_section_title:

   Use log\-linear models to perform hypergeometric and chi\-squared tests for gene set enrichments for two \(based on contingency tables\) or three categories \(contingency cubes\). Categories can be differentially expressed genes\, GO terms\, sequence length\, GC content\, chromosomal position\, phylostrata\, divergence\-strata\, ....

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/geecc.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-geecc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geecc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geecc/meta.yaml>`_

   


.. conda:package:: bioconductor-geecc

   |downloads_bioconductor-geecc| |docker_bioconductor-geecc|

   :versions: 1.16.1-0, 1.16.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-gplots: 
   :depends r-hypergea: >=1.3.0
   :depends r-mass: 
   :depends r-rcpp: >=0.11.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geecc

   and update with::

      conda update bioconductor-geecc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geecc:<tag>

   (see `bioconductor-geecc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geecc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geecc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-geecc| image:: https://quay.io/repository/biocontainers/bioconductor-geecc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geecc
.. _`bioconductor-geecc/tags`: https://quay.io/repository/biocontainers/bioconductor-geecc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geecc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geecc/README.html
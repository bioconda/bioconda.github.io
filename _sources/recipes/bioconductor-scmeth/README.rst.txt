:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scmeth'
.. highlight: bash

bioconductor-scmeth
===================

.. conda:recipe:: bioconductor-scmeth
   :replaces_section_title:
   :noindex:

   Functions to conduct quality control analysis in methylation data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/scmeth.html
   :license: GPL-2
   :recipe: /`bioconductor-scmeth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmeth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmeth/meta.yaml>`_

   Functions to analyze methylation data can be found here. Some functions are relevant for single cell methylation data but most other functions can be used for any methylation data. Highlight of this workflow is the comprehensive quality control report.


.. conda:package:: bioconductor-scmeth

   |downloads_bioconductor-scmeth| |docker_bioconductor-scmeth|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-annotatr: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-bsseq: ``>=1.34.0,<1.35.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-hdf5array: ``>=1.26.0,<1.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dt: 
   :depends r-knitr: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scmeth

   and update with::

      conda update bioconductor-scmeth

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scmeth:<tag>

   (see `bioconductor-scmeth/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scmeth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmeth.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scmeth
   :alt:   (downloads)
.. |docker_bioconductor-scmeth| image:: https://quay.io/repository/biocontainers/bioconductor-scmeth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmeth
.. _`bioconductor-scmeth/tags`: https://quay.io/repository/biocontainers/bioconductor-scmeth?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scmeth";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmeth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmeth/README.html
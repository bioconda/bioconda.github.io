:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctsv'
.. highlight: bash

bioconductor-ctsv
=================

.. conda:recipe:: bioconductor-ctsv
   :replaces_section_title:
   :noindex:

   Identification of cell\-type\-specific spatially variable genes accounting for excess zeros

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/CTSV.html
   :license: GPL-3
   :recipe: /`bioconductor-ctsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctsv/meta.yaml>`_

   The R package CTSV implements the CTSV approach developed by Jinge Yu and Xiangyu Luo that detects cell\-type\-specific spatially variable genes accounting for excess zeros. CTSV directly models sparse raw count data through a zero\-inflated negative binomial regression model\, incorporates cell\-type proportions\, and performs hypothesis testing based on R package pscl. The package outputs p\-values and q\-values for genes in each cell type\, and CTSV is scalable to datasets with tens of thousands of genes measured on hundreds of spots. CTSV can be installed in Windows\, Linux\, and Mac OS.


.. conda:package:: bioconductor-ctsv

   |downloads_bioconductor-ctsv| |docker_bioconductor-ctsv|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-qvalue: ``>=2.32.0,<2.33.0``
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-knitr: 
   :depends r-pscl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ctsv

   and update with::

      conda update bioconductor-ctsv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ctsv:<tag>

   (see `bioconductor-ctsv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ctsv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctsv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctsv
   :alt:   (downloads)
.. |docker_bioconductor-ctsv| image:: https://quay.io/repository/biocontainers/bioconductor-ctsv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctsv
.. _`bioconductor-ctsv/tags`: https://quay.io/repository/biocontainers/bioconductor-ctsv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctsv";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctsv/README.html
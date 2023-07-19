:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deconvr'
.. highlight: bash

bioconductor-deconvr
====================

.. conda:recipe:: bioconductor-deconvr
   :replaces_section_title:
   :noindex:

   Simulation and Deconvolution of Omic Profiles

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/deconvR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-deconvr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deconvr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deconvr/meta.yaml>`_

   This package provides a collection of functions designed for analyzing deconvolution of the bulk sample\(s\) using an atlas of reference omic signature profiles and a user\-selected model. Users are given the option to create or extend a reference atlas and\,also simulate the desired size of the bulk signature profile of the reference cell types.The package includes the cell\-type\-specific methylation atlas and\, Illumina Epic B5 probe ids that can be used in deconvolution. Additionally\,we included BSmeth2Probe\, to make mapping WGBS data to their probe IDs easier.


.. conda:package:: bioconductor-deconvr

   |downloads_bioconductor-deconvr| |docker_bioconductor-deconvr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-methylkit: ``>=1.26.0,<1.27.0``
   :depends bioconductor-minfi: ``>=1.46.0,<1.47.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>=1.14.0``
   :depends r-dplyr: ``>=1.0.7``
   :depends r-e1071: ``>=1.7.9``
   :depends r-foreach: ``>=1.5.1``
   :depends r-magrittr: ``>=2.0.1``
   :depends r-mass: 
   :depends r-matrixstats: ``>=0.61.0``
   :depends r-nnls: ``>=1.4``
   :depends r-quadprog: ``>=1.5.8``
   :depends r-rsq: ``>=2.2``
   :depends r-tidyr: ``>=1.1.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deconvr

   and update with::

      conda update bioconductor-deconvr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deconvr:<tag>

   (see `bioconductor-deconvr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deconvr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deconvr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deconvr
   :alt:   (downloads)
.. |docker_bioconductor-deconvr| image:: https://quay.io/repository/biocontainers/bioconductor-deconvr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deconvr
.. _`bioconductor-deconvr/tags`: https://quay.io/repository/biocontainers/bioconductor-deconvr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deconvr";
        var versions = ["1.6.0","1.4.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deconvr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deconvr/README.html
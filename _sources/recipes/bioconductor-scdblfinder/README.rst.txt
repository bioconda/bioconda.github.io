:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scdblfinder'
.. highlight: bash

bioconductor-scdblfinder
========================

.. conda:recipe:: bioconductor-scdblfinder
   :replaces_section_title:
   :noindex:

   scDblFinder

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/scDblFinder.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-scdblfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdblfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdblfinder/meta.yaml>`_

   The scDblFinder package gathers various methods for the detection and handling of doublets\/multiplets in single\-cell sequencing data \(i.e. multiple cells captured within the same droplet or reaction volume\). It includes methods formerly found in the scran package\, the new fast and comprehensive scDblFinder method\, and a reimplementation of the Amulet detection method for single\-cell ATAC\-seq.


.. conda:package:: bioconductor-scdblfinder

   |downloads_bioconductor-scdblfinder| |docker_bioconductor-scdblfinder|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocneighbors: ``>=1.16.0,<1.17.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biocsingular: ``>=1.14.0,<1.15.0``
   :depends bioconductor-bluster: ``>=1.8.0,<1.9.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-scater: ``>=1.26.0,<1.27.0``
   :depends bioconductor-scran: ``>=1.26.0,<1.27.0``
   :depends bioconductor-scuttle: ``>=1.8.0,<1.9.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-xgboost: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scdblfinder

   and update with::

      conda update bioconductor-scdblfinder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scdblfinder:<tag>

   (see `bioconductor-scdblfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scdblfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdblfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scdblfinder
   :alt:   (downloads)
.. |docker_bioconductor-scdblfinder| image:: https://quay.io/repository/biocontainers/bioconductor-scdblfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdblfinder
.. _`bioconductor-scdblfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-scdblfinder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scdblfinder";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdblfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdblfinder/README.html
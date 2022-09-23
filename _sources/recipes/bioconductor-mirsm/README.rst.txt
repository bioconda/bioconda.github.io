:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirsm'
.. highlight: bash

bioconductor-mirsm
==================

.. conda:recipe:: bioconductor-mirsm
   :replaces_section_title:
   :noindex:

   Inferring miRNA sponge modules in heterogeneous data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/miRSM.html
   :license: GPL-3
   :recipe: /`bioconductor-mirsm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsm/meta.yaml>`_

   The package aims to identify miRNA sponge modules in heterogeneous data. It provides several functions to study miRNA sponge modules\, including popular methods for inferring gene modules \(candidate miRNA sponge modules\)\, and a function to identify miRNA sponge modules\, as well as several functions to conduct modular analysis of miRNA sponge modules.


.. conda:package:: bioconductor-mirsm

   |downloads_bioconductor-mirsm| |docker_bioconductor-mirsm|

   :versions:
      
      

      ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.3-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-1``

      

   
   :depends bioconductor-bicare: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-fabia: ``>=2.40.0,<2.41.0``
   :depends bioconductor-gseabase: ``>=1.56.0,<1.57.0``
   :depends bioconductor-ibbig: ``>=1.38.0,<1.39.0``
   :depends bioconductor-mirsponger: ``>=1.20.0,<1.21.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.14.0,<3.15.0``
   :depends bioconductor-rqubic: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=14.0.4``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bibitr: 
   :depends r-biclust: 
   :depends r-dbscan: 
   :depends r-dynamictreecut: 
   :depends r-energy: 
   :depends r-flashclust: 
   :depends r-gfa: 
   :depends r-igraph: 
   :depends r-isa2: 
   :depends r-linkcomm: 
   :depends r-matrixcorrelation: 
   :depends r-mcl: 
   :depends r-mclust: 
   :depends r-nmf: 
   :depends r-pma: 
   :depends r-ppclust: 
   :depends r-rcpp: 
   :depends r-s4vd: 
   :depends r-sombrero: 
   :depends r-subspace: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirsm

   and update with::

      conda update bioconductor-mirsm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirsm:<tag>

   (see `bioconductor-mirsm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirsm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirsm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirsm
   :alt:   (downloads)
.. |docker_bioconductor-mirsm| image:: https://quay.io/repository/biocontainers/bioconductor-mirsm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirsm
.. _`bioconductor-mirsm/tags`: https://quay.io/repository/biocontainers/bioconductor-mirsm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirsm";
        var versions = ["1.12.0","1.12.0","1.12.0","1.10.0","1.8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirsm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirsm/README.html
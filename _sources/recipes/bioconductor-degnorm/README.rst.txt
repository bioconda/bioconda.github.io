:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-degnorm'
.. highlight: bash

bioconductor-degnorm
====================

.. conda:recipe:: bioconductor-degnorm
   :replaces_section_title:
   :noindex:

   DegNorm\: degradation normalization for RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/DegNorm.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-degnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degnorm/meta.yaml>`_

   This package performs degradation normalization in bulk RNA\-seq data to improve differential expression analysis accuracy.


.. conda:package:: bioconductor-degnorm

   |downloads_bioconductor-degnorm| |docker_bioconductor-degnorm|

   :versions:
      
      

      ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-plotly: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=1.0.2``
   :depends r-rcpparmadillo: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-degnorm

   and update with::

      conda update bioconductor-degnorm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-degnorm:<tag>

   (see `bioconductor-degnorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-degnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-degnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-degnorm
   :alt:   (downloads)
.. |docker_bioconductor-degnorm| image:: https://quay.io/repository/biocontainers/bioconductor-degnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-degnorm
.. _`bioconductor-degnorm/tags`: https://quay.io/repository/biocontainers/bioconductor-degnorm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-degnorm";
        var versions = ["1.8.0","1.8.0","1.4.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-degnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-degnorm/README.html
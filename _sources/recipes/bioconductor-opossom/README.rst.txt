:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-opossom'
.. highlight: bash

bioconductor-opossom
====================

.. conda:recipe:: bioconductor-opossom
   :replaces_section_title:
   :noindex:

   Comprehensive analysis of transcriptome data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/oposSOM.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-opossom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opossom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-opossom/meta.yaml>`_

   This package translates microarray expression data into metadata of reduced dimension. It provides various sample\-centered and group\-centered visualizations\, sample similarity analyses and functional enrichment analyses. The underlying SOM algorithm combines feature clustering\, multidimensional scaling and dimension reduction\, along with strong visualization capabilities. It enables extraction and description of functional expression modules inherent in the data.


.. conda:package:: bioconductor-opossom

   |downloads_bioconductor-opossom| |docker_bioconductor-opossom|

   :versions:
      
      

      ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biomart: ``>=2.50.0,<2.51.0``
   :depends bioconductor-graph: ``>=1.72.0,<1.73.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-ape: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-fastica: 
   :depends r-fdrtool: 
   :depends r-igraph: ``>=1.0.0``
   :depends r-pixmap: 
   :depends r-png: 
   :depends r-rcpp: 
   :depends r-rcppparallel: 
   :depends r-rcurl: 
   :depends r-scatterplot3d: 
   :depends r-tsne: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-opossom

   and update with::

      conda update bioconductor-opossom

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-opossom:<tag>

   (see `bioconductor-opossom/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-opossom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-opossom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-opossom
   :alt:   (downloads)
.. |docker_bioconductor-opossom| image:: https://quay.io/repository/biocontainers/bioconductor-opossom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-opossom
.. _`bioconductor-opossom/tags`: https://quay.io/repository/biocontainers/bioconductor-opossom?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-opossom";
        var versions = ["2.12.0","2.10.0","2.8.0","2.8.0","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-opossom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-opossom/README.html
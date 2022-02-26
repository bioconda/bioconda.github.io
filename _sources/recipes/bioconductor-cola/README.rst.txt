:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cola'
.. highlight: bash

bioconductor-cola
=================

.. conda:recipe:: bioconductor-cola
   :replaces_section_title:
   :noindex:

   A Framework for Consensus Partitioning

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/cola.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cola <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cola>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cola/meta.yaml>`_

   Subgroup classification is a basic task in genomic data analysis\, especially for gene expression and DNA methylation data analysis. It can also be used to test the agreement to known clinical annotations\, or to test whether there exist significant batch effects. The cola package provides a general framework for subgroup classification by consensus partitioning. It has the following features\: 1. It modularizes the consensus partitioning processes that various methods can be easily integrated. 2. It provides rich visualizations for interpreting the results. 3. It allows running multiple methods at the same time and provides functionalities to straightforward compare results. 4. It provides a new method to extract features which are more efficient to separate subgroups. 5. It automatically generates detailed reports for the complete analysis. 6. It allows applying consensus partitioning in a hierarchical manner.


.. conda:package:: bioconductor-cola

   |downloads_bioconductor-cola| |docker_bioconductor-cola|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-complexheatmap: ``>=2.10.0,<2.11.0``
   :depends bioconductor-impute: ``>=1.68.0,<1.69.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-brew: 
   :depends r-circlize: ``>=0.4.7``
   :depends r-clue: 
   :depends r-cluster: 
   :depends r-crayon: 
   :depends r-digest: 
   :depends r-doparallel: 
   :depends r-eulerr: 
   :depends r-foreach: 
   :depends r-getoptlong: 
   :depends r-globaloptions: ``>=0.1.0``
   :depends r-httr: 
   :depends r-irlba: 
   :depends r-knitr: 
   :depends r-markdown: 
   :depends r-matrixstats: 
   :depends r-mclust: 
   :depends r-microbenchmark: 
   :depends r-png: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=0.11.0``
   :depends r-skmeans: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cola

   and update with::

      conda update bioconductor-cola

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cola:<tag>

   (see `bioconductor-cola/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cola| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cola.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cola
   :alt:   (downloads)
.. |docker_bioconductor-cola| image:: https://quay.io/repository/biocontainers/bioconductor-cola/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cola
.. _`bioconductor-cola/tags`: https://quay.io/repository/biocontainers/bioconductor-cola?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cola";
        var versions = ["2.0.0","2.0.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cola/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cola/README.html
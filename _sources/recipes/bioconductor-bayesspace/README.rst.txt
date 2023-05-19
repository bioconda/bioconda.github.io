:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bayesspace'
.. highlight: bash

bioconductor-bayesspace
=======================

.. conda:recipe:: bioconductor-bayesspace
   :replaces_section_title:
   :noindex:

   Clustering and Resolution Enhancement of Spatial Transcriptomes

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/BayesSpace.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-bayesspace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesspace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bayesspace/meta.yaml>`_

   Tools for clustering and enhancing the resolution of spatial gene expression experiments. BayesSpace clusters a low\-dimensional representation of the gene expression matrix\, incorporating a spatial prior to encourage neighboring spots to cluster together. The method can enhance the resolution of the low\-dimensional representation into \"sub\-spots\"\, for which features such as gene expression or cell type composition can be imputed.


.. conda:package:: bioconductor-bayesspace

   |downloads_bioconductor-bayesspace| |docker_bioconductor-bayesspace|

   :versions:
      
      

      ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.6.0,<2.7.0``
   :depends bioconductor-biocsingular: ``>=1.14.0,<1.15.0``
   :depends bioconductor-rhdf5: ``>=2.42.0,<2.43.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-scater: ``>=1.26.0,<1.27.0``
   :depends bioconductor-scran: ``>=1.26.0,<1.27.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-assertthat: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-coda: 
   :depends r-dirichletreg: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-mclust: 
   :depends r-purrr: 
   :depends r-rcpp: ``>=1.0.4.6``
   :depends r-rcpparmadillo: 
   :depends r-rcppdist: 
   :depends r-rcppprogress: 
   :depends r-rcurl: 
   :depends r-scales: 
   :depends r-xgboost: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bayesspace

   and update with::

      conda update bioconductor-bayesspace

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bayesspace:<tag>

   (see `bioconductor-bayesspace/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bayesspace| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bayesspace.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bayesspace
   :alt:   (downloads)
.. |docker_bioconductor-bayesspace| image:: https://quay.io/repository/biocontainers/bioconductor-bayesspace/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bayesspace
.. _`bioconductor-bayesspace/tags`: https://quay.io/repository/biocontainers/bioconductor-bayesspace?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bayesspace";
        var versions = ["1.8.0","1.8.0","1.4.1","1.4.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bayesspace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bayesspace/README.html
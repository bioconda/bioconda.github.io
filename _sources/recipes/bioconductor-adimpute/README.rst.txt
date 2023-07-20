:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adimpute'
.. highlight: bash

bioconductor-adimpute
=====================

.. conda:recipe:: bioconductor-adimpute
   :replaces_section_title:
   :noindex:

   Adaptive Dropout Imputer \(ADImpute\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ADImpute.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-adimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adimpute/meta.yaml>`_

   Single\-cell RNA sequencing \(scRNA\-seq\) methods are typically unable to quantify the expression levels of all genes in a cell\, creating a need for the computational prediction of missing values \(‘dropout imputation’\). Most existing dropout imputation methods are limited in the sense that they exclusively use the scRNA\-seq dataset at hand and do not exploit external gene\-gene relationship information. Here we propose two novel methods\: a gene regulatory network\-based approach using gene\-gene relationships learnt from external data and a baseline approach corresponding to a sample\-wide average. ADImpute can implement these novel methods and also combine them with existing imputation methods \(currently supported\: DrImpute\, SAVER\). ADImpute can learn the best performing method per gene and combine the results from different methods into an ensemble.


.. conda:package:: bioconductor-adimpute

   |downloads_bioconductor-adimpute| |docker_bioconductor-adimpute|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :depends r-drimpute: 
   :depends r-kernlab: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-rsvd: 
   :depends r-saver: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-adimpute

   and update with::

      conda update bioconductor-adimpute

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adimpute:<tag>

   (see `bioconductor-adimpute/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adimpute| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adimpute.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adimpute
   :alt:   (downloads)
.. |docker_bioconductor-adimpute| image:: https://quay.io/repository/biocontainers/bioconductor-adimpute/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adimpute
.. _`bioconductor-adimpute/tags`: https://quay.io/repository/biocontainers/bioconductor-adimpute?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adimpute";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adimpute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adimpute/README.html
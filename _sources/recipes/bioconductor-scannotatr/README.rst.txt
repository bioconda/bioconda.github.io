:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scannotatr'
.. highlight: bash

bioconductor-scannotatr
=======================

.. conda:recipe:: bioconductor-scannotatr
   :replaces_section_title:
   :noindex:

   Pretrained learning models for cell type prediction on single cell RNA\-sequencing data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/scAnnotatR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scannotatr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scannotatr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scannotatr/meta.yaml>`_

   The package comprises a set of pretrained machine learning models to predict basic immune cell types. This enables all users to quickly get a first annotation of the cell types present in their dataset without requiring prior knowledge. scAnnotatR also allows users to train their own models to predict new cell types based on specific research needs.


.. conda:package:: bioconductor-scannotatr

   |downloads_bioconductor-scannotatr| |docker_bioconductor-scannotatr|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-ape: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-caret: 
   :depends r-data.tree: 
   :depends r-dplyr: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-kernlab: 
   :depends r-proc: 
   :depends r-rocr: 
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scannotatr

   and update with::

      conda update bioconductor-scannotatr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scannotatr:<tag>

   (see `bioconductor-scannotatr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scannotatr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scannotatr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scannotatr
   :alt:   (downloads)
.. |docker_bioconductor-scannotatr| image:: https://quay.io/repository/biocontainers/bioconductor-scannotatr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scannotatr
.. _`bioconductor-scannotatr/tags`: https://quay.io/repository/biocontainers/bioconductor-scannotatr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scannotatr";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scannotatr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scannotatr/README.html
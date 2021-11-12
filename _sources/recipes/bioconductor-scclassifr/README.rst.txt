:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scclassifr'
.. highlight: bash

bioconductor-scclassifr
=======================

.. conda:recipe:: bioconductor-scclassifr
   :replaces_section_title:
   :noindex:

   Pretrained learning models for cell type prediction on single cell RNA\-sequencing data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/scClassifR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scclassifr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scclassifr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scclassifr/meta.yaml>`_

   The package comprises a set of pretrained machine learning models to predict basic immune cell types. This enables all users to quickly get a first annotation of the cell types present in their dataset without requiring prior knowledge. scClassifR also allows users to train their own models to predict new cell types based on specific research needs.


.. conda:package:: bioconductor-scclassifr

   |downloads_bioconductor-scclassifr| |docker_bioconductor-scclassifr|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-ape: 
   :depends r-base: ``>=4.1,<4.2.0a0``
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

      conda install bioconductor-scclassifr

   and update with::

      conda update bioconductor-scclassifr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scclassifr:<tag>

   (see `bioconductor-scclassifr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scclassifr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scclassifr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scclassifr
   :alt:   (downloads)
.. |docker_bioconductor-scclassifr| image:: https://quay.io/repository/biocontainers/bioconductor-scclassifr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scclassifr
.. _`bioconductor-scclassifr/tags`: https://quay.io/repository/biocontainers/bioconductor-scclassifr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scclassifr";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scclassifr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scclassifr/README.html
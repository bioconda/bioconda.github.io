:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-expressionnormalizationworkflow'
.. highlight: bash

bioconductor-expressionnormalizationworkflow
============================================

.. conda:recipe:: bioconductor-expressionnormalizationworkflow
   :replaces_section_title:
   :noindex:

   Gene Expression Normalization Workflow

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ExpressionNormalizationWorkflow.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-expressionnormalizationworkflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-expressionnormalizationworkflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-expressionnormalizationworkflow/meta.yaml>`_

   An extensive\, customized expression normalization workflow incorporating Supervised Normalization of Microarryas\(SNM\)\, Surrogate Variable Analysis\(SVA\) and Principal Variance Component Analysis to identify batch effects and remove them from the expression data to enhance the ability to detect the underlying biological signals.


.. conda:package:: bioconductor-expressionnormalizationworkflow

   |downloads_bioconductor-expressionnormalizationworkflow| |docker_bioconductor-expressionnormalizationworkflow|

   :versions:
      
      

      ``1.16.0-1``,  ``1.16.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-pvca: ``>=1.30.0,<1.31.0``
   :depends bioconductor-snm: ``>=1.38.0,<1.39.0``
   :depends bioconductor-sva: ``>=3.38.0,<3.39.0``
   :depends bioconductor-vsn: ``>=3.58.0,<3.59.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-lme4: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-expressionnormalizationworkflow

   and update with::

      conda update bioconductor-expressionnormalizationworkflow

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-expressionnormalizationworkflow:<tag>

   (see `bioconductor-expressionnormalizationworkflow/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-expressionnormalizationworkflow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-expressionnormalizationworkflow.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-expressionnormalizationworkflow
   :alt:   (downloads)
.. |docker_bioconductor-expressionnormalizationworkflow| image:: https://quay.io/repository/biocontainers/bioconductor-expressionnormalizationworkflow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-expressionnormalizationworkflow
.. _`bioconductor-expressionnormalizationworkflow/tags`: https://quay.io/repository/biocontainers/bioconductor-expressionnormalizationworkflow?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-expressionnormalizationworkflow";
        var versions = ["1.16.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-expressionnormalizationworkflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-expressionnormalizationworkflow/README.html
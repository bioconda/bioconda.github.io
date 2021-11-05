:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sigfeature'
.. highlight: bash

bioconductor-sigfeature
=======================

.. conda:recipe:: bioconductor-sigfeature
   :replaces_section_title:
   :noindex:

   sigFeature\: Significant feature selection using SVM\-RFE \& t\-statistic

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/sigFeature.html
   :license: GPL
   :recipe: /`bioconductor-sigfeature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigfeature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigfeature/meta.yaml>`_

   This package provides a novel feature selection algorithm for binary classification using support vector machine recursive feature elimination SVM\-RFE and t\-statistic. In this feature selection process\, the selected features are differentially significant between the two classes and also they are good classifier with higher degree of classification accuracy.


.. conda:package:: bioconductor-sigfeature

   |downloads_bioconductor-sigfeature| |docker_bioconductor-sigfeature|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-biocviews: ``>=1.62.0,<1.63.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-e1071: 
   :depends r-matrix: 
   :depends r-nlme: 
   :depends r-openxlsx: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-sparsem: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sigfeature

   and update with::

      conda update bioconductor-sigfeature

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sigfeature:<tag>

   (see `bioconductor-sigfeature/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sigfeature| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigfeature.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sigfeature
   :alt:   (downloads)
.. |docker_bioconductor-sigfeature| image:: https://quay.io/repository/biocontainers/bioconductor-sigfeature/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigfeature
.. _`bioconductor-sigfeature/tags`: https://quay.io/repository/biocontainers/bioconductor-sigfeature?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sigfeature";
        var versions = ["1.12.0","1.10.0","1.8.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigfeature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigfeature/README.html
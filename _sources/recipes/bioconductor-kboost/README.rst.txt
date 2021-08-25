:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kboost'
.. highlight: bash

bioconductor-kboost
===================

.. conda:recipe:: bioconductor-kboost
   :replaces_section_title:
   :noindex:

   Inference of gene regulatory networks from gene expression data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/KBoost.html
   :license: GPL-2 | GPL-3
   :recipe: /`bioconductor-kboost <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kboost>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kboost/meta.yaml>`_

   Reconstructing gene regulatory networks and transcription factor activity is crucial to understand biological processes and holds potential for developing personalized treatment. Yet\, it is still an open problem as state\-of\-art algorithm are often not able to handle large amounts of data. Furthermore\, many of the present methods predict numerous false positives and are unable to integrate other sources of information such as previously known interactions. Here we introduce KBoost\, an algorithm that uses kernel PCA regression\, boosting and Bayesian model averaging for fast and accurate reconstruction of gene regulatory networks. KBoost can also use a prior network built on previously known transcription factor targets. We have benchmarked KBoost using three different datasets against other high performing algorithms. The results show that our method compares favourably to other methods across datasets.


.. conda:package:: bioconductor-kboost

   |downloads_bioconductor-kboost| |docker_bioconductor-kboost|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-kboost

   and update with::

      conda update bioconductor-kboost

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kboost:<tag>

   (see `bioconductor-kboost/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kboost| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kboost.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kboost
   :alt:   (downloads)
.. |docker_bioconductor-kboost| image:: https://quay.io/repository/biocontainers/bioconductor-kboost/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kboost
.. _`bioconductor-kboost/tags`: https://quay.io/repository/biocontainers/bioconductor-kboost?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kboost";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kboost/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kboost/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kboost'
.. highlight: bash

bioconductor-kboost
===================

.. conda:recipe:: bioconductor-kboost
   :replaces_section_title:
   :noindex:

   Inference of gene regulatory networks from gene expression data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/KBoost.html
   :license: GPL-2 | GPL-3
   :recipe: /`bioconductor-kboost <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kboost>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kboost/meta.yaml>`_

   Reconstructing gene regulatory networks and transcription factor activity is crucial to understand biological processes and holds potential for developing personalized treatment. Yet\, it is still an open problem as state\-of\-art algorithm are often not able to handle large amounts of data. Furthermore\, many of the present methods predict numerous false positives and are unable to integrate other sources of information such as previously known interactions. Here we introduce KBoost\, an algorithm that uses kernel PCA regression\, boosting and Bayesian model averaging for fast and accurate reconstruction of gene regulatory networks. KBoost can also use a prior network built on previously known transcription factor targets. We have benchmarked KBoost using three different datasets against other high performing algorithms. The results show that our method compares favourably to other methods across datasets.


.. conda:package:: bioconductor-kboost

   |downloads_bioconductor-kboost| |docker_bioconductor-kboost|

   :versions:
      
      

      ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-kboost

   and update with::

      mamba update bioconductor-kboost

  To create a new environment, run::

      mamba create --name myenvname bioconductor-kboost

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.10.0","1.10.0","1.8.0","1.6.0","1.2.0"];
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
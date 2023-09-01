:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-evaluomer'
.. highlight: bash

bioconductor-evaluomer
======================

.. conda:recipe:: bioconductor-evaluomer
   :replaces_section_title:
   :noindex:

   Evaluation of Bioinformatics Metrics

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/evaluomeR.html
   :license: GPL-3
   :recipe: /`bioconductor-evaluomer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-evaluomer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-evaluomer/meta.yaml>`_

   Evaluating the reliability of your own metrics and the measurements done on your own datasets by analysing the stability and goodness of the classifications of such metrics.


.. conda:package:: bioconductor-evaluomer

   |downloads_bioconductor-evaluomer| |docker_bioconductor-evaluomer|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.5-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-class: 
   :depends r-cluster: ``>=2.0.9``
   :depends r-corrplot: ``>=0.84``
   :depends r-flexmix: ``>=2.3.15``
   :depends r-fpc: ``>=2.2-3``
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-kableextra: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-mclust: 
   :depends r-plotrix: 
   :depends r-prabclus: 
   :depends r-randomforest: ``>=4.6.14``
   :depends r-rdpack: 
   :depends r-reshape2: 
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

      mamba install bioconductor-evaluomer

   and update with::

      mamba update bioconductor-evaluomer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-evaluomer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-evaluomer:<tag>

   (see `bioconductor-evaluomer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-evaluomer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-evaluomer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-evaluomer
   :alt:   (downloads)
.. |docker_bioconductor-evaluomer| image:: https://quay.io/repository/biocontainers/bioconductor-evaluomer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-evaluomer
.. _`bioconductor-evaluomer/tags`: https://quay.io/repository/biocontainers/bioconductor-evaluomer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-evaluomer";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-evaluomer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-evaluomer/README.html
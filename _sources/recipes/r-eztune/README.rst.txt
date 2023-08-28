:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-eztune'
.. highlight: bash

r-eztune
========

.. conda:recipe:: r-eztune
   :replaces_section_title:
   :noindex:

   Contains two functions that are intended to make tuning supervised learning methods easy. The eztune function uses a genetic algorithm or Hooke\-Jeeves optimizer to find the best set of tuning parameters. The user can choose the optimizer\, the learning method\, and if optimization will be based on accuracy obtained through validation error\, cross validation\, or resubstitution. The function eztune.cv will compute a cross validated error rate. The purpose of eztune\_cv is to provide a cross validated accuracy or MSE when resubstitution or validation data are used for optimization because error measures from both approaches can be misleading.

   :homepage: https://CRAN.R-project.org/package=EZtune
   :license: GPL3 / GPL-3
   :recipe: /`r-eztune <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-eztune>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-eztune/meta.yaml>`_

   


.. conda:package:: r-eztune

   |downloads_r-eztune| |docker_r-eztune|

   :versions:
      
      

      ``3.1.1-0``

      

   
   :depends bioconductor-biocstyle: 
   :depends r-ada: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-ga: 
   :depends r-gbm: 
   :depends r-glmnet: 
   :depends r-optimx: 
   :depends r-rocr: 
   :depends r-rpart: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install r-eztune

   and update with::

      mamba update r-eztune

  To create a new environment, run::

      mamba create --name myenvname r-eztune

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-eztune:<tag>

   (see `r-eztune/tags`_ for valid values for ``<tag>``)


.. |downloads_r-eztune| image:: https://img.shields.io/conda/dn/bioconda/r-eztune.svg?style=flat
   :target: https://anaconda.org/bioconda/r-eztune
   :alt:   (downloads)
.. |docker_r-eztune| image:: https://quay.io/repository/biocontainers/r-eztune/status
   :target: https://quay.io/repository/biocontainers/r-eztune
.. _`r-eztune/tags`: https://quay.io/repository/biocontainers/r-eztune?tab=tags


.. raw:: html

    <script>
        var package = "r-eztune";
        var versions = ["3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-eztune/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-eztune/README.html
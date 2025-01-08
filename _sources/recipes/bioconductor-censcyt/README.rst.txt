:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-censcyt'
.. highlight: bash

bioconductor-censcyt
====================

.. conda:recipe:: bioconductor-censcyt
   :replaces_section_title:
   :noindex:

   Differential abundance analysis with a right censored covariate in high\-dimensional cytometry

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/censcyt.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-censcyt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-censcyt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-censcyt/meta.yaml>`_

   Methods for differential abundance analysis in high\-dimensional cytometry data when a covariate is subject to right censoring \(e.g. survival time\) based on multiple imputation and generalized linear mixed models.


.. conda:package:: bioconductor-censcyt

   |downloads_bioconductor-censcyt| |docker_bioconductor-censcyt|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-diffcyt: ``>=1.26.0,<1.27.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-broom.mixed: 
   :depends r-dirmult: 
   :depends r-dplyr: 
   :depends r-fitdistrplus: 
   :depends r-lme4: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-mice: 
   :depends r-multcomp: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-survival: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-censcyt

   and update with::

      mamba update bioconductor-censcyt

  To create a new environment, run::

      mamba create --name myenvname bioconductor-censcyt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-censcyt:<tag>

   (see `bioconductor-censcyt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-censcyt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-censcyt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-censcyt
   :alt:   (downloads)
.. |docker_bioconductor-censcyt| image:: https://quay.io/repository/biocontainers/bioconductor-censcyt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-censcyt
.. _`bioconductor-censcyt/tags`: https://quay.io/repository/biocontainers/bioconductor-censcyt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-censcyt";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-censcyt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-censcyt/README.html
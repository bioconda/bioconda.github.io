:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anvilworkflow'
.. highlight: bash

bioconductor-anvilworkflow
==========================

.. conda:recipe:: bioconductor-anvilworkflow
   :replaces_section_title:
   :noindex:

   Run workflows implemented in Terra\/AnVIL workspace

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/AnVILWorkflow.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-anvilworkflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilworkflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilworkflow/meta.yaml>`_

   The AnVIL is a cloud computing resource developed in part by the National Human Genome Research Institute. The main cloud\-based genomics platform deported by the AnVIL project is Terra. The AnVILWorkflow package allows remote access to Terra implemented workflows\, enabling end\-user to utilize Terra\/ AnVIL provided resources \- such as data\, workflows\, and flexible\/scalble computing resources \- through the conventional R functions.


.. conda:package:: bioconductor-anvilworkflow

   |downloads_bioconductor-anvilworkflow| |docker_bioconductor-anvilworkflow|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-anvil: ``>=1.18.0,<1.19.0``
   :depends bioconductor-anvilbase: ``>=1.0.0,<1.1.0``
   :depends bioconductor-anvilgcp: ``>=1.0.0,<1.1.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-plyr: 
   :depends r-rlang: 
   :depends r-stringr: 
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

      mamba install bioconductor-anvilworkflow

   and update with::

      mamba update bioconductor-anvilworkflow

  To create a new environment, run::

      mamba create --name myenvname bioconductor-anvilworkflow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anvilworkflow:<tag>

   (see `bioconductor-anvilworkflow/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anvilworkflow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anvilworkflow.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anvilworkflow
   :alt:   (downloads)
.. |docker_bioconductor-anvilworkflow| image:: https://quay.io/repository/biocontainers/bioconductor-anvilworkflow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anvilworkflow
.. _`bioconductor-anvilworkflow/tags`: https://quay.io/repository/biocontainers/bioconductor-anvilworkflow?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anvilworkflow";
        var versions = ["1.6.0","1.2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anvilworkflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anvilworkflow/README.html
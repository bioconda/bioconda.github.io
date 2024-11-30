:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcollectl'
.. highlight: bash

bioconductor-rcollectl
======================

.. conda:recipe:: bioconductor-rcollectl
   :replaces_section_title:
   :noindex:

   Help use collectl with R in Linux\, to measure resource consumption in R processes

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Rcollectl.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rcollectl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcollectl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcollectl/meta.yaml>`_

   Provide functions to obtain instrumentation data on processes in a unix environment.  Parse output of a collectl run.  Vizualize aspects of system usage over time\, with annotation.


.. conda:package:: bioconductor-rcollectl

   |downloads_bioconductor-rcollectl| |docker_bioconductor-rcollectl|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-lubridate: 
   :depends r-processx: 
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

      mamba install bioconductor-rcollectl

   and update with::

      mamba update bioconductor-rcollectl

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rcollectl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcollectl:<tag>

   (see `bioconductor-rcollectl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcollectl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcollectl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcollectl
   :alt:   (downloads)
.. |docker_bioconductor-rcollectl| image:: https://quay.io/repository/biocontainers/bioconductor-rcollectl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcollectl
.. _`bioconductor-rcollectl/tags`: https://quay.io/repository/biocontainers/bioconductor-rcollectl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcollectl";
        var versions = ["1.2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcollectl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcollectl/README.html
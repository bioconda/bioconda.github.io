:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cypress'
.. highlight: bash

bioconductor-cypress
====================

.. conda:recipe:: bioconductor-cypress
   :replaces_section_title:
   :noindex:

   Cell\-Type\-Specific Power Assessment

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cypress.html
   :license: GPL-2 | GPL-3
   :recipe: /`bioconductor-cypress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cypress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cypress/meta.yaml>`_

   CYPRESS is a cell\-type\-specific power tool. This package aims to perform power analysis for the cell\-type\-specific data. It calculates FDR\, FDC\, and power\, under various study design parameters\, including but not limited to sample size\, and effect size. It takes the input of a SummarizeExperimental\(SE\) object with observed mixture data \(feature by sample matrix\)\, and the cell\-type mixture proportions \(sample by cell\-type matrix\). It can solve the cell\-type mixture proportions from the reference free panel from TOAST and conduct tests to identify cell\-type\-specific differential expression \(csDE\) genes.


.. conda:package:: bioconductor-cypress

   |downloads_bioconductor-cypress| |docker_bioconductor-cypress|

   :versions:
      
      

      

      

   
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

      mamba install bioconductor-cypress

   and update with::

      mamba update bioconductor-cypress

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cypress

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cypress:<tag>

   (see `bioconductor-cypress/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cypress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cypress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cypress
   :alt:   (downloads)
.. |docker_bioconductor-cypress| image:: https://quay.io/repository/biocontainers/bioconductor-cypress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cypress
.. _`bioconductor-cypress/tags`: https://quay.io/repository/biocontainers/bioconductor-cypress?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cypress";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cypress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cypress/README.html
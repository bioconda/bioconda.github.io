:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-divergence'
.. highlight: bash

bioconductor-divergence
=======================

.. conda:recipe:: bioconductor-divergence
   :replaces_section_title:
   :noindex:

   Divergence\: Functionality for assessing omics data by divergence with respect to a baseline

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/divergence.html
   :license: GPL-2
   :recipe: /`bioconductor-divergence <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-divergence>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-divergence/meta.yaml>`_

   This package provides functionality for performing divergence analysis as presented in Dinalankara et al\, \"Digitizing omics profiles by divergence from a baseline\"\, PANS 2018. This allows the user to simplify high dimensional omics data into a binary or ternary format which encapsulates how the data is divergent from a specified baseline group with the same univariate or multivariate features.


.. conda:package:: bioconductor-divergence

   |downloads_bioconductor-divergence| |docker_bioconductor-divergence|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-divergence

   and update with::

      mamba update bioconductor-divergence

  To create a new environment, run::

      mamba create --name myenvname bioconductor-divergence

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-divergence:<tag>

   (see `bioconductor-divergence/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-divergence| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-divergence.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-divergence
   :alt:   (downloads)
.. |docker_bioconductor-divergence| image:: https://quay.io/repository/biocontainers/bioconductor-divergence/status
   :target: https://quay.io/repository/biocontainers/bioconductor-divergence
.. _`bioconductor-divergence/tags`: https://quay.io/repository/biocontainers/bioconductor-divergence?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-divergence";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-divergence/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-divergence/README.html
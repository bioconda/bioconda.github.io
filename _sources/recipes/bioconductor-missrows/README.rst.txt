:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-missrows'
.. highlight: bash

bioconductor-missrows
=====================

.. conda:recipe:: bioconductor-missrows
   :replaces_section_title:
   :noindex:

   Handling Missing Individuals in Multi\-Omics Data Integration

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/missRows.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-missrows <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-missrows>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-missrows/meta.yaml>`_

   The missRows package implements the MI\-MFA method to deal with missing individuals \(\'biological units\'\) in multi\-omics data integration. The MI\-MFA method generates multiple imputed datasets from a Multiple Factor Analysis model\, then the yield results are combined in a single consensus solution. The package provides functions for estimating coordinates of individuals and variables\, imputing missing individuals\, and various diagnostic plots to inspect the pattern of missingness and visualize the uncertainty due to missing values.


.. conda:package:: bioconductor-missrows

   |downloads_bioconductor-missrows| |docker_bioconductor-missrows|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-plyr: 
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

      mamba install bioconductor-missrows

   and update with::

      mamba update bioconductor-missrows

  To create a new environment, run::

      mamba create --name myenvname bioconductor-missrows

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-missrows:<tag>

   (see `bioconductor-missrows/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-missrows| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-missrows.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-missrows
   :alt:   (downloads)
.. |docker_bioconductor-missrows| image:: https://quay.io/repository/biocontainers/bioconductor-missrows/status
   :target: https://quay.io/repository/biocontainers/bioconductor-missrows
.. _`bioconductor-missrows/tags`: https://quay.io/repository/biocontainers/bioconductor-missrows?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-missrows";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-missrows/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-missrows/README.html
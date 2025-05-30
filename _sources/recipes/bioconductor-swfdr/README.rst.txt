:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-swfdr'
.. highlight: bash

bioconductor-swfdr
==================

.. conda:recipe:: bioconductor-swfdr
   :replaces_section_title:
   :noindex:

   Estimation of the science\-wise false discovery rate and the false discovery rate conditional on covariates

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/swfdr.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-swfdr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swfdr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-swfdr/meta.yaml>`_

   This package allows users to estimate the science\-wise false discovery rate from Jager and Leek\, \"Empirical estimates suggest most published medical research is true\,\" 2013\, Biostatistics\, using an EM approach due to the presence of rounding and censoring. It also allows users to estimate the false discovery rate conditional on covariates\, using a regression framework\, as per Boca and Leek\, \"A direct approach to estimating false discovery rates conditional on covariates\,\" 2018\, PeerJ.


.. conda:package:: bioconductor-swfdr

   |downloads_bioconductor-swfdr| |docker_bioconductor-swfdr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-swfdr

   and update with::

      mamba update bioconductor-swfdr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-swfdr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-swfdr:<tag>

   (see `bioconductor-swfdr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-swfdr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-swfdr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-swfdr
   :alt:   (downloads)
.. |docker_bioconductor-swfdr| image:: https://quay.io/repository/biocontainers/bioconductor-swfdr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-swfdr
.. _`bioconductor-swfdr/tags`: https://quay.io/repository/biocontainers/bioconductor-swfdr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-swfdr";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-swfdr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-swfdr/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbpcr'
.. highlight: bash

bioconductor-mbpcr
==================

.. conda:recipe:: bioconductor-mbpcr
   :replaces_section_title:
   :noindex:

   Bayesian Piecewise Constant Regression for DNA copy number estimation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/mBPCR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mbpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbpcr/meta.yaml>`_

   It contains functions for estimating the DNA copy number profile using mBPCR with the aim of detecting regions with copy number changes.


.. conda:package:: bioconductor-mbpcr

   |downloads_bioconductor-mbpcr| |docker_bioconductor-mbpcr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-gwastools: ``>=1.48.0,<1.49.0``
   :depends bioconductor-oligoclasses: ``>=1.64.0,<1.65.0``
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

      mamba install bioconductor-mbpcr

   and update with::

      mamba update bioconductor-mbpcr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mbpcr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mbpcr:<tag>

   (see `bioconductor-mbpcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mbpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbpcr
   :alt:   (downloads)
.. |docker_bioconductor-mbpcr| image:: https://quay.io/repository/biocontainers/bioconductor-mbpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbpcr
.. _`bioconductor-mbpcr/tags`: https://quay.io/repository/biocontainers/bioconductor-mbpcr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mbpcr";
        var versions = ["1.56.0","1.54.0","1.52.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbpcr/README.html
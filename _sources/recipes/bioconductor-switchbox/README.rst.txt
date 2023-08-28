:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-switchbox'
.. highlight: bash

bioconductor-switchbox
======================

.. conda:recipe:: bioconductor-switchbox
   :replaces_section_title:
   :noindex:

   Utilities to train and validate classifiers based on pair switching using the K\-Top\-Scoring\-Pair \(KTSP\) algorithm

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/switchBox.html
   :license: GPL-2
   :recipe: /`bioconductor-switchbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-switchbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-switchbox/meta.yaml>`_
   :links: biotools: :biotools:`switchbox`

   The package offer different classifiers based on comparisons of pair of features \(TSP\)\, using various decision rules \(e.g.\, majority wins principle\).


.. conda:package:: bioconductor-switchbox

   |downloads_bioconductor-switchbox| |docker_bioconductor-switchbox|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gplots: 
   :depends r-proc: 
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

      mamba install bioconductor-switchbox

   and update with::

      mamba update bioconductor-switchbox

  To create a new environment, run::

      mamba create --name myenvname bioconductor-switchbox

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-switchbox:<tag>

   (see `bioconductor-switchbox/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-switchbox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-switchbox.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-switchbox
   :alt:   (downloads)
.. |docker_bioconductor-switchbox| image:: https://quay.io/repository/biocontainers/bioconductor-switchbox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-switchbox
.. _`bioconductor-switchbox/tags`: https://quay.io/repository/biocontainers/bioconductor-switchbox?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-switchbox";
        var versions = ["1.36.0","1.34.0","1.34.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-switchbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-switchbox/README.html
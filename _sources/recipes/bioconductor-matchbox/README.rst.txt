:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-matchbox'
.. highlight: bash

bioconductor-matchbox
=====================

.. conda:recipe:: bioconductor-matchbox
   :replaces_section_title:
   :noindex:

   Utilities to compute\, compare\, and plot the agreement between ordered vectors of features \(ie. distinct genomic experiments\). The package includes Correspondence\-At\-the\-TOP \(CAT\) analysis.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/matchBox.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-matchbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matchbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matchbox/meta.yaml>`_

   The matchBox package enables comparing ranked vectors of features\, merging multiple datasets\, removing redundant features\, using CAT\-plots and Venn diagrams\, and computing statistical significance.


.. conda:package:: bioconductor-matchbox

   |downloads_bioconductor-matchbox| |docker_bioconductor-matchbox|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-matchbox

   and update with::

      mamba update bioconductor-matchbox

  To create a new environment, run::

      mamba create --name myenvname bioconductor-matchbox

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-matchbox:<tag>

   (see `bioconductor-matchbox/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-matchbox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-matchbox.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-matchbox
   :alt:   (downloads)
.. |docker_bioconductor-matchbox| image:: https://quay.io/repository/biocontainers/bioconductor-matchbox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-matchbox
.. _`bioconductor-matchbox/tags`: https://quay.io/repository/biocontainers/bioconductor-matchbox?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-matchbox";
        var versions = ["1.44.0","1.42.0","1.40.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-matchbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-matchbox/README.html
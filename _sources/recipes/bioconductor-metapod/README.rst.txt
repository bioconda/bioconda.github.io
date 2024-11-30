:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metapod'
.. highlight: bash

bioconductor-metapod
====================

.. conda:recipe:: bioconductor-metapod
   :replaces_section_title:
   :noindex:

   Meta\-Analyses on P\-Values of Differential Analyses

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/metapod.html
   :license: GPL-3
   :recipe: /`bioconductor-metapod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metapod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metapod/meta.yaml>`_

   Implements a variety of methods for combining p\-values in differential analyses of genome\-scale datasets. Functions can combine p\-values across different tests in the same analysis \(e.g.\, genomic windows in ChIP\-seq\, exons in RNA\-seq\) or for corresponding tests across separate analyses \(e.g.\, replicated comparisons\, effect of different treatment conditions\). Support is provided for handling log\-transformed input p\-values\, missing values and weighting where appropriate.


.. conda:package:: bioconductor-metapod

   |downloads_bioconductor-metapod| |docker_bioconductor-metapod|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.10.0-3</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.2.0-2</code>,  </span></summary>
      

      ``1.10.0-3``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcpp: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-metapod

   and update with::

      mamba update bioconductor-metapod

  To create a new environment, run::

      mamba create --name myenvname bioconductor-metapod

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metapod:<tag>

   (see `bioconductor-metapod/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metapod| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metapod.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metapod
   :alt:   (downloads)
.. |docker_bioconductor-metapod| image:: https://quay.io/repository/biocontainers/bioconductor-metapod/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metapod
.. _`bioconductor-metapod/tags`: https://quay.io/repository/biocontainers/bioconductor-metapod?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metapod";
        var versions = ["1.10.0","1.10.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metapod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metapod/README.html
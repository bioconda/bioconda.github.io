:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qsutils'
.. highlight: bash

bioconductor-qsutils
====================

.. conda:recipe:: bioconductor-qsutils
   :replaces_section_title:
   :noindex:

   Quasispecies Diversity

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/QSutils.html
   :license: file LICENSE
   :recipe: /`bioconductor-qsutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsutils/meta.yaml>`_

   Set of utility functions for viral quasispecies analysis with NGS data. Most functions are equally useful for metagenomic studies. There are three main types\: \(1\) data manipulation and exploration—functions useful for converting reads to haplotypes and frequencies\, repairing reads\, intersecting strand haplotypes\, and visualizing haplotype alignments. \(2\) diversity indices—functions to compute diversity and entropy\, in which incidence\, abundance\, and functional indices are considered. \(3\) data simulation—functions useful for generating random viral quasispecies data.


.. conda:package:: bioconductor-qsutils

   |downloads_bioconductor-qsutils| |docker_bioconductor-qsutils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-psych: 
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

      mamba install bioconductor-qsutils

   and update with::

      mamba update bioconductor-qsutils

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qsutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qsutils:<tag>

   (see `bioconductor-qsutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qsutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qsutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qsutils
   :alt:   (downloads)
.. |docker_bioconductor-qsutils| image:: https://quay.io/repository/biocontainers/bioconductor-qsutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qsutils
.. _`bioconductor-qsutils/tags`: https://quay.io/repository/biocontainers/bioconductor-qsutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qsutils";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qsutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qsutils/README.html
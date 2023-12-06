:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beadarray'
.. highlight: bash

bioconductor-beadarray
======================

.. conda:recipe:: bioconductor-beadarray
   :replaces_section_title:
   :noindex:

   Quality assessment and low\-level analysis for Illumina BeadArray data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/beadarray.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-beadarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarray/meta.yaml>`_
   :links: biotools: :biotools:`beadarray`

   The package is able to read bead\-level data \(raw TIFFs and text files\) output by BeadScan as well as bead\-summary data from BeadStudio. Methods for quality assessment and low\-level analysis are provided.


.. conda:package:: bioconductor-beadarray

   |downloads_bioconductor-beadarray| |docker_bioconductor-beadarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-1</code>,  <code>2.48.0-0</code>,  <code>2.44.0-2</code>,  <code>2.44.0-1</code>,  <code>2.44.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.0-1</code>,  </span></summary>
      

      ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-1``,  ``2.48.0-0``,  ``2.44.0-2``,  ``2.44.0-1``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-1``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationdbi: ``>=1.64.1,<1.65.0a0``
   :depends bioconductor-beaddatapackr: ``>=1.54.0,<1.55.0``
   :depends bioconductor-beaddatapackr: ``>=1.54.0,<1.55.0a0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-illuminaio: ``>=0.44.0,<0.45.0``
   :depends bioconductor-illuminaio: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-hexbin: 
   :depends r-reshape2: 
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

      mamba install bioconductor-beadarray

   and update with::

      mamba update bioconductor-beadarray

  To create a new environment, run::

      mamba create --name myenvname bioconductor-beadarray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beadarray:<tag>

   (see `bioconductor-beadarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beadarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beadarray
   :alt:   (downloads)
.. |docker_bioconductor-beadarray| image:: https://quay.io/repository/biocontainers/bioconductor-beadarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadarray
.. _`bioconductor-beadarray/tags`: https://quay.io/repository/biocontainers/bioconductor-beadarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beadarray";
        var versions = ["2.52.0","2.50.0","2.48.0","2.48.0","2.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadarray/README.html
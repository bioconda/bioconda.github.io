:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tilingarray'
.. highlight: bash

bioconductor-tilingarray
========================

.. conda:recipe:: bioconductor-tilingarray
   :replaces_section_title:
   :noindex:

   Transcript mapping with high\-density oligonucleotide tiling arrays

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/tilingArray.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tilingarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tilingarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tilingarray/meta.yaml>`_

   The package provides functionality that can be useful for the analysis of high\-density tiling microarray data \(such as from Affymetrix genechips\) for measuring transcript abundance and architecture. The main functionalities of the package are\: 1. the class \'segmentation\' for representing partitionings of a linear series of data\; 2. the function \'segment\' for fitting piecewise constant models using a dynamic programming algorithm that is both fast and exact\; 3. the function \'confint\' for calculating confidence intervals using the strucchange package\; 4. the function \'plotAlongChrom\' for generating pretty plots\; 5. the function \'normalizeByReference\' for probe\-sequence dependent response adjustment from a \(set of\) reference hybridizations.


.. conda:package:: bioconductor-tilingarray

   |downloads_bioconductor-tilingarray| |docker_bioconductor-tilingarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.80.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.72.0-2</code>,  <code>1.72.0-1</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  </span></summary>
      

      ``1.80.0-0``,  ``1.78.0-0``,  ``1.76.0-1``,  ``1.76.0-0``,  ``1.72.0-2``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.60.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-vsn: ``>=3.70.0,<3.71.0``
   :depends bioconductor-vsn: ``>=3.70.0,<3.71.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-pixmap: 
   :depends r-rcolorbrewer: 
   :depends r-strucchange: 
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

      mamba install bioconductor-tilingarray

   and update with::

      mamba update bioconductor-tilingarray

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tilingarray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tilingarray:<tag>

   (see `bioconductor-tilingarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tilingarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tilingarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tilingarray
   :alt:   (downloads)
.. |docker_bioconductor-tilingarray| image:: https://quay.io/repository/biocontainers/bioconductor-tilingarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tilingarray
.. _`bioconductor-tilingarray/tags`: https://quay.io/repository/biocontainers/bioconductor-tilingarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tilingarray";
        var versions = ["1.80.0","1.78.0","1.76.0","1.76.0","1.72.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tilingarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tilingarray/README.html
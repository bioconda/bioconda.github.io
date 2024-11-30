:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snapcgh'
.. highlight: bash

bioconductor-snapcgh
====================

.. conda:recipe:: bioconductor-snapcgh
   :replaces_section_title:
   :noindex:

   Segmentation\, normalisation and processing of aCGH data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/snapCGH.html
   :license: GPL
   :recipe: /`bioconductor-snapcgh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snapcgh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snapcgh/meta.yaml>`_

   Methods for segmenting\, normalising and processing aCGH data\; including plotting functions for visualising raw and segmented data for individual and multiple arrays.


.. conda:package:: bioconductor-snapcgh

   |downloads_bioconductor-snapcgh| |docker_bioconductor-snapcgh|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.64.0-2</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-1</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.64.0-2``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-acgh: ``>=1.80.0,<1.81.0``
   :depends bioconductor-acgh: ``>=1.80.0,<1.81.0a0``
   :depends bioconductor-dnacopy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-dnacopy: ``>=1.76.0,<1.77.0a0``
   :depends bioconductor-glad: ``>=2.66.0,<2.67.0``
   :depends bioconductor-glad: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-limma: ``>=3.58.1,<3.59.0a0``
   :depends bioconductor-tilingarray: ``>=1.80.0,<1.81.0``
   :depends bioconductor-tilingarray: ``>=1.80.0,<1.81.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
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

      mamba install bioconductor-snapcgh

   and update with::

      mamba update bioconductor-snapcgh

  To create a new environment, run::

      mamba create --name myenvname bioconductor-snapcgh

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snapcgh:<tag>

   (see `bioconductor-snapcgh/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snapcgh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snapcgh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snapcgh
   :alt:   (downloads)
.. |docker_bioconductor-snapcgh| image:: https://quay.io/repository/biocontainers/bioconductor-snapcgh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snapcgh
.. _`bioconductor-snapcgh/tags`: https://quay.io/repository/biocontainers/bioconductor-snapcgh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snapcgh";
        var versions = ["1.72.0","1.70.0","1.68.0","1.68.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snapcgh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snapcgh/README.html
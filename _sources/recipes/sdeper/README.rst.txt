:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sdeper'
.. highlight: bash

sdeper
======

.. conda:recipe:: sdeper
   :replaces_section_title:
   :noindex:

   Spatial Deconvolution method with Platform Effect Removal

   :homepage: https://az7jh2.github.io/SDePER/
   :documentation: https://sdeper.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/az7jh2/SDePER
   :license: MIT / MIT
   :recipe: /`sdeper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdeper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdeper/meta.yaml>`_

   SDePER \(Spatial Deconvolution method with Platform Effect Removal\) is a hybrid machine learning and regression method to deconvolve Spatial barcoding\-based transcriptomic data using reference single\-cell RNA sequencing data\, considering platform effects removal\, sparsity of cell types per capture spot and across\-spots spatial correlation in cell type compositions. SDePER is also able to impute cell type compositions and gene expression at unmeasured locations in a tissue map with enhanced resolution.


.. conda:package:: sdeper

   |downloads_sdeper| |docker_sdeper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.4-0</code>,  <code>1.6.3-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.1-0</code>,  </span></summary>
      

      ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends distinctipy: ``1.2.2``
   :depends libopencv: ``==4.9.0 headless_*``
   :depends matplotlib-base: ``3.5.2``
   :depends networkx: ``2.8.4``
   :depends numba: ``0.59.1``
   :depends numpy: ``1.26.4``
   :depends opencv: ``4.9.0``
   :depends openpyxl: ``3.0.10``
   :depends pandas: ``1.4.3``
   :depends py-opencv: ``4.9.0``
   :depends python: ``>=3.9,<=3.10``
   :depends reportlab: ``4.1.0``
   :depends scanpy: ``1.9.1``
   :depends scikit-learn: ``1.1.1``
   :depends scikit-misc: ``0.1.4``
   :depends scipy: ``1.11.4``
   :depends seaborn: ``0.13.2``
   :depends tensorflow-base: ``2.15.0 cpu_*``
   :depends umap-learn: ``0.5.3``
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

      mamba install sdeper

   and update with::

      mamba update sdeper

  To create a new environment, run::

      mamba create --name myenvname sdeper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sdeper:<tag>

   (see `sdeper/tags`_ for valid values for ``<tag>``)


.. |downloads_sdeper| image:: https://img.shields.io/conda/dn/bioconda/sdeper.svg?style=flat
   :target: https://anaconda.org/bioconda/sdeper
   :alt:   (downloads)
.. |docker_sdeper| image:: https://quay.io/repository/biocontainers/sdeper/status
   :target: https://quay.io/repository/biocontainers/sdeper
.. _`sdeper/tags`: https://quay.io/repository/biocontainers/sdeper?tab=tags


.. raw:: html

    <script>
        var package = "sdeper";
        var versions = ["1.6.4","1.6.3","1.6.2","1.6.1","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sdeper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sdeper/README.html
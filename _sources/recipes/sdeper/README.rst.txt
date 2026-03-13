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

         <details><summary><span class="truncated-version-list"><code>2.0.0-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.4-1</code>,  <code>1.6.4-0</code>,  <code>1.6.3-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.5.0-0</code>,  </span></summary>
      

      ``2.0.0-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.4-1``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on distinctipy: ``1.2.2``
   :depends on libopencv: ``4.9.0 headless_*``
   :depends on matplotlib-base: ``3.5.2``
   :depends on numba: ``0.59.1``
   :depends on numpy: ``1.26.4``
   :depends on opencv: ``4.9.0``
   :depends on openpyxl: ``3.0.10``
   :depends on pandas: ``1.4.3``
   :depends on py-opencv: ``4.9.0``
   :depends on python: ``>=3.9,<=3.10``
   :depends on reportlab: ``4.1.0``
   :depends on scanpy: ``1.9.1``
   :depends on scikit-learn: ``1.1.1``
   :depends on scikit-misc: ``0.1.4``
   :depends on scipy: ``1.11.4``
   :depends on seaborn: ``0.13.2``
   :depends on tensorflow-base: ``2.15.0 cpu_*``
   :depends on umap-learn: ``0.5.3``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install sdeper

to add into an existing workspace instead, run::

    pixi add sdeper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sdeper

Alternatively, to install into a new environment, run::

    conda create -n envname sdeper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sdeper:<tag>

(see `sdeper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sdeper| image:: https://img.shields.io/conda/dn/bioconda/sdeper.svg?style=flat
   :target: https://anaconda.org/bioconda/sdeper
   :alt:   (downloads)
.. |docker_sdeper| image:: https://quay.io/repository/biocontainers/sdeper/status
   :target: https://quay.io/repository/biocontainers/sdeper
.. _`sdeper/tags`: https://quay.io/repository/biocontainers/sdeper?tab=tags


.. raw:: html

    <script>
        var package = "sdeper";
        var versions = ["2.0.0","1.7.1","1.7.0","1.6.4","1.6.4"];
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
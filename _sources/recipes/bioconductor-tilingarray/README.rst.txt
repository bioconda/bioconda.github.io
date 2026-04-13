:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tilingarray'
.. highlight: bash

bioconductor-tilingarray
========================

.. conda:recipe:: bioconductor-tilingarray
   :replaces_section_title:
   :noindex:

   Transcript mapping with high\-density oligonucleotide tiling arrays

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tilingArray.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tilingarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tilingarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tilingarray/meta.yaml>`_

   The package provides functionality that can be useful for the analysis of high\-density tiling microarray data \(such as from Affymetrix genechips\) for measuring transcript abundance and architecture. The main functionalities of the package are\: 1. the class \'segmentation\' for representing partitionings of a linear series of data\; 2. the function \'segment\' for fitting piecewise constant models using a dynamic programming algorithm that is both fast and exact\; 3. the function \'confint\' for calculating confidence intervals using the strucchange package\; 4. the function \'plotAlongChrom\' for generating pretty plots\; 5. the function \'normalizeByReference\' for probe\-sequence dependent response adjustment from a \(set of\) reference hybridizations.


.. conda:package:: bioconductor-tilingarray

   |downloads_bioconductor-tilingarray| |docker_bioconductor-tilingarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.88.0-0</code>,  <code>1.84.0-0</code>,  <code>1.80.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-1</code>,  <code>1.76.0-0</code>,  <code>1.72.0-2</code>,  <code>1.72.0-1</code>,  <code>1.72.0-0</code>,  </span></summary>
      

      ``1.88.0-0``,  ``1.84.0-0``,  ``1.80.0-0``,  ``1.78.0-0``,  ``1.76.0-1``,  ``1.76.0-0``,  ``1.72.0-2``,  ``1.72.0-1``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.60.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-affy: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-affy: ``>=1.88.0,<1.89.0a0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-genefilter: ``>=1.92.0,<1.93.0``
   :depends on bioconductor-genefilter: ``>=1.92.0,<1.93.0a0``
   :depends on bioconductor-vsn: ``>=3.78.0,<3.79.0``
   :depends on bioconductor-vsn: ``>=3.78.1,<3.79.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-pixmap: 
   :depends on r-rcolorbrewer: 
   :depends on r-strucchange: 

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

    pixi global install bioconductor-tilingarray

to add into an existing workspace instead, run::

    pixi add bioconductor-tilingarray

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tilingarray

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tilingarray

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tilingarray:<tag>

(see `bioconductor-tilingarray/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tilingarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tilingarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tilingarray
   :alt:   (downloads)
.. |docker_bioconductor-tilingarray| image:: https://quay.io/repository/biocontainers/bioconductor-tilingarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tilingarray
.. _`bioconductor-tilingarray/tags`: https://quay.io/repository/biocontainers/bioconductor-tilingarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tilingarray";
        var versions = ["1.88.0","1.84.0","1.80.0","1.78.0","1.76.0"];
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
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dialignr'
.. highlight: bash

bioconductor-dialignr
=====================

.. conda:recipe:: bioconductor-dialignr
   :replaces_section_title:
   :noindex:

   Dynamic Programming Based Alignment of MS2 Chromatograms

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DIAlignR.html
   :license: GPL-3
   :recipe: /`bioconductor-dialignr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dialignr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dialignr/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`dialignr`

   To obtain unbiased proteome coverage from a biological sample\, mass\-spectrometer is operated in Data Independent Acquisition \(DIA\) mode. Alignment of these DIA runs establishes consistency and less missing values in complete data\-matrix. This package implements dynamic programming with affine gap penalty based approach for pair\-wise alignment of analytes. A hybrid approach of global alignment \(through MS2 features\) and local alignment \(with MS2 chromatograms\) is implemented in this tool.


.. conda:package:: bioconductor-dialignr

   |downloads_bioconductor-dialignr| |docker_bioconductor-dialignr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.2.0-2</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-mzr: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-mzr: ``>=2.36.0,<2.37.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-ape: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-bit64: 
   :depends on r-data.table: 
   :depends on r-dbi: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-phangorn: 
   :depends on r-pracma: 
   :depends on r-rcpp: 
   :depends on r-rcppeigen: 
   :depends on r-reticulate: 
   :depends on r-rlang: 
   :depends on r-rmsnumpress: 
   :depends on r-rsqlite: 
   :depends on r-signal: 
   :depends on r-tidyr: 
   :depends on r-zoo: ``>=1.8-3``

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

    pixi global install bioconductor-dialignr

to add into an existing workspace instead, run::

    pixi add bioconductor-dialignr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dialignr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dialignr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dialignr:<tag>

(see `bioconductor-dialignr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dialignr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dialignr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dialignr
   :alt:   (downloads)
.. |docker_bioconductor-dialignr| image:: https://quay.io/repository/biocontainers/bioconductor-dialignr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dialignr
.. _`bioconductor-dialignr/tags`: https://quay.io/repository/biocontainers/bioconductor-dialignr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dialignr";
        var versions = ["2.10.0","2.8.0","2.6.0","2.6.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dialignr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dialignr/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hdtd'
.. highlight: bash

bioconductor-hdtd
=================

.. conda:recipe:: bioconductor-hdtd
   :replaces_section_title:
   :noindex:

   Statistical Inference about the Mean Matrix and the Covariance Matrices in High\-Dimensional Transposable Data \(HDTD\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HDTD.html
   :license: GPL-3
   :recipe: /`bioconductor-hdtd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdtd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdtd/meta.yaml>`_

   Characterization of intra\-individual variability using physiologically relevant measurements provides important insights into fundamental biological questions ranging from cell type identity to tumor development. For each individual\, the data measurements can be written as a matrix with the different subsamples of the individual recorded in the columns and the different phenotypic units recorded in the rows. Datasets of this type are called high\-dimensional transposable data. The HDTD package provides functions for conducting statistical inference for the mean relationship between the row and column variables and for the covariance structure within and between the row and column variables.


.. conda:package:: bioconductor-hdtd

   |downloads_bioconductor-hdtd| |docker_bioconductor-hdtd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.1-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.1-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcpp: ``>=1.0.1``
   :depends on r-rcpparmadillo: 

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

    pixi global install bioconductor-hdtd

to add into an existing workspace instead, run::

    pixi add bioconductor-hdtd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hdtd

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hdtd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hdtd:<tag>

(see `bioconductor-hdtd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hdtd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hdtd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hdtd
   :alt:   (downloads)
.. |docker_bioconductor-hdtd| image:: https://quay.io/repository/biocontainers/bioconductor-hdtd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hdtd
.. _`bioconductor-hdtd/tags`: https://quay.io/repository/biocontainers/bioconductor-hdtd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hdtd";
        var versions = ["1.44.0","1.40.0","1.36.0","1.34.1","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hdtd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hdtd/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-distinct'
.. highlight: bash

bioconductor-distinct
=====================

.. conda:recipe:: bioconductor-distinct
   :replaces_section_title:
   :noindex:

   distinct\: a method for differential analyses via hierarchical permutation tests

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/distinct.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-distinct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-distinct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-distinct/meta.yaml>`_

   distinct is a statistical method to perform differential testing between two or more groups of distributions\; differential testing is performed via hierarchical non\-parametric permutation tests on the cumulative distribution functions \(cdfs\) of each sample. While most methods for differential expression target differences in the mean abundance between conditions\, distinct\, by comparing full cdfs\, identifies\, both\, differential patterns involving changes in the mean\, as well as more subtle variations that do not involve the mean \(e.g.\, unimodal vs. bi\-modal distributions with the same mean\). distinct is a general and flexible tool\: due to its fully non\-parametric nature\, which makes no assumptions on how the data was generated\, it can be applied to a variety of datasets. It is particularly suitable to perform differential state analyses on single cell data \(i.e.\, differential analyses within sub\-populations of cells\)\, such as single cell RNA sequencing \(scRNA\-seq\) and high\-dimensional flow or mass cytometry \(HDCyto\) data. To use distinct one needs data from two or more groups of samples \(i.e.\, experimental conditions\)\, with at least 2 samples \(i.e.\, biological replicates\) per group.


.. conda:package:: bioconductor-distinct

   |downloads_bioconductor-distinct| |docker_bioconductor-distinct|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.12.2-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.12.2-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0a0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-dorng: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-matrix: 
   :depends on r-rcpp: 
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

    pixi global install bioconductor-distinct

to add into an existing workspace instead, run::

    pixi add bioconductor-distinct

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-distinct

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-distinct

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-distinct:<tag>

(see `bioconductor-distinct/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-distinct| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-distinct.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-distinct
   :alt:   (downloads)
.. |docker_bioconductor-distinct| image:: https://quay.io/repository/biocontainers/bioconductor-distinct/status
   :target: https://quay.io/repository/biocontainers/bioconductor-distinct
.. _`bioconductor-distinct/tags`: https://quay.io/repository/biocontainers/bioconductor-distinct?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-distinct";
        var versions = ["1.22.0","1.18.0","1.12.2","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-distinct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-distinct/README.html
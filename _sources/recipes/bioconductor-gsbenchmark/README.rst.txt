:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsbenchmark'
.. highlight: bash

bioconductor-gsbenchmark
========================

.. conda:recipe:: bioconductor-gsbenchmark
   :replaces_section_title:
   :noindex:

   Gene Set Benchmark

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/GSBenchMark.html
   :license: GPL-2
   :recipe: /`bioconductor-gsbenchmark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsbenchmark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsbenchmark/meta.yaml>`_

   Benchmarks for Machine Learning Analysis of the Gene Sets. The package contains a list of pathways and gene expression data sets used in \"Identifying Tightly Regulated and Variably Expressed Networks by Differential Rank Conservation \(DIRAC\)\" \(2010\) by Eddy et al.


.. conda:package:: bioconductor-gsbenchmark

   |downloads_bioconductor-gsbenchmark| |docker_bioconductor-gsbenchmark|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-gsbenchmark

to add into an existing workspace instead, run::

    pixi add bioconductor-gsbenchmark

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gsbenchmark

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gsbenchmark

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gsbenchmark:<tag>

(see `bioconductor-gsbenchmark/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gsbenchmark| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsbenchmark.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsbenchmark
   :alt:   (downloads)
.. |docker_bioconductor-gsbenchmark| image:: https://quay.io/repository/biocontainers/bioconductor-gsbenchmark/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsbenchmark
.. _`bioconductor-gsbenchmark/tags`: https://quay.io/repository/biocontainers/bioconductor-gsbenchmark?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gsbenchmark";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsbenchmark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsbenchmark/README.html
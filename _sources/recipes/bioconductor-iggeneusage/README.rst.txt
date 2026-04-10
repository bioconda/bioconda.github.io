:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iggeneusage'
.. highlight: bash

bioconductor-iggeneusage
========================

.. conda:recipe:: bioconductor-iggeneusage
   :replaces_section_title:
   :noindex:

   Differential gene usage in immune repertoires

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/IgGeneUsage.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-iggeneusage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iggeneusage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iggeneusage/meta.yaml>`_

   Detection of biases in the usage of immunoglobulin \(Ig\) genes is an important task in immune repertoire profiling. IgGeneUsage detects aberrant Ig gene usage between biological conditions using a probabilistic model which is analyzed computationally by Bayes inference. With this IgGeneUsage also avoids some common problems related to the current practice of null\-hypothesis significance testing.


.. conda:package:: bioconductor-iggeneusage

   |downloads_bioconductor-iggeneusage| |docker_bioconductor-iggeneusage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bh: ``>=1.66.0``
   :depends on r-rcpp: ``>=0.12.0``
   :depends on r-rcppeigen: ``>=0.3.3.3.0``
   :depends on r-rcppparallel: ``>=5.0.1``
   :depends on r-reshape2: ``>=1.4.3``
   :depends on r-rstan: ``>=2.18.1``
   :depends on r-rstantools: ``>=2.2.0``
   :depends on r-stanheaders: ``>=2.18.0``
   :depends on r-tidyr: 
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

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

    pixi global install bioconductor-iggeneusage

to add into an existing workspace instead, run::

    pixi add bioconductor-iggeneusage

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-iggeneusage

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-iggeneusage

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-iggeneusage:<tag>

(see `bioconductor-iggeneusage/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-iggeneusage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iggeneusage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iggeneusage
   :alt:   (downloads)
.. |docker_bioconductor-iggeneusage| image:: https://quay.io/repository/biocontainers/bioconductor-iggeneusage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iggeneusage
.. _`bioconductor-iggeneusage/tags`: https://quay.io/repository/biocontainers/bioconductor-iggeneusage?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iggeneusage";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iggeneusage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iggeneusage/README.html
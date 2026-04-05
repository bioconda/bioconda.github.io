:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metapod'
.. highlight: bash

bioconductor-metapod
====================

.. conda:recipe:: bioconductor-metapod
   :replaces_section_title:
   :noindex:

   Meta\-Analyses on P\-Values of Differential Analyses

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/metapod.html
   :license: GPL-3
   :recipe: /`bioconductor-metapod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metapod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metapod/meta.yaml>`_

   Implements a variety of methods for combining p\-values in differential analyses of genome\-scale datasets. Functions can combine p\-values across different tests in the same analysis \(e.g.\, genomic windows in ChIP\-seq\, exons in RNA\-seq\) or for corresponding tests across separate analyses \(e.g.\, replicated comparisons\, effect of different treatment conditions\). Support is provided for handling log\-transformed input p\-values\, missing values and weighting where appropriate.


.. conda:package:: bioconductor-metapod

   |downloads_bioconductor-metapod| |docker_bioconductor-metapod|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-3</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-2</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-3``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcpp: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install bioconductor-metapod

to add into an existing workspace instead, run::

    pixi add bioconductor-metapod

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-metapod

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-metapod

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-metapod:<tag>

(see `bioconductor-metapod/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-metapod| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metapod.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metapod
   :alt:   (downloads)
.. |docker_bioconductor-metapod| image:: https://quay.io/repository/biocontainers/bioconductor-metapod/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metapod
.. _`bioconductor-metapod/tags`: https://quay.io/repository/biocontainers/bioconductor-metapod?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metapod";
        var versions = ["1.18.0","1.14.0","1.14.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metapod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metapod/README.html
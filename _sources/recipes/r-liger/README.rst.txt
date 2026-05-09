:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-liger'
.. highlight: bash

r-liger
=======

.. conda:recipe:: r-liger
   :replaces_section_title:
   :noindex:

   Uses an extension of nonnegative matrix factorization to identify shared and dataset\-specific factors.

   :homepage: https://github.com/welch-lab/liger
   :documentation: https://welch-lab.github.io/liger/index.html
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-liger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-liger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-liger/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cell.2019.05.006`

   


.. conda:package:: r-liger

   |downloads_r-liger| |docker_r-liger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-0</code>,  <code>2.2.0-2</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-1</code>,  </span></summary>
      

      ``2.2.1-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.1-0``,  ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.5.0.9000-3``,  ``0.5.0.9000-2``,  ``0.5.0.9000-1``,  ``0.5.0.9000-0``,  ``0.4.2.9000-1``,  ``0.4.2.9000-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-complexheatmap: ``>=2.22.0,<2.23.0a0``
   :depends on bioconductor-delayedarray: ``>=0.32.0,<0.33.0a0``
   :depends on bioconductor-hdf5array: ``>=1.34.0,<1.35.0a0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cli: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-hdf5r: 
   :depends on r-ica: 
   :depends on r-irlba: 
   :depends on r-leidenalg: ``>=1.1.1``
   :depends on r-lifecycle: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-mclust: 
   :depends on r-rann: 
   :depends on r-rcpp: ``>=0.12.10``
   :depends on r-rcpparmadillo: 
   :depends on r-rcppplanc: ``>=2.0.0``
   :depends on r-rcppprogress: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-uwot: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

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

    pixi global install r-liger

to add into an existing workspace instead, run::

    pixi add r-liger

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-liger

Alternatively, to install into a new environment, run::

    conda create -n envname r-liger

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-liger:<tag>

(see `r-liger/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-liger| image:: https://img.shields.io/conda/dn/bioconda/r-liger.svg?style=flat
   :target: https://anaconda.org/bioconda/r-liger
   :alt:   (downloads)
.. |docker_r-liger| image:: https://quay.io/repository/biocontainers/r-liger/status
   :target: https://quay.io/repository/biocontainers/r-liger
.. _`r-liger/tags`: https://quay.io/repository/biocontainers/r-liger?tab=tags


.. raw:: html

    <script>
        var package = "r-liger";
        var versions = ["2.2.1","2.2.0","2.2.0","2.2.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-liger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-liger/README.html
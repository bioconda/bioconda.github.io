:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alphabeta'
.. highlight: bash

bioconductor-alphabeta
======================

.. conda:recipe:: bioconductor-alphabeta
   :replaces_section_title:
   :noindex:

   Computational inference of epimutation rates and spectra from high\-throughput DNA methylation data in plants

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AlphaBeta.html
   :license: GPL-3
   :recipe: /`bioconductor-alphabeta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alphabeta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alphabeta/meta.yaml>`_

   AlphaBeta is a computational method for estimating epimutation rates and spectra from high\-throughput DNA methylation data in plants. The method has been specifically designed to\: 1. analyze \'germline\' epimutations in the context of multi\-generational mutation accumulation lines \(MA\-lines\). 2. analyze \'somatic\' epimutations in the context of plant development and aging.


.. conda:package:: bioconductor-alphabeta

   |downloads_bioconductor-alphabeta| |docker_bioconductor-alphabeta|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: ``>=1.10``
   :depends on r-dplyr: ``>=0.7``
   :depends on r-expm: ``>=0.999-4``
   :depends on r-ggplot2: ``>=3.2``
   :depends on r-gtools: ``>=3.8.0``
   :depends on r-igraph: ``>=1.2.4``
   :depends on r-optimx: ``>=2018-7.10``
   :depends on r-plotly: ``>=4.9``
   :depends on r-stringr: ``>=1.3``

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

    pixi global install bioconductor-alphabeta

to add into an existing workspace instead, run::

    pixi add bioconductor-alphabeta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-alphabeta

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-alphabeta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-alphabeta:<tag>

(see `bioconductor-alphabeta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-alphabeta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alphabeta.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alphabeta
   :alt:   (downloads)
.. |docker_bioconductor-alphabeta| image:: https://quay.io/repository/biocontainers/bioconductor-alphabeta/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alphabeta
.. _`bioconductor-alphabeta/tags`: https://quay.io/repository/biocontainers/bioconductor-alphabeta?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alphabeta";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alphabeta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alphabeta/README.html
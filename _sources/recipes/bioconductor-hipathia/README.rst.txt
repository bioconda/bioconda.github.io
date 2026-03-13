:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hipathia'
.. highlight: bash

bioconductor-hipathia
=====================

.. conda:recipe:: bioconductor-hipathia
   :replaces_section_title:
   :noindex:

   HiPathia\: High\-throughput Pathway Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hipathia.html
   :license: GPL-2
   :recipe: /`bioconductor-hipathia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hipathia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hipathia/meta.yaml>`_

   Hipathia is a method for the computation of signal transduction along signaling pathways from transcriptomic data. The method is based on an iterative algorithm which is able to compute the signal intensity passing through the nodes of a network by taking into account the level of expression of each gene and the intensity of the signal arriving to it. It also provides a new approach to functional analysis allowing to compute the signal arriving to the functions annotated to each pathway.


.. conda:package:: bioconductor-hipathia

   |downloads_bioconductor-hipathia| |docker_bioconductor-hipathia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6.0-0</code>,  <code>3.2.0-0</code>,  <code>3.0.2-0</code>,  <code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``3.6.0-0``,  ``3.2.0-0``,  ``3.0.2-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``1.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends on bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends on bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-preprocesscore: ``>=1.68.0,<1.69.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-coin: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-igraph: ``>=1.0.1``
   :depends on r-matrixstats: 
   :depends on r-metbrewer: 
   :depends on r-reshape2: 
   :depends on r-servr: 
   :depends on r-tibble: 
   :depends on r-visnetwork: 

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

    pixi global install bioconductor-hipathia

to add into an existing workspace instead, run::

    pixi add bioconductor-hipathia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hipathia

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hipathia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hipathia:<tag>

(see `bioconductor-hipathia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hipathia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hipathia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hipathia
   :alt:   (downloads)
.. |docker_bioconductor-hipathia| image:: https://quay.io/repository/biocontainers/bioconductor-hipathia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hipathia
.. _`bioconductor-hipathia/tags`: https://quay.io/repository/biocontainers/bioconductor-hipathia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hipathia";
        var versions = ["3.6.0","3.2.0","3.0.2","2.14.0","2.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hipathia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hipathia/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-confess'
.. highlight: bash

bioconductor-confess
====================

.. conda:recipe:: bioconductor-confess
   :replaces_section_title:
   :noindex:

   Cell OrderiNg by FluorEScence Signal

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CONFESS.html
   :license: GPL-2
   :recipe: /`bioconductor-confess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-confess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-confess/meta.yaml>`_

   Single Cell Fluidigm Spot Detector.


.. conda:package:: bioconductor-confess

   |downloads_bioconductor-confess| |docker_bioconductor-confess|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends on bioconductor-flowclust: ``>=3.48.0,<3.49.0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-flowmeans: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-flowmerge: ``>=2.58.0,<2.59.0``
   :depends on bioconductor-flowpeaks: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-samspectral: ``>=1.64.0,<1.65.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-changepoint: 
   :depends on r-cluster: 
   :depends on r-contrast: 
   :depends on r-data.table: ``>=1.9.7``
   :depends on r-ecp: 
   :depends on r-flexmix: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-mass: 
   :depends on r-moments: 
   :depends on r-outliers: 
   :depends on r-plotrix: 
   :depends on r-raster: 
   :depends on r-readbitmap: 
   :depends on r-reshape2: 
   :depends on r-waveslim: 
   :depends on r-wavethresh: 
   :depends on r-zoo: 

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

    pixi global install bioconductor-confess

to add into an existing workspace instead, run::

    pixi add bioconductor-confess

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-confess

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-confess

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-confess:<tag>

(see `bioconductor-confess/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-confess| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-confess.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-confess
   :alt:   (downloads)
.. |docker_bioconductor-confess| image:: https://quay.io/repository/biocontainers/bioconductor-confess/status
   :target: https://quay.io/repository/biocontainers/bioconductor-confess
.. _`bioconductor-confess/tags`: https://quay.io/repository/biocontainers/bioconductor-confess?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-confess";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-confess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-confess/README.html
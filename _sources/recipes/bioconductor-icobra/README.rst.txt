:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-icobra'
.. highlight: bash

bioconductor-icobra
===================

.. conda:recipe:: bioconductor-icobra
   :replaces_section_title:
   :noindex:

   Comparison and Visualization of Ranking and Assignment Methods

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iCOBRA.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-icobra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icobra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icobra/meta.yaml>`_
   :links: biotools: :biotools:`icobra`

   This package provides functions for calculation and visualization of performance metrics for evaluation of ranking and binary classification \(assignment\) methods. Various types of performance plots can be generated programmatically. The package also contains a shiny application for interactive exploration of results.


.. conda:package:: bioconductor-icobra

   |downloads_bioconductor-icobra| |docker_bioconductor-icobra|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: ``>=3.4.0``
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-rocr: 
   :depends on r-scales: 
   :depends on r-shiny: ``>=0.9.1.9008``
   :depends on r-shinybs: 
   :depends on r-shinydashboard: 
   :depends on r-upsetr: 

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

    pixi global install bioconductor-icobra

to add into an existing workspace instead, run::

    pixi add bioconductor-icobra

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-icobra

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-icobra

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-icobra:<tag>

(see `bioconductor-icobra/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-icobra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icobra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-icobra
   :alt:   (downloads)
.. |docker_bioconductor-icobra| image:: https://quay.io/repository/biocontainers/bioconductor-icobra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icobra
.. _`bioconductor-icobra/tags`: https://quay.io/repository/biocontainers/bioconductor-icobra?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-icobra";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icobra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icobra/README.html
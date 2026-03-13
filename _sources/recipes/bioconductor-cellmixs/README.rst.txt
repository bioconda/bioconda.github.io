:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellmixs'
.. highlight: bash

bioconductor-cellmixs
=====================

.. conda:recipe:: bioconductor-cellmixs
   :replaces_section_title:
   :noindex:

   Evaluate Cellspecific Mixing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CellMixS.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-cellmixs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmixs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmixs/meta.yaml>`_

   CellMixS provides metrics and functions to evaluate batch effects\, data integration and batch effect correction in single cell trancriptome data with single cell resolution. Results can be visualized and summarised on different levels\, e.g. on cell\, celltype or dataset level.


.. conda:package:: bioconductor-cellmixs

   |downloads_bioconductor-cellmixs| |docker_bioconductor-cellmixs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggridges: 
   :depends on r-ksamples: 
   :depends on r-magrittr: 
   :depends on r-purrr: 
   :depends on r-tidyr: 
   :depends on r-viridis: 

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

    pixi global install bioconductor-cellmixs

to add into an existing workspace instead, run::

    pixi add bioconductor-cellmixs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cellmixs

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cellmixs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cellmixs:<tag>

(see `bioconductor-cellmixs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cellmixs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellmixs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellmixs
   :alt:   (downloads)
.. |docker_bioconductor-cellmixs| image:: https://quay.io/repository/biocontainers/bioconductor-cellmixs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellmixs
.. _`bioconductor-cellmixs/tags`: https://quay.io/repository/biocontainers/bioconductor-cellmixs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellmixs";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellmixs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellmixs/README.html
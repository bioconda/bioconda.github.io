:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-venndetail'
.. highlight: bash

bioconductor-venndetail
=======================

.. conda:recipe:: bioconductor-venndetail
   :replaces_section_title:
   :noindex:

   A package for visualization and extract details

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/VennDetail.html
   :license: GPL-2
   :recipe: /`bioconductor-venndetail <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-venndetail>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-venndetail/meta.yaml>`_

   A set of functions to generate high\-resolution Venn\,Vennpie plot\,extract and combine details of these subsets with user datasets in data frame is available.


.. conda:package:: bioconductor-venndetail

   |downloads_bioconductor-venndetail| |docker_bioconductor-venndetail|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-htmlwidgets: 
   :depends on r-magrittr: 
   :depends on r-patchwork: 
   :depends on r-plotly: 
   :depends on r-purrr: 
   :depends on r-rlang: 
   :depends on r-shiny: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-venndetail

to add into an existing workspace instead, run::

    pixi add bioconductor-venndetail

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-venndetail

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-venndetail

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-venndetail:<tag>

(see `bioconductor-venndetail/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-venndetail| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-venndetail.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-venndetail
   :alt:   (downloads)
.. |docker_bioconductor-venndetail| image:: https://quay.io/repository/biocontainers/bioconductor-venndetail/status
   :target: https://quay.io/repository/biocontainers/bioconductor-venndetail
.. _`bioconductor-venndetail/tags`: https://quay.io/repository/biocontainers/bioconductor-venndetail?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-venndetail";
        var versions = ["1.26.0","1.22.0","1.18.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-venndetail/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-venndetail/README.html
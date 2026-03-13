:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tomoseqr'
.. highlight: bash

bioconductor-tomoseqr
=====================

.. conda:recipe:: bioconductor-tomoseqr
   :replaces_section_title:
   :noindex:

   R Package for Analyzing Tomo\-seq Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tomoseqr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tomoseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomoseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomoseqr/meta.yaml>`_

   \`tomoseqr\` is an R package for analyzing Tomo\-seq data. Tomo\-seq is a genome\-wide RNA tomography method that combines combining high\-throughput RNA sequencing with cryosectioning for spatially resolved transcriptomics. \`tomoseqr\` reconstructs 3D expression patterns from tomo\-seq data and visualizes the reconstructed 3D expression patterns.


.. conda:package:: bioconductor-tomoseqr

   |downloads_bioconductor-tomoseqr| |docker_bioconductor-tomoseqr|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on r-animation: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-plotly: 
   :depends on r-purrr: 
   :depends on r-readr: 
   :depends on r-shiny: 
   :depends on r-stringr: 
   :depends on r-tibble: 

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

    pixi global install bioconductor-tomoseqr

to add into an existing workspace instead, run::

    pixi add bioconductor-tomoseqr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tomoseqr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tomoseqr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tomoseqr:<tag>

(see `bioconductor-tomoseqr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tomoseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tomoseqr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tomoseqr
   :alt:   (downloads)
.. |docker_bioconductor-tomoseqr| image:: https://quay.io/repository/biocontainers/bioconductor-tomoseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tomoseqr
.. _`bioconductor-tomoseqr/tags`: https://quay.io/repository/biocontainers/bioconductor-tomoseqr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tomoseqr";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tomoseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tomoseqr/README.html
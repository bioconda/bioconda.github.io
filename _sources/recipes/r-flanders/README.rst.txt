:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-flanders'
.. highlight: bash

r-flanders
==========

.. conda:recipe:: r-flanders
   :replaces_section_title:
   :noindex:

   Fast colocalization using AnnData objects in R

   :homepage: https://github.com/Biostatistics-Unit-HT/flanders_r
   :license: MIT / MIT
   :recipe: /`r-flanders <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-flanders>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-flanders/meta.yaml>`_

   flanders is an R package designed to seamlessly convert finemapping output files from the nf\-flanders pipeline
   into a unified AnnData object and facilitate colocalization analysis.
   The package provides functions to\:
   \- Convert multiple \*finemap.rds files into a single AnnData object with credible set metadata.
   \- Generate an input table \(coloc\_input\) for colocalization testing.
   \- Run pairwise colocalization tests\, with minimal runtime overhead \(typically 5–10 tests per second on standard hardware\).



.. conda:package:: r-flanders

   |downloads_r-flanders| |docker_r-flanders|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-scrnaseq: 
   :depends on bioconductor-singlecellexperiment: 
   :depends on bioconductor-zellkonverter: 
   :depends on r-anndata: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-coloc: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-matrix: 
   :depends on r-optparse: 
   :depends on r-susier: 

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

    pixi global install r-flanders

to add into an existing workspace instead, run::

    pixi add r-flanders

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-flanders

Alternatively, to install into a new environment, run::

    conda create -n envname r-flanders

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-flanders:<tag>

(see `r-flanders/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-flanders| image:: https://img.shields.io/conda/dn/bioconda/r-flanders.svg?style=flat
   :target: https://anaconda.org/bioconda/r-flanders
   :alt:   (downloads)
.. |docker_r-flanders| image:: https://quay.io/repository/biocontainers/r-flanders/status
   :target: https://quay.io/repository/biocontainers/r-flanders
.. _`r-flanders/tags`: https://quay.io/repository/biocontainers/r-flanders?tab=tags


.. raw:: html

    <script>
        var package = "r-flanders";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-flanders/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-flanders/README.html
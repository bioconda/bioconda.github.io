:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metabolomicsworkbenchr'
.. highlight: bash

bioconductor-metabolomicsworkbenchr
===================================

.. conda:recipe:: bioconductor-metabolomicsworkbenchr
   :replaces_section_title:
   :noindex:

   Metabolomics Workbench in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/metabolomicsWorkbenchR.html
   :license: GPL-3
   :recipe: /`bioconductor-metabolomicsworkbenchr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabolomicsworkbenchr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabolomicsworkbenchr/meta.yaml>`_

   This package provides functions for interfacing with the Metabolomics Workbench RESTful API. Study\, compound\, protein and gene information can be searched for using the API. Methods to obtain study data in common Bioconductor formats such as SummarizedExperiment and MultiAssayExperiment are also included.


.. conda:package:: bioconductor-metabolomicsworkbenchr

   |downloads_bioconductor-metabolomicsworkbenchr| |docker_bioconductor-metabolomicsworkbenchr|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-struct: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-httr: 
   :depends on r-jsonlite: 

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

    pixi global install bioconductor-metabolomicsworkbenchr

to add into an existing workspace instead, run::

    pixi add bioconductor-metabolomicsworkbenchr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-metabolomicsworkbenchr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-metabolomicsworkbenchr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-metabolomicsworkbenchr:<tag>

(see `bioconductor-metabolomicsworkbenchr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-metabolomicsworkbenchr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metabolomicsworkbenchr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metabolomicsworkbenchr
   :alt:   (downloads)
.. |docker_bioconductor-metabolomicsworkbenchr| image:: https://quay.io/repository/biocontainers/bioconductor-metabolomicsworkbenchr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metabolomicsworkbenchr
.. _`bioconductor-metabolomicsworkbenchr/tags`: https://quay.io/repository/biocontainers/bioconductor-metabolomicsworkbenchr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metabolomicsworkbenchr";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metabolomicsworkbenchr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metabolomicsworkbenchr/README.html
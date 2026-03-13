:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedatlasqueryr'
.. highlight: bash

bioconductor-curatedatlasqueryr
===============================

.. conda:recipe:: bioconductor-curatedatlasqueryr
   :replaces_section_title:
   :noindex:

   Queries the Human Cell Atlas

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CuratedAtlasQueryR.html
   :license: GPL-3
   :recipe: /`bioconductor-curatedatlasqueryr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedatlasqueryr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedatlasqueryr/meta.yaml>`_

   Provides access to a copy of the Human Cell Atlas\, but with harmonised metadata. This allows for uniform querying across numerous datasets within the Atlas using common fields such as cell type\, tissue type\, and patient ethnicity. Usage involves first querying the metadata table for cells of interest\, and then downloading the corresponding cells into a SingleCellExperiment object.


.. conda:package:: bioconductor-curatedatlasqueryr

   |downloads_bioconductor-curatedatlasqueryr| |docker_bioconductor-curatedatlasqueryr|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-dbi: 
   :depends on r-dbplyr: ``>=2.3.0``
   :depends on r-dplyr: 
   :depends on r-duckdb: 
   :depends on r-glue: 
   :depends on r-httr: 
   :depends on r-purrr: ``>=1.0.0``
   :depends on r-rlang: 
   :depends on r-seurat: 
   :depends on r-seuratobject: 
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

    pixi global install bioconductor-curatedatlasqueryr

to add into an existing workspace instead, run::

    pixi add bioconductor-curatedatlasqueryr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-curatedatlasqueryr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-curatedatlasqueryr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-curatedatlasqueryr:<tag>

(see `bioconductor-curatedatlasqueryr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-curatedatlasqueryr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedatlasqueryr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedatlasqueryr
   :alt:   (downloads)
.. |docker_bioconductor-curatedatlasqueryr| image:: https://quay.io/repository/biocontainers/bioconductor-curatedatlasqueryr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedatlasqueryr
.. _`bioconductor-curatedatlasqueryr/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedatlasqueryr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-curatedatlasqueryr";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedatlasqueryr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedatlasqueryr/README.html
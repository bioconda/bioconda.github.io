:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ampvis'
.. highlight: bash

r-ampvis
========

.. conda:recipe:: r-ampvis
   :replaces_section_title:
   :noindex:

   A package to visualise amplicon data

   :homepage: https://github.com/MadsAlbertsen/ampvis
   :license: AGPL-3
   :recipe: /`r-ampvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ampvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ampvis/meta.yaml>`_

   


.. conda:package:: r-ampvis

   |downloads_r-ampvis| |docker_r-ampvis|

   :versions:
      
      

      ``1.27.0-7``,  ``1.27.0-6``,  ``1.27.0-5``,  ``1.27.0-4``,  ``1.27.0-3``,  ``1.27.0-2``,  ``1.27.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends on bioconductor-deseq2: ``>=1.46.0,<1.47.0a0``
   :depends on bioconductor-phyloseq: ``>=1.50.0,<1.51.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggdendro: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-igraph: 
   :depends on r-knitr: 
   :depends on r-magrittr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-stringr: 
   :depends on r-vegan: 

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

    pixi global install r-ampvis

to add into an existing workspace instead, run::

    pixi add r-ampvis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-ampvis

Alternatively, to install into a new environment, run::

    conda create -n envname r-ampvis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-ampvis:<tag>

(see `r-ampvis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-ampvis| image:: https://img.shields.io/conda/dn/bioconda/r-ampvis.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ampvis
   :alt:   (downloads)
.. |docker_r-ampvis| image:: https://quay.io/repository/biocontainers/r-ampvis/status
   :target: https://quay.io/repository/biocontainers/r-ampvis
.. _`r-ampvis/tags`: https://quay.io/repository/biocontainers/r-ampvis?tab=tags


.. raw:: html

    <script>
        var package = "r-ampvis";
        var versions = ["1.27.0","1.27.0","1.27.0","1.27.0","1.27.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ampvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ampvis/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pspecterlib'
.. highlight: bash

r-pspecterlib
=============

.. conda:recipe:: r-pspecterlib
   :replaces_section_title:
   :noindex:

   Proteomics R package for matching peaks in digested and intact proteomics

   :homepage: https://github.com/EMSL-Computing/pspecterlib
   :license: BSD-2-Clause
   :recipe: /`r-pspecterlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pspecterlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pspecterlib/meta.yaml>`_

   


.. conda:package:: r-pspecterlib

   |downloads_r-pspecterlib| |docker_r-pspecterlib|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends on bioconductor-msnbase: 
   :depends on bioconductor-mzr: 
   :depends on bioconductor-rawrr: 
   :depends on bioconductor-rhdf5: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cairo: 
   :depends on r-chnosz: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-gtools: 
   :depends on r-htmltools: 
   :depends on r-isopat: 
   :depends on r-knitr: 
   :depends on r-lsa: 
   :depends on r-magrittr: 
   :depends on r-plotly: 
   :depends on r-purrr: 
   :depends on r-rcolorbrewer: 
   :depends on r-readxl: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-seqinr: 
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

    pixi global install r-pspecterlib

to add into an existing workspace instead, run::

    pixi add r-pspecterlib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-pspecterlib

Alternatively, to install into a new environment, run::

    conda create -n envname r-pspecterlib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-pspecterlib:<tag>

(see `r-pspecterlib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-pspecterlib| image:: https://img.shields.io/conda/dn/bioconda/r-pspecterlib.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pspecterlib
   :alt:   (downloads)
.. |docker_r-pspecterlib| image:: https://quay.io/repository/biocontainers/r-pspecterlib/status
   :target: https://quay.io/repository/biocontainers/r-pspecterlib
.. _`r-pspecterlib/tags`: https://quay.io/repository/biocontainers/r-pspecterlib?tab=tags


.. raw:: html

    <script>
        var package = "r-pspecterlib";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pspecterlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pspecterlib/README.html
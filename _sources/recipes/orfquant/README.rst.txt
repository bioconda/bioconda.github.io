:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orfquant'
.. highlight: bash

orfquant
========

.. conda:recipe:: orfquant
   :replaces_section_title:
   :noindex:

   SaTAnn is a method that annotates and quantifies translation at the single ORF level using Ribo\-seq data.

   :homepage: https://github.com/ohlerlab/ORFquant
   :license: GPL3 / GPL-3 or above
   :recipe: /`orfquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfquant/meta.yaml>`_

   


.. conda:package:: orfquant

   |downloads_orfquant| |docker_orfquant|

   :versions:
      
      

      ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends on bioconductor-biocgenerics: 
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-bsgenome: 
   :depends on bioconductor-genomicalignments: 
   :depends on bioconductor-genomicfeatures: 
   :depends on bioconductor-genomicfiles: 
   :depends on bioconductor-rtracklayer: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cowplot: 
   :depends on r-devtools: 
   :depends on r-domc: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-knitr: 
   :depends on r-magrittr: 
   :depends on r-multitaper: 
   :depends on r-purrr: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-stringr: 

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

    pixi global install orfquant

to add into an existing workspace instead, run::

    pixi add orfquant

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install orfquant

Alternatively, to install into a new environment, run::

    conda create -n envname orfquant

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/orfquant:<tag>

(see `orfquant/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_orfquant| image:: https://img.shields.io/conda/dn/bioconda/orfquant.svg?style=flat
   :target: https://anaconda.org/bioconda/orfquant
   :alt:   (downloads)
.. |docker_orfquant| image:: https://quay.io/repository/biocontainers/orfquant/status
   :target: https://quay.io/repository/biocontainers/orfquant
.. _`orfquant/tags`: https://quay.io/repository/biocontainers/orfquant?tab=tags


.. raw:: html

    <script>
        var package = "orfquant";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orfquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orfquant/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'riboseqc'
.. highlight: bash

riboseqc
========

.. conda:recipe:: riboseqc
   :replaces_section_title:
   :noindex:

   Read length specific QC of Ribo\-seq data

   :homepage: https://github.com/ohlerlab/RiboseQC
   :license: GPL3 / GPL-3
   :recipe: /`riboseqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/riboseqc/meta.yaml>`_

   A powerful analysis tool for the analysis of Ribo\-seq data\, which is able to provide read\-length specific analysis of both cytoplasmic and organellar ribosome\, and provides interactive visualization of results in a dynamic html report


.. conda:package:: riboseqc

   |downloads_riboseqc| |docker_riboseqc|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends on bioconductor-biocgenerics: 
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-bsgenome: 
   :depends on bioconductor-genomicalignments: 
   :depends on bioconductor-genomicfeatures: 
   :depends on bioconductor-genomicfiles: 
   :depends on bioconductor-rtracklayer: 
   :depends on r-ade4: 
   :depends on r-base: ``>=3.6,<3.7.0a0``
   :depends on r-devtools: 
   :depends on r-domc: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-gridextra: 
   :depends on r-iterators: 
   :depends on r-jsonlite: 
   :depends on r-knitr: 
   :depends on r-multitaper: 
   :depends on r-r.methodss3: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-seqinr: 
   :depends on r-viridis: 
   :depends on r-xnomial: 

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

    pixi global install riboseqc

to add into an existing workspace instead, run::

    pixi add riboseqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install riboseqc

Alternatively, to install into a new environment, run::

    conda create -n envname riboseqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/riboseqc:<tag>

(see `riboseqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_riboseqc| image:: https://img.shields.io/conda/dn/bioconda/riboseqc.svg?style=flat
   :target: https://anaconda.org/bioconda/riboseqc
   :alt:   (downloads)
.. |docker_riboseqc| image:: https://quay.io/repository/biocontainers/riboseqc/status
   :target: https://quay.io/repository/biocontainers/riboseqc
.. _`riboseqc/tags`: https://quay.io/repository/biocontainers/riboseqc?tab=tags


.. raw:: html

    <script>
        var package = "riboseqc";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/riboseqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/riboseqc/README.html